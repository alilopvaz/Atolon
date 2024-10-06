import React, { useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import styles from './SubchapterDetails.module.css';

const SubchapterDetails = ({ chapter, subchapter }) => {
  const [selectedPartidas, setSelectedPartidas] = useState([]);

  // Generamos 10 partidas de ejemplo
  const partidas = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    codigo: `P${i + 1}`,
    unidadMedida: 'Unidad',
    nombre: `Partida ${i + 1}`,
    tipoContratacion: 'Tipo A'
  }));

  const handlePartidaSelect = (partidaId) => {
    setSelectedPartidas(prev => 
      prev.includes(partidaId)
        ? prev.filter(id => id !== partidaId)
        : [...prev, partidaId]
    );
  };

  return (
    <div className={styles.subchapterDetails}>
      <div className={styles.navigationBar}>
        <span className={styles.navIcon}>&gt;</span>
        <span>{chapter.name} &gt; {subchapter.nombre}</span>
      </div>
      <h2>{subchapter.nombre}</h2>
      <div className={styles.formFields}>
        <div className={styles.formField}>
          <label htmlFor="capituloProc">Capítulo de procedencia:</label>
          <input type="text" id="capituloProc" name="capituloProc" value={chapter.name} readOnly />
        </div>
      </div>
      <h3>Datos del subcapítulo</h3>
      <div className={styles.formFields}>
        <div className={styles.formField}>
          <label htmlFor="codigo">Código:</label>
          <input type="text" id="codigo" name="codigo" value={subchapter.id} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={subchapter.nombre} readOnly />
        </div>
      </div>
      <div className={styles.partidasSection}>
        <div className={styles.partidasHeader}>
          <h3>Partidas asociadas</h3>
          <div className={styles.tableControls}>
            <button className={styles.addButton}>Añadir partida</button>
            <div className={styles.searchContainer}>
              <input type="text" placeholder="Buscar..." className={styles.searchInput} />
              <FaSearch className={styles.searchIcon} />
            </div>
            <div className={styles.iconContainer}>
              <FaFilter className={styles.icon} title="Filtrar" />
              <FaSort className={styles.icon} title="Ordenar" />
            </div>
          </div>
        </div>
        <div className={styles.actionIconsContainer}>
          {selectedPartidas.length > 0 ? (
            <div className={styles.actionIcons}>
              <FaEye className={styles.actionIcon} title="Ver" />
              <FaPencilAlt className={styles.actionIcon} title="Editar" />
              <FaTrash className={styles.actionIcon} title="Eliminar" />
            </div>
          ) : <div className={styles.actionIconsPlaceholder}></div>}
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.partidasTable}>
            <thead>
              <tr>
                <th></th>
                <th>Código</th>
                <th>Unidad de Medida</th>
                <th>Nombre</th>
                <th>Tipo Contratación</th>
              </tr>
            </thead>
            <tbody>
              {partidas.map((partida) => (
                <tr key={partida.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedPartidas.includes(partida.id)}
                      onChange={() => handlePartidaSelect(partida.id)}
                    />
                  </td>
                  <td>{partida.codigo}</td>
                  <td>{partida.unidadMedida}</td>
                  <td>{partida.nombre}</td>
                  <td>{partida.tipoContratacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubchapterDetails;