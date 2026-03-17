export default function App() {
  return (
    <div className="page">
      <div className="pixel-grid" />
      <div className="glow-orb orb-left" />
      <div className="glow-orb orb-right" />

      <header className="nav">
        <div className="brand">
          <img src="/icon.png" alt="Worktrace" className="brand-logo" />
          <span className="brand-name">WORKTRACE</span>
        </div>
        <a href="#waitlist" className="nav-cta">Join waitlist</a>
      </header>

      <main className="hero-wrap">
        <section className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">MEMORY FOR AI-ASSISTED CODING</p>
            <h1>Stop losing coding context the moment a session ends.</h1>
            <p className="subcopy">
              Worktrace tracks what changed, where you got stuck, and what to do next —
              so every coding session becomes usable memory instead of disappearing work.
            </p>

            <div className="hero-points">
              <div>• session summaries that feel useful</div>
              <div>• continuity for your next coding session</div>
              <div>• proof of work you can actually share</div>
            </div>

            <form id="waitlist" className="waitlist-card" onSubmit={(e) => e.preventDefault()}>
              <label className="waitlist-label">Get early access</label>
              <div className="waitlist-row">
                <input type="email" placeholder="Enter your email" className="input" />
                <button type="submit" className="button">Join</button>
              </div>
              <p className="waitlist-note">For builders, indie hackers, and AI-assisted dev teams.</p>
            </form>
          </div>

          <div className="hero-panel">
            <div className="terminal-card">
              <div className="terminal-head">
                <span />
                <span />
                <span />
              </div>
              <div className="terminal-body">
                <p>&gt; Worktrace session summary</p>
                <p className="muted">Mode: deep focus</p>
                <p className="muted">Files changed: 7</p>
                <p className="muted">Friction: auth callback + state sync</p>
                <p className="muted">Next: fix onboarding copy + test redirect</p>
                <div className="divider" />
                <p>Most coding work disappears.</p>
                <p>Worktrace turns it into memory.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-grid">
          <article className="feature-card">
            <h3>Session memory</h3>
            <p>Know what changed, where you got stuck, and how to resume faster.</p>
          </article>
          <article className="feature-card">
            <h3>Continuity</h3>
            <p>Start the next session with the right context instead of reconstructing it manually.</p>
          </article>
          <article className="feature-card">
            <h3>Proof of work</h3>
            <p>Turn invisible progress into something you can share, review, and build on.</p>
          </article>
        </section>
      </main>
    </div>
  )
}
