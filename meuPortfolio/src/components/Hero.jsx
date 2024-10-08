import '../styles/Hero.scss';

export default function Hero() {
  return (
    <main className='hero'>
      <div className="hero-top">
        <h1>Olá, sou um Desenvolvedor Web & Mobile</h1>

        <a href="../assets/RyanCurriculo.pdf" download={true}>
          <button>Meu Currículo <i className="fa-solid fa-download"></i></button>
        </a>
      </div>

      <div className="hero-bot">
        <a href="https://wa.me/5574999944759" target='_blank'>
          <button>Contato</button>
        </a>

        <p>Ajudo você com códigos modernos e visuais criativos para alavancar sua marca e criar sua presença online</p>
      </div>
    </main>
  );
}