import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../data'

function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false)
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
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        height: isMobile ? 280 : (featured ? 520 : 380),
        background: project.gradient,
        overflow: 'hidden',
        cursor: 'none',
        border: '1px solid var(--b1)',
        transition: 'border-color 0.3s',
        borderColor: hovered ? 'var(--b3)' : 'var(--b1)',
      }}
    >
      {/* Subtle noise overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequenc[...]',
        backgroundSize: '300px 300px',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Content overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.55) 60%, rgba(8,8,8,0.1) 100%)'
          : 'linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.3) 55%, transparent 100%)',
        transition: 'background 0.45s ease',
        zIndex: 2,
      }} />

      {/* Top row: category + year */}
      <div style={{
        position: 'absolute',
        top: isMobile ? 16 : 24,
        left: isMobile ? 16 : 28,
        right: isMobile ? 16 : 28,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 3,
      }}>
        <span style={{
          fontFamily: 'var(--ff-m)',
          fontSize: 9,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
        }}>
          {project.category}
        </span>
        <span style={{
          fontFamily: 'var(--ff-m)',
          fontSize: 9,
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.3)',
        }}>
          {project.year}
        </span>
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? 16 : 28,
        left: isMobile ? 16 : 28,
        right: isMobile ? 16 : 28,
        zIndex: 3,
      }}>
        <h3 style={{
          fontFamily: 'var(--ff-d)',
          fontSize: isMobile ? 18 : (featured ? 32 : 22),
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          color: 'var(--t1)',
          marginBottom: 10,
        }}>
          {project.title}
        </h3>

        {/* Description - reveals on hover (mobile shows on tap) */}
        {!isMobile && (
          <div style={{
            overflow: 'hidden',
            maxHeight: hovered ? 120 : 0,
            opacity: hovered ? 1 : 0,
            transition: 'max-height 0.45s var(--ease), opacity 0.35s ease',
          }}>
            <p style={{
              fontSize: 13.5,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 14,
            }}>
              {project.description}
            </p>
          </div>
        )}

        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {project.tags.slice(0, isMobile ? 2 : undefined).map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--ff-m)',
              fontSize: 8.5,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              background: 'rgba(255,255,255,0.06)',
              padding: '4px 10px',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'color 0.2s',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 2,
        background: 'var(--accent)',
        width: hovered ? '100%' : '0%',
        transition: 'width 0.45s var(--ease)',
        zIndex: 3,
      }} />
    </motion.div>
  )
}

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480)
      setIsTablet(window.innerWidth > 480 && window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const featured = PROJECTS.find(p => p.featured)
  const rest     = PROJECTS.filter(p => !p.featured)

  return (
    <section id="work" style={{ padding: isMobile ? '80px 0 100px' : '120px 0 140px' }}>
      <div className="wrap">

        {/* Section header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: isMobile ? 32 : 56,
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 16 : 0,
          alignItems: isMobile ? 'flex-start' : 'flex-end',
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
              Trabajos Seleccionados
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
              Proyectos Destacados
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--ff-m)',
              fontSize: 10,
              letterSpacing: '0.1em',
              color: 'var(--t3)',
              paddingBottom: isMobile ? 0 : 8,
            }}
          >
            {PROJECTS.length} proyectos en total
          </motion.p>
        </div>

        {/* Featured project */}
        {featured && !isMobile && (
          <div style={{ marginBottom: 2 }}>
            <ProjectCard project={featured} featured />
          </div>
        )}

        {/* Grid: responsive columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
          gap: 2,
        }}>
          {rest.slice(0, isMobile ? 2 : 3).map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Second row: responsive columns */}
        {rest.length > 3 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : (isTablet ? '1fr' : '1fr 1fr'),
            gap: 2,
            marginTop: 2,
          }}>
            {rest.slice(3, isMobile ? 4 : 5).map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}