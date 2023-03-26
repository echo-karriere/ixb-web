import { client } from "../../src/lib/sanity.client";

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
    `*[_type == "joblisting"]{slug, title, deadline, company, location, type}`
  );
  jobListings.sort(
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
  const jobListingsWithSlug = jobListings.map((job: { slug: any }) => {
    return {
      ...job,
      slug: job.slug.current,
    };
  }); 


  res.status(200).json(jobListingsWithSlug);
}

export async function getStaticProps() {
  const jobListings = await client.fetch(
    `*[_type == "joblisting"]{slug, title, deadline, company, location, type}`
  );
  const jobTitles = jobListings.map((job: { title: any }) => job.title);
  const jobDeadlines = jobListings.map(
    (job: { deadline: any }) => job.deadline
  );


  const slug = jobListings.map((job: { slug: any }) => job.slug.current);
const type = jobListings.map((job: { type: any }) => job.type);
  const company = jobListings.map((job: { company: any }) => job.company);
  const location = jobListings.map((job: { location: any }) => job.location);

  return {
    props: {
      slug,
      jobTitles,
      jobDeadlines,
      company,
      location,
      type,
    },
  };
}
