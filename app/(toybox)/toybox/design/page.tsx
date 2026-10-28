import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Toybox design notes · start.ng',
  description: 'The concept, palette, type, shape language and motion rules behind The Toybox, a whimsical design direction for start.ng.',
};

export default function ToyboxDesignPage() {
  return (
    <main>
      <section className="tb-design-hero">
        <div className="tb-wrap">
          <Link href="/toybox" style={{ fontWeight: 700, fontSize: '.82rem', textDecoration: 'underline', textDecorationThickness: 2 }}>
            ← Back to the Toybox
          </Link>
          <p className="tb-kicker" style={{ marginTop: 22 }}>Design notes · v1 · October 2026</p>
          <h1>A toybox, not a shelf.</h1>
          <p>start.ng already has a strong, quiet identity: cream paper, lime highlighter, Helvetica, a neat grid. The Toybox asks a different question: what if the site felt like the inside of a favourite cardboard box, where every game is a wind-up toy with a hand-written label?</p>
          <div className="tb-design-meta">
            <span className="tb-chip">paper-cut</span>
            <span className="tb-chip">toy colours</span>
            <span className="tb-chip">thick ink lines</span>
            <span className="tb-chip">playful motion</span>
            <span className="tb-chip">same catalogue</span>
          </div>
        </div>
      </section>

      <section className="tb-section" style={{ paddingTop: 24 }}>
        <div className="tb-wrap tb-design-grid">
          <article className="tb-design-card">
            <p className="tb-kicker">The idea</p>
            <h2>Every game is a toy you can pick up.</h2>
            <p>The main start.ng feels like a well-kept arcade: tidy signs, everything in its place. The Toybox is the cupboard behind the counter. Covers are printed on card, categories are drawers, and the site itself is allowed to be a bit silly.</p>
            <p>This is not a replacement. It is a second front door for people who need a nudge before they press play, and a way to show that a Nigerian games site can be warm, handmade and unmistakably fun without losing the games.</p>
            <p className="tb-design-note">Working rule: if a nine-year-old would not want to touch it, it is not finished.</p>
          </article>

          <article className="tb-design-card">
            <p className="tb-kicker">Three principles</p>
            <h2>Touchable, legible, a little off-centre.</h2>
            <div className="tb-principles" style={{ gridTemplateColumns: '1fr' }}>
              <div className="tb-principle"><b>1. Made by hand</b><span>Wobbly radii, visible tape, offset shadows. Nothing should look like it came out of a component library with the corners set to 8px.</span></div>
              <div className="tb-principle"><b>2. Loud but clear</b><span>Colour does the shouting so the words do not have to. Every button still looks like a button and every link still reads as a link.</span></div>
              <div className="tb-principle"><b>3. Play before browse</b><span>The first action is a handle to pull, not a filter panel. The catalogue is still one click away, but delight comes first.</span></div>
            </div>
          </article>

          <article className="tb-design-card">
            <p className="tb-kicker">Colour</p>
            <h2>Six crayons and one very dark ink.</h2>
            <p>The palette is intentionally small enough to remember. Every colour has a job, which keeps the loudness from turning into soup.</p>
            <div className="tb-swatches">
              <div className="tb-swatch" style={{ background: '#2b1b3d', color: '#fff8e7' }}><span>#2b1b3d</span>ink</div>
              <div className="tb-swatch" style={{ background: '#fff8e7' }}><span>#fff8e7</span>paper</div>
              <div className="tb-swatch" style={{ background: '#ff6b6b' }}><span>#ff6b6b</span>coral</div>
              <div className="tb-swatch" style={{ background: '#ffd93d' }}><span>#ffd93d</span>butter</div>
              <div className="tb-swatch" style={{ background: '#8fd3ff' }}><span>#8fd3ff</span>sky</div>
              <div className="tb-swatch" style={{ background: '#7be0b3' }}><span>#7be0b3</span>mint</div>
              <div className="tb-swatch" style={{ background: '#a78bfa' }}><span>#a78bfa</span>grape</div>
              <div className="tb-swatch" style={{ background: '#ff9ecd' }}><span>#ff9ecd</span>pink</div>
              <div className="tb-swatch" style={{ background: '#ffeec9' }}><span>#ffeec9</span>cream</div>
              <div className="tb-swatch" style={{ background: '#675777', color: '#fff8e7' }}><span>#675777</span>plum text</div>
            </div>
            <p className="tb-design-note">Ink is always #2b1b3d, never pure black. Text on colour is ink, not white. That keeps the paper-cut feeling soft even at full volume.</p>
          </article>

          <article className="tb-design-card">
            <p className="tb-kicker">Type</p>
            <h2>Bookman for shouting, Nimbus for talking.</h2>
            <div className="tb-type-spec">
              <div className="tb-big-type">Good games,<br />with the lid off.</div>
              <p><b>Toybox Display</b> · URW Bookman Demi · 700. Rounded serifs, a bit storybook, a bit school-poster. Used only for headlines and numbers. Tracking pulled tight, line-height 0.86–0.98.</p>
              <div className="tb-small-type">
                <p><b>Toybox Sans</b> · Nimbus Sans · 400/700. The calm voice: body copy, labels, buttons, navigation. Short sentences. No corporate throat-clearing.</p>
              </div>
              <p className="tb-design-note">Both fonts are self-hosted from the project so the look survives offline builds and does not depend on a third-party request.</p>
            </div>
          </article>

          <article className="tb-design-card">
            <p className="tb-kicker">Shape &amp; material</p>
            <h2>Cut paper, not glass.</h2>
            <ul>
              <li><b>3px ink outline</b> on nearly every surface, like a sticker border.</li>
              <li><b>Asymmetric radii</b> (for example 14px 18px 13px 17px) so cards feel cut, not extruded.</li>
              <li><b>Hard offset shadows</b> to the lower right. No soft focus, no glassmorphism.</li>
              <li><b>Tape and stamps</b> as small affordances: a strip across a panel, a circular mark for a completed dare.</li>
              <li><b>Dot and stripe paper</b> behind everything, at low opacity, to make flat colour feel printed.</li>
            </ul>
          </article>

          <article className="tb-design-card">
            <p className="tb-kicker">Motion</p>
            <h2>Toys move. Pages should not wobble forever.</h2>
            <ul>
              <li>The hero television floats slowly, because it is alive.</li>
              <li>Buttons lift 2px and lose a bit of shadow on hover, then squash flat on press.</li>
              <li>The ticker runs at reading pace, not strobe pace.</li>
              <li>The pick-a-game machine shakes its reel for 1.5 seconds, then stops dead. Suspense, then certainty.</li>
              <li>Confetti is a quick burst, not a screensaver. It clears itself.</li>
              <li>Everything respects <code>prefers-reduced-motion</code>.</li>
            </ul>
          </article>

          <article className="tb-design-card">
            <p className="tb-kicker">Voice</p>
            <h2>Warm, specific, never cutesy for the sake of it.</h2>
            <p>The copy talks like a friend who has already played the game and is trying not to spoil it. It can be cheeky, but it never makes the player feel stupid and never hides information behind a joke.</p>
            <div className="tb-principles" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="tb-principle"><b>Say</b><span>“One pull picks one of 188 browser toys.”</span></div>
              <div className="tb-principle"><b>Not</b><span>“Leverage our curated game discovery engine.”</span></div>
            </div>
            <p className="tb-design-note">Every joke has a straight line after it. “Pull the handle” is followed by exactly where the button goes.</p>
          </article>

          <article className="tb-design-card">
            <p className="tb-kicker">Interaction model</p>
            <h2>Four toys, one catalogue.</h2>
            <ul>
              <li><b>Pick-a-game machine</b> — random discovery with a visible result, a play link and a retry.</li>
              <li><b>Mood mixer</b> — category-led discovery for people who know the feeling but not the genre.</li>
              <li><b>Tiny quest</b> — a specific, achievable dare that links straight into a game.</li>
              <li><b>Toybox passport</b> — a local-only name that makes the space feel claimed, with no account required.</li>
            </ul>
            <p>All four are real, not mockups. The passport persists in <code>localStorage</code>; the machine and quests use the real 189-game catalogue; every result links to the same playable routes as the main site.</p>
          </article>

          <article className="tb-design-card">
            <p className="tb-kicker">Accessibility</p>
            <h2>Delight is not an excuse to be unusable.</h2>
            <ul>
              <li>Ink-on-paper and ink-on-colour contrast is checked; body copy is plum, not pale grey.</li>
              <li>All controls are real buttons or links, reachable by keyboard, with visible dashed focus rings.</li>
              <li>The machine announces its result through an <code>aria-live</code> region.</li>
              <li>No information is carried by colour alone: tags have words, moods have labels, stamps have text.</li>
              <li>Motion can be reduced without losing any interaction.</li>
              <li>Touch targets are at least 44px on the primary controls.</li>
            </ul>
          </article>

          <article className="tb-design-card">
            <p className="tb-kicker">Relationship to the main site</p>
            <h2>Two doors, one house.</h2>
            <table className="tb-compare">
              <thead><tr><th> </th><th>start.ng</th><th>The Toybox</th></tr></thead>
              <tbody>
                <tr><td>Feeling</td><td>Calm, editorial, confident</td><td>Handmade, loud, inviting</td></tr>
                <tr><td>Palette</td><td>Cream, lime, ink</td><td>Paper, coral, butter, sky, mint</td></tr>
                <tr><td>Type</td><td>Helvetica Neue</td><td>Bookman + Nimbus Sans</td></tr>
                <tr><td>Entry point</td><td>Browse or play</td><td>Pull a handle</td></tr>
                <tr><td>Catalogue</td><td>189 games</td><td>Same 189 games</td></tr>
                <tr><td>Role</td><td>The product</td><td>A design direction</td></tr>
              </tbody>
            </table>
            <p className="tb-design-note">The clone of the real site stays faithful at <Link href="/" style={{ textDecoration: 'underline' }}>the front door</Link>. The Toybox lives at <code>/toybox</code> and never overwrites the main experience.</p>
          </article>

          <article className="tb-design-card">
            <p className="tb-kicker">If this went further</p>
            <h2>Next toys in the box.</h2>
            <ul>
              <li>A draggable sticker sheet that saves a personal shelf on the profile.</li>
              <li>A paper fortune teller for the daily tournament, folded from the five games of the day.</li>
              <li>Collectible stamps for playing every game in a category, kept in the passport.</li>
              <li>A “loud mode” toggle that turns the confetti up for birthdays and down for quiet offices.</li>
              <li>Creator pages styled as trading cards, with a pull-tab reveal for the maker’s note.</li>
            </ul>
            <div style={{ marginTop: 18 }}>
              <Link className="tb-btn" href="/toybox">Go pull the handle ↯</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
