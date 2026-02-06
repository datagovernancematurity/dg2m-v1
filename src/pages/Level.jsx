import React from 'react';
import './Main.css';
import { useLanguage } from '../contexts/LanguageContext';

const Level = () => {
  const { t } = useLanguage();

  const maturityLevels = [
    { key: 'level0' },
    { key: 'level1' },
    { key: 'level2' },
    { key: 'level3' },
    { key: 'level4' },
    { key: 'level5' }
  ];

  return (
    <div className="main-content">
      <header className="main-header">
        <h1>{t('levels.title')}</h1>
        <p>{t('levels.subtitle')}</p>
      </header>

      <div className="level-container">
        {maturityLevels.map((level, index) => (
          <section className="main-section" key={index}>
            <div className="level-box">
              <h2>{t(`levels.${level.key}.title`)}</h2>
              <p>{t(`levels.${level.key}.description`)}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Level;
