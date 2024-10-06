import React from 'react';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import styles from './ChapterDetails.module.css';

const ChapterDetails = ({ chapter }) => {
  // Generamos 10 subcapítulos de ejemplo
  const subcapitulos = Array.from({ length: 10 }, (_, i) => ({
    codigo: `${chapter.id}.${i + 1}`,
    nombre: `Subcapítulo ${i + 1} del ${chapter.name}`
  }));

  return (
    <div className={styles.chapterDetails}>
      <div className={styles.navigationBar}>
        <span className={styles.navIcon}>&gt;</span>
        <span>{chapter.name}</span>
      </div>
      <h2 className={styles.leftAligned}>{chapter.name}</h2>
      <div className={styles.formFields}>
        <div className={styles.formField}>
          <label htmlFor="codigo" className={styles.leftAligned}>Código:</label>
          <input type="text" id="codigo" name="codigo" />
        </div>
        <div className={styles.formField}>
          <label htmlFor="descripcion" className={styles.leftAligned}>Descripción:</label>
          <input type="text" id="descripcion" name="descripcion" />
        </div>
      </div>
      <h3 className={styles.leftAligned}>Subcapítulos asociados</h3>
      <div className={styles.tableControls}>
        <div className={styles.iconContainer}>
          <FaFilter className={styles.icon} title="Filtrar" />
          <FaSort className={styles.icon} title="Ordenar" />
        </div>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Buscar..." className={styles.searchInput} />
          <FaSearch className={styles.searchIcon} />
        </div>
        <button className={styles.addButton}>Añadir subcapítulo</button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.subcapitulosTable}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {subcapitulos.map((sub) => (
              <tr key={sub.codigo}>
                <td>{sub.codigo}</td>
                <td>{sub.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChapterDetails;