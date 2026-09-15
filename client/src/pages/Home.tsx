import { useState } from "react";
import { ArrowUpRight, Instagram, Menu, Music2, Play, Send, X } from "lucide-react";

const socialLinks = {
  instagram: "https://www.instagram.com/frequenzamusic360/",
  tiktok: "https://www.tiktok.com/@frequenzamusic360",
};

const stories = [
  {
    category: "Suoni nuovi",
    title: "La prossima voce potrebbe essere la tua",
    text: "Scopriamo artisti, strofe e produzioni che meritano spazio. Senza filtri, senza porte chiuse.",
    image: "/assets/frequenza-card-2.jpg",
    number: "01",
  },
  {
    category: "Frequenze",
    title: "Dalla cameretta al palco",
    text: "Le storie degli emergenti italiani: percorso, visione e il brano che li sta facendo muovere.",
    image: "/assets/frequenza-card-3.jpg",
    number: "02",
  },
  {
    category: "Radar",
    title: "Ascolta prima degli altri",
    text: "Release, freestyle e nuove connessioni per restare sintonizzati sulla scena che cresce.",
    image: "/assets/frequenza-card-1.jpg",
    number: "03",
  },
];

const artists = [
  {
    name: "PRZ KAI",
    tag: "Classe 2004 · Provincia di Napoli",
    accent: "red",
    bio: "Un progetto solido e versatile: dal rap hard al conscious, fino alle sfumature trap love. La stoffa c'è e noi ci crediamo.",
    instagram: "https://www.instagram.com/luigipirozzi_21/",
    tiktok: "https://www.tiktok.com/@przkai21",
  },
  { name: "Voci vere", tag: "Storie dalla scena", accent: "red" },
  { name: "Next up", tag: "Talenti da tenere d'occhio", accent: "white" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="FrequenzaMusic360 home">
          <span className="brand-mark">FM</span>
          <span className="brand-name">FREQUENZA<span>360</span></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigazione principale">
          <a href="#storie" onClick={() => setMenuOpen(false)}>Storie</a>
          <a href="#radar" onClick={() => setMenuOpen(false)}>Radar emergenti</a>
          <a href="#chi-siamo" onClick={() => setMenuOpen(false)}>Chi siamo</a>
          <a href="#contatti" className="nav-cta" onClick={() => setMenuOpen(false)}>Proponi la tua musica <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="pulse-dot" /> Magazine indipendente · Italia</p>
              <h1>La scena<br /><em>ha una nuova</em><br />frequenza.</h1>
              <p className="hero-lede">Un punto di riferimento per chi crea, ascolta e spinge la nuova musica rap italiana.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#radar">Scopri gli emergenti <ArrowUpRight size={17} /></a>
                <a className="text-link" href="#contatti">Invia il tuo progetto <span>↗</span></a>
              </div>
            </div>
            <div className="hero-side">
              <div className="hero-logo-frame"><img src="/assets/logo-frequenza.png" alt="Logo FrequenzaMusic360" /></div>
              <div className="hero-note"><span>01</span><p>Non cerchiamo il nome più grande.<br /><strong>Cerchiamo quello più vero.</strong></p></div>
            </div>
          </div>
          <div className="hero-scroll">Scorri per entrare nel suono <span>↓</span></div>
        </section>

        <section className="ticker" aria-label="Temi del magazine">
          <div className="ticker-track"><span>ARTISTI EMERGENTI</span><b>✦</b><span>RAP ITALIANO</span><b>✦</b><span>NUOVE USCITE</span><b>✦</b><span>STORIE VERE</span><b>✦</b><span>ARTISTI EMERGENTI</span><b>✦</b><span>RAP ITALIANO</span></div>
        </section>

        <section className="social-feed section-pad" id="nuovi-contenuti">
          <div className="section-heading social-feed-heading"><div><div className="section-kicker"><span>01B</span><span>Segui la frequenza</span></div><h2>Nuovi<br /><em>contenuti.</em></h2></div><p>Post, Reel e video dalla nostra pagina. Seguici sui social per non perdere le prossime uscite.</p></div>
          <div className="social-feed-grid">
            <a className="social-feed-card instagram-card" href={socialLinks.instagram} target="_blank" rel="noreferrer"><span className="social-feed-icon"><Instagram size={23} /></span><div><span className="social-feed-label">Instagram</span><h3>@frequenzamusic360</h3><p>Scopri post, Reel, artisti e nuove storie dalla scena rap italiana.</p></div><ArrowUpRight className="social-feed-arrow" size={22} /></a>
            <a className="social-feed-card tiktok-card" href={socialLinks.tiktok} target="_blank" rel="noreferrer"><span className="social-feed-icon"><Music2 size={23} /></span><div><span className="social-feed-label">TikTok</span><h3>@frequenzamusic360</h3><p>Guarda i video, gli estratti e le frequenze che stanno girando.</p></div><ArrowUpRight className="social-feed-arrow" size={22} /></a>
          </div>
        </section>

        <section className="intro section-pad" id="chi-siamo">
          <div className="section-kicker"><span>01</span><span>La nostra missione</span></div>
          <div className="intro-grid">
            <h2>Se hai qualcosa<br /><em>da dire,</em><br />ti ascoltiamo.</h2>
            <div className="intro-body"><p>FrequenzaMusic360 nasce per dare spazio a chi sta costruendo la propria voce. Presentiamo nuovi artisti, nuova musica e tutto quello che si muove sotto la superficie della scena italiana.</p><p className="muted">Qui non servono numeri perfetti. Serve qualcosa di forte, autentico, tuo.</p><a className="arrow-link" href="#contatti">Conosci il progetto <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section className="featured section-pad" id="storie">
          <div className="section-heading"><div><div className="section-kicker"><span>02</span><span>In evidenza</span></div><h2>Dentro la<br /><em>frequenza.</em></h2></div><p>Editoriali, ascolti e punti di vista dalla parte di chi sta facendo rumore.</p></div>
          <div className="story-grid">{stories.map((story) => <article className="story-card" key={story.number}><div className="story-image"><img src={story.image} alt="" /><span className="story-number">{story.number}</span><span className="play-badge"><Play size={14} fill="currentColor" /></span></div><div className="story-meta"><span>{story.category}</span><span>↗</span></div><h3>{story.title}</h3><p>{story.text}</p></article>)}</div>
        </section>

        <section className="radar section-pad" id="radar">
          <div className="section-kicker light"><span>03</span><span>Radar Frequenza</span></div>
          <div className="radar-head"><h2>Il prossimo<br /><em>nome da sapere.</em></h2><p>Ogni settimana selezioniamo i talenti che meritano un ascolto in più. La scena è grande. Noi sappiamo dove guardare.</p></div>
          <div className="artist-list">{artists.map((artist, index) => <div className={`artist-row ${artist.accent}`} key={artist.name}><span className="artist-index">0{index + 1}</span><div><h3>{artist.name}</h3><p>{artist.tag}</p>{artist.bio && <p className="artist-bio">{artist.bio}</p>}{artist.instagram && <div className="artist-socials"><a href={artist.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={artist.tiktok} target="_blank" rel="noreferrer">TikTok ↗</a></div>}</div><ArrowUpRight className="artist-arrow" size={24} /></div>)}</div>
          <a className="button button-outline" href={socialLinks.instagram} target="_blank" rel="noreferrer">Segui il radar su Instagram <Instagram size={17} /></a>
        </section>

        <section className="contact section-pad" id="contatti">
          <div className="contact-grid"><div><div className="section-kicker"><span>04</span><span>Contatti</span></div><h2>Fatti<br /><em>sentire.</em></h2><p className="contact-copy">Hai un brano, un video o una storia da raccontare? Mandaci il tuo progetto. Se ci colpisce, lo portiamo nella nostra frequenza.</p><div className="social-row"><a href={socialLinks.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a><a href={socialLinks.tiktok} target="_blank" rel="noreferrer"><Music2 size={18} /> TikTok</a></div></div><form className="contact-form" onSubmit={handleContact}><label htmlFor="name">Il tuo nome / nome d'arte</label><input id="name" name="name" placeholder="Es. Niko South" required /><label htmlFor="message">Raccontaci il progetto</label><textarea id="message" name="message" rows={4} placeholder="Link, brano, profilo..." required /><button className="button button-primary" type="submit">{sent ? "Messaggio pronto ✓" : "Invia la proposta"} <Send size={16} /></button>{sent && <p className="form-note">Grazie. Per completare l'invio, scrivici in DM su Instagram o TikTok.</p>}</form></div>
        </section>
      </main>

      <footer className="footer section-pad"><div className="footer-brand"><span className="brand-mark">FM</span><span>FREQUENZA<span>360</span></span></div><p>La nuova musica italiana, senza rumore di fondo.</p><div className="footer-links"><a href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={socialLinks.tiktok} target="_blank" rel="noreferrer">TikTok ↗</a></div><small>© 2026 FrequenzaMusic360 · Tutti i diritti riservati</small></footer>
    </div>
  );
}

export { socialLinks };
