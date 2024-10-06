import React, { useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaEye, FaPencilAlt, FaLink, FaTrash } from 'react-icons/fa';
import styles from './ListComponent.module.css';

const PartidasList = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const partidas = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    codigo: `P${i + 1}`,
    nombre: `Partida ${i + 1}`,
    unidadMedida: 'Unidad',
    tipoContratacion: 'Tipo ' + String.fromCharCode(65 + (i % 3)),
    costeTotal: (Math.random() * 10000).toFixed(2)
  }));

  const handleItemSelect = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.listComponent}>
      <div className={styles.header}>
        <h1>Partidas</h1>
        <div className={styles.controls}>
          <button className={styles.addButton}>Nueva Partida</button>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Buscar..." className={styles.searchInput} />
            <FaSearch className={styles.searchIcon} />
          </div>
          <div className={styles.iconContainer}>
            <FaSort className={styles.icon} title="Ordenar" />
            <FaFilter className={styles.icon} title="Filtrar" />
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.tableContainer}>
        <div className={styles.actionIcons}>
          {selectedItems.length > 0 && (
            <>
              <FaEye className={styles.actionIcon} title="Ver" />
              <FaPencilAlt className={styles.actionIcon} title="Editar" />
              <FaLink className={styles.actionIcon} title="Asociar" />
              <FaTrash className={styles.actionIcon} title="Eliminar" />
            </>
          )}
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th></th>
                <th>Código</th>
                <th>Nombre</th>
                <th>Unidad de Medida</th>
                <th>Tipo Contratación</th>
                <th>Coste Total</th>
              </tr>
            </thead>
            <tbody>
              {partidas.map((partida) => (
                <tr key={partida.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(partida.id)}
                      onChange={() => handleItemSelect(partida.id)}
                    />
                  </td>
                  <td>{partida.codigo}</td>
                  <td>{partida.nombre}</td>
                  <td>{partida.unidadMedida}</td>
                  <td>{partida.tipoContratacion}</td>
                  <td>{partida.costeTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PartidasList;