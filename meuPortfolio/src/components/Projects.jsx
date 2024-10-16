import '../styles/Projects.scss';
import project1 from '../assets/img/projetoLiveDesign.jpeg';
import project2 from '../assets/img/growy.jpeg';
import project3 from '../assets/img/NFTLanding.jpeg';

export default function Projects() {
  return (
    <main className='projects'>
      <h1>Meus Projetos</h1>
      <h3>Clique nas imagens para mais detalhes</h3>

      <div className="projects-cards">
        <img src={project1} alt="um projeto do portfolio"/>

        <div className="project-desc">
            <h3>Live Design</h3>

            <p>Um Website para uma empresa de móveis fictícia. Feita com HTML e CSS</p>

            <a href="https://ryalee.github.io/liveDesign">Explore</a>
          </div>
      </div>

      <div className="projects-cards">
        <img src={project2} alt="um projeto do portfolio"/>

        <div className="project-desc">
            <h3>Growy</h3>
            <p>Um Website para uma empresa de marketing fictícia. Feita com React e estilizada com SCSS</p>

            <a href="https://ryalee.github.io/growy">Explore</a>
        </div>
      </div>

      <div className="projects-cards">
        <img src={project3} alt="um projeto do portfolio"/>

        <div className="project-desc">
          <h3>NFTLanding</h3>
          <p>Uma Landing Page destinada ao lançamento de NFT fictícia feita em React e estilizada com SCSS</p>

          <a href="https://ryalee.github.io/NFTLanding">Explore</a>
        </div>
      </div>
    </main>
  );
};
