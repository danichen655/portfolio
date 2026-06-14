import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PROFILE } from '../data'

import { IconLinkedIn, IconGitHub, IconMail } from './Icons'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: isMobile ? '100vh' : '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--s1)',
        overflow: 'hidden',
        padding: isMobile ? '80px 0 0' : '120px 0 0',
      }}
    >
      {/* Cuadrícula de fondo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'repeating-linear-gradient(0deg,transparent,transparent 79px,var(--b1) 79px,var(--b1) 80px),' +
          'repeating-linear-gradient(90deg,transparent,transparent 79px,var(--b1) 79px,var(--b1) 80px)',
        zIndex: 0,
      }} />

      {/* Brillo de acento */}
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: isMobile ? '100vw' : '70vw',
        height: '40vh',
        background: 'radial-gradient(ellipse, rgba(200,255,0,0.03) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div
        className="wrap"
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isMobile ? '0 16px' : '0 64px',
        }}
      >
        {/* Etiqueta */}
        <motion.p className="label" {...inView(0)} style={{ marginBottom: isMobile ? 24 : 32 }}>
          Conectemos
        </motion.p>

        {/* Titular grande */}
        <motion.h2
          {...inView(0.1)}
          style={{
            fontFamily: 'var(--ff-d)',
            fontSize: isMobile ? 'clamp(40px, 12vw, 80px)' : 'clamp(72px, 10vw, 168px)',
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            marginBottom: isMobile ? 40 : 64,
          }}
        >
          CONTACTAME.{' '}
          <span style={{ WebkitTextStroke: '1px var(--accent)', color: 'transparent' }}>
            AHORA.
          </span>
        </motion.h2>

        {/* Fila de contenido */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 40 : 80,
          marginBottom: isMobile ? 40 : 80,
          alignItems: 'start',
        }}>

          {/* Izquierda: descripción + email */}
          <motion.div {...inView(0.2)}>
            <p style={{
              fontSize: isMobile ? 15 : 17,
              lineHeight: 1.8,
              color: 'var(--t2)',
              maxWidth: 460,
              marginBottom: isMobile ? 32 : 48,
            }}>
              ¿Tienes un proyecto en mente? ¿Quieres explorar una colaboración?
              O simplemente di hola. Siempre estoy abierto a conversaciones
              interesantes y nuevas oportunidades.
            </p>

            {/* Email CTA */}
            <div>
              <p style={{
                fontFamily: 'var(--ff-m)',
                fontSize: 10,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--t3)',
                marginBottom: 12,
              }}>
                Correo electrónico
              </p>
              <div style={{
                display: 'flex',
                gap: isMobile ? 12 : 20,
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
              }}>
                <a
                  href={`mailto:${PROFILE.email}`}
                  style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: isMobile ? 16 : 20,
                    fontWeight: 400,
                    color: 'var(--t1)',
                    borderBottom: '1px solid var(--b2)',
                    paddingBottom: 4,
                    transition: 'color 0.2s, border-color 0.2s',
                    wordBreak: 'break-all',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.borderColor = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--t1)'
                    e.currentTarget.style.borderColor = 'var(--b2)'
                  }}
                >
                  {PROFILE.email}
                </a>
                <button
                  onClick={copyEmail}
                  style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: copied ? 'var(--accent)' : 'var(--t3)',
                    border: `1px solid ${copied ? 'var(--accent)' : 'var(--b2)'}`,
                    padding: '7px 12px',
                    transition: 'color 0.25s, border-color 0.25s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {copied ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Derecha: enlaces */}
          <motion.div {...inView(0.3)}>
            <p style={{
              fontFamily: 'var(--ff-m)',
              fontSize: 10,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--t3)',
              marginBottom: 24,
            }}>
              Encuéntrame en
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { label: 'LinkedIn', url: PROFILE.linkedin,          sub: 'Perfil profesional', Icon: IconLinkedIn },
                { label: 'GitHub',   url: PROFILE.github,            sub: 'Repositorios',        Icon: IconGitHub   },
                { label: 'Email',    url: `mailto:${PROFILE.email}`, sub: 'Mensaje directo',     Icon: IconMail     },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: isMobile ? '16px 0' : '20px 0',
                    borderBottom: '1px solid var(--b1)',
                    transition: 'border-color 0.25s',
                    gap: 12,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--b2)'
                    e.currentTarget.querySelector('.link-label').style.color = 'var(--accent)'
                    e.currentTarget.querySelector('.link-icon').style.color = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--b1)'
                    e.currentTarget.querySelector('.link-label').style.color = 'var(--t1)'
                    e.currentTarget.querySelector('.link-icon').style.color = 'var(--t3)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span
                      className="link-icon"
                      style={{ color: 'var(--t3)', transition: 'color 0.25s', flexShrink: 0 }}
                    >
                      <link.Icon />
                    </span>
                    <div>
                      <div
                        className="link-label"
                        style={{
                          fontFamily: 'var(--ff-d)',
                          fontSize: isMobile ? 18 : 22,
                          fontWeight: 500,
                          letterSpacing: '-0.01em',
                          color: 'var(--t1)',
                          transition: 'color 0.25s',
                        }}
                      >
                        {link.label}
                      </div>
                      <div style={{
                        fontFamily: 'var(--ff-m)',
                        fontSize: 9,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--t3)',
                        marginTop: 3,
                      }}>
                        {link.sub}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--ff-m)', fontSize: 16, color: 'var(--t3)', flexShrink: 0 }}>
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid var(--b1)' }}>
        <div
          className="wrap"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: isMobile ? '16px 16px' : '24px 64px',
            gap: isMobile ? 8 : 0,
            flexDirection: isMobile ? 'column' : 'row',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <span style={{
            fontFamily: 'var(--ff-m)',
            fontSize: isMobile ? 9 : 10.5,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--t3)',
          }}>
            © {new Date().getFullYear()} Hongxiang Chen
          </span>
          <span style={{
            fontFamily: 'var(--ff-m)',
            fontSize: isMobile ? 8 : 10.5,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--t3)',
          }}>
            Programador · Diseñador Visual · IA · Marca
          </span>
          <span style={{
            fontFamily: 'var(--ff-m)',
            fontSize: isMobile ? 8 : 10.5,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--t3)',
          }}>
            Hecho con React + Vite
          </span>
        </div>
      </div>
    </section>
  )
}