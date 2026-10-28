import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Moon Market design notes · start.ng',
  description:
    'The concept, palette, type, shape language, motion and accessibility rules behind The Moon Market, a whimsical after-dark design direction for start.ng.',
};

export default function MoonMarketDesignPage() {
  return (
    <main>
      <section className="mm-design-hero">
        <div className="mm-wrap">
          <Link className="mm-back-link" href="/toybox">
            ← Back to the market
          </Link>
          <p className="mm-kicker">design notes · v2 · october 2026</p>
          <h1>A night market, not a theme park.</h1>
          <p>
            The Moon Market is a separate design direction for start.ng: a floating night market above Lagos where
            every stall is a game, every lantern is an invitation, and the moon keeps score. It is warmer and more
            atmospheric than the faithful clone, but just as serious about getting people into a game.
          </p>
          <div className="mm-design-meta">
            <span className="mm-chip">floating night market</span>
            <span className="mm-chip">moon gold</span>
            <span className="mm-chip">paper lanterns</span>
            <span className="mm-chip">adire constellations</span>
            <span className="mm-chip">gentle motion</span>
            <span className="mm-chip">same 189 games</span>
          </div>
        </div>
      </section>

      <section className="mm-section" style={{ paddingTop: 24 }}>
        <div className="mm-wrap mm-design-grid">
          <article className="mm-design-card">
            <p className="mm-kicker">the idea</p>
            <h2>Every stall is a game.</h2>
            <p>
              The main start.ng is a well-kept arcade: clear signs, a tidy grid, everything where you expect it. The
              Moon Market is what happens after the last bus, when the same catalogue becomes a place you want to
              wander through rather than scan.
            </p>
            <p>
              The world is specific rather than generic. It is not a European forest or a fairy castle. It is a
              market above Lagos: danfo shuttle, soup stall, paper lanterns, jollof, a night bus, a moon with
              opinions. That specificity is what makes the whimsy feel authored instead of imported.
            </p>
            <p className="mm-design-note">
              Working rule: whimsy should feel discovered, not announced. The page is elegant first; the jokes,
              charms and tiny secrets arrive as you engage.
            </p>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">why it changed</p>
            <h2>Less confetti. More weather.</h2>
            <p>
              The earlier Toybox direction was paper-cut, flat and deliberately loud. It proved the catalogue could
              hold a second personality, but it did not feel premium enough for the brief. It was daytime, and it
              was all at once.
            </p>
            <p>
              The Moon Market keeps the same route and the same playfulness, then adds atmosphere: deep gradients,
              organic floating islands, restrained gold, candlelight, drifting motes and a slower reveal. The
              colour does less shouting so the details can do more talking.
            </p>
            <p className="mm-design-note">
              The route stays at <code>/toybox</code> for continuity. The faithful clone is still at the front door
              and is untouched.
            </p>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">three principles</p>
            <h2>Atmosphere, discovery, usable wonder.</h2>
            <div className="mm-principles">
              <div className="mm-principle">
                <b>1. Atmosphere before decoration</b>
                <span>Every glow, drift and shadow has a job: to make the next action feel like a place, not a component.</span>
              </div>
              <div className="mm-principle">
                <b>2. Discovery over noise</b>
                <span>Secrets are findable but never required. The moth, the constellation and the charms reward attention without blocking the path.</span>
              </div>
              <div className="mm-principle">
                <b>3. Usable wonder</b>
                <span>Contrast, focus states, plain labels and real links survive every magical flourish. If it looks like a button, it works like one.</span>
              </div>
            </div>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">colour</p>
            <h2>Midnight, moon gold, and one good blush.</h2>
            <p>
              The palette is small enough to remember. Indigo and plum build the sky and the islands; moon gold is
              reserved for invitation, warmth and reward; cream is for reading. Rose, jade and sky appear only as
              small signals, like lanterns in a window.
            </p>
            <div className="mm-swatches">
              <div className="mm-swatch" style={{ background: '#070a19', color: '#f7f1e5' }}><span>#070a19</span>midnight</div>
              <div className="mm-swatch" style={{ background: '#171e45', color: '#f7f1e5' }}><span>#171e45</span>indigo</div>
              <div className="mm-swatch" style={{ background: '#2a1d43', color: '#f7f1e5' }}><span>#2a1d43</span>plum</div>
              <div className="mm-swatch" style={{ background: '#e8b86a' }}><span>#e8b86a</span>moon gold</div>
              <div className="mm-swatch" style={{ background: '#f6e7c1' }}><span>#f6e7c1</span>moon</div>
              <div className="mm-swatch" style={{ background: '#f7f1e5' }}><span>#f7f1e5</span>cream text</div>
              <div className="mm-swatch" style={{ background: '#e9a5a0' }}><span>#e9a5a0</span>blush</div>
              <div className="mm-swatch" style={{ background: '#9bd6b6' }}><span>#9bd6b6</span>jade</div>
              <div className="mm-swatch" style={{ background: '#9fc7e8' }}><span>#9fc7e8</span>sky</div>
              <div className="mm-swatch" style={{ background: '#bbb5c9' }}><span>#bbb5c9</span>muted text</div>
            </div>
            <p className="mm-design-note">
              Gold is never used for body copy. It is a light source, not a text colour. Body copy sits at
              <code>#bbb5c9</code> or brighter on <code>#070a19</code>, which clears WCAG AA at normal sizes.
            </p>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">type</p>
            <h2>Palatino for the story. Nimbus for the directions.</h2>
            <div className="mm-type-spec">
              <div className="mm-type-big">
                The city sleeps.
                <br />
                <em>The games come out.</em>
              </div>
              <p>
                <b>Moon Display</b> · P052 · 400/400 italic. A literary Palatino with soft serifs and a little
                old-market confidence. Used for headlines, game titles, poetic asides and the moon&apos;s better
                lines. Big sizes, tight tracking, generous line-height only where reading matters.
              </p>
              <p>
                <b>Moon Sans</b> · Nimbus Sans · 400/700. The calm voice: navigation, buttons, labels, body copy.
                It keeps the experience grounded and legible when the illustration is doing theatrical things.
              </p>
              <p className="mm-design-note">
                Both fonts are self-hosted from the project. No third-party font request, no layout shift from a
                blocked stylesheet.
              </p>
            </div>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">shape &amp; material</p>
            <h2>Hand-drawn islands, thin gold lines, honest paper.</h2>
            <ul>
              <li><b>Organic silhouettes</b> — islands and clouds are deliberately uneven, with no perfect circles except the moon.</li>
              <li><b>Paper lanterns</b> as the recurring object: currency, invitation, loading state, wish and reward.</li>
              <li><b>Hairline gold</b> for borders and the constellation, so the interface feels drawn rather than extruded.</li>
              <li><b>Adire-inspired geometry</b> in low-contrast diagonal patterns behind the map and district tiles, never as costume.</li>
              <li><b>Film grain</b> at 3.8% over the whole world to stop the gradients feeling synthetic.</li>
              <li><b>No generic glass cards</b> — surfaces are layered night air with a warm inner light, not frosted white rectangles.</li>
            </ul>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">motion</p>
            <h2>Three speeds: weather, invitation, response.</h2>
            <ul>
              <li><b>Weather</b> — stars twinkle, clouds drift, lanterns sway, the island breathes. Slow, continuous, easy to ignore.</li>
              <li><b>Invitation</b> — a card lifts 4px, a lantern glows, the moth drifts closer. The interface leans in without grabbing.</li>
              <li><b>Response</b> — the lantern reel spins for 1.6 seconds and stops dead; a wish rises into the sky; a charm fills. Short, legible feedback.</li>
              <li><b>Parallax</b> is pointer-only, on fine pointers, capped at 13px. It is a texture, not a ride.</li>
              <li><b>Reduced motion</b> removes every loop and parallax while keeping all state changes and content.</li>
            </ul>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">signature interactions</p>
            <h2>Seven small rituals, all real.</h2>
            <ul>
              <li><b>The lantern draw</b> — asks the moon for one of 188 games. The cover lives inside a hanging lantern; the result links straight to play.</li>
              <li><b>The six districts</b> — mood-led discovery. Each of the six poetic districts maps to real categories and returns three stalls.</li>
              <li><b>Wish lanterns</b> — a small wish is written, released and stored in <code>localStorage</code>. It joins the sky as a warm paper note.</li>
              <li><b>Tiny dares</b> — one specific, achievable challenge linked to a real game, with another dare one click away.</li>
              <li><b>Market charms</b> — four actions fill four lights in the satchel. The constellation only appears when all four are found.</li>
              <li><b>The Night Bus</b> — a ticket-stub portal to the Hangout, where the market becomes people.</li>
              <li><b>The moon moth</b> — a hidden, keyboard-accessible easter egg near the moon. It recommends a stall and refuses to explain itself.</li>
            </ul>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">progressive whimsy</p>
            <h2>The page gets a little more magical as you use it.</h2>
            <p>
              The first screen is confident and restrained: type, moon, island, one clear invitation. The strange
              details arrive in layers. Hovering a stall lights its lantern. Choosing a district wakes three stalls.
              Leaving a wish puts a new light in the sky. Four small actions fill the satchel, and only then does a
              new constellation appear above the moon.
            </p>
            <p>
              The system is deliberately finite. Four visible lights plus one secret moth. There is no infinite
              collectible loop and no pressure to grind. The reward is a feeling and a shortcut to the Hangout.
            </p>
            <p className="mm-design-note">
              Progress is stored under <code>startng:moonmarket:v1</code> in the browser. Clearing site data resets
              the market, which is a feature for anyone who wants to start the evening again.
            </p>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">onboarding &amp; empty states</p>
            <h2>Nobody should stand at the gate looking confused.</h2>
            <ul>
              <li>The first section after the hero is a three-step illustrated map: ask the moon, choose a district, leave a wish.</li>
              <li>An unopened district drawer is a charming empty state, not a blank grid: “The stalls are still waking.”</li>
              <li>An empty wish sky says “The sky is holding its breath” and invites the first lantern, with ambient market whispers below.</li>
              <li>The lantern draw has its own loading copy: “The market is holding its breath.” It resolves into a named game, not a mystery box.</li>
              <li>The satchel explains the next missing light on hover and in the expanded panel, so the progression is never a puzzle.</li>
            </ul>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">accessibility</p>
            <h2>Delight is not an excuse to be unusable.</h2>
            <ul>
              <li>Body text is cream or muted lavender on midnight indigo; gold is reserved for accents and never body copy.</li>
              <li>All controls are real buttons or links, reachable in a sensible tab order, with a visible gold focus ring.</li>
              <li>The lantern draw announces its result in an <code>aria-live</code> region; the satchel count is announced politely.</li>
              <li>The moon moth is a real button with a label, opens a labelled dialog, closes on Escape and returns focus to its close control.</li>
              <li>Charms are never communicated by colour alone: each one has a word label and a text state.</li>
              <li>The scene has a descriptive accessible name; purely decorative sky elements are hidden from assistive technology.</li>
              <li>Touch targets on primary actions are at least 44px. Hover states are enhancements, never requirements.</li>
              <li><code>prefers-reduced-motion</code> stops ambient loops, parallax and entrance animations without removing information.</li>
            </ul>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">performance</p>
            <h2>Atmosphere without the weight.</h2>
            <ul>
              <li>The hero is one inline SVG with no image request; the rest of the market is CSS gradients and a tiny star field.</li>
              <li>Game covers are lazy-loaded and decoded asynchronously, with fixed aspect ratios to prevent layout shift.</li>
              <li>Pointer parallax is gated to fine pointers and reduced-motion preferences, and writes at most one CSS variable per frame.</li>
              <li>No animation library, no canvas loop, no audio. State is a handful of React values plus one localStorage key.</li>
              <li>Fonts are self-hosted with <code>font-display: swap</code>; only three display weights and two sans weights load.</li>
              <li>All charm, wish and favourite state is local; the page works without an account or a backend.</li>
            </ul>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">relationship to the main site</p>
            <h2>Two doors, one house.</h2>
            <table className="mm-compare">
              <thead>
                <tr><th> </th><th>start.ng</th><th>The Moon Market</th></tr>
              </thead>
              <tbody>
                <tr><td>Feeling</td><td>Calm, editorial, confident</td><td>Atmospheric, warm, quietly magical</td></tr>
                <tr><td>Palette</td><td>Cream, lime, ink</td><td>Midnight, plum, moon gold, blush</td></tr>
                <tr><td>Type</td><td>Helvetica Neue</td><td>P052 + Nimbus Sans</td></tr>
                <tr><td>Entry point</td><td>Browse or play</td><td>Pull a lantern</td></tr>
                <tr><td>Catalogue</td><td>189 games</td><td>Same 189 games</td></tr>
                <tr><td>Role</td><td>The product</td><td>A design direction</td></tr>
              </tbody>
            </table>
            <p className="mm-design-note">
              The faithful clone stays at <Link href="/" style={{ textDecoration: 'underline' }}>the front door</Link>.
              The Moon Market lives at <code>/toybox</code> and never overwrites the main experience.
            </p>
          </article>

          <article className="mm-design-card">
            <p className="mm-kicker">if this went further</p>
            <h2>Next lights in the market.</h2>
            <ul>
              <li>A shared lantern wall, with moderated wishes from real players and a nightly theme.</li>
              <li>District nights: one district gets a guest curator, a special stall and a small live event.</li>
              <li>Creator stalls drawn as individual shopfronts, with the maker&apos;s note hidden behind a paper flap.</li>
              <li>A constellation that remembers which games you actually played, not just which ones you saved.</li>
              <li>Seasonal skies: harmattan haze, rainy-season reflections, a December market with warmer lanterns.</li>
              <li>A quiet mode that keeps the atmosphere but removes all ambient motion for shared offices and low-power devices.</li>
            </ul>
            <div>
              <Link className="mm-btn mm-btn-gold" href="/toybox">
                Go pull a lantern <span aria-hidden="true">✦</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
