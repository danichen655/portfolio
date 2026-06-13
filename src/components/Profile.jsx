import { motion } from 'framer-motion'
import { PROFILE } from '../data'

const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Profile() {
  return (
    <section id="about" style={{ padding: '120px 0 140px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 100 }}>

          {/* ── Left: Avatar + Stats ────────────────────────── */}
          <div>
            <motion.div {...inView(0)}>
              {/* Avatar card */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/5',
                background: 'var(--s2)',
                border: '1px solid var(--b1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                {/* Grid lines inside avatar */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'repeating-linear-gradient(0deg,transparent,transparent 39px,var(--b1) 39px,var(--b1) 40px),' +
                    'repeating-linear-gradient(90deg,transparent,transparent 39px,var(--b1) 39px,var(--b1) 40px)',
                  opacity: 0.5,
                }} />

                {/* Corner accents */}
                {['top-left','top-right','bottom-left','bottom-right'].map(pos => {
                  const isRight  = pos.includes('right')
                  const isBottom = pos.includes('bottom')
                  return (
                    <div key={pos} style={{
                      position: 'absolute',
                      [isBottom ? 'bottom' : 'top']:  16,
                      [isRight  ? 'right'  : 'left']: 16,
                      width: 20,
                      height: 20,
                      borderTop:    !isBottom ? '1px solid var(--accent)' : 'none',
                      borderBottom:  isBottom ? '1px solid var(--accent)' : 'none',
                      borderLeft:   !isRight  ? '1px solid var(--accent)' : 'none',
                      borderRight:   isRight  ? '1px solid var(--accent)' : 'none',
                    }} />
                  )
                })}

                {/* Monogram */}
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--ff-d)',
                    fontSize: 96,
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.06em',
                    color: 'var(--t1)',
                    opacity: 0.08,
                    userSelect: 'none',
                  }}>
                    HC
                  </div>
                  <p style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--t3)',
                    marginTop: 12,
                  }}>
                    — Foto de Perfil —
                  </p>
                  <p style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 9,
                    letterSpacing: '0.14em',
                    color: 'var(--t3)',
                    marginTop: 4,
                    opacity: 0.6,
                  }}>
                    Reemplaza con tu imagen
                  </p>
                </div>

                {/* Accent line bottom */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: 'var(--accent)',
                }} />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...inView(0.15)}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 1,
                marginTop: 1,
                background: 'var(--b1)',
              }}
            >
              {PROFILE.stats.map(s => (
                <div
                  key={s.label}
                  style={{
                    padding: '24px 20px',
                    background: 'var(--s1)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 28,
                    fontWeight: 300,
                    color: 'var(--accent)',
                    lineHeight: 1,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 9.5,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--t3)',
                    marginTop: 6,
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Bio ──────────────────────────────────── */}
          <div style={{ paddingTop: 8 }}>
            <motion.p className="label" {...inView(0)} style={{ marginBottom: 20 }}>
              Sobre mí
            </motion.p>

            <motion.h2
              {...inView(0.1)}
              style={{
                fontFamily: 'var(--ff-d)',
                fontSize: 'clamp(36px, 3.5vw, 56px)',
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: 32,
              }}
            >
              {PROFILE.name.first}{' '}
              <span style={{ color: 'var(--accent)' }}>{PROFILE.name.last}</span>
            </motion.h2>

            <motion.p
              {...inView(0.2)}
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--t2)',
                maxWidth: 560,
                marginBottom: 48,
              }}
            >
              {PROFILE.bio}
            </motion.p>

            {/* Divider */}
            <motion.div {...inView(0.25)} style={{ height: 1, background: 'var(--b1)', marginBottom: 40 }} />

            {/* Contact details */}
            <motion.div {...inView(0.3)} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { key: 'Email',     val: PROFILE.email,    href: `mailto:${PROFILE.email}` },
                { key: 'LinkedIn',  val: 'hongxiang-chen', href: PROFILE.linkedin },
                { key: 'Ubicación', val: PROFILE.location, href: null },
              ].map(item => (
                <div key={item.key} style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
                  <span style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 9.5,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--t3)',
                    minWidth: 80,
                  }}>
                    {item.key}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{
                        fontFamily: 'var(--ff-m)',
                        fontSize: 14,
                        color: 'var(--t1)',
                        transition: 'color 0.2s',
                        borderBottom: '1px solid var(--b2)',
                        paddingBottom: 1,
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--t1)'}
                    >
                      {item.val} ↗
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'var(--ff-m)', fontSize: 14, color: 'var(--t2)' }}>
                      {item.val}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Discipline tags */}
            <motion.div {...inView(0.4)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 48 }}>
              {PROFILE.roles.map(role => (
                <span
                  key={role}
                  style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 10.5,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--t2)',
                    background: 'var(--s2)',
                    border: '1px solid var(--b2)',
                    padding: '8px 16px',
                  }}
                >
                  {role}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
