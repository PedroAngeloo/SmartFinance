import React, { useEffect, useRef } from "react";
import "../styles/sobre.css";
import cachorroImage from '../assets/images/cachorro.jpeg';

const Sobre: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="sobre-container">
      <h1 className="sobre-title">Sobre o SmartFinance</h1>
      <div className="sobre-content">
        {/* Seção de Missão */}
        <section className="sobre-section" ref={(el: HTMLDivElement | null) => { if (el) sectionsRef.current[0] = el }}>
          <h2 className="sobre-section-title">Nossa Missão</h2>
          <p>
            Nosso compromisso é oferecer uma solução prática e eficiente para
            auxiliar as pessoas no controle de suas finanças pessoais, promovendo
            uma vida financeira mais equilibrada e organizada.
          </p>
        </section>

        {/* Seção de Recursos Principais */}
        <section className="sobre-section" ref={(el: HTMLDivElement | null) => { if (el) sectionsRef.current[1] = el }}>
          <h2 className="sobre-section-title">Recursos Principais</h2>
          <ul className="feature-list">
            <li>Monitoramento detalhado de gastos e receitas</li>
            <li>Categorização inteligente das transações</li>
            <li>Gráficos visuais para análise financeira</li>
            <li>Estabelecimento de metas e orçamentos</li>
            <li>Relatórios personalizados para melhor compreensão</li>
          </ul>
        </section>

        {/* Seção de História */}
        <section className="sobre-section" ref={(el: HTMLDivElement | null) => { if (el) sectionsRef.current[2] = el }}>
          <h2 className="sobre-section-title">Nossa História</h2>
          <p>
            O SmartFinance começou como uma pequena ideia entre amigos que queriam melhorar a forma como gerenciavam suas finanças pessoais.
            Com o tempo, percebemos que mais pessoas enfrentavam desafios semelhantes e decidimos criar uma solução acessível e eficiente
            para todos. Hoje, somos uma das plataformas mais reconhecidas no mercado de gestão financeira.
          </p>
        </section>

        {/* Seção de Depoimentos com caixas separadas */}
        <section className="sobre-section" ref={(el: HTMLDivElement | null) => { if (el) sectionsRef.current[3] = el }}>
          <h2 className="sobre-section-title">Depoimentos</h2>
          <div className="depoimentos-container">
            <div className="depoimento-box">
              <blockquote>
                "O SmartFinance mudou completamente minha vida financeira. Agora posso controlar meus gastos e metas com facilidade!"
              </blockquote>
              <cite>— Joana da Silva</cite>
            </div>
            <div className="depoimento-box">
              <blockquote>
                "A interface é muito intuitiva e os relatórios me ajudam a tomar decisões financeiras mais inteligentes."
              </blockquote>
              <cite>— Carlos Almeida</cite>
            </div>
          </div>
        </section>

        {/* Seção de Visão para o Futuro */}
        <section className="sobre-section" ref={(el: HTMLDivElement | null) => { if (el) sectionsRef.current[4] = el }}>
          <h2 className="sobre-section-title">Nossa Visão para o Futuro</h2>
          <p>
            No futuro, planejamos expandir o SmartFinance para incluir integração com bancos, inteligência artificial para previsões financeiras,
            e mais recursos colaborativos para famílias e pequenas empresas. Estamos comprometidos em oferecer soluções inovadoras que
            atendam às necessidades em constante mudança dos nossos usuários.
          </p>
        </section>

        {/* Seção de Equipe */}
        <section className="sobre-section" ref={(el: HTMLDivElement | null) => { if (el) sectionsRef.current[5] = el }}>
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

        {/* Seção de Contato com informações adicionais */}
        <section className="sobre-section" ref={(el: HTMLDivElement | null) => { if (el) sectionsRef.current[6] = el }}>
          <h2 className="sobre-section-title">Contato</h2>
          <div className="contact-info">
            <p><strong>Endereço:</strong> Rua Exemplo, 123, Centro, Cascavel - PR</p>
            <p><strong>Telefone:</strong> (45) 1234-5678</p>
          </div>

          {/* Botão para Enviar Mensagem */}
          <div className="contact-button-container">
            <button
              className="contact-button"
              onClick={() => window.location.href = "mailto:pedrolazzarin@gmail.com"}
            >
              Enviar Mensagem
            </button>
          </div>

          {/* Seção de Vagas Abertas */}
          <div className="vagas-abertas">
            <h3>Vagas Abertas</h3>
            <ul className="vagas-list">
              <li>Desenvolvedor Front-end</li>
              <li>Analista de Dados</li>
              <li>Gerente de Projetos</li>
            </ul>
          </div>

          {/* Mapa embutido do Google Maps */}
          <iframe
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.643333057792!2d-53.50293368438871!3d-24.955261984004864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef3748993b57cf%3A0x1234567890abcdef!2sRua%20Exemplo%2C%20123%2C%20Centro%2C%20Cascavel%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
