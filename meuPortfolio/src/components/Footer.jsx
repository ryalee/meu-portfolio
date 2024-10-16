import '../styles/Footer.scss';
import Header from './Header';

export default function Footer() {
  return (
    <footer>
      <div className="main">
        <div className="footer-logo">
          <Header/>
        </div>

        <div className="socials">
          <a href="https://www.linkedin.com/in/ryan-alecrim/"><i className="fa-brands fa-linkedin-in"></i></a>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>

      <p className='footer-text'>Ryan Alecrim Sodre | Desenvolvedor &copy;</p>
    </footer>
  );
}