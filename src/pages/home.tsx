import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Expense Tracker</h1>
      <div className="home-content">
        <p className="home-description">
          Gerencie suas finanças de forma simples e eficiente com nosso
          aplicativo de rastreamento de despesas.
        </p>
        <div className="feature-grid">
          <div className="feature-card">
            <h2>Controle de Despesas</h2>
            <p>Registre e categorize suas despesas facilmente.</p>
          </div>
          <div className="feature-card">
            <h2>Acompanhamento de Receitas</h2>
            <p>Mantenha o controle de todas as suas fontes de renda.</p>
          </div>
          <div className="feature-card">
            <h2>Visualização de Dados</h2>
            <p>Veja gráficos e relatórios detalhados de suas finanças.</p>
          </div>
          <div className="feature-card">
            <h2>Planejamento Financeiro</h2>
            <p>Defina metas e acompanhe seu progresso financeiro.</p>
          </div>
        </div>
        <Link to="/dashboard" className="cta-button">
          Comece Agora
        </Link>
      </div>
    </div>
  );
};

export default Home;
