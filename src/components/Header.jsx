import React, { useState } from 'react';
import { FaBars, FaHome, FaCog, FaUser, FaSearch } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = ({ toggleSidebar, onNavItemClick }) => {
  const [showConfigMenu, setShowConfigMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleHomeClick = () => {
    onNavItemClick('home');
  };

  const handleConfigClick = () => {
    setShowConfigMenu(!showConfigMenu);
    setShowUserMenu(false);
  };

  const handleUserClick = () => {
    setShowUserMenu(!showUserMenu);
    setShowConfigMenu(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button onClick={toggleSidebar} className={styles.menuButton}>
          <FaBars />
        </button>
        <FaHome className={styles.homeIcon} onClick={handleHomeClick} />
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Buscar..." className={styles.searchInput} />
        </div>
      </div>
      <nav className={styles.rightSection}>
        <a href="#partidas" onClick={() => onNavItemClick('partidas')}>Partidas</a>
        <a href="#actividades" onClick={() => onNavItemClick('actividades')}>Actividades</a>
        <a href="#recursos" onClick={() => onNavItemClick('recursos')}>Recursos</a>
        <div className={styles.iconWrapper}>
          <FaCog className={styles.icon} onClick={handleConfigClick} />
          {showConfigMenu && (
            <div className={styles.dropdownMenu}>
              <a href="#usuarios-roles">Usuarios y roles</a>
            </div>
          )}
        </div>
        <div className={styles.iconWrapper}>
          <FaUser className={styles.icon} onClick={handleUserClick} />
          {showUserMenu && (
            <div className={styles.dropdownMenu}>
              <a href="#cerrar-sesion">Cerrar sesión</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;