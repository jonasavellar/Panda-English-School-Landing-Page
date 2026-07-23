import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0ATelefone: ${formData.phone}%0AEmail: ${formData.email}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5538999115015?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contato" className="contact-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contato</span>
          <h2 className="heading-1">Vamos conversar?</h2>
          <p className="section-subtitle body-large">
            Entre em contato conosco e tire todas as suas dúvidas.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="heading-3">Fale conosco</h3>
            <p className="body-medium contact-intro">
              Estamos prontos para atender você e ajudar no que precisar!
            </p>

            <div className="info-items">
              <a href="https://wa.me/5538999115015" target="_blank" rel="noopener noreferrer" className="info-item">
                <div className="info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="info-label">Telefone / WhatsApp</div>
                  <div className="info-value">(38) 99911-5015</div>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">contato@pandaenglish.com.br</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="info-label">Endereço</div>
                  <div className="info-value">
                    R. Maj. Felicíssimo Viana, 376<br />
                    Centro, Curvelo – MG
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="info-label">Horário</div>
                  <div className="info-value">Aberto até 20h</div>
                </div>
              </div>

              <a href="https://www.instagram.com/pandaenglish.school/" target="_blank" rel="noopener noreferrer" className="info-item">
                <div className="info-icon">
                  <Instagram size={22} />
                </div>
                <div>
                  <div className="info-label">Instagram</div>
                  <div className="info-value">@pandaenglish.school</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="heading-3">Envie uma mensagem</h3>
              
              <div className="form-group">
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required />

              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required />

                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    required />

                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  rows="5"
                  required>
                </textarea>
              </div>

              <button type="submit" className="btn-primary btn-submit">
                <Send size={20} />
                Enviar via WhatsApp
              </button>

              <p className="form-note body-small">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=R.+Maj.+Felic%C3%ADssimo+Viana%2C+376%2C+Centro%2C+Curvelo+-+MG%2C+35790-231&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Panda English School">
          </iframe>
        </div>
      </div>
    </section>);

};

export default Contact;