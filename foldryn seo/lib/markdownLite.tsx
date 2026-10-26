import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Parses a very small subset of Markdown inline syntax — **bold** and
 * [text](url) links — into React nodes. Intentionally minimal: no library
 * dependency, no HTML injection, just the two things blog copy actually
 * needs. Internal links (starting with "/") use next/link for client-side
 * navigation; anything else opens in a new tab.
 */
export function renderInline(text: string): ReactNode[] {
  const tokens: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      tokens.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] !== undefined && match[3] !== undefined) {
      const label = match[2];
      const href = match[3];
      if (href.startsWith("/")) {
        tokens.push(
          <Link key={key++} href={href} className="text-blue-600 hover:underline">
            {label}
          </Link>
        );
      } else {
        tokens.push(
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {label}
          </a>
        );
      }
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push(text.slice(lastIndex));
  }

  return tokens;
}
