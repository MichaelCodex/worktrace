import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

export default function App() {
  return (
    <div className="page">
      <div className="pixel-grid" />
      <div className="glow-orb orb-left" />
      <div className="glow-orb orb-right" />

      <motion.header
        className="nav"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="brand">
          <img src="/logo.svg" alt="Worktrace" className="brand-logo" />
          <span className="brand-name">WORKTRACE</span>
        </div>
        <a href="#waitlist" className="nav-cta">Join waitlist</a>
      </motion.header>

      <main className="hero-wrap">
        <motion.section
          className="hero-card"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="hero-copy">
            <motion.p className="eyebrow" variants={item}>MEMORY FOR AI-ASSISTED CODING</motion.p>
            <motion.h1 variants={item}>Turn messy coding sessions into usable memory.</motion.h1>
            <motion.p className="subcopy" variants={item}>
              Worktrace helps you remember what changed, where you got stuck, and what to do next —
              so every session becomes something you can continue, share, and learn from.
            </motion.p>

            <motion.div className="hero-points" variants={item}>
              <div>Session summaries that feel useful</div>
              <div>Continuity for your next session</div>
              <div>Proof of work you can actually share</div>
            </motion.div>

            <motion.form id="waitlist" className="waitlist-card" variants={item} onSubmit={(e) => e.preventDefault()}>
              <label className="waitlist-label">Join the waitlist</label>
              <div className="waitlist-row">
                <input type="email" placeholder="Enter your email" className="input" />
                <button type="submit" className="button">Get access</button>
              </div>
              <p className="waitlist-note">For builders, indie hackers, and AI-assisted dev teams.</p>
            </motion.form>
          </div>

          <motion.div className="hero-panel" variants={item}>
            <motion.div
              className="terminal-shell"
              initial={{ opacity: 0, y: 26, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            >
              <div className="terminal-card">
                <div className="terminal-head">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="terminal-body">
                  <div className="terminal-chip">BUILD TRACEABLE WORK</div>
                  <div className="terminal-command">&gt; worktrace.session()</div>
                  <div className="terminal-block muted">
                    <div>mode: deep focus</div>
                    <div>files changed: 7</div>
                    <div>stuck on: auth callback + state sync</div>
                    <div>next: fix onboarding copy + test redirect</div>
                  </div>
                  <div className="divider" />
                  <div className="terminal-block">
                    <div className="terminal-strong">Most coding work disappears.</div>
                    <div className="terminal-strong">Worktrace keeps the memory.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="feature-grid"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <article className="feature-card">
            <h3>Session memory</h3>
            <p>See what changed, where you got stuck, and how to resume faster.</p>
          </article>
          <article className="feature-card">
            <h3>Continuity</h3>
            <p>Jump into your next coding session with context already prepared.</p>
          </article>
          <article className="feature-card">
            <h3>Proof of work</h3>
            <p>Turn invisible progress into something you can share and build on.</p>
          </article>
        </motion.section>
      </main>
    </div>
  )
}
