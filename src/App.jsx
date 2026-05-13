import { useState } from 'react'
import './App.css'

const featuredService = {
  title: 'Ritual Executive',
  desc: 'Corte personalizado, barba com toalhas quentes em camadas, massagem facial leve e styling com pomada importada — o pacote completo para quem exige silêncio, precisão e tempo reservado.',
  price: 'R$ 140',
  time: '~90 min',
  tag: 'Assinatura da casa',
}

const services = [
  {
    title: 'Corte sob medida',
    desc: 'Análise de rosto, máquina e tesoura. Acabamento à navalha.',
    price: 'R$ 75',
    time: '~45 min',
  },
  {
    title: 'Barba couture',
    desc: 'Desenho geométrico, vapor e hidratação com séruns frios.',
    price: 'R$ 65',
    time: '~40 min',
  },
  {
    title: 'Detalhes & grooming',
    desc: 'Sobrancelha, nariz e orelhas com acabamento discreto.',
    price: 'R$ 35',
    time: '~20 min',
  },
]

const ritualSteps = [
  {
    step: '01',
    title: 'Consultoria',
    text: 'Entendemos seu estilo de vida, rotina e o que o espelho precisa mostrar.',
  },
  {
    step: '02',
    title: 'Execução',
    text: 'Técnicas híbridas: clássico britânico e precisão contemporânea.',
  },
  {
    step: '03',
    title: 'Finalização',
    text: 'Checagem 360°, produtos selecionados e ritual de encerramento.',
  },
]

const testimonials = [
  {
    quote:
      'Atendimento impecável. Saio daqui sempre com a sensação de ter sido prioridade — não é só um corte, é um reset.',
    author: 'Marcelo V.',
    role: 'Empresário',
  },
  {
    quote:
      'O melhor fade que já fiz em SP. Ambiente silencioso, aromático, e a equipe domina textura de cabelo afro.',
    author: 'Thiago A.',
    role: 'Arquiteto',
  },
  {
    quote:
      'Levo meu pai e meu filho: três gerações na mesma cadeira. Isso resume o nível de confiança.',
    author: 'Ricardo L.',
    role: 'Advogado',
  },
]

