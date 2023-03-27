import { client } from "../../src/lib/sanity.client";
import imageUrlBuilder from "@sanity/image-url";

export default async function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { text: string }): void; new (): any };
    };
  }
) {
  const jobListings = await client.fetch(
    `*[_type == "joblisting"]{slug, title, deadline, company, location, type, logo, description, link}`
  );

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const filteredData = jobListings.filter((job: { deadline: string }) => {
    const jobDeadline = new Date(job.deadline);

    return !job.deadline || jobDeadline >= now;
  });

  filteredData.sort(
    (
      a: {
        title: any;
        deadline: string | number | Date;
      },
      b: {
        title(title: any): unknown;
        deadline: string | number | Date;
      }
    ) => {
      if (!a.deadline && !b.deadline) {
        return a.title.localeCompare(b.title);
      }
      if (!a.deadline) {
        return 1;
      }
      if (!b.deadline) {
        return -1;
      }
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    }
  );

  const builder = imageUrlBuilder(client);
  const jobListingsWithLogo = filteredData.map((job: { logo: any }) => {
    const cachedImageLink = builder
      .image(job.logo)
      .width(200)
      .height(200)
      .url();
    return {
      ...job,
      logo: cachedImageLink,
    };
  });

  const jobListingsWithSlug = jobListingsWithLogo.map((job: { slug: any }) => {
    return {
      ...job,
      slug: job.slug.current,
    };
  });

  res.status(200).json(jobListingsWithSlug);
}

export async function getStaticProps() {
  const jobListings = await client.fetch(
    `*[_type == "joblisting"]{slug, title, deadline, company, location, type, logo, description, link}`
  );
  const jobTitles = jobListings.map((job: { title: any }) => job.title);
  const jobDeadlines = jobListings.map(
    (job: { deadline: any }) => job.deadline
  );

  const slug = jobListings.map((job: { slug: any }) => job.slug.current);
  const type = jobListings.map((job: { type: any }) => job.type);
  const company = jobListings.map((job: { company: any }) => job.company);
  const location = jobListings.map((job: { location: any }) => job.location);
  const logo = jobListings.map((job: { logo: any }) => job.logo);
  const description = jobListings.map(
    (job: { description: any }) => job.description
  );
  const link = jobListings.map((job: { url: any }) => job.url);

  return {
    props: {
      slug,
      jobTitles,
      jobDeadlines,
      company,
      location,
      type,
      logo,
      description,
      link,
    },
  };
}
