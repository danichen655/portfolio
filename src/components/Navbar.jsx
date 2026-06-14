import { useEffect, useRef, useState } from 'react'
import { PROFILE } from '../data'

const LINKS = [
  { label: 'Trabajos',    href: '#work'    },
  { label: 'Perfil',      href: '#about'   },
  { label: 'Habilidades', href: '#skills'  },
  { label: 'Contacto',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  return (
    <nav ref={navRef} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: isMobile ? '0 20px' : '0 64px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'background 0.4s ease, border-color 0.4s ease',
      background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      {/* Logo */}
      <a
        href="#"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{
          fontFamily: 'var(--ff-m)',
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: '0.08em',
          color: 'var(--accent)',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        HC
      </a>

      {/* Desktop Links */}
      {!isMobile && (
        <ul style={{ display: 'flex', gap: 48, listStyle: 'none' }}>
          {LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={e => scrollTo(e, l.href)}
                style={{
                  fontFamily: 'var(--ff-m)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--t2)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--t1)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--t2)'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop CTA */}
      {!isMobile && (
        <a
          href={`mailto:${PROFILE.email}`}
          style={{
            fontFamily: 'var(--ff-m)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            border: '1px solid rgba(200,255,0,0.3)',
            padding: '9px 22px',
            transition: 'background 0.25s, color 0.25s, border-color 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.color = '#080808'
            e.currentTarget.style.borderColor = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--accent)'
            e.currentTarget.style.borderColor = 'rgba(200,255,0,0.3)'
          }}
        >
          Hablemos
        </a>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            width: 24,
            height: 24,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <div style={{ width: 24, height: 2, background: 'var(--accent)', transition: 'all 0.3s' }} />
          <div style={{ width: 18, height: 2, background: 'var(--accent)', transition: 'all 0.3s' }} />
          <div style={{ width: 24, height: 2, background: 'var(--accent)', transition: 'all 0.3s' }} />
        </button>
      )}

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'absolute',
          top: 72,
          left: 0,
          right: 0,
          background: 'rgba(8,8,8,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => scrollTo(e, l.href)}
              style={{
                fontFamily: 'var(--ff-m)',
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--t2)',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            style={{
              fontFamily: 'var(--ff-m)',
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              border: '1px solid rgba(200,255,0,0.3)',
              padding: '10px 16px',
              marginTop: 8,
              textAlign: 'center',
              transition: 'background 0.25s, color 0.25s, border-color 0.25s',
            }}
          >
            Hablemos
          </a>
        </div>
      )}
    </nav>
  )
}