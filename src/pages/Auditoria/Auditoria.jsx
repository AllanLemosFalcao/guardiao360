// pages/Auditoria/Auditoria.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainHeader from '../../components/Header/MainHeader';
import styles from './auditoria.module.css';
import '../../styles/global.css'; // Importação correta (global, sem atribuição)

const logData = [
    { date: '2023-10-26 09:15:22', user: 'admin@cbm.com.br', matricula: 'N/A', event: 'LOGIN', details: 'Ocorrência #2023-1005 Criada', id: 123456, ip: '192.168.1.10' },
    { date: '2023-10-26 10:05:40', user: 'ana.silva@cbm.com.br', matricula: '00345678', event: 'REUNIÃO', details: 'Ocorrência #2023-1005 Criada', id: 78910, ip: '10.0.0.5' },
    { date: '2023-10-26 11:20:10', user: 'pedro.lins@cbm.com.br', matricula: '00112233', event: 'EDIÇÃO_USUÁRIO', details: 'Ocorrência #2024-1234 Criada', id: 11121314, ip: '172.16.0.20' },
];

const Auditoria = () => {
    return (
        <div className="dashboardContainer">
            <Sidebar />
            <main className={`mainContent ${styles.mainContentOverride}`}>
                
                <MainHeader 
                    title="Auditoria e Logs de Ações"
                    actions={<></>}
                />

                <section className={styles.filtersContainer}>
                    <div className={styles.filterItem}>
                        <label htmlFor="filtro-usuario">Filtrar por Usuário:</label>
                        <select id="filtro-usuario">
                            <option>Selecione o tipo de Usuário</option>
                        </select>
                    </div>

                    <div className={styles.filterItem}>
                        <label htmlFor="filtro-evento">Filtro por Tipo de Evento:</label>
                        <select id="filtro-evento">
                            <option>Selecione o Evento</option>
                        </select>
                    </div>

                    <div className={styles.filterItem}>
                        <label htmlFor="filtro-descricao">Filtro por Descrição da Ação:</label>
                        <input
                            type="text"
                            id="filtro-descricao"
                            placeholder="Digite palavras-chave"
                        />
                    </div>

                    <div className={styles.filterItem}>
                        <label htmlFor="data-inicio">Filtrar por Período:</label>
                        <input
                            type="text"
                            id="data-inicio"
                            placeholder="Data Início: DD/MM/AAAA"
                            className={styles.darkInput}
                        />
                    </div>

                    <div className={styles.filterItem}>
                        <label htmlFor="data-final">Filtrar por Período:</label>
                        <input
                            type="text"
                            id="data-final"
                            placeholder="Data Final: DD/MM/AAAA"
                            className={styles.darkInput}
                        />
                    </div>

                    <div className={styles.filterItem}>
                        <button className={`btn ${styles.btnFilter}`}>Aplicar Filtros</button>
                    </div>
                </section>

                <section className={styles.tableContainer}>
                    <div className="tableWrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Data/Hora</th>
                                    <th>Usuário</th>
                                    <th>Matrícula</th>
                                    <th>Evento</th>
                                    <th>Detalhes da Ação</th>
                                    <th>ID Ocorrência</th>
                                    <th>IP de Origem</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logData.map((log, index) => (
                                    <tr key={index}>
                                        <td>{log.date}</td>
                                        <td>{log.user}</td>
                                        <td>{log.matricula}</td>
                                        <td>{log.event}</td>
                                        <td>{log.details}</td>
                                        <td>{log.id}</td>
                                        <td>{log.ip}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <footer className={styles.paginationFooter}>
                        <span className={styles.pageInfo}>Página 1 de 5</span>
                        <div className={styles.pageNav}>
                            <button className={`${styles.btnNav} ${styles.btnPrev}`}>
                                <i className="fa-solid fa-chevron-left"></i> Anterior
                            </button>
                            <button className={`${styles.btnNav} ${styles.btnNext}`}>
                                Próximo <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </footer>
                </section>
            </main>
        </div>
    );
};

export default Auditoria;