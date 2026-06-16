import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TIMELINE } from '../data'
import { useLanguage } from '../LanguageContext'
import { i18n } from '../i18n'

function highlight(text) {
  const parts = text.split(/\*\*(.+?)\*\*/)
  return parts.map((part, i) =>
    i % 2 === 1
      ? <span key={i} style={{ color: 'var(--accent)', fontWeight: 500 }}>{part}</span>
      : part
  )
}

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Timeline() {
  const [isMobile, setIsMobile] = useState(false)
  const { lang } = useLanguage()
  const t = i18n[lang].timeline

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const LINE_LEFT = isMobile ? 0 : 140

  return (
    <section id="timeline" style={{ padding: isMobile ? '80px 0 100px' : '120px 0 140px' }}>
      <div className="wrap">

        {/* Header */}
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          style={{ marginBottom: 14 }}
        >
          {t.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            fontFamily: 'var(--ff-d)',
            fontSize: isMobile ? 'clamp(28px, 6vw, 40px)' : 'clamp(36px, 3.5vw, 56px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            marginBottom: isMobile ? 48 : 72,
          }}
        >
          {t.title1}{' '}
          <span style={{ color: 'var(--accent)' }}>{t.title2}</span>
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: LINE_LEFT,
            top: 6,
            bottom: 6,
            width: 1,
            background: 'var(--b2)',
          }} />

          {[...TIMELINE].reverse().map((item, i) => (
            <motion.div
              key={i}
              {...inView(i * 0.15)}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : `${LINE_LEFT}px 1fr`,
                paddingLeft: isMobile ? 24 : 0,
                paddingBottom: i < TIMELINE.length - 1 ? (isMobile ? 48 : 64) : 0,
                position: 'relative',
              }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: LINE_LEFT - 4,
                top: 5,
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: item.type === 'work' ? 'var(--accent)' : 'transparent',
                border: item.type === 'education' ? '1px solid var(--accent)' : 'none',
                zIndex: 1,
              }} />

              {/* Year column (desktop only) */}
              {!isMobile && (
                <div style={{
                  fontFamily: 'var(--ff-m)',
                  fontSize: 12,
                  letterSpacing: '0.08em',
                  color: 'var(--t2)',
                  paddingTop: 3,
                  paddingRight: 36,
                  textAlign: 'right',
                  lineHeight: 1.5,
                }}>
                  {item.year}
                </div>
              )}

              {/* Content */}
              <div style={{ paddingLeft: isMobile ? 0 : 40 }}>
                {/* Year (mobile) */}
                {isMobile && (
                  <div style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    color: 'var(--t2)',
                    marginBottom: 10,
                  }}>
                    {item.year}
                  </div>
                )}

                {/* Type badge + location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: item.type === 'work' ? 'var(--accent)' : 'var(--t2)',
                    border: `1px solid ${item.type === 'work' ? 'rgba(200,255,0,0.35)' : 'var(--b2)'}`,
                    padding: '4px 10px',
                  }}>
                    {item.type === 'work' ? t.work : t.education}
                  </span>
                  <span style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--t2)',
                  }}>
                    {item.location[lang]}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--ff-d)',
                  fontSize: isMobile ? 20 : 24,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--t1)',
                  marginBottom: 4,
                }}>
                  {item.title[lang]}
                </h3>

                {/* Org + notas */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: item.description ? 14 : 0 }}>
                  <p style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: isMobile ? 11 : 12,
                    letterSpacing: '0.08em',
                    color: 'var(--t2)',
                    margin: 0,
                  }}>
                    {item.org}
                  </p>
                  {item.grade && (
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span style={{
                        fontFamily: 'var(--ff-m)',
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        border: '1px solid rgba(200,255,0,0.35)',
                        padding: '3px 8px',
                      }}>
                        {t.grade} {item.grade.value}
                      </span>
                      <span style={{
                        fontFamily: 'var(--ff-m)',
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--t2)',
                        border: '1px solid var(--b2)',
                        padding: '3px 8px',
                      }}>
                        {t.tfm} {item.grade.tfm}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {(() => {
                  const desc = item.description ? item.description[lang] : null
                  if (!desc) return null
                  if (Array.isArray(desc)) {
                    return (
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 560 }}>
                        {desc.map((point, j) => (
                          <li key={j} style={{ display: 'flex', gap: 10, fontSize: isMobile ? 13 : 14, lineHeight: 1.7, color: 'var(--t3)' }}>
                            <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>–</span>
                            <span>{highlight(point)}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p style={{ fontSize: isMobile ? 13 : 14, lineHeight: 1.75, color: 'var(--t3)', maxWidth: 560 }}>
                      {desc}
                    </p>
                  )
                })()}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
