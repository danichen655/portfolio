import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROFILE } from '../data'

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Contact() {
  const [copied, setCopied] = useState(false)

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
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--s1)',
        overflow: 'hidden',
        padding: '120px 0 0',
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
        width: '70vw',
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
        }}
      >
        {/* Etiqueta */}
        <motion.p className="label" {...inView(0)} style={{ marginBottom: 32 }}>
          Conectemos
        </motion.p>

        {/* Titular grande */}
        <motion.h2
          {...inView(0.1)}
          style={{
            fontFamily: 'var(--ff-d)',
            fontSize: 'clamp(72px, 10vw, 168px)',
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            marginBottom: 64,
          }}
        >
          HABLEMOS.{' '}
          <span style={{ WebkitTextStroke: '1px var(--accent)', color: 'transparent' }}>
            AHORA.
          </span>
        </motion.h2>

        {/* Fila de contenido */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          marginBottom: 80,
          alignItems: 'start',
        }}>

          {/* Izquierda: descripción + email */}
          <motion.div {...inView(0.2)}>
            <p style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: 'var(--t2)',
              maxWidth: 460,
              marginBottom: 48,
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
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <a
                  href={`mailto:${PROFILE.email}`}
                  style={{
                    fontFamily: 'var(--ff-m)',
                    fontSize: 20,
                    fontWeight: 400,
                    color: 'var(--t1)',
                    borderBottom: '1px solid var(--b2)',
                    paddingBottom: 4,
                    transition: 'color 0.2s, border-color 0.2s',
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
                    fontSize: 9.5,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: copied ? 'var(--accent)' : 'var(--t3)',
                    border: `1px solid ${copied ? 'var(--accent)' : 'var(--b2)'}`,
                    padding: '7px 14px',
                    transition: 'color 0.25s, border-color 0.25s',
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
                { label: 'LinkedIn', url: PROFILE.linkedin,           sub: 'Perfil profesional' },
                { label: 'Email',    url: `mailto:${PROFILE.email}`,  sub: 'Mensaje directo'    },
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
                    padding: '20px 0',
                    borderBottom: '1px solid var(--b1)',
                    transition: 'border-color 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--b2)'
                    e.currentTarget.querySelector('.link-label').style.color = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--b1)'
                    e.currentTarget.querySelector('.link-label').style.color = 'var(--t1)'
                  }}
                >
                  <div>
                    <div
                      className="link-label"
                      style={{
                        fontFamily: 'var(--ff-d)',
                        fontSize: 22,
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
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--t3)',
                      marginTop: 3,
                    }}>
                      {link.sub}
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--ff-m)', fontSize: 18, color: 'var(--t3)' }}>
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
            padding: '24px 64px',
          }}
        >
          <span style={{
            fontFamily: 'var(--ff-m)',
            fontSize: 10.5,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--t3)',
          }}>
            © 2024 Hongxiang Chen
          </span>
          <span style={{
            fontFamily: 'var(--ff-m)',
            fontSize: 10.5,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--t3)',
          }}>
            Programador · Diseñador Visual · IA · Marca
          </span>
          <span style={{
            fontFamily: 'var(--ff-m)',
            fontSize: 10.5,
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
