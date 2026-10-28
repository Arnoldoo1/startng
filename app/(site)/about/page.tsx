import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About start.ng',
  description: "start.ng is Nigeria's home for browser games, built by the HNG community. Free to play, no download, made in Naija and across Africa.",
};

const faqs = [
  ['What is start.ng?', 'A home for free browser games made by the HNG community. Each game has its own address, like yourgame.start.ng, and you play it right in your browser.'],
  ['Is it free?', 'Yes. Every game on start.ng is free to play in your browser, with nothing to download.'],
  ['Are there Nigerian or African web games?', 'Yes. Many games here are Naija-themed, from danfo rush hour to jollof and Lagos markets, and we welcome games from across Africa.'],
  ['Do I need an account to play?', 'No. Sign in to get your start.ng character, keep your scores on the leaderboards and join the daily tournament.'],
  ['What is the daily tournament?', 'Every day a few start.ng games are picked for 24 hours, and the best player wins. Points count towards the overall leaderboard.'],
  ['How do I put my game on start.ng?', 'Push your browser game to a public GitHub repo, publish it with one API call and approve it once. It goes live at yourgame.start.ng. The docs have every step.'],
];

export default function AboutPage() {
  return (
    <main className="container about-page">
      <h1>About start.ng</h1>
      <p className="lede">start.ng is Nigeria&apos;s home for browser games, built by the HNG community. Every game is free to play in your browser with no download, and many are made in Naija: danfo rush hour, jollof catching, Lagos markets and more.</p>
      <p className="lede">We&apos;re also building a home for web games from across Africa. If you make games anywhere on the continent, you can put yours on start.ng for free.</p>

      <h2>What you can do here</h2>
      <div className="what">
        <Link href="/games"><b>Play</b><p>Pick a game from the community and play it right in your browser, free, with nothing to download.</p></Link>
        <Link href="/tournament"><b>Compete</b><p>Join the daily tournament and climb the overall leaderboard.</p></Link>
        <Link href="/creators"><b>Independent creators</b><p>Games made and hosted by creators outside start.ng, each with its own page.</p></Link>
        <Link href="/docs"><b>Make a game</b><p>Push your browser game to a public GitHub repo, publish it with one API call and approve it once. The docs have every step.</p></Link>
      </div>

      <h2>Questions</h2>
      <div className="faq">
        {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>

      <h2>A second home, with more glue and glitter</h2>
      <p className="lede">We also made a small design experiment called <Link href="/toybox" style={{ textDecoration: 'underline', textDecorationColor: 'var(--lime-deep)', textDecorationThickness: 3, textUnderlineOffset: 3 }}>The Moon Market</Link>: a floating night market above Lagos where every stall is a game and the moon keeps score. It is not the main site. Think of it as the after-hours version, with the same games and rather more lanterns.</p>
    </main>
  );
}
