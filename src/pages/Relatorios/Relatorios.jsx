// pages/Relatorios/Relatorios.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainHeader from '../../components/Header/MainHeader';
import styles from './relatorios.module.css';
import '../../styles/global.css';

// Dados mockados para a tabela de resumo
const summaryData = [
    { num: '823', tipo: 'Incêndio Urbano', regiao: 'Urbano', tempo: '12:46' },
    { num: '937', tipo: 'Acidente de Trânsito', regiao: 'Reg. Metro', tempo: '19:57' },
    { num: '26', tipo: 'Vazamento de Gás', regiao: 'Centro', tempo: '14:26' },
    { num: '1101', tipo: 'Resgate Aquático', regiao: 'Litoral', tempo: '08:38' },
];

const Relatorios = () => {
  return (
    <div className="dashboardContainer">
      <Sidebar />
      <main className="mainContent grayBackground">
        
        <MainHeader 
          title="Relatórios Analíticos"
          actions={<></>} // 
        />
        
        {/* Botão "Gerar Relatórios +" */}
        <section className={styles.buttonContainer}>
          <button className={`btn ${styles.btnAddUser}`}> {/* Reutilizando btn global + btnAddUser local */}
            <i className="fa-solid fa-plus"></i> Gerar Relatórios +
          </button>
        </section>

        {/* Container de Filtros */}
        <section className={styles.filtersContainerReports}>
          <div className={styles.filterGrid}>
            
            {/* Linha 1 do Grid */}
            <div className={styles.filterItem}>
              <label htmlFor="data-inicio">Período:</label>
              <input type="text" id="data-inicio" defaultValue="Início: 20/10/2024" />
            </div>
            <div className={styles.filterItem}>
              <label htmlFor="tipo-ocorrencia-1">Tipo de Ocorrência:</label>
              <select id="tipo-ocorrencia-1">
                <option>Selecione o Tipo</option>
              </select>
            </div>
            <div className={styles.filterItem}>
              <label htmlFor="regiao-1">Região:</label>
              <select id="regiao-1">
                <option>Selecione a Região</option>
              </select>
            </div>
            <div className={styles.filterItem}>
              <label htmlFor="status-1">Status:</label>
              <select id="status-1">
                <option>Selecione o Status</option>
              </select>
            </div>

            {/* Linha 2 do Grid */}
            <div className={styles.filterItem}>
              <input type="text" id="data-fim" defaultValue="Fim: 20/10/2024" />
            </div>
            <div className={styles.filterItem}>
              <select id="tipo-ocorrencia-2">
                <option>Incêndio Urbano</option>
              </select>
            </div>
            <div className={styles.filterItem}>
              <select id="regiao-2">
                <option>Região Metropolitana</option>
              </select>
            </div>
            <div className={styles.filterItem}>
              <select id="status-2">
                <option>Todas as Ocorrências</option>
              </select>
            </div>
          </div>

          <div className={styles.exportButtons}>
            <button className={`${styles.btnExport} ${styles.btnPdf}`}>
              <i className="fa-solid fa-file-pdf"></i> Exportar (PDF)
            </button>
            <button className={`${styles.btnExport} ${styles.btnCsv}`}>
              <i className="fa-solid fa-file-csv"></i> Exportar (CSV)
            </button>
          </div>
        </section>

        {/* Container de Métricas */}
        <section className={styles.metricsContainer}>
          <h4>Métricas a Incluir</h4>
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <input type="checkbox" id="metrica1" />
              <label htmlFor="metrica1">Tempo Médio de Resposta</label>
            </div>
            <div className={styles.metricItem}>
              <input type="checkbox" id="metrica2" />
              <label htmlFor="metrica2">Tempo médio por Tipo</label>
            </div>
            <div className={styles.metricItem}>
              <input type="checkbox" id="metrica3" />
              <label htmlFor="metrica3">Uso de Recursos</label>
            </div>
            <div className={styles.metricItem}>
              <input type="checkbox" id="metrica4" />
              <label htmlFor="metrica4">Uso de Recursos</label>
            </div>
          </div>
        </section>

        {/* Grid de Pré-Visualização */}
        <section className={styles.previewGrid}>
          
          {/* Card do Gráfico */}
          <div className={styles.previewCard}>
            <h5>Pré-Visualização:</h5>
            <svg
              className={styles.chartPlaceholder}
              width="100%"
              viewBox="0 0 500 150"
              preserveAspectRatio="xMidYMid meet"
            >
              <line x1="30" y1="130" x2="480" y2="130" stroke="#aaa" strokeWidth="1" />
              <line x1="30" y1="10" x2="30" y2="130" stroke="#aaa" strokeWidth="1" />
              <text x="10" y="130" fontSize="10" fill="#555">10</text>
              <text x="10" y="105" fontSize="10" fill="#555">20</text>
              <text x="10" y="80" fontSize="10" fill="#555">30</text>
              <text x="10" y="55" fontSize="10" fill="#555">40</text>
              <text x="10" y="30" fontSize="10" fill="#555">50</text>
              <text x="40" y="145" fontSize="10" fill="#555">Jan</text>
              <text x="80" y="145" fontSize="10" fill="#555">Fev</text>
              <text x="120" y="145" fontSize="10" fill="#555">Mar</text>
              <text x="160" y="145" fontSize="10" fill="#555">Abr</text>
              <text x="200" y="145" fontSize="10" fill="#555">Mai</text>
              <text x="240" y="145" fontSize="10" fill="#555">Jun</text>
              <text x="280" y="145" fontSize="10" fill="#555">Jul</text>
              <text x="320" y="145" fontSize="10" fill="#555">Ago</text>
              <text x="360" y="145" fontSize="10" fill="#555">Set</text>
              <polyline
                points="40,105 80,95 120,80 200,50 240,80 280,115 360,70"
                fill="none"
                stroke="#8E44AD"
                strokeWidth="2"
              />
              <circle cx="40" cy="105" r="3" fill="#8E44AD" />
              <circle cx="80" cy="95" r="3" fill="#8E44AD" />
              <circle cx="120" cy="80" r="3" fill="#8E44AD" />
              <circle cx="200" cy="50" r="3" fill="#8E44AD" />
              <circle cx="240" cy="80" r="3" fill="#8E44AD" />
              <circle cx="280" cy="115" r="3" fill="#8E44AD" />
              <circle cx="360" cy="70" r="3" fill="#8E44AD" />
            </svg>
          </div>
          
          {/* Card da Tabela de Resumo */}
          <div className={styles.previewCard}>
            <h5>Resumo:</h5>
            <table className={styles.summaryTable}>
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>Tipo de ocorrência</th>
                  <th>Região</th>
                  <th>Tempo Médio</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.num}</td>
                    <td>{item.tipo}</td>
                    <td>{item.regiao}</td>
                    <td>{item.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Relatorios;