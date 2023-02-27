/*
 * InternalLink component
 * @param {string} href - the link to the internal page
 * @param {string} linkText - the text to be displayed on the link
 * @returns {JSX.Element} - the internal link
 * @example
 * <ExternalLink href="/" linkText="Hjemmeside" />
 */

import "remixicon/fonts/remixicon.css";
import Link from "next/link";

interface ExternalLinkProps {
  href: string;
  linkText: string;
}

export function InternalLink({ href, linkText }: ExternalLinkProps) {
  return (
    <Link href={href} className="text-blue-800 underline inline-block">
      {linkText}
    </Link>
  );
}
