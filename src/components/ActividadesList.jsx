import React, { useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaEye, FaPencilAlt, FaLink, FaTrash } from 'react-icons/fa';
import styles from './ListComponent.module.css';

const ActividadesList = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const actividades = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    codigo: `A${i + 1}`,
    nombre: `Actividad ${i + 1}`,
    unidadMedida: 'Unidad',
    tipologiaContratacion: 'Tipo ' + String.fromCharCode(65 + (i % 3)),
    fechaInicio: `2023-${String(i % 12 + 1).padStart(2, '0')}-01`,
    fechaFin: `2023-${String(i % 12 + 1).padStart(2, '0')}-28`
  }));

  const handleItemSelect = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.listComponent}>
      <div className={styles.header}>
        <h1>Actividades</h1>
        <div className={styles.controls}>
          <button className={styles.addButton}>Nueva Actividad</button>
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
                <th>Tipología Contratación</th>
                <th>Fecha Inicio</th>
                <th>Fecha Fin</th>
              </tr>
            </thead>
            <tbody>
              {actividades.map((actividad) => (
                <tr key={actividad.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(actividad.id)}
                      onChange={() => handleItemSelect(actividad.id)}
                    />
                  </td>
                  <td>{actividad.codigo}</td>
                  <td>{actividad.nombre}</td>
                  <td>{actividad.unidadMedida}</td>
                  <td>{actividad.tipologiaContratacion}</td>
                  <td>{actividad.fechaInicio}</td>
                  <td>{actividad.fechaFin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActividadesList;