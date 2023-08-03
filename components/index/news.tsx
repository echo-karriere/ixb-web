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

export default function News({ news }: NewsProps) {
  const NewsItem = ({ newsItem }: { newsItem: SanityDocument }) => (
    <div className="w-full md:w-1/3 px-4 mb-8" key={newsItem._id}>
      <Link href={`/nyheter/${newsItem.slug.current}`} passHref>
        <div className="bg-gray-100 rounded p-4 h-full cursor-pointer hover:bg-gray-200">
          {newsItem.newsimage ? (
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
          ) : (
            <Image
              className="rounded"
              src={"/webpageAssets/placeholder.jpg"}
              width={1920}
              height={1080}
              alt={newsItem.title}
            />
          )}

          <h3 className="font-bold mb-2">{newsItem.title}</h3>
          <p className="text-sm text-gray-800">
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
      {news.slice(0, 3).map((newsItem) => (
        <NewsItem key={newsItem._id} newsItem={newsItem} />
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl w-11/12 mx-auto pt-6">
      <h2 className="text-2xl font-bold mb-1 ml-4">Nyheter</h2>
      <Link href="/nyheter" className="text-gray-500 underline m-4">
        Se flere nyheter
      </Link>
      <br />
      <br />
      <NewsGrid isMobile={false} />
      <NewsGrid isMobile={true} />
    </div>
  );
}
