import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';

const Layout = ({ children, onChapterSelect, onSubchapterSelect, onPartidaSelect, onActividadSelect, onRecursoSelect, onNavItemClick, toggleSidebar, sidebarOpen }) => {
  return (
    <div className={styles.layout}>
      <Header toggleSidebar={toggleSidebar} onNavItemClick={onNavItemClick} />
      <Sidebar 
        isOpen={sidebarOpen} 
        onChapterSelect={onChapterSelect}
        onSubchapterSelect={onSubchapterSelect}
        onPartidaSelect={onPartidaSelect}
        onActividadSelect={onActividadSelect}
        onRecursoSelect={onRecursoSelect}
      />
      <main className={`${styles.main} ${sidebarOpen ? styles.sidebarOpen : ''}`}>{children}</main>
    </div>
  );
};

export default Layout;