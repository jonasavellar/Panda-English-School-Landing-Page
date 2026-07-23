import React, { useState } from 'react';
import { Building2, X } from 'lucide-react';
import './Structure.css';

const Structure = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
  {
    url: '/images/estrutura-1.jpg',
    alt: 'Fachada da Panda English School',
    title: 'Nossa Fachada'
  },
  {
    url: '/images/estrutura-2.jpg',
    alt: 'Interior da escola',
    title: 'Ambiente Interno'
  },
  {
    url: '/images/estrutura-3.jpg',
    alt: 'Sala de aula',
    title: 'Salas de Aula'
  },
  {
    url: '/images/estrutura-4.jpg',
    alt: 'Espaço de aprendizado',
    title: 'Espaço Acolhedor'
  }];


  return (
    <section id="nosso-espaco" className="structure-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Nosso Espaço</span>
          <h2 className="heading-1">Conheça nosso espaço</h2>
          <p className="section-subtitle body-large">
            Um ambiente moderno, confortável e preparado para o seu aprendizado.
          </p>
        </div>

        <div className="structure-intro">
          <div className="intro-icon">
            <Building2 size={40} />
          </div>
          <div className="intro-text">
            <h3 className="heading-3">Ambiente pensado para você</h3>
            <p className="body-medium">Nossas salas são confortáveis, climatizadas e projetadas para criar o ambiente perfeito de aprendizado. Venha nos visitar e sentir a energia positiva do Panda!

            </p>
          </div>
        </div>

        <div className="structure-gallery">
          {images.map((image, index) =>
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(image)}>

              <img src={image.url} alt={image.alt} />
              <div className="gallery-overlay">
                <span className="gallery-title">{image.title}</span>
              </div>
            </div>
          )}
        </div>

        <div className="structure-cta">
          <p className="body-large">Quer conhecer pessoalmente?</p>
          <a
            href="https://wa.me/5538999115015?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20%C3%A0%20Panda%20English%20School."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary">

            Agendar Visita
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage &&
      <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage.url} alt={selectedImage.alt} className="lightbox-image" />
          <div className="lightbox-caption">{selectedImage.title}</div>
        </div>
      }
    </section>);

};

export default Structure;