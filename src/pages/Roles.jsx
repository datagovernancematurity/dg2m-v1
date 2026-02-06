import React from 'react';
import './Main.css';
import { useLanguage } from '../contexts/LanguageContext';

const Roles = () => {
  const { t } = useLanguage();

  return (
    <div className="main-page">
      <header className="main-header">
        <h1>{t('roles.title')}</h1>
        <p>{t('roles.subtitle')}</p>
      </header>

      <section className="main-section">
        <h2>{t('roles.overview')}</h2>
        <p>{t('roles.overviewContent')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.strategic')}</h2>
        <p>{t('roles.strategicCDO')}</p>
        <p><strong>{t('common.people')}:</strong> {t('roles.strategicCommittees')}</p>
        <p><strong>{t('common.policies')}:</strong> {t('roles.strategicPrivacy')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.operational')}</h2>
        <p><strong>{t('common.people')}:</strong> {t('roles.operationalCurators')}</p>
        <p>{t('roles.operationalManagers')}</p>
        <p>{t('roles.operationalConsumers')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.technical')}</h2>
        <p>{t('roles.technicalAnalysts')}</p>
        <p>{t('roles.technicalIT')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.integration')}</h2>
        <p>{t('roles.integrationContent')}</p>
      </section>
    </div>
  );
};

export default Roles;
