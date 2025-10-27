export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="logo">
              <span className="logo-icon">🎵</span>
              RecordLab Studio
            </a>
            <ul className="nav-links">
              <li><a href="#servizi">Servizi</a></li>
              <li><a href="#equipment">Equipment</a></li>
              <li><a href="#prezzi">Prezzi</a></li>
              <li><a href="#contatti">Contatti</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Studio di Registrazione Professionale</h1>
          <p>Porta la tua musica al livello successivo con il nostro studio di registrazione all'avanguardia</p>
          <a href="#contatti" className="cta-button">Prenota Ora</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="services">
        <div className="container">
          <h2 className="section-title">I Nostri Servizi</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎤</div>
              <h3>Registrazione</h3>
              <p>Registrazione multi-traccia con equipaggiamento professionale di altissima qualità per catturare ogni dettaglio della tua performance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎚️</div>
              <h3>Mixing</h3>
              <p>Bilanciamento e mixaggio professionale per dare vita alla tua musica con un suono pulito e bilanciato.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Mastering</h3>
              <p>Finalizzazione e mastering di livello mondiale per preparare la tua musica alla distribuzione su tutte le piattaforme.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎸</div>
              <h3>Produzione</h3>
              <p>Produzione musicale completa, dall'arrangiamento alla realizzazione finale del tuo progetto artistico.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎹</div>
              <h3>Beat Making</h3>
              <p>Creazione di beat personalizzati per hip-hop, trap, pop e qualsiasi genere musicale tu desideri.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎼</div>
              <h3>Arrangiamento</h3>
              <p>Arrangiamento e orchestrazione professionale per arricchire le tue composizioni con nuove sonorità.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="equipment">
        <div className="container">
          <h2 className="section-title">Il Nostro Equipment</h2>
          <div className="equipment-list">
            <div className="equipment-item">
              <h4>DAW</h4>
              <p>Pro Tools HD, Logic Pro X, Ableton Live</p>
            </div>
            <div className="equipment-item">
              <h4>Microfoni</h4>
              <p>Neumann U87, Shure SM7B, AKG C414</p>
            </div>
            <div className="equipment-item">
              <h4>Preamp</h4>
              <p>Universal Audio Apollo, Neve 1073, SSL</p>
            </div>
            <div className="equipment-item">
              <h4>Monitor</h4>
              <p>Genelec 8351, Yamaha HS8, Focal Solo6</p>
            </div>
            <div className="equipment-item">
              <h4>Outboard</h4>
              <p>Compressori 1176, LA-2A, Distressor</p>
            </div>
            <div className="equipment-item">
              <h4>Instruments</h4>
              <p>Piano Yamaha, Synth Moog, Chitarre Fender</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prezzi" className="pricing">
        <div className="container">
          <h2 className="section-title">Listino Prezzi</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Base</h3>
              <div className="price">€40</div>
              <div className="price-period">per ora</div>
              <ul className="features">
                <li>Registrazione multi-traccia</li>
                <li>Ingegnere del suono</li>
                <li>Sala di registrazione</li>
                <li>Monitor studio</li>
              </ul>
              <a href="#contatti" className="book-button">Prenota</a>
            </div>
            <div className="pricing-card featured">
              <h3>Professional</h3>
              <div className="price">€300</div>
              <div className="price-period">giornata (8 ore)</div>
              <ul className="features">
                <li>Tutto del piano Base</li>
                <li>Mixing incluso</li>
                <li>Produttore musicale</li>
                <li>Strumentazione premium</li>
                <li>File stems inclusi</li>
              </ul>
              <a href="#contatti" className="book-button">Prenota</a>
            </div>
            <div className="pricing-card">
              <h3>Complete</h3>
              <div className="price">€800</div>
              <div className="price-period">progetto completo</div>
              <ul className="features">
                <li>Tutto del piano Professional</li>
                <li>Mastering professionale</li>
                <li>Revisioni illimitate</li>
                <li>Distribuzione digitale</li>
                <li>Artwork copertina</li>
              </ul>
              <a href="#contatti" className="book-button">Prenota</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="contact">
        <div className="container">
          <h2 className="section-title">Contattaci</h2>
          <div className="contact-content">
            <p style={{color: '#ccc', fontSize: '18px', marginBottom: '30px'}}>
              Siamo pronti ad aiutarti a realizzare il tuo progetto musicale. Contattaci per una consulenza gratuita!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>📍 Indirizzo</strong>
                <p>Via della Musica 123, 20100 Milano, Italia</p>
              </div>
              <div className="contact-item">
                <strong>📞 Telefono</strong>
                <a href="tel:+390212345678">+39 02 1234 5678</a>
              </div>
              <div className="contact-item">
                <strong>📧 Email</strong>
                <a href="mailto:info@recordlabstudio.it">info@recordlabstudio.it</a>
              </div>
              <div className="contact-item">
                <strong>🕐 Orari</strong>
                <p>Lun - Sab: 10:00 - 22:00<br/>Domenica: Su prenotazione</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 RecordLab Studio. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </>
  )
}
