import React from 'react';
import styles from './RecursoDetails.module.css';

const RecursoDetails = ({ chapter, subchapter, partida, actividad, recurso }) => {
  return (
    <div className={styles.recursoDetails}>
      <div className={styles.navigationBar}>
        <span className={styles.navIcon}>&gt;</span>
        <span>{chapter.name} &gt; {subchapter.nombre} &gt; {partida.nombre} &gt; {actividad.nombre} &gt; {recurso.nombre}</span>
      </div>
      <h2>{recurso.nombre}</h2>
      <div className={styles.formFields}>
        <div className={styles.formField}>
          <label htmlFor="actividadProc">Actividad de procedencia:</label>
          <input type="text" id="actividadProc" name="actividadProc" value={actividad.nombre} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="sistemaClasificacion">Sistema de clasificación:</label>
          <input type="text" id="sistemaClasificacion" name="sistemaClasificacion" value="Sistema ejemplo" readOnly />
        </div>
      </div>
      <h3>Datos del recurso</h3>
      <div className={styles.formFields}>
        <div className={styles.formField}>
          <label htmlFor="codigo">Código:</label>
          <input type="text" id="codigo" name="codigo" value={recurso.codigo} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="tipoRecurso">Tipo de recurso:</label>
          <input type="text" id="tipoRecurso" name="tipoRecurso" value={recurso.tipo} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={recurso.nombre} readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="importeCosteMedio">Importe coste medio:</label>
          <input type="text" id="importeCosteMedio" name="importeCosteMedio" value="1000.00" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="precioUnitario">Precio unitario:</label>
          <input type="text" id="precioUnitario" name="precioUnitario" value="500.00" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="cantidad">Cantidad:</label>
          <input type="text" id="cantidad" name="cantidad" value="10" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="costeTotal">Coste total:</label>
          <input type="text" id="costeTotal" name="costeTotal" value="5000.00" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="naturalezaRecurso">Naturaleza del recurso:</label>
          <input type="text" id="naturalezaRecurso" name="naturalezaRecurso" value="Material" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="factor">Factor:</label>
          <input type="text" id="factor" name="factor" value="1.5" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="rendimiento">Rendimiento:</label>
          <input type="text" id="rendimiento" name="rendimiento" value="0.8" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="fechaInicio">Fecha inicio:</label>
          <input type="text" id="fechaInicio" name="fechaInicio" value="01/07/2023" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="fechaFin">Fecha fin:</label>
          <input type="text" id="fechaFin" name="fechaFin" value="31/07/2023" readOnly />
        </div>
        <div className={styles.formField}>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea 
            id="descripcion" 
            name="descripcion" 
            value="Descripción de ejemplo para el recurso."
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default RecursoDetails;