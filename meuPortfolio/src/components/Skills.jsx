import '../styles/Skills.scss';
import htmlLogo from '../assets/img/html-5.png';
import cssLogo from '../assets/img/css-3.png';
import jsLogo from '../assets/img/js.png';
import reactLogo from '../assets/img/react.png';
import tsLogo from '../assets/img/typescript.png';
import nodeLogo from '../assets/img/node-js.png';
import firebaseLogo from '../assets/img/logoFirebase.png';
import sassLogo from '../assets/img/sass.png';

export default function Skills() {
  return (
    <main className='skills'>
      <div className="skills-header">
        <h1>Skills</h1>
      </div>

      <div className="skills-container">
        <div className="skill-list">
          <h2>O que sei fazer</h2>

          <ul>
            <li><b>Desenvolvimento Web e Mobile: </b>Criação de sites e aplicativos otimizados, utilizando as melhores práticas.</li>

            <li><b>Frontend Moderno: </b>Experiência em React e React Native para criar interfaces intuitivas e atraentes, com foco na usabilidade e performance.</li>

            <li><b>Backend e APIs: </b>Integração de APIs e desenvolvimento de backends robustos com Node.js e Express, garantindo que os sistemas funcionem de forma eficiente.</li>

            <li><b>Design Responsivo: </b>Aplicação de técnicas de design responsivo para garantir que seu site ou app seja acessível em qualquer dispositivo.</li>

            <li><b>Controle de Versão: </b>Gerenciamento de projetos e código utilizando Git e GitHub, permitindo desenvolvimento colaborativo e rastreamento eficiente de alterações.</li>
          </ul>
        </div>

        <div className="skill-list2">
          <h2>O que ofereço</h2>

          <ul>
            <li><b>Soluções Personalizadas: </b>Criação de projetos sob medida para atender às suas necessidades específicas e objetivos de negócio.</li>

            <li><b>Inovação e Modernidade: </b>Desenvolvimento de soluções inovadoras e atualizadas com as mais poderosas tecnologias.</li>

            <li><b>Experiência do Usuário (UX): </b>Foco na criação de interfaces atraentes e intuítivas que garantem uma excelente experiência de navegação.</li>

            <li><b>Desempenho e Otimização: </b>Entrega de sistemas rápidos, seguros e otimizadospara grantir uma navegação flúida e confiável.</li>

            <li><b>Suporte Contínuo: </b>Acompanhamento após a entrega do projeto para garantir que tudo funcione perfeitamente, com atualizações e suporte técnico quando necessário.</li>
          </ul>
        </div>
      </div>

      <div className="tools">
        <h2>Tecnologias que utilizo</h2>

        <div className="tools-icons tools-web">
          <h3>Desenvolvimento Web</h3>

          <div className="tools-grid">
            <article>
              <img src={htmlLogo} alt="html-logo"/>
              <label>HTML</label>
            </article>

            <article>
              <img src={cssLogo} alt="css-logo"/>
              <label>CSS</label>
            </article>

            <article>
              <img src={sassLogo} alt="sass-logo"/>
              <label>SASS</label>
            </article>

            <article>
              <img src={jsLogo} alt='javascript-logo'/>
              <label>Javascript</label>
            </article>

            <article>
              <img src={reactLogo} alt="react-logo"/>
              <label>React</label>
            </article>
          </div>
        </div>

        <div className="tools-icons tools-mobile">
          <h3>Desenvolvimento Mobile</h3>

          <div className="tools-grid">
            <article>
              <img src={reactLogo} alt="react-logo"/>
              <label>React Native</label>
            </article>
            
            <article>
              <img src={jsLogo} alt='javascript-logo'/>
              <label>Javascript</label>
            </article>

            <article>
              <img src={tsLogo} alt='typescript-logo'/>
              <label>Typescript</label>
            </article>
            
            <article>
              <img src={nodeLogo} alt='node-js-logo'/>
              <label>Node</label>
            </article>

            <article>
              <img src={firebaseLogo} alt='google-firebase-logo'/>
              <label>Google Firebase</label>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};