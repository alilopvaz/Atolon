import React, { useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaEye, FaPencilAlt, FaLink, FaTrash } from 'react-icons/fa';
import styles from './ListComponent.module.css';

const RecursosList = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const recursos = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    codigo: `R${i + 1}`,
    nombre: `Recurso ${i + 1}`,
    tipo: 'Tipo ' + String.fromCharCode(65 + (i % 3)),
    cantidad: Math.floor(Math.random() * 100) + 1,
    precioUnitario: (Math.random() * 1000).toFixed(2)
  }));

  const handleItemSelect = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.listComponent}>
      <div className={styles.header}>
        <h1>Recursos</h1>
        <div className={styles.controls}>
          <button className={styles.addButton}>Nuevo Recurso</button>
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
                <th>Tipo</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
              </tr>
            </thead>
            <tbody>
              {recursos.map((recurso) => (
                <tr key={recurso.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(recurso.id)}
                      onChange={() => handleItemSelect(recurso.id)}
                    />
                  </td>
                  <td>{recurso.codigo}</td>
                  <td>{recurso.nombre}</td>
                  <td>{recurso.tipo}</td>
                  <td>{recurso.cantidad}</td>
                  <td>{recurso.precioUnitario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecursosList;