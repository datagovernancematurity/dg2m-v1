import React from 'react';
import './Main.css';
import { useLanguage } from '../contexts/LanguageContext';

const Survey = () => {
  const { t } = useLanguage();

  return (
    <div className="main-page">
      <header className="main-header">
        <h1>{t('survey.title')}</h1>
        <p>
          <strong>{t('survey.thanks')}</strong>
        </p>
      </header>

      <section className="main-section center-button" id="overview">
        <a className="botao" href="#" target="_blank">
          {t('survey.fillForm')}
        </a>
        <a className="botao" href="#" target="_blank">
          {t('survey.scheduleMeeting')}
        </a>
        <a className="botao" href="#" target="_blank">
          {t('survey.contact')}
        </a>
      </section>

      <section className="main-section" id="overview">
        <h2>{t('survey.presentation')}</h2>

        <p>{t('survey.objective')}</p>

        <p>{t('survey.target')}</p>
      </section>
    </div>
  );
};

export default Survey;
