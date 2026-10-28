import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sun Market design notes · start.ng',
  description:
    'The concept, palette, type, shape language, motion and accessibility rules behind The Sun Market, a whimsical in daylight design direction for start.ng.',
};

export default function SunMarketDesignPage() {
  return (
    <main>
      <section className="sm-design-hero">
        <div className="sm-wrap">
          <Link className="sm-back-link" href="/toybox">
            ← Back to the market
          </Link>
          <p className="sm-kicker">design notes · v2 · october 2026</p>
          <h1>A day market, not a theme park.</h1>
          <p>
            The Sun Market is a separate design direction for start.ng: a floating day market above Lagos where
            every stall is a game, every lantern is an invitation, and the sun keeps the time. It is brighter and
            more atmospheric than the faithful clone, but just as serious about getting people into a game.
          </p>
          <div className="sm-design-meta">
            <span className="sm-chip">floating day market</span>
            <span className="sm-chip">sun gold</span>
            <span className="sm-chip">paper lanterns</span>
            <span className="sm-chip">adire constellations</span>
            <span className="sm-chip">gentle motion</span>
            <span className="sm-chip">same 189 games</span>
          </div>
        </div>
      </section>

      <section className="sm-section" style={{ paddingTop: 24 }}>
        <div className="sm-wrap sm-design-grid">
          <article className="sm-design-card">
            <p className="sm-kicker">the idea</p>
            <h2>Every stall is a game.</h2>
            <p>
              The main start.ng is a well-kept arcade: clear signs, a tidy grid, everything where you expect it. The
              Sun Market is what happens when the city slows down, when the same catalogue becomes a place you want
              to wander through rather than scan.
            </p>
            <p>
              The world is specific rather than generic. It is not a European forest or a fairy castle. It is a
              market above Lagos: danfo shuttle, soup stall, paper lanterns, jollof, a breeze line, a sun with
              opinions. That specificity is what makes the whimsy feel authored instead of imported.
            </p>
            <p className="sm-design-note">
              Working rule: whimsy should feel discovered, not announced. The page is elegant first; the jokes,
              charms and tiny secrets arrive as you engage.
            </p>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">why it changed</p>
            <h2>Less confetti. More weather.</h2>
            <p>
              The earlier Toybox direction was paper-cut, flat and deliberately loud. It proved the catalogue could
              hold a second personality, but it did not feel premium enough for the brief. It was bright, and it
              was all at once.
            </p>
            <p>
              The Sun Market keeps the same route and the same playfulness, then adds atmosphere: sunwashed gradients,
              floating gardens, restrained gold, drifting petals and a slower reveal. The colour does less shouting
              so the details can do more talking.
            </p>
            <p className="sm-design-note">
              The route stays at <code>/toybox</code> for continuity. The faithful clone is still at the front door
              and is untouched.
            </p>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">three principles</p>
            <h2>Atmosphere, discovery, usable wonder.</h2>
            <div className="sm-principles">
              <div className="sm-principle">
                <b>1. Atmosphere before decoration</b>
                <span>Every glow, drift and shadow has a job: to make the next action feel like a place, not a component.</span>
              </div>
              <div className="sm-principle">
                <b>2. Discovery over noise</b>
                <span>Secrets are findable but never required. The moth, the constellation and the charms reward attention without blocking the path.</span>
              </div>
              <div className="sm-principle">
                <b>3. Usable wonder</b>
                <span>Contrast, focus states, plain labels and real links survive every magical flourish. If it looks like a button, it works like one.</span>
              </div>
            </div>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">colour</p>
            <h2>Cream paper, sun yellow, and one good blush.</h2>
            <p>
              The palette is small enough to remember. Cream builds the page and the islands; sun yellow is reserved for
              invitation, warmth and reward; ink is for reading. Blush, mint and sky appear as small signals, like
              flowers in a window.
            </p>
            <div className="sm-swatches">
              <div className="sm-swatch" style={{ background: '#fffaf0', color: '#2f2a3a' }}><span>#fffaf0</span>paper</div>
              <div className="sm-swatch" style={{ background: '#fff3dc', color: '#2f2a3a' }}><span>#fff3dc</span>cream</div>
              <div className="sm-swatch" style={{ background: '#ffd66e', color: '#2f2a3a' }}><span>#ffd66e</span>sun</div>
              <div className="sm-swatch" style={{ background: '#f6ca63', color: '#2f2a3a' }}><span>#f6ca63</span>marigold</div>
              <div className="sm-swatch" style={{ background: '#ffb9bd', color: '#2f2a3a' }}><span>#ffb9bd</span>blush</div>
              <div className="sm-swatch" style={{ background: '#a8e6cf', color: '#2f2a3a' }}><span>#a8e6cf</span>mint</div>
              <div className="sm-swatch" style={{ background: '#a9d6f5', color: '#2f2a3a' }}><span>#a9d6f5</span>sky</div>
              <div className="sm-swatch" style={{ background: '#2f2a3a', color: '#fff8e8' }}><span>#2f2a3a</span>ink</div>
              <div className="sm-swatch" style={{ background: '#a95f1d', color: '#fff8e8' }}><span>#a95f1d</span>ochre</div>
              <div className="sm-swatch" style={{ background: '#6b6278', color: '#fff8e8' }}><span>#6b6278</span>quiet</div>
            </div>
            <p className="sm-design-note">
              Ochre is never used for body copy. It is a warm accent, not a reading colour. Body copy sits at
              <code>#51495e</code> or darker on cream, which clears WCAG AA at normal sizes.
            </p>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">type</p>
            <h2>Palatino for the story. Nimbus for the directions.</h2>
            <div className="sm-type-spec">
              <div className="sm-type-big">
                The city wakes.
                <br />
                <em>The games come out.</em>
              </div>
              <p>
                <b>Sun Display</b> · P052 · 400/400 italic. A literary Palatino with soft serifs and a little
                old-market confidence. Used for headlines, game titles, poetic asides and the sun&apos;s better
                lines. Big sizes, tight tracking, generous line-height only where reading matters.
              </p>
              <p>
                <b>Sun Sans</b> · Nimbus Sans · 400/700. The calm voice: navigation, buttons, labels, body copy.
                It keeps the experience grounded and legible when the illustration is doing theatrical things.
              </p>
              <p className="sm-design-note">
                Both fonts are self-hosted from the project. No third-party font request, no layout shift from a
                blocked stylesheet.
              </p>
            </div>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">shape &amp; material</p>
            <h2>Hand-drawn islands, thin gold lines, honest paper.</h2>
            <ul>
              <li><b>Organic silhouettes</b> — islands and clouds are deliberately uneven, with no perfect circles except the sun.</li>
              <li><b>Paper lanterns</b> as the recurring object: currency, invitation, loading state, wish and reward.</li>
              <li><b>Hairline gold</b> for borders and the constellation, so the interface feels drawn rather than extruded.</li>
              <li><b>Adire-inspired geometry</b> in low-contrast diagonal patterns behind the map and district tiles, never as costume.</li>
              <li><b>Paper grain</b> at 2.2% over the whole world to stop the gradients feeling synthetic.</li>
              <li><b>No generic glass cards</b> — surfaces are layered daylight paper with a warm inner light, not frosted white rectangles.</li>
            </ul>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">motion</p>
            <h2>Three speeds: weather, invitation, response.</h2>
            <ul>
              <li><b>Weather</b> — pollen drifts, clouds drift, lanterns sway, the island breathes. Slow, continuous, easy to ignore.</li>
              <li><b>Invitation</b> — a card lifts 4px, a lantern glows, the moth drifts closer. The interface leans in without grabbing.</li>
              <li><b>Response</b> — the lantern reel spins for 1.6 seconds and stops dead; a wish rises into the sky; a charm fills. Short, legible feedback.</li>
              <li><b>Parallax</b> is pointer-only, on fine pointers, capped at 13px. It is a texture, not a ride.</li>
              <li><b>Reduced motion</b> removes every loop and parallax while keeping all state changes and content.</li>
            </ul>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">signature interactions</p>
            <h2>Seven small rituals, all real.</h2>
            <ul>
              <li><b>The lantern draw</b> — asks the sun for one of 188 games. The cover lives inside a hanging lantern; the result links straight to play.</li>
              <li><b>The six districts</b> — mood-led discovery. Each of the six poetic districts maps to real categories and returns three stalls.</li>
              <li><b>Wish lanterns</b> — a small wish is written, released and stored in <code>localStorage</code>. It joins the sky as a warm paper note.</li>
              <li><b>Tiny dares</b> — one specific, achievable challenge linked to a real game, with another dare one click away.</li>
              <li><b>Market charms</b> — four actions fill four lights in the satchel. The constellation only appears when all four are found.</li>
              <li><b>The Breeze Line</b> — a ticket-stub portal to the Hangout, where the market becomes people.</li>
              <li><b>The sun moth</b> — a hidden, keyboard-accessible easter egg near the sun. It recommends a stall and refuses to explain itself.</li>
            </ul>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">progressive whimsy</p>
            <h2>The page gets a little more magical as you use it.</h2>
            <p>
              The first screen is confident and restrained: type, sun, island, one clear invitation. The strange
              details arrive in layers. Hovering a stall lights its lantern. Choosing a district wakes three stalls.
              Leaving a wish puts a new light in the sky. Four small actions fill the satchel, and only then does a
              new constellation appear above the sun.
            </p>
            <p>
              The system is deliberately finite. Four visible lights plus one secret moth. There is no infinite
              collectible loop and no pressure to grind. The reward is a feeling and a shortcut to the Hangout.
            </p>
            <p className="sm-design-note">
              Progress is stored under <code>startng:sunmarket:v1</code> in the browser. Clearing site data resets
              the market, which is a feature for anyone who wants to start the evening again.
            </p>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">onboarding &amp; empty states</p>
            <h2>Nobody should stand at the gate looking confused.</h2>
            <ul>
              <li>The first section after the hero is a three-step illustrated map: ask the sun, choose a district, leave a wish.</li>
              <li>An unopened district drawer is a charming empty state, not a blank grid: “The stalls are still waking.”</li>
              <li>An empty wish sky says “The sky is holding its breath” and invites the first lantern, with ambient market whispers below.</li>
              <li>The lantern draw has its own loading copy: “The market is holding its breath.” It resolves into a named game, not a mystery box.</li>
              <li>The satchel explains the next missing light on hover and in the expanded panel, so the progression is never a puzzle.</li>
            </ul>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">accessibility</p>
            <h2>Delight is not an excuse to be unusable.</h2>
            <ul>
              <li>Body text is ink on cream; ochre is reserved for accents and never body copy.</li>
              <li>All controls are real buttons or links, reachable in a sensible tab order, with a visible gold focus ring.</li>
              <li>The lantern draw announces its result in an <code>aria-live</code> region; the satchel count is announced politely.</li>
              <li>The sun moth is a real button with a label, opens a labelled dialog, closes on Escape and returns focus to its close control.</li>
              <li>Charms are never communicated by colour alone: each one has a word label and a text state.</li>
              <li>The scene has a descriptive accessible name; purely decorative sky elements are hidden from assistive technology.</li>
              <li>Touch targets on primary actions are at least 44px. Hover states are enhancements, never requirements.</li>
              <li><code>prefers-reduced-motion</code> stops ambient loops, parallax and entrance animations without removing information.</li>
            </ul>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">performance</p>
            <h2>Atmosphere without the weight.</h2>
            <ul>
              <li>The hero is one inline SVG with no image request; the rest of the market is CSS gradients and a tiny petal field.</li>
              <li>Game covers are lazy-loaded and decoded asynchronously, with fixed aspect ratios to prevent layout shift.</li>
              <li>Pointer parallax is gated to fine pointers and reduced-motion preferences, and writes at most one CSS variable per frame.</li>
              <li>No animation library, no canvas loop, no audio. State is a handful of React values plus one localStorage key.</li>
              <li>Fonts are self-hosted with <code>font-display: swap</code>; only three display weights and two sans weights load.</li>
              <li>All charm, wish and favourite state is local; the page works without an account or a backend.</li>
            </ul>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">relationship to the main site</p>
            <h2>Two doors, one house.</h2>
            <table className="sm-compare">
              <thead>
                <tr><th> </th><th>start.ng</th><th>The Sun Market</th></tr>
              </thead>
              <tbody>
                <tr><td>Feeling</td><td>Calm, editorial, confident</td><td>Atmospheric, warm, quietly magical</td></tr>
                <tr><td>Palette</td><td>Cream, lime, ink</td><td>Cream, sun yellow, blush, mint, sky</td></tr>
                <tr><td>Type</td><td>Helvetica Neue</td><td>P052 + Nimbus Sans</td></tr>
                <tr><td>Entry point</td><td>Browse or play</td><td>Pull a lantern</td></tr>
                <tr><td>Catalogue</td><td>189 games</td><td>Same 189 games</td></tr>
                <tr><td>Role</td><td>The product</td><td>A design direction</td></tr>
              </tbody>
            </table>
            <p className="sm-design-note">
              The faithful clone stays at <Link href="/" style={{ textDecoration: 'underline' }}>the front door</Link>.
              The Sun Market lives at <code>/toybox</code> and never overwrites the main experience.
            </p>
          </article>

          <article className="sm-design-card">
            <p className="sm-kicker">if this went further</p>
            <h2>Next lights in the market.</h2>
            <ul>
              <li>A shared lantern wall, with moderated wishes from real players and a weekly theme.</li>
              <li>District days: one district gets a guest curator, a special stall and a small live event.</li>
              <li>Creator stalls drawn as individual shopfronts, with the maker&apos;s note hidden behind a paper flap.</li>
              <li>A constellation that remembers which games you actually played, not just which ones you saved.</li>
              <li>Seasonal skies: harmattan haze, rainy-season reflections, a December market with warmer lanterns.</li>
              <li>A quiet mode that keeps the atmosphere but removes all ambient motion for shared offices and low-power devices.</li>
            </ul>
            <div>
              <Link className="sm-btn sm-btn-gold" href="/toybox">
                Go pull a lantern <span aria-hidden="true">✦</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
