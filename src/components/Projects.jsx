import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../data'

function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false)

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
        height: featured ? 520 : 380,
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
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'300\' height=\'300\' filter=\'url(%23n)\' opacity=\'0.08\'/%3E%3C/svg%3E")',
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
        top: 24,
        left: 28,
        right: 28,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 3,
      }}>
        <span style={{
          fontFamily: 'var(--ff-m)',
          fontSize: 10,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
        }}>
          {project.category}
        </span>
        <span style={{
          fontFamily: 'var(--ff-m)',
          fontSize: 10,
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.3)',
        }}>
          {project.year}
        </span>
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute',
        bottom: 28,
        left: 28,
        right: 28,
        zIndex: 3,
      }}>
        <h3 style={{
          fontFamily: 'var(--ff-d)',
          fontSize: featured ? 32 : 22,
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          color: 'var(--t1)',
          marginBottom: 10,
        }}>
          {project.title}
        </h3>

        {/* Description - reveals on hover */}
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

        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--ff-m)',
              fontSize: 9.5,
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
  const featured = PROJECTS.find(p => p.featured)
  const rest     = PROJECTS.filter(p => !p.featured)

  return (
    <section id="work" style={{ padding: '120px 0 140px' }}>
      <div className="wrap">

        {/* Section header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 56,
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
                fontSize: 'clamp(32px, 3.5vw, 56px)',
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
              fontSize: 11,
              letterSpacing: '0.1em',
              color: 'var(--t3)',
              paddingBottom: 8,
            }}
          >
            {PROJECTS.length} proyectos en total
          </motion.p>
        </div>

        {/* Featured project */}
        {featured && (
          <div style={{ marginBottom: 2 }}>
            <ProjectCard project={featured} featured />
          </div>
        )}

        {/* Grid: 3 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {rest.slice(0, 3).map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Second row: 2 columns */}
        {rest.length > 3 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 2,
            marginTop: 2,
          }}>
            {rest.slice(3, 5).map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
