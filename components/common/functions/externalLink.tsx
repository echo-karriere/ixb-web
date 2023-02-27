/*
 * ExternalLink component
 * @param {string} href - the link to the external page
 * @param {string} linkText - the text to be displayed on the link
 * @returns {JSX.Element} - the external link
 * @example
 * <ExternalLink href="https://www.google.com" linkText="Google" />
 */

import "remixicon/fonts/remixicon.css";

interface ExternalLinkProps {
  href: string;
  linkText: string;
}

export function ExternalLink({ href, linkText }: ExternalLinkProps) {
  return (
    <a
      href={href}
      className="text-blue-800 underline inline-block"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={linkText + ", ekstern lenke,"}>
      {linkText} <i className=" ri-external-link-fill"></i>
    </a>
  );
}
