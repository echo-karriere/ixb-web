/*
  This component is used to set the SEO of the page.
  
  @param {string} title - the title of the page
  @param {string} description - the description of the page
  @returns {JSX.Element} - the SEO of the page
  @example
  <HeadSEO title="Test" description="Test" />
*/

import Head from "next/head";

interface HeadSEOProps {
  title: string;
  description: string;
  canonical?: string;
  author?: string;
}

export function HeadSEO({
  title,
  description,
  canonical,
  author,
}: HeadSEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="og:description" content={description} />
      {canonical && (
        <link rel="canonical" href={`https://www.itxbergen.no${canonical}`} />
      )}
      {author && <meta name="author" content={author} />}
    </Head>
  );
}
