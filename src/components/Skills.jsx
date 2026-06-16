import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../data'
import { useLanguage } from '../LanguageContext'
import { i18n } from '../i18n'

function SkillCard({ skill, index, lang }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      style={{
        background: 'var(--s1)',
        border: '1px solid var(--b1)',
        padding: isMobile ? '28px 20px 32px' : '40px 36px 44px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--b2)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--b1)'}
    >
      {/* Background number */}
      <div style={{
        position: 'absolute',
        top: 20,
        right: 28,
        fontFamily: 'var(--ff-m)',
        fontSize: isMobile ? 48 : 80,
        fontWeight: 300,
        color: 'var(--t1)',
        opacity: 0.025,
        lineHeight: 1,
        userSelect: 'none',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div style={{
        fontFamily: 'var(--ff-m)',
        fontSize: isMobile ? 18 : 22,
        color: 'var(--accent)',
        marginBottom: 20,
        lineHeight: 1,
      }}>
        {skill.icon}
      </div>

      {/* Category */}
      <h3 style={{
        fontFamily: 'var(--ff-d)',
        fontSize: isMobile ? 18 : 22,
        fontWeight: 600,
        letterSpacing: '-0.02em',
        marginBottom: 20,
        color: 'var(--t1)',
      }}>
        {skill.category[lang]}
      </h3>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--b1)', marginBottom: 20 }} />

      {/* Skill list */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {skill.items[lang].map((item, i) => (
          <li
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: 'var(--ff-b)',
              fontSize: isMobile ? 13 : 14,
              color: 'var(--t2)',
              lineHeight: 1,
            }}
          >
            <span style={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: i < 3 ? 'var(--accent)' : 'var(--t3)',
              flexShrink: 0,
              opacity: i < 3 ? 1 : 0.5,
            }} />
            {item}
          </li>
        ))}
      </ul>

      {/* Accent corner */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 40,
        height: 2,
        background: 'var(--accent)',
        opacity: 0.5,
      }} />
    </motion.div>
  )
}

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const { lang } = useLanguage()
  const t = i18n[lang].skills

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480)
      setIsTablet(window.innerWidth > 480 && window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="skills" style={{ padding: isMobile ? '80px 0 100px' : '120px 0 140px' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 32 : 48,
          alignItems: isMobile ? 'start' : 'end',
          marginBottom: isMobile ? 40 : 64,
        }}>
          <div>
            <motion.p
              className="label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 14 }}
            >
              {t.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{
                fontFamily: 'var(--ff-d)',
                fontSize: isMobile ? 'clamp(24px, 7vw, 36px)' : 'clamp(32px, 3.5vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              {t.title1}{' '}
              <span style={{ color: 'var(--accent)' }}>{t.title2}</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              fontSize: isMobile ? 14 : 15,
              lineHeight: 1.75,
              color: 'var(--t2)',
              maxWidth: 480,
            }}
          >
            {t.description}
          </motion.p>
        </div>

        {/* Skills grid - responsive columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'),
          gap: 2,
        }}>
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.category.es} skill={skill} index={i} lang={lang} />
          ))}
        </div>

      </div>
    </section>
  )
}