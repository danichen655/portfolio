import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TIMELINE } from '../data'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Timeline() {
  const [isMobile, setIsMobile] = useState(false)

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
          Trayectoria
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
          Experiencia &{' '}
          <span style={{ color: 'var(--accent)' }}>Formación</span>
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
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  color: 'var(--t3)',
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
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    color: 'var(--t3)',
                    marginBottom: 10,
                  }}>
                    {item.year}
                  </div>
                )}

                {/* Type badge + location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 8.5,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: item.type === 'work' ? 'var(--accent)' : 'var(--t2)',
                    border: `1px solid ${item.type === 'work' ? 'rgba(200,255,0,0.35)' : 'var(--b2)'}`,
                    padding: '3px 8px',
                  }}>
                    {item.type === 'work' ? 'Trabajo' : 'Formación'}
                  </span>
                  <span style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 9,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--t3)',
                  }}>
                    {item.location}
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
                  {item.title}
                </h3>

                {/* Org */}
                <p style={{
                  fontFamily: 'var(--ff-m)',
                  fontSize: isMobile ? 11 : 12,
                  letterSpacing: '0.08em',
                  color: 'var(--t2)',
                  marginBottom: item.description ? 12 : 0,
                }}>
                  {item.org}
                </p>

                {/* Description */}
                {item.description && (
                  <p style={{
                    fontSize: isMobile ? 13 : 14,
                    lineHeight: 1.75,
                    color: 'var(--t3)',
                    maxWidth: 560,
                  }}>
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