const team = [
  { initials: 'RC', name: 'Ricardo Costa', role: 'Diretor criativo' },
  { initials: 'LM', name: 'Lucas Mendes', role: 'Barbeiro chefe' },
  { initials: 'AP', name: 'André Pereira', role: 'Especialista em fade' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <div className="site-grain" aria-hidden="true" />

      <header className="header">
        <div className="header-inner">
          <a href="#top" className="logo" onClick={closeMenu}>
            <span className="logo-mark" aria-hidden="true">
              B
            </span>
            <span className="logo-text">
              <span className="logo-title">Barba &amp; Navalha</span>
              <span className="logo-sub">House of grooming</span>
            </span>
          </a>

          <button
            type="button"
            className={`menu-btn${menuOpen ? ' is-open' : ''}`}
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
            <a href="#experiencia" onClick={closeMenu}>
              Experiência
            </a>
            <a href="#depoimentos" onClick={closeMenu}>
              Depoimentos
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
              Reservar
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker">São Paulo · desde 2018</p>
            <h1 className="hero-title" id="hero-title">
              Onde o <span className="hero-title-accent">corte</span> encontra
              o silêncio.
            </h1>
            <p className="hero-lead">
              Uma casa de grooming com poucos horários por dia — para que cada
              visita seja lenta, precisa e memorável.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
              >
                <span>Agendar pelo WhatsApp</span>
              </a>
              <a className="btn btn-ghost" href="#servicos">
                Explorar serviços
              </a>
            </div>
          </div>

          <div className="hero-aside">
            <div className="hero-frame">
              <div className="hero-frame-inner">
                <div className="hero-frame-glow" aria-hidden="true" />
                <p className="hero-frame-quote">
                  &ldquo;Menos cadeiras. Mais atenção.&rdquo;
                </p>
                <div className="hero-stat">
                  <div className="hero-stat-item">
                    <span className="hero-stat-value">4,9</span>
                    <span className="hero-stat-label">Google · 340+ avaliações</span>
                  </div>
                  <div className="hero-stat-divider" aria-hidden="true" />
                  <div className="hero-stat-item">
                    <span className="hero-stat-value">8</span>
                    <span className="hero-stat-label">Cadeiras · ambiente íntimo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="trust-strip" role="presentation">
          <ul className="trust-strip-list">
            <li>Produtos Reuzel · Uppercut · blend da casa</li>
            <li>Agenda limitada por barbeiro</li>
            <li>Poltronas hidráulicas vintage restauradas</li>
          </ul>
        </div>

        <section className="services" id="servicos" aria-labelledby="servicos-title">
          <header className="section-head section-head--split">
            <div>
              <span className="section-label">Carta de serviços</span>
              <h2 id="servicos-title">Preços &amp; tempo</h2>
            </div>
            <p className="section-head-lead">
              Valores para referência. O orçamento final confirma-se no balcão,
              após breve diagnóstico do cabelo e da barba.
            </p>
          </header>

          <div className="service-layout">
            <article className="service-card service-card--featured">
              <span className="service-tag">{featuredService.tag}</span>
              <h3>{featuredService.title}</h3>
              <p>{featuredService.desc}</p>
              <footer className="service-card-foot">
                <span className="service-price">{featuredService.price}</span>
                <span className="service-time">{featuredService.time}</span>
              </footer>
            </article>
            <div className="service-grid">
              {services.map((s) => (
                <article key={s.title} className="service-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <footer className="service-card-foot">
                    <span className="service-price">{s.price}</span>
                    <span className="service-time">{s.time}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="experience"
          id="experiencia"
          aria-labelledby="experiencia-title"
        >
          <div className="experience-inner">
            <header className="section-head section-head--center">
              <span className="section-label">O ritual</span>
              <h2 id="experiencia-title">Experiência premium</h2>
              <p className="section-head-lead section-head-lead--center">
                Três momentos que definem o padrão Barba &amp; Navalha.
              </p>
            </header>
            <ol className="experience-steps">
              {ritualSteps.map((r) => (
                <li key={r.step} className="experience-step">
                  <span className="experience-step-num">{r.step}</span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="testimonials"
          id="depoimentos"
          aria-labelledby="depoimentos-title"
        >
          <header className="section-head">
            <span className="section-label">Confiança</span>
            <h2 id="depoimentos-title">Quem senta, volta</h2>
          </header>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="testimonial-card">
                <p className="testimonial-quote">{t.quote}</p>
                <footer>
                  <cite className="testimonial-author">{t.author}</cite>
                  <span className="testimonial-role">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="about" id="sobre" aria-labelledby="sobre-title">
          <div className="about-col">
            <header className="section-head">
              <span className="section-label">A casa</span>
              <h2 id="sobre-title">Menos volume. Mais refinamento.</h2>
              <p>
                Propositalmente pequena: acústica tratada, iluminação quente e
                uma carta de bebidas não alcoólicas servida em cristal. Aqui, o
                relógio anda devagar.
              </p>
            </header>
            <div className="about-panel">
              <ul className="about-list">
                <li>Recepção com concierge para encaixe de horários</li>
                <li>Toalhas de algodão egípcio trocadas a cada serviço</li>
                <li>Área reservada para clientes com horário combinado</li>
                <li>Estacionamento conveniado a 40 m</li>
              </ul>
            </div>
          </div>
          <div className="about-col">
            <header className="section-head">
              <span className="section-label">Mestres</span>
              <h2 className="section-title-sm">Barbeiros</h2>
              <p>Formação contínua em Londres e Istambul.</p>
            </header>
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
          <header className="section-head section-head--split">
            <div>
              <span className="section-label">Localização</span>
              <h2 id="contato-title">Visite-nos</h2>
            </div>
            <p className="section-head-lead">
              Segunda a sábado. Domingo encerrado. Substitua endereço e telefone
              pelos dados reais antes de publicar.
            </p>
          </header>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Endereço</h3>
              <p>
                Rua Oscar Freire, 180 — Jardins
                <br />
                São Paulo, SP
              </p>
            </div>
            <div className="contact-card">
              <h3>Horário</h3>
              <p>
                Seg–Sex · 10h–21h
                <br />
                Sáb · 9h–19h
              </p>
            </div>
            <div className="contact-card contact-card--accent">
              <h3>Concierge</h3>
              <p>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                  +55 11 99999-9999
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="cta-final" aria-labelledby="cta-final-title">
          <div className="cta-final-inner">
            <h2 id="cta-final-title">Sua próxima cadeira</h2>
            <p>
              Envie uma mensagem com o serviço desejado e a preferência de
              horário. Respondemos em minutos em dias úteis.
            </p>
            <a
              className="btn btn-primary btn-lg"
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
            >
              Iniciar conversa no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand">Barba &amp; Navalha</span>
          <span className="footer-copy">
            © {new Date().getFullYear()} · Todos os direitos reservados.
          </span>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              Mapa
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
