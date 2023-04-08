import { useState } from "react";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { client } from "../../src/lib/sanity.client";

const builder = imageUrlBuilder(client);

interface NewsProps {
  news: SanityDocument[];
}

// define the number of items to display per page
const ITEMS_PER_PAGE = 9;

export default function News({ news }: NewsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // calculate the index of the first item to display based on the current page
  const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // slice the array of news to display only the items for the current page
  const currentNews = news.slice(
    firstItemIndex,
    firstItemIndex + ITEMS_PER_PAGE
  );

  const NewsItem = ({ newsItem }: { newsItem: SanityDocument }) => (
    <div className="w-full md:w-1/3 px-4 mb-8" key={newsItem._id}>
      <Link href={`/nyheter/${newsItem.slug.current}`} passHref>
        <div className="bg-gray-100 rounded p-4 h-full cursor-pointer hover:bg-gray-200">
          {newsItem.newsimage && (
            <Image
              className="rounded"
              src={
                builder
                  .image(newsItem.newsimage)
                  .width(1920)
                  .height(1080)
                  .url()!
              }
              width={1920}
              height={1080}
              alt={newsItem.title}
            />
          )}

          <h3 className="font-bold mb-2">{newsItem.title}</h3>
          <p className="text-sm text-gray-500">
            Publisert:{" "}
            {new Date(newsItem._createdAt).toLocaleDateString("no-NO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </Link>
    </div>
  );

  const NewsGrid = ({ isMobile }: { isMobile: boolean }) => (
    <div className={`${isMobile ? "md:hidden" : "hidden md:flex"} flex-wrap`}>
      {currentNews.map((newsItem) => (
        <NewsItem key={newsItem._id} newsItem={newsItem} />
      ))}
    </div>
  );

  const numPages = Math.ceil(news.length / ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl w-11/12 mx-auto pt-6">
      <h1 className="ml-4">Nyheter</h1>
      <br />
      <NewsGrid isMobile={false} />
      <NewsGrid isMobile={true} />

      {numPages > 1 && (
        <div className="flex justify-center mt-4">
          <button
            className="mx-1 px-2 py-1 rounded bg-white"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}>
            Forrige
          </button>
          {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`mx-1 px-2 py-1 rounded
              
            ${currentPage !== page && "bg-white"} ${
                currentPage === page && "bg-gray-900 text-white"
              }`}
              onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          ))}
          <button
            className="mx-1 px-2 py-1 rounded bg-white"
            disabled={currentPage === numPages}
            onClick={() => setCurrentPage(currentPage + 1)}>
            Neste
          </button>
        </div>
      )}
    </div>
  );
}

// get the news data from Sanity at build time
export async function getStaticProps() {
  const query = `*[_type == "news"]{
    _id,
    title,
    slug,
    newsimage,
    _createdAt
  }`;

  const news = await client.fetch(query);

  return {
    props: { news },
    revalidate: 1, // regenerate the page every second in the background
  };
}
