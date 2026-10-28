import type { Metadata } from 'next';
import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

export const metadata: Metadata = {
  title: 'Build a game for start.ng · docs',
  description: 'Everything you need to build a start.ng game and put it live, by hand or with your AI.',
};

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function DocsPage() {
  const md = fs.readFileSync(path.join(process.cwd(), 'public', 'docs.md'), 'utf8');
  let html = marked.parse(md, { gfm: true, async: false }) as string;

  const headings: { id: string; text: string }[] = [];
  html = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_m, level: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
    const id = slug(text);
    if (level === '2') headings.push({ id, text });
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });

  return (
    <main className="container docs-page">
      <div className="docs-top">
        <p className="ai-inline"><b>Building with AI?</b> Give it this page as plain text: <Link href="/docs.md" style={{ textDecoration: 'underline' }}>start.ng/docs.md</Link> · <a href="/docs.md" download>Download as .md</a></p>
      </div>
      <div className="docs-hero">
        <aside className="docs-side">
          <div className="ai-box">
            <b>Building with AI?</b>
            <p>Give it this page as plain text. It has every rule and API call.</p>
            <code>start.ng/docs.md</code>
            <a className="btn" href="/docs.md" download>Download as .md</a>
            <Link className="ghost" href="/docs.md">Open plain text</Link>
          </div>
          <nav className="docs-toc" aria-label="On this page">
            <h2>On this page</h2>
            {headings.map((h) => <a key={h.id} href={`#${h.id}`}>{h.text}</a>)}
          </nav>
        </aside>
        <article className="docs-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  );
}
