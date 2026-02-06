import React from 'react';
import './Main.css';
import { useLanguage } from '../contexts/LanguageContext';

const Main = () => {
  const { t } = useLanguage();

  return (
    <div className="main-page">
      <header className="main-header">
        <h1>{t('main.title')}</h1>
        <p>{t('main.subtitle')}</p>
      </header>

      <section className="main-section" id="overview">
        <h2>{t('main.about')}</h2>
        <p>
          {t('main.aboutContent')}
        </p>
      </section>
      <section className="main-section" id="overview">
        <h2>{t('main.dimensionsTitle')}</h2>
        <p>{t('main.dimensionsContent')}</p>
        <ul>
          {t('main.dimensionsList').map((dimension, index) => (
            <li key={index}>{dimension}</li>
          ))}
        </ul>
      </section>
      <section className="main-section" id="overview">
        <h2>{t('main.aspectsTitle')}</h2>
        <p>{t('main.aspectsContent')}</p>
        <ul>
          <li>
            <strong>{t('common.people')}:</strong> {t('main.aspectPeople')}
          </li>
          <li>
            <strong>{t('common.policies')}:</strong> {t('main.aspectPolicies')}
          </li>
          <li>
            <strong>{t('common.capabilities')}:</strong> {t('main.aspectCapabilities')}
          </li>
        </ul>

        <p>
          {t('main.aspectsConclusion')}
        </p>
      </section>
      <section className="main-section" id="overview">
        <h2>{t('main.minLevelTitle')}</h2>
        <p>
          {t('main.minLevelContent')}
        </p>
      </section>

    </div>
  );
};

export default Main;
