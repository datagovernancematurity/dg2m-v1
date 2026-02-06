import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import { useLanguage } from '../contexts/LanguageContext';

const Dimensions = () => {
  const { t, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigationLinks = [
    { to: '/strategy', label: language === 'pt-BR' ? 'Estratégia e Governança de Dados' : 'Data Strategy and Governance' },
    { to: '/people', label: language === 'pt-BR' ? 'Equipes, Pessoas e Estrutura Organizacional' : 'Teams, People, and Organizational Structure' },
    { to: '/formalization', label: language === 'pt-BR' ? 'Formalização e Processos de Gestão de Dados' : 'Formalization and Data Management Processes' },
    { to: '/quality', label: language === 'pt-BR' ? 'Qualidade dos Dados' : 'Data Quality' },
    { to: '/infrastructure', label: language === 'pt-BR' ? 'Infraestrutura de Dados' : 'Data Infrastructure' },
    { to: '/open', label: language === 'pt-BR' ? 'Dados Abertos' : 'Open Data' }
  ];

  return (
    <div>
      <header className="main-header">
        <h1>{t('dimensions.title')}</h1>
        <p>{t('dimensions.subtitle')}</p>
      </header>

      <div className="dimensions-wrapper">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ {t('common.dimensions')}
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="dimension-content">
          <h2>{t('common.choose')}</h2>
        </main>
      </div>
    </div>
  );
};

export default Dimensions;
