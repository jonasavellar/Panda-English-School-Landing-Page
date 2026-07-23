import React from 'react';
import { Heart, Target, Sparkles, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="sobre" className="about-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Sobre Nós</span>
          <h2 className="heading-1">Conheça a Panda English School</h2>
          <p className="section-subtitle body-large">
            Mais do que uma escola de inglês, somos uma família que acredita no poder da educação.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-story">
              <h3 className="heading-3">Nossa História</h3>
              <p className="body-medium">
                A Panda English School nasceu do sonho de criar um espaço onde aprender inglês fosse mais do que decorar regras gramaticais. Queremos que cada aluno se sinta em casa, valorizado e capaz de alcançar seus objetivos.
              </p>
              <p className="body-medium">
                Localizada no coração de Curvelo, nossa escola se tornou referência em qualidade de ensino e acolhimento, conquistando a confiança de centenas de famílias.
              </p>
            </div>

            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="heading-3">Missão</h4>
                  <p className="body-medium">
                    Ensinar inglês de forma prática, humana e eficiente, preparando nossos alunos para o mundo.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="heading-3">Valores</h4>
                  <p className="body-medium">
                    Respeito, inclusão, qualidade e evolução contínua. Acolhemos todos com amor e profissionalismo.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="heading-3">Diferenciais</h4>
                  <p className="body-medium">
                    Professores dedicados, metodologia comprovada e ambiente que celebra a diversidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="/images/about-equipe.jpeg" 
                alt="Equipe Panda English School"
                className="about-img"
              />
            </div>
            <div className="about-highlight">
              <Users size={20} />
              <span>Comunidade acolhedora e inclusiva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;