import React from 'react';
import { MessageSquare, Coffee, Plane, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import './Courses.css';
import CourseModels from './CourseModels';

const Courses = () => {
  const focuses = [
    { icon: <MessageSquare size={20} />, label: 'Conversação' },
    { icon: <Coffee size={20} />, label: 'Inglês para o dia a dia' },
    { icon: <Plane size={20} />, label: 'Inglês para viagens' },
    { icon: <Briefcase size={20} />, label: 'Inglês para trabalho' },
    { icon: <GraduationCap size={20} />, label: 'Reforço escolar' },
    { icon: <TrendingUp size={20} />, label: 'Desenvolvimento da fluência' }
  ];

  return (
    <section id="cursos" className="courses-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Cursos</span>
          <h2 className="heading-1">Cursos para todas as idades e objetivos</h2>
          <p className="section-subtitle body-large">
            Trabalhamos com diferentes focos de aprendizado, sempre adaptados às suas necessidades.
          </p>
        </div>

        {/* Card Resumo com Focos */}
        <div className="focuses-card card">
          <h3 className="heading-3">Focos das nossas aulas</h3>
          <p className="body-medium focuses-intro">
            Independente da sua idade ou nível, oferecemos aulas focadas em:
          </p>
          <div className="focuses-grid">
            {focuses.map((focus, index) => (
              <div key={index} className="focus-item">
                <div className="focus-icon">{focus.icon}</div>
                <span className="focus-label">{focus.label}</span>
              </div>
            ))}
          </div>
          <p className="body-small focuses-note">
            Todos os focos estão disponíveis nas modalidades Presencial e VIP Online.
          </p>
        </div>

        {/* Seção de Escolha de Modelo */}
        <CourseModels />
      </div>
    </section>
  );
};

export default Courses;