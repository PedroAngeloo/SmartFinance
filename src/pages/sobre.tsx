import React from "react";
import "../styles/sobre.css";
import cachorroImage from '../assets/images/cachorro.jpeg';

const Sobre: React.FC = () => {
  return (
    <div className="sobre-container">
      <h1 className="sobre-title">Sobre o Rastreador de Despesas</h1>
      <div className="sobre-content">
        <section className="sobre-section">
          <h2 className="sobre-section-title">Nossa Missão</h2>
          <p>
            Nosso compromisso é oferecer uma solução prática e eficiente para
            auxiliar as pessoas no controle de suas finanças pessoais, promovendo
            uma vida financeira mais equilibrada e organizada.
          </p>
        </section>
        <section className="sobre-section">
          <h2 className="sobre-section-title">Recursos Principais</h2>
          <ul className="feature-list">
            <li>Monitoramento detalhado de gastos e receitas</li>
            <li>Categorização inteligente das transações</li>
            <li>Gráficos visuais para análise financeira</li>
            <li>Estabelecimento de metas e orçamentos</li>
            <li>Relatórios personalizados para melhor compreensão</li>
          </ul>
        </section>

        <section className="sobre-section">
          <h2 className="sobre-section-title">Nossa Equipe</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src={cachorroImage}
                alt="Membro 1"
                className="team-member-image"
              />
              <h3 className="team-member-name">Cachorro - Pedro</h3>
              <p className="team-member-role">Professional Counter Strike</p>
            </div>
          </div>
        </section>
        <section className="sobre-section">
          <h2 className="sobre-section-title">Contato</h2>
          <p>Tem alguma dúvida ou sugestão? Entre em contato conosco:</p>
          <a
            href="mailto:pedrolazzarin@gmail.com"
            className="contact-button"
          >
            Enviar E-mail
          </a>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
