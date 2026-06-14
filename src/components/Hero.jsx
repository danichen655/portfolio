import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PROFILE } from '../data'
import Particles from './Particles'

const titleLine = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.12 },
  }),
}

const fadeIn = (delay = 0) => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay } },
})

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: isMobile ? 600 : 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* WebGL Particles background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Particles
          particleColors={['#C8FF00', '#C8FF00', '#C8FF00', '#ffffff', '#aaffaa']}
          particleCount={isMobile ? 60 : 180}
          particleSpread={12}
          speed={0.06}
          particleBaseSize={70}
          sizeRandomness={1.2}
          moveParticlesOnHover={!isMobile}
          particleHoverFactor={0.6}
          alphaParticles={true}
          cameraDistance={22}
          disableRotation={false}
          pixelRatio={window.devicePixelRatio || 1}
        />
      </div>

      {/* Dot grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: isMobile ? '32px 32px' : '44px 44px',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '30%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(200,255,0,0.03) 0%, transparent 65%)',
        zIndex: 1,
        pointerEvents: 'none',
        animation: 'blobDrift 24s ease-in-out infinite',
      }} />

      {/*
        VIDEO DE FONDO — añade tu archivo de vídeo en /public/hero-bg.mp4 para activarlo.
        Descomenta el bloque de abajo:

        <video
          autoPlay muted loop playsInline
          style={{ position:'absolute', inset:0, width:'100%', height:'100%',
                   objectFit:'cover', zIndex:1, opacity:0.35 }}
          src="/hero-bg.mp4"
        />
      */}

      {/* Gradient inferior para legibilidad del texto */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(8,8,8,0) 20%, rgba(8,8,8,0.65) 65%, rgba(8,8,8,0.97) 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* Contenido */}
      <div
        className="wrap"
        style={{
          position: 'relative',
          zIndex: 3,
          paddingBottom: isMobile ? 40 : 72,
          paddingTop: isMobile ? 40 : 72,
        }}
      >
        {/* Etiqueta de año */}
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            marginBottom: isMobile ? 20 : 32,
            color: 'var(--t3)',
            letterSpacing: '0.2em',
            fontSize: isMobile ? '8px' : '10.5px',
          }}
        >
          Portafolio · 2026
        </motion.p>

        {/* Nombre en display grande */}
        <div style={{ overflow: 'hidden' }}>
          {['HONGXIANG', 'CHEN'].map((word, i) => (
            <motion.div
              key={word}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={titleLine}
              style={{
                display: 'block',
                fontFamily: 'var(--ff-d)',
                fontWeight: 700,
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                fontSize: isMobile ? 'clamp(48px, 14vw, 80px)' : 'clamp(80px, 11.5vw, 196px)',
                color: i === 0 ? 'var(--accent)' : 'var(--t1)',
                userSelect: 'none',
              }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        {/* Roles */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn(0.7)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? 16 : 32,
            marginTop: isMobile ? 20 : 32,
            flexWrap: 'wrap',
          }}
        >
          <div style={{
            width: 1,
            height: isMobile ? 36 : 48,
            background: 'var(--b2)',
          }} />
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {PROFILE.roles.map((role) => (
              <span
                key={role}
                style={{
                  fontFamily: 'var(--ff-m)',
                  fontSize: isMobile ? 9 : 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--t2)',
                  border: '1px solid var(--b2)',
                  padding: isMobile ? '4px 10px' : '6px 14px',
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          onClick={() => scrollTo('#about')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: isMobile ? 32 : 56,
            fontFamily: 'var(--ff-m)',
            fontSize: isMobile ? 9 : 10.5,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--t3)',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--t2)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--t3)'}
        >
          <span style={{ width: 40, height: 1, background: 'currentColor', display: 'inline-block' }} />
          Desplázate para explorar
        </motion.button>
      </div>

      <style>{`
        @keyframes blobDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-3%, 4%) scale(1.06); }
          66%       { transform: translate(4%, -3%) scale(0.95); }
        }
      `}</style>
    </section>
  )
}