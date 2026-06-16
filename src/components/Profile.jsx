import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PROFILE } from '../data'
import { useLanguage } from '../LanguageContext'
import { i18n } from '../i18n'
import { IconLinkedIn, IconGitHub, IconMail, IconLocation } from './Icons'

const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Profile() {
  const [isMobile, setIsMobile] = useState(false)
  const { lang } = useLanguage()
  const t = i18n[lang].profile

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="about" style={{ padding: isMobile ? '80px 0 100px' : '120px 0 140px' }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '420px 1fr',
          gap: isMobile ? 60 : 100,
        }}>

          {/* ── Left: Avatar + Stats ────────────────────────── */}
          <div>
            <motion.div {...inView(0)}>
              {/* Avatar card */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: isMobile ? '1/1' : '4/5',
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

                {/* Foto */}
                <img
                  src="/avatar.jpg"
                  alt="Hongxiang Chen"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    zIndex: 1,
                    mixBlendMode: 'lighten',
                  }}
                />

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
                  key={s.label.es}
                  style={{
                    padding: isMobile ? '16px 12px' : '24px 20px',
                    background: 'var(--s1)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: isMobile ? 20 : 28,
                    fontWeight: 300,
                    color: 'var(--accent)',
                    lineHeight: 1,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: isMobile ? 8 : 9.5,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--t3)',
                    marginTop: 6,
                  }}>
                    {s.label[lang]}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Bio ──────────────────────────────────── */}
          <div style={{ paddingTop: isMobile ? 0 : 8 }}>
            <motion.p className="label" {...inView(0)} style={{ marginBottom: 20 }}>
              {t.label}
            </motion.p>

            <motion.h2
              {...inView(0.1)}
              style={{
                fontFamily: 'var(--ff-d)',
                fontSize: isMobile ? 'clamp(28px, 6vw, 40px)' : 'clamp(36px, 3.5vw, 56px)',
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
                fontSize: isMobile ? 15 : 17,
                lineHeight: 1.8,
                color: 'var(--t2)',
                maxWidth: 560,
                marginBottom: 48,
              }}
            >
              {PROFILE.bio[lang]}
            </motion.p>

            {/* Divider */}
            <motion.div {...inView(0.25)} style={{ height: 1, background: 'var(--b1)', marginBottom: 40 }} />

            {/* Contact details */}
            <motion.div {...inView(0.3)} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { key: t.email,    val: PROFILE.email,         href: `mailto:${PROFILE.email}`, Icon: IconMail     },
                { key: t.linkedin, val: 'hongxiang-chen',      href: PROFILE.linkedin,           Icon: IconLinkedIn },
                { key: t.github,   val: 'danichen655',         href: PROFILE.github,             Icon: IconGitHub   },
                { key: t.location, val: PROFILE.location[lang], href: null,                      Icon: IconLocation },
              ].map(item => (
                <div
                  key={item.key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '12px 0',
                    borderBottom: '1px solid var(--b1)',
                  }}
                >
                  <span style={{ color: 'var(--t3)', flexShrink: 0 }}>
                    <item.Icon />
                  </span>
                  <span style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 9.5,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--t3)',
                    minWidth: 70,
                    flexShrink: 0,
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
                        fontSize: 13,
                        color: 'var(--t1)',
                        transition: 'color 0.2s',
                        wordBreak: 'break-word',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--t1)'}
                    >
                      {item.val} ↗
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'var(--ff-m)', fontSize: 13, color: 'var(--t2)' }}>
                      {item.val}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Discipline tags */}
            <motion.div {...inView(0.4)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 48 }}>
              {PROFILE.roles[lang].map(role => (
                <span
                  key={role}
                  style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: isMobile ? 9 : 10.5,
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