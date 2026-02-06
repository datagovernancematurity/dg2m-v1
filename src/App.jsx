import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { useLanguage } from './contexts/LanguageContext'

import Main from './pages/Main'
import Level from './pages/Level'
import Dimensions from './pages/Dimensions'
import Roles from './pages/Roles'
import Strategy from './pages/Strategy'
import People from './pages/People'
import Formalization from './pages/Formalization'
import Quality from './pages/Quality'
import Infrastructure from './pages/Infrastructure'
import Open from './pages/Open'
import Survey from './pages/Survey'

export default function App() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h1>{t('nav.title')}</h1>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="nav-links">
            <li><Link to="/">{t('nav.about')}</Link></li>
            <li><Link to="/level">{t('nav.levels')}</Link></li>
            <li><Link to="/dimensions">{t('nav.dimensions')}</Link></li>
            <li><Link to="/roles">{t('nav.roles')}</Link></li>
            <li><Link to="/survey">{t('nav.survey')}</Link></li>
            <li>
              <button
                onClick={() => setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR')}
                className="language-toggle"
                aria-label="Toggle language"
              >
                {language === 'pt-BR' ? '🇺🇸 EN' : '🇧🇷 PT'}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/level" element={<Level />} />
        <Route path="/dimensions" element={<Dimensions />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/people" element={<People />} />
        <Route path="/formalization" element={<Formalization />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/open" element={<Open />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
      </main>

      <footer className="main-footer">
        {t('footer.copyright')}
      </footer>
    </div>
  )
}