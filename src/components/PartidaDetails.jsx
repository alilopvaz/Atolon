import React, { useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import styles from './PartidaDetails.module.css';

const PartidaDetails = ({ chapter, subchapter, partida }) => {
  const [selectedActividades, setSelectedActividades] = useState([]);

  // Generamos 10 actividades de ejemplo
  const actividades = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    codigo: `A${i + 1}`,
    nombre: `Actividad ${i + 1}`,
    unidadMedida: 'Unidad',
    tipologiaContratacion: 'Tipo ' + String.fromCharCode(65 + (i % 3))
  }));

  const handleActividadSelect = (actividadId) => {
    setSelectedActividades(prev => 
      prev.includes(actividadId)
        ? prev.filter(id => id !== actividadId)
        : [...prev, actividadId]
    );
  };

  return (
    <div className={styles.partidaDetails}>
      <div className={styles.navigationBar}>
        <span className={styles.navIcon}>&gt;</span>
        <span>{chapter.name} &gt; {subchapter.nombre} &gt; {partida.nombre}</span>
      </div>
      <h2>{partida.nombre}</h2>
      <div className={styles.formFields}>
        <div className={styles.formField}>
          <label htmlFor="subcapituloProc">Subcapítulo de procedencia:</label>
          <input type="text" id="subcapituloProc" name="subcapituloProc" value={subchapter.nombre} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="sistemaClasificacion">Sistema de clasificación:</label>
          <input type="text" id="sistemaClasificacion" name="sistemaClasificacion" value="Sistema ejemplo" readOnly />
        </div>
      </div>
      <h3>Datos de la partida</h3>
      <div className={styles.formFields}>
        <div className={styles.formField}>
          <label htmlFor="codigo">Código:</label>
          <input type="text" id="codigo" name="codigo" value={partida.codigo} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={partida.nombre} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="unidadMedida">Unidad de Medida:</label>
          <input type="text" id="unidadMedida" name="unidadMedida" value={partida.unidadMedida} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="tipoContratacion">Tipo de Contratación:</label>
          <input type="text" id="tipoContratacion" name="tipoContratacion" value={partida.tipoContratacion} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="costeTotal">Coste Total:</label>
          <input type="text" id="costeTotal" name="costeTotal" value="10000.00" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="importeCosteMedio">Importe Coste Medio:</label>
          <input type="text" id="importeCosteMedio" name="importeCosteMedio" value="5000.00" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="fechaCreacion">Fecha Creación:</label>
          <input type="text" id="fechaCreacion" name="fechaCreacion" value="01/01/2023" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="fechaModificacion">Fecha Modificación:</label>
          <input type="text" id="fechaModificacion" name="fechaModificacion" value="15/03/2023" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea 
            id="descripcion" 
            name="descripcion" 
            value="Descripción de ejemplo para la partida."
            readOnly
          />
        </div>
      </div>
      <div className={styles.actividadesSection}>
        <div className={styles.actividadesHeader}>
          <h3>Actividades asociadas</h3>
          <div className={styles.tableControls}>
            <button className={styles.addButton}>Añadir actividad</button>
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
          {selectedActividades.length > 0 ? (
            <div className={styles.actionIcons}>
              <FaEye className={styles.actionIcon} title="Ver" />
              <FaPencilAlt className={styles.actionIcon} title="Editar" />
              <FaTrash className={styles.actionIcon} title="Eliminar" />
            </div>
          ) : <div className={styles.actionIconsPlaceholder}></div>}
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.actividadesTable}>
            <thead>
              <tr>
                <th></th>
                <th>Código</th>
                <th>Unidad de Medida</th>
                <th>Nombre</th>
                <th>Tipología Contratación</th>
              </tr>
            </thead>
            <tbody>
              {actividades.map((actividad) => (
                <tr key={actividad.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedActividades.includes(actividad.id)}
                      onChange={() => handleActividadSelect(actividad.id)}
                    />
                  </td>
                  <td>{actividad.codigo}</td>
                  <td>{actividad.unidadMedida}</td>
                  <td>{actividad.nombre}</td>
                  <td>{actividad.tipologiaContratacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PartidaDetails;