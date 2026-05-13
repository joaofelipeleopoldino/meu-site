import { useState } from 'react'
import './App.css'

const services = [
  {
    title: 'Corte clássico',
    desc: 'Máquina, tesoura e acabamento com navalha quente.',
    price: 'R$ 55',
    time: '~40 min',
  },
  {
    title: 'Barba completa',
    desc: 'Desenho, toalha quente e hidratação pós-barba.',
    price: 'R$ 45',
    time: '~35 min',
  },
  {
    title: 'Combo premium',
    desc: 'Corte + barba com ritual de finalização.',
    price: 'R$ 90',
    time: '~75 min',
  },
  {
    title: 'Sobrancelha & detalhes',
    desc: 'Harmonização do olhar e pelos nasais.',
    price: 'R$ 25',
    time: '~15 min',
  },
]

const team = [
  { initials: 'RC', name: 'Ricardo Costa', role: 'Master barber' },
  { initials: 'LM', name: 'Lucas Mendes', role: 'Barbeiro sênior' },
  { initials: 'AP', name: 'André Pereira', role: 'Especialista em fade' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className="header">
        <a href="#top" className="logo" onClick={closeMenu}>
          <span className="logo-mark" aria-hidden="true">
            B
          </span>
          <span className="logo-text">
            <span className="logo-title">Barba &amp; Navalha</span>
            <span className="logo-sub">Desde 2018</span>
          </span>
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
        </button>

        <nav
          id="site-nav"
          className={`nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Principal"
        >
          <a href="#top" onClick={closeMenu}>
            Início
          </a>
          <a href="#servicos" onClick={closeMenu}>
            Serviços
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>
          <a
            className="nav-cta"
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Agendar no WhatsApp
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <span className="hero-badge">Vagas hoje</span>
            <h1 id="hero-title">
              Estilo <em>autêntico</em>,<br />
              atendimento de primeira.
            </h1>
            <p className="hero-lead">
              Ambiente descontraído, produtos de qualidade e barbeiros que
              entendem de proporção, textura e tendência — sem pressa.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
              >
                Reservar horário
              </a>
              <a className="btn btn-ghost" href="#servicos">
                Ver serviços
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-deco" />
            <div className="hero-visual-inner">
              <div className="hero-stat">
                <div>
                  <strong>4,9</strong>
                  <span>Google · 320+ avaliações</span>
                </div>
                <div>
                  <strong>12</strong>
                  <span>Anos de experiência</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="servicos" aria-labelledby="servicos-title">
          <div className="section-head">
            <span className="section-label">Menu</span>
            <h2 id="servicos-title">Serviços</h2>
            <p>
              Preços transparentes. Todos os cortes incluem consultoria rápida
              para encontrar o melhor para o seu rosto.
            </p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <article key={s.title} className="service-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-price">{s.price}</div>
                <div className="service-time">{s.time}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="sobre" aria-labelledby="sobre-title">
          <div>
            <div className="section-head">
              <span className="section-label">A casa</span>
              <h2 id="sobre-title">Mais que uma barbearia</h2>
              <p>
                Unimos tradição de barbearia clássica com técnicas atuais. Aqui
                você conversa, relaxa e sai com confiança — do fade ao
                executive contour.
              </p>
            </div>
            <div className="about-panel">
              <strong>O que você encontra aqui</strong>
              <ul>
                <li>Bebidas inclusas enquanto espera ou durante o serviço</li>
                <li>Produtos importados e linha própria de finalização</li>
                <li>Poltronas reclináveis e som ambiente curado</li>
                <li>Estacionamento conveniado a 50 m (pergunte na recepção)</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="section-head">
              <span className="section-label">Time</span>
              <h2 className="section-title-sm">Barbeiros</h2>
              <p>Profissionais certificados e em constante atualização.</p>
            </div>
            <div className="team-grid">
              {team.map((m) => (
                <div key={m.name} className="team-card">
                  <div className="team-avatar" aria-hidden="true">
                    {m.initials}
                  </div>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contato-title">
          <div className="section-head">
            <span className="section-label">Visite</span>
            <h2 id="contato-title">Contato &amp; horário</h2>
            <p>
              Segunda a sábado. Domingo fechado. Troque o número e o endereço
              pelos seus dados reais quando publicar o site.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Endereço</h3>
              <p>
                Rua das Flores, 120 — Sala 3
                <br />
                Centro — São Paulo, SP
              </p>
            </div>
            <div className="contact-card">
              <h3>Horário</h3>
              <p>
                Seg–Sex: 9h–20h
                <br />
                Sáb: 9h–18h
              </p>
            </div>
            <div className="contact-card">
              <h3>WhatsApp</h3>
              <p>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                  (11) 99999-9999
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Barba &amp; Navalha. Todos os direitos reservados.</span>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
      </footer>
    </div>
  )
}
