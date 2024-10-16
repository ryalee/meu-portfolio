import '../styles/Contact.scss';

export default function Contact() {
  return (
    <main className='contact-container'>
      <div className="contact-header">
        <h1>Vamos conversar!</h1>
        <p>Estou disponível para novos projetos e colaborações. Entre em contato!</p>
      </div>

      <form action="https://formspree.io/f/xyzyyboz" method="POST">
        <label>
          <input type="text" name='nome' placeholder='Seu Nome'/>
        </label>

        <label>
          <input type="email" name="email" placeholder='Seu Email'/>
        </label>

        <label>
          <input name="telefone" type='tel' placeholder='Seu Telefone'/>
        </label>

        <label>
          <textarea name="message" placeholder='Sua Mensagem' rows={10} cols={30}/>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
};