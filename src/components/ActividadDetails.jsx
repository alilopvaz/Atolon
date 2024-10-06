import React, { useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import styles from './ActividadDetails.module.css';

const ActividadDetails = ({ chapter, subchapter, partida, actividad }) => {
  const [selectedRecursos, setSelectedRecursos] = useState([]);

  // Generamos 10 recursos de ejemplo
  const recursos = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    codigo: `R${i + 1}`,
    nombre: `Recurso ${i + 1}`,
    tipo: 'Tipo ' + String.fromCharCode(65 + (i % 3)),
    cantidad: Math.floor(Math.random() * 100) + 1
  }));

  const handleRecursoSelect = (recursoId) => {
    setSelectedRecursos(prev => 
      prev.includes(recursoId)
        ? prev.filter(id => id !== recursoId)
        : [...prev, recursoId]
    );
  };

  return (
    <div className={styles.actividadDetails}>
      <div className={styles.navigationBar}>
        <span className={styles.navIcon}>&gt;</span>
        <span>{chapter.name} &gt; {subchapter.nombre} &gt; {partida.nombre} &gt; {actividad.nombre}</span>
      </div>
      <h2>{actividad.nombre}</h2>
      <div className={styles.formFields}>
        <div className={styles.formField}>
          <label htmlFor="partidaProc">Partida de procedencia:</label>
          <input type="text" id="partidaProc" name="partidaProc" value={partida.nombre} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="sistemaClasificacion">Sistema de clasificación:</label>
          <input type="text" id="sistemaClasificacion" name="sistemaClasificacion" value="Sistema ejemplo" readOnly />
        </div>
      </div>
      <h3>Datos de la actividad</h3>
      <div className={styles.formFields}>
        <div className={styles.formField}>
          <label htmlFor="codigo">Código:</label>
          <input type="text" id="codigo" name="codigo" value={actividad.codigo} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={actividad.nombre} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="unidadMedida">Unidad de Medida:</label>
          <input type="text" id="unidadMedida" name="unidadMedida" value={actividad.unidadMedida} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="tipologiaContratacion">Tipología de Contratación:</label>
          <input type="text" id="tipologiaContratacion" name="tipologiaContratacion" value={actividad.tipologiaContratacion} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="costeTotal">Coste Total:</label>
          <input type="text" id="costeTotal" name="costeTotal" value="15000.00" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="importeCosteMedio">Importe Coste Medio:</label>
          <input type="text" id="importeCosteMedio" name="importeCosteMedio" value="7500.00" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="fechaInicio">Fecha Inicio:</label>
          <input type="text" id="fechaInicio" name="fechaInicio" value="01/04/2023" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="fechaFin">Fecha Fin:</label>
          <input type="text" id="fechaFin" name="fechaFin" value="30/06/2023" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="estado">Estado:</label>
          <input type="text" id="estado" name="estado" value="En progreso" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea 
            id="descripcion" 
            name="descripcion" 
            value="Descripción de ejemplo para la actividad."
            readOnly
          />
        </div>
      </div>
      <div className={styles.recursosSection}>
        <div className={styles.recursosHeader}>
          <h3>Recursos asociados</h3>
          <div className={styles.tableControls}>
            <button className={styles.addButton}>Añadir recurso</button>
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
          {selectedRecursos.length > 0 ? (
            <div className={styles.actionIcons}>
              <FaEye className={styles.actionIcon} title="Ver" />
              <FaPencilAlt className={styles.actionIcon} title="Editar" />
              <FaTrash className={styles.actionIcon} title="Eliminar" />
            </div>
          ) : <div className={styles.actionIconsPlaceholder}></div>}
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.recursosTable}>
            <thead>
              <tr>
                <th></th>
                <th>Código</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {recursos.map((recurso) => (
                <tr key={recurso.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRecursos.includes(recurso.id)}
                      onChange={() => handleRecursoSelect(recurso.id)}
                    />
                  </td>
                  <td>{recurso.codigo}</td>
                  <td>{recurso.nombre}</td>
                  <td>{recurso.tipo}</td>
                  <td>{recurso.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActividadDetails;