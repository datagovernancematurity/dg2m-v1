import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Participe da Pesquisa sobre Governança de Dados</h1>
        <p>
          <strong>
            Desde já, agradeço muito pela sua colaboração!
          </strong>
        </p>
      </header>

      <section className="main-section center-button" id="overview">
        <a class="botao" href="#" target="_blank">
          Preencha o formulário clicando aqui (desativado)
        </a>
        <a class="botao" href="#" target="_blank">
          Marque uma reunião comigo, se tiver dúvidas (desativado)
        </a>
        <a class="botao" href="#" target="_blank">
          Ou fale comigo em (email)
        </a>
      </section>

      <section className="main-section" id="overview">
        <h2>Apresentação</h2>

        <p>
          O objetivo é validar uma proposta de <strong>Modelo de Maturidade da Governança de Dados (DG2M)</strong>.
        </p>

        <p>
          O survey é direcionado a profissionais que atuam com dados, governança, tecnologia da informação e áreas correlatas, 
          e busca reunir percepções e feedbacks sobre o modelo proposto. Todas as respostas são sigilosas e utilizadas exclusivamente para fins acadêmicos.
        </p>
      </section>
    </div>

  );
};

export default Main;
