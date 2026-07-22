// ===== Header.jsx =====
// Header.jsx, ROSE Lab top navigation bar
function Header({ activePage, onNav }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  // const navLinks = ['Home', 'Research', 'Publications', 'Funding', 'Team'];
  const navLinks = ['Home', 'Publications', 'Team'];

  // Brand block width = sidebar width (220) + page-layout gap (48) = 268,
  // so the first nav link aligns with the main content column underneath.
  const BRAND_WIDTH = 228;

  return (
    <header style={{ background: '#00356B', boxShadow: '0 2px 8px rgba(0,0,53,0.18)', position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Single row: ROSE brand + nav. Inner container matches page-layout max-width + padding,
          so brand left-edge aligns with sidebar names, and nav left-edge aligns with main content. */}
      <div className="header-inner" style={{
        maxWidth: 1040, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'stretch', minHeight: 76
      }}>

        {/* ROSE Lab brand, stacked, left-aligned with sidebar names */}
        <div className="header-brand" style={{
          width: BRAND_WIDTH, flexShrink: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          alignItems: 'flex-start', cursor: 'pointer',
          paddingRight: 16
          
        }} onClick={() => { onNav('Home'); setMenuOpen(false); }}>
          <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
            fontSize: 28, fontWeight: 400, color: 'white',
            letterSpacing: '0.03em', lineHeight: 1.1 }}>ROSE Lab</div>
          <div className="header-brand-sub" style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
            fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 400,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 3 }}>
            Rigorous Software Engineering
          </div>
        </div>

        {/* Desktop nav, first link's left edge aligns with main content column */}
        <nav id="desktop-nav" style={{ display: 'flex', alignItems: 'stretch', gap: 0, flex: 1 }}>
          {navLinks.map((link, i) => (
            <a key={link} href="#"
              onClick={e => { e.preventDefault(); onNav(link); }}
              style={{
                fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                fontSize: 17,
                color: activePage === link ? 'white' : 'rgba(255,255,255,0.72)',
                padding: i === 0 ? '0 22px 0 0' : '0 22px',
                display: 'flex', alignItems: 'center',
                borderBottom: activePage === link ? '2px solid rgba(255,255,255,0.9)' : '2px solid transparent',
                fontWeight: activePage === link ? 600 : 400,
                textDecoration: 'none',
                transition: 'color 0.15s'
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.color = activePage === link ? 'white' : 'rgba(255,255,255,0.72)'; }}>
              {link}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button id="mobile-menu-btn"
          className={menuOpen ? 'open' : ''}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}>
          <span style={{ background: 'white' }} />
          <span style={{ background: 'white' }} />
          <span style={{ background: 'white' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div id="mobile-nav" className={menuOpen ? 'open' : ''} role="navigation"
        aria-label="Mobile navigation"
        style={{ background: '#00244a' }}>
        {navLinks.map(link => (
          <a key={link} href="#"
            className={activePage === link ? 'active' : ''}
            onClick={e => { e.preventDefault(); onNav(link); setMenuOpen(false); }}
            style={{ color: activePage === link ? 'white' : 'rgba(255,255,255,0.8)',
              borderLeft: activePage === link ? '3px solid white' : '3px solid transparent' }}>
            {link}
          </a>
        ))}
      </div>
    </header>
  );
}

// ===== Footer.jsx =====
// Footer.jsx, Yale footer
function Footer() {
  return (
  <footer style={{
    background: '#00356B', color: 'rgba(255,255,255,0.8)',
    marginTop: 64, padding: '28px 0'
  }}>
    <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
      <div>
        <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 26, fontWeight: 300, color: 'white', letterSpacing: '0.22em', marginBottom: 4 }}>YALE UNIVERSITY</div>
        <a href="https://engineering.yale.edu/academic-study/departments/computer-science" style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'block' }}>Department of Computer Science</a>
        <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>51 Prospect Street, New Haven, CT 06511</div>
      </div>
      <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', textAlign: 'right', lineHeight: 2 }}>
        <div>© 2026 Yale University · All rights reserved</div>
        <span style={{ margin: '0 8px', opacity: 0.4 }}>·</span>
      </div>
    </div>
  </footer>
  );
}

// ===== ResearchArea.jsx =====
// ResearchArea.jsx — research theme entry: large thumbnail + text row, projects below
function ResearchArea({ title, url, thumb, projects, children }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid #e8e8e4' }}>

      {/* Image + Title/Description/LearnMore — flex row, image stretches to match text height */}
      <div className="research-entry" style={{ display: 'flex', gap: 24, alignItems: 'stretch' }}>

        {/* Thumbnail: stretches to match text column height */}
        <div className="research-thumb" style={{
          width: 240, flexShrink: 0, alignSelf: 'stretch',
          background: '#f4f3ef', border: '1px solid #e8e8e4',
          overflow: 'hidden'
        }}>
          {thumb
            ? <img src={thumb} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', display: 'block' }} />
            : <span style={{ display: 'block', padding: 12, fontFamily: 'monospace', fontSize: 19, color: '#286DC0', opacity: 0.6 }}>{title.slice(0,2).toUpperCase()}</span>
          }
        </div>

        {/* Text: title + description (clamped) + Learn more */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 20, fontWeight: 600, marginBottom: 8, lineHeight: 1.3 }}>
            <a href={url || '#'} style={{ color: '#286DC0', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.color='#00356B'; e.currentTarget.style.textDecoration='underline'; }}
              onMouseLeave={e => { e.currentTarget.style.color='#286DC0'; e.currentTarget.style.textDecoration='none'; }}>
              {title}
            </a>
          </h3>
          <div style={{
            fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
            fontSize: 17, color: '#3a3a38', lineHeight: 1.65,
            overflow: 'hidden',
            display: expanded ? 'block' : '-webkit-box',
            WebkitLineClamp: expanded ? 'unset' : 4,
            WebkitBoxOrient: 'vertical',
          }}>
            {children}
          </div>
          <button onClick={() => setExpanded(!expanded)} style={{
            fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
            fontSize: 16, color: '#286DC0', background: 'none',
            border: 'none', padding: '6px 0 0', cursor: 'pointer', display: 'block'
          }}>
            {expanded ? 'Show less' : 'Learn more \u2192'}
          </button>
        </div>
      </div>

      {/* Projects — full-width row below the image+text */}
      {projects && projects.length > 0 && (
        <div className="research-projects" style={{ marginTop: 14, paddingLeft: 264 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a9a96', marginBottom: 6 }}>Papers</div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {projects.map(p => (
              <li key={p.title} style={{ position: 'relative', paddingLeft: 14 }}>
                <span style={{ position: 'absolute', left: 0, top: 0, color: '#b0b0aa' }}>{String.fromCharCode(8250)}</span>
                <a href={p.url || '#'} style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 15, color: '#286DC0', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color='#00356B'; e.currentTarget.style.textDecoration='underline'; }}
                  onMouseLeave={e => { e.currentTarget.style.color='#286DC0'; e.currentTarget.style.textDecoration='none'; }}>
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

// Expose components for app.jsx (separate babel scripts do not share scope)
Object.assign(window, { Header, Footer, ResearchArea });
