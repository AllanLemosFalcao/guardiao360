// pages/Ocorrencias/Ocorrencias.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainHeader from '../../components/Header/MainHeader';
import styles from './ocorrencias.module.css'; // Importa os estilos modulares locais
import '../../styles/global.css'; // Importa estilos de layout global

// Dados mockados (baseado no telaprincipalocorrencias.html)
const occurrenceData = [
    { id: 1, type: 'Incêndio', icon: 'fa-fire-flame-curved', status: 'Concluído', local: 'Boa Viagem, 158' },
    { id: 2, type: 'Incêndio', icon: 'fa-faucet', status: 'Concluído', local: 'Rua Saraiva, 50' },
    { id: 3, type: 'Incêndio', icon: 'fa-fire-flame-curved', status: 'Andamento', local: 'Rua das Flores, 123' },
    { id: 4, type: 'Acidente Veicular', icon: 'fa-car-burst', status: 'Concluído', local: 'Rua dos pinhais, 153' },
    { id: 5, type: 'Acidente Veicular', icon: 'fa-car-burst', status: 'Cancelado', local: 'Jaboatão Centro, 206' },
    { id: 6, type: 'Resgate', icon: 'fa-person', status: 'Concluído', local: 'Ilha do retiro, 87' },
    { id: 11, type: 'Incêndio', icon: 'fa-fire-flame-curved', status: 'Concluído', local: 'Centro do Recife, 15' },
    { id: 12, type: 'Resgate', icon: 'fa-person', status: 'Cancelado', local: 'Boa Vista, 53' },
];

// Mapeamento de status para classes CSS Module
const getStatusClass = (status) => {
    switch (status) {
        case 'Concluído':
            return styles.statusConcluido;
        case 'Andamento':
            return styles.statusAndamento;
        case 'Cancelado':
            return styles.statusCancelado;
        default:
            return '';
    }
};

const Ocorrencias = () => {
    // Botão para o Header
    const HeaderActions = (
        <button className="btn btnPrimary"> {/* Classes globais */}
            <i className="fa-solid fa-plus"></i> Registrar Nova ocorrência
        </button>
    );

    return (
        // Classes de layout globais
        <div className="dashboardContainer">
            <Sidebar />
            <main className="mainContent">
                
                <MainHeader 
                    title="Lista de Ocorrências"
                    actions={HeaderActions}
                />

                {/* Filtros (Estilos do Modulo) */}
                <section className={styles.filtersSection}>
                    <div className={styles.filterGroup}>
                        <label htmlFor="status">Status:</label>
                        <select id="status">
                            <option>Selecione o status</option>
                        </select>
                    </div>
                    <div className={styles.filterGroup}>
                        <label htmlFor="periodo">Período:</label>
                        <select id="periodo">
                            <option>Selecione o período</option>
                        </select>
                    </div>
                    <div className={styles.filterGroup}>
                        <label htmlFor="regiao">Região:</label>
                        <select id="regiao">
                            <option>Selecione a região</option>
                        </select>
                    </div>
                    {/* Botão de filtro usa classe global 'btn' e local 'btnFilter' */}
                    <button className={`btn ${styles.btnFilter}`}>Filtrar Informações</button>
                </section>

                {/* Cartões de Status (Estilos do Modulo) */}
                <section className={styles.statsSection}>
                    <div className={`${styles.statCard} ${styles.abertos}`}>
                        <span className={styles.count}>8</span>
                        <span className={styles.label}>ABERTOS</span>
                    </div>
                    <div className={`${styles.statCard} ${styles.pendentes}`}>
                        <span className={styles.count}>1</span>
                        <span className={styles.label}>PENDENTES</span>
                    </div>
                    <div className={`${styles.statCard} ${styles.cancelados}`}>
                        <span className={styles.count}>2</span>
                        <span className={styles.label}>CANCELADOS</span>
                    </div>
                    <div className={`${styles.statCard} ${styles.concluidos}`}>
                        <span className={styles.count}>5</span>
                        <span className={styles.label}>CONCLUÍDOS</span>
                    </div>
                </section>

                {/* Container da Tabela (Estilos do Modulo) */}
                <section className={styles.tableSection}>
                    {/* A tabela será estilizada pelo CSS Module (`.tableSection table`) */}
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tipo de Ocorrências</th>
                                <th>Status</th>
                                <th>Local</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {occurrenceData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>
                                        <i className={`fa-solid ${item.icon} ${styles.iconRed}`}></i>
                                        {item.type}
                                    </td>
                                    <td>
                                        <span className={`${styles.statusPill} ${getStatusClass(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>{item.local}</td>
                                    <td>
                                        {item.status === 'Andamento' && (
                                            <Link to={`/ocorrencia/${item.id}`} className={`btn ${styles.btnDetails}`}>
                                                Ver Detalhes
                                            </Link>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default Ocorrencias;