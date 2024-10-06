import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, onChapterSelect, onSubchapterSelect, onPartidaSelect, onActividadSelect, onRecursoSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState({});
  const [expandedSubchapters, setExpandedSubchapters] = useState({});
  const [expandedPartidas, setExpandedPartidas] = useState({});
  const [expandedActividades, setExpandedActividades] = useState({});

  const chapters = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Capítulo ${i + 1}`,
    subcapitulos: Array.from({ length: 3 }, (_, j) => ({
      id: `${i + 1}.${j + 1}`,
      nombre: `Subcapítulo ${j + 1}`,
      partidas: Array.from({ length: 2 }, (_, k) => ({
        id: `${i + 1}.${j + 1}.${k + 1}`,
        codigo: `P${i + 1}${j + 1}${k + 1}`,
        nombre: `Partida ${k + 1}`,
        unidadMedida: 'Unidad',
        tipoContratacion: 'Tipo A',
        actividades: Array.from({ length: 2 }, (_, l) => ({
          id: `${i + 1}.${j + 1}.${k + 1}.${l + 1}`,
          codigo: `A${i + 1}${j + 1}${k + 1}${l + 1}`,
          nombre: `Actividad ${l + 1}`,
          unidadMedida: 'Unidad',
          tipologiaContratacion: 'Tipo B',
          recursos: Array.from({ length: 2 }, (_, m) => ({
            id: `${i + 1}.${j + 1}.${k + 1}.${l + 1}.${m + 1}`,
            codigo: `R${i + 1}${j + 1}${k + 1}${l + 1}${m + 1}`,
            nombre: `Recurso ${m + 1}`,
            tipo: 'Tipo C'
          }))
        }))
      }))
    }))
  }));

  useEffect(() => {
    console.log('Sidebar rendered. isOpen:', isOpen);
  }, [isOpen]);

  const toggleModal = () => {
    console.log('Toggle modal clicked');
    setIsModalOpen(!isModalOpen);
  };

  const toggleChapter = (chapterId) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const toggleSubchapter = (subchapterId) => {
    setExpandedSubchapters(prev => ({
      ...prev,
      [subchapterId]: !prev[subchapterId]
    }));
  };

  const togglePartida = (partidaId) => {
    setExpandedPartidas(prev => ({
      ...prev,
      [partidaId]: !prev[partidaId]
    }));
  };

  const toggleActividad = (actividadId) => {
    setExpandedActividades(prev => ({
      ...prev,
      [actividadId]: !prev[actividadId]
    }));
  };

  const handleChapterClick = (chapter) => {
    console.log('Chapter clicked:', chapter.name);
    onChapterSelect(chapter);
  };

  const handleSubchapterClick = (chapter, subchapter) => {
    console.log('Subchapter clicked:', subchapter.nombre);
    onSubchapterSelect(chapter, subchapter);
  };

  const handlePartidaClick = (chapter, subchapter, partida) => {
    console.log('Partida clicked:', partida.nombre);
    onPartidaSelect(chapter, subchapter, partida);
  };

  const handleActividadClick = (chapter, subchapter, partida, actividad) => {
    console.log('Actividad clicked:', actividad.nombre);
    onActividadSelect(chapter, subchapter, partida, actividad);
  };

  const handleRecursoClick = (chapter, subchapter, partida, actividad, recurso) => {
    console.log('Recurso clicked:', recurso.nombre);
    onRecursoSelect(chapter, subchapter, partida, actividad, recurso);
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.fixedHeader}>
        <span onClick={toggleModal} className={styles.collapseAll}>Contraer todo</span>
        {isModalOpen && (
          <div className={styles.modal}>
            <button>Expandir Todo</button>
            <button>Subcapítulos</button>
            <button>Partidas</button>
            <button>Actividades</button>
          </div>
        )}
      </div>
      <nav className={styles.scrollableContent}>
        <ul className={styles.chapterList}>
          {chapters.map((chapter) => (
            <li key={chapter.id} className={styles.chapterItem}>
              <div className={styles.chapterHeader}>
                <span 
                  className={styles.expandIcon}
                  onClick={() => toggleChapter(chapter.id)}
                >
                  {expandedChapters[chapter.id] ? <FaChevronDown /> : <FaChevronRight />}
                </span>
                <span 
                  className={styles.chapterName}
                  onClick={() => handleChapterClick(chapter)}
                >
                  {chapter.name}
                </span>
              </div>
              {expandedChapters[chapter.id] && (
                <ul className={styles.subcapituloList}>
                  {chapter.subcapitulos.map((subcapitulo) => (
                    <li key={subcapitulo.id} className={styles.subcapituloItem}>
                      <div className={styles.subcapituloHeader}>
                        <span 
                          className={styles.expandIcon}
                          onClick={() => toggleSubchapter(subcapitulo.id)}
                        >
                          {expandedSubchapters[subcapitulo.id] ? <FaChevronDown /> : <FaChevronRight />}
                        </span>
                        <span 
                          className={styles.subcapituloName}
                          onClick={() => handleSubchapterClick(chapter, subcapitulo)}
                        >
                          {subcapitulo.nombre}
                        </span>
                      </div>
                      {expandedSubchapters[subcapitulo.id] && (
                        <ul className={styles.partidaList}>
                          {subcapitulo.partidas.map((partida) => (
                            <li key={partida.id} className={styles.partidaItem}>
                              <div className={styles.partidaHeader}>
                                <span 
                                  className={styles.expandIcon}
                                  onClick={() => togglePartida(partida.id)}
                                >
                                  {expandedPartidas[partida.id] ? <FaChevronDown /> : <FaChevronRight />}
                                </span>
                                <span 
                                  className={styles.partidaName}
                                  onClick={() => handlePartidaClick(chapter, subcapitulo, partida)}
                                >
                                  {partida.nombre}
                                </span>
                              </div>
                              {expandedPartidas[partida.id] && (
                                <ul className={styles.actividadList}>
                                  {partida.actividades.map((actividad) => (
                                    <li key={actividad.id} className={styles.actividadItem}>
                                      <div className={styles.actividadHeader}>
                                        <span 
                                          className={styles.expandIcon}
                                          onClick={() => toggleActividad(actividad.id)}
                                        >
                                          {expandedActividades[actividad.id] ? <FaChevronDown /> : <FaChevronRight />}
                                        </span>
                                        <span 
                                          className={styles.actividadName}
                                          onClick={() => handleActividadClick(chapter, subcapitulo, partida, actividad)}
                                        >
                                          {actividad.nombre}
                                        </span>
                                      </div>
                                      {expandedActividades[actividad.id] && (
                                        <ul className={styles.recursoList}>
                                          {actividad.recursos.map((recurso) => (
                                            <li 
                                              key={recurso.id} 
                                              className={styles.recursoItem}
                                              onClick={() => handleRecursoClick(chapter, subcapitulo, partida, actividad, recurso)}
                                            >
                                              {recurso.nombre}
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;