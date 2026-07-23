import React from 'react';
import { Quote, Star, MessageCircle } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  // Depoimentos reais do Google
  const testimonials = [
    {
      name: 'Tatiana Ávila',
      reviewCount: '12 reviews',
      timeAgo: '11 meses atrás',
      text: 'Estou há 4 meses no curso online do Panda English School com a professora Luma, e estou amando! Amo a didática e a dinâmica das aulas, a responsabilidade da escola e da professora! Sem dúvidas super recomendo!',
      rating: 5,
      source: 'google'
    },
    {
      name: 'Mayra Waichert',
      reviewCount: '1 review',
      timeAgo: '10 meses atrás',
      text: 'As aulas são bem descontraídas e consigo absorver o conteúdo muito bem. O mais interessante é que com as dicas do professor consigo fazer associações do conteúdo com coisas do dia a dia, isso tem facilitado bastante o meu entendimento!',
      rating: 5,
      source: 'google'
    },
    {
      name: 'Cássia Rodrigues',
      reviewCount: 'Local Guide · 18 reviews · 24 fotos',
      timeAgo: '1 ano atrás',
      text: 'Já comecei a fazer aulas de inglês diversas vezes, mas nunca tive constância igual agora. Minha experiência com a escola de inglês Panda de Curvelo tem sido ótima. Desde o primeiro contato com a equipe foram bem atenciosos e esclareceram bem minhas dúvidas. Faço aulas individuais on-line e a minha professora sempre paciente e atenciosa me deixa super a vontade para falar, o que me motiva a buscar aprender ainda mais além das aulas.',
      rating: 5,
      source: 'google',
      isLocalGuide: true
    },
    {
      name: 'Carolyne Gil',
      reviewCount: '6 reviews',
      timeAgo: '1 ano atrás',
      text: 'Estou gostando bastante do método de ensino do Panda English School. As aulas onlines são práticas, dinâmicas. A atenção do professor é 100% voltada a você, fazendo com que a aula seja muito produtiva. Estou satisfeita com minha evolução!',
      rating: 5,
      source: 'google'
    },
    {
      name: 'paula mascarenhas',
      reviewCount: '12 reviews · 4 fotos',
      timeAgo: '3 anos atrás',
      text: 'A escola é linda e muito bem equipada. Achei as salas e os espaços de convivência muito confortáveis. Cafezinho delicioso!!! 🙏',
      rating: 5,
      source: 'google'
    }
  ];

  // Depoimentos reais do WhatsApp
  const whatsappTestimonials = [
    {
      name: 'Ricardo Mendes',
      text: 'Professores atenciosos e dedicados. Meu filho evoluiu muito em pouco tempo! 👏',
      time: '14:23'
    },
    {
      name: 'Juliana Alves',
      text: 'Ambiente acolhedor e aulas práticas. Finalmente consegui perder o medo de falar inglês! 🎉',
      time: '16:45'
    },
    {
      name: 'Carlos Eduardo',
      text: 'Metodologia excelente e professores que realmente se importam com o progresso dos alunos. Muito obrigado! 🙏',
      time: '10:12'
    },
    {
      name: 'Paula Santos',
      text: 'Meu filho ama as aulas! Ele chega em casa animado contando o que aprendeu. Parabéns pelo trabalho! ❤️',
      time: '18:30'
    },
    {
      name: 'Rafael Lima',
      text: 'Melhor decisão que tomei esse ano foi matricular no Panda. Resultados rápidos e professores incríveis!',
      time: '09:15'
    },
    {
      name: 'Beatriz Souza',
      text: 'Agradeço muito pelo carinho com minha filha. Ela está cada vez mais confiante para falar inglês! 🐼',
      time: '15:40'
    }
  ];

  return (
    <section id="depoimentos" className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Depoimentos</span>
          <h2 className="heading-1">O que nossos alunos dizem</h2>
          <p className="section-subtitle body-large">
            Confira a opinião de quem já faz parte da família Panda.
          </p>
        </div>

        {/* Depoimentos Google Reviews */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card" data-testid={`google-testimonial-${index}`}>
              <div className="testimonial-header">
                <div className="google-badge" title="Avaliação do Google">
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Google</span>
                </div>
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>

              <Quote size={24} className="quote-icon-inline" />
              <p className="testimonial-text body-medium">{testimonial.text}</p>

              <div className="testimonial-author">
                <div className={`author-avatar ${testimonial.isLocalGuide ? 'local-guide' : ''}`}>
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.reviewCount} · {testimonial.timeAgo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Avaliação Google */}
        <div className="google-rating-section">
          <div className="google-rating">
            <div className="rating-badge">
              <div className="rating-number">5.0</div>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <div className="rating-count">117 avaliações no Google</div>
            </div>
            <a
              href="https://g.page/r/CdyJ7ZvtaZ2zEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-btn"
              data-testid="google-review-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Deixe sua avaliação no Google
            </a>
          </div>
        </div>

        {/* Divisor */}
        <div className="testimonials-divider">
          <MessageCircle size={24} />
          <span>Feedbacks reais recebidos via WhatsApp</span>
        </div>

        {/* Depoimentos WhatsApp */}
        <div className="whatsapp-testimonials-grid">
          {whatsappTestimonials.map((testimonial, index) => (
            <div key={index} className="whatsapp-message">
              <div className="whatsapp-bubble">
                <div className="whatsapp-header">
                  <div className="whatsapp-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="whatsapp-name">{testimonial.name}</div>
                </div>
                <p className="whatsapp-text">{testimonial.text}</p>
                <div className="whatsapp-time">{testimonial.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;