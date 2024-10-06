import React, { useState } from 'react'
import Layout from './components/Layout'
import ChapterDetails from './components/ChapterDetails'
import SubchapterDetails from './components/SubchapterDetails'
import PartidaDetails from './components/PartidaDetails'
import ActividadDetails from './components/ActividadDetails'
import RecursoDetails from './components/RecursoDetails'
import PartidasList from './components/PartidasList'
import ActividadesList from './components/ActividadesList'
import RecursosList from './components/RecursosList'
import Home from './components/Home'
import './App.css'

function App() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSubchapter, setSelectedSubchapter] = useState(null);
  const [selectedPartida, setSelectedPartida] = useState(null);
  const [selectedActividad, setSelectedActividad] = useState(null);
  const [selectedRecurso, setSelectedRecurso] = useState(null);
  const [selectedView, setSelectedView] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
    setSelectedSubchapter(null);
    setSelectedPartida(null);
    setSelectedActividad(null);
    setSelectedRecurso(null);
    setSelectedView('chapter');
  };

  const handleSubchapterSelect = (chapter, subchapter) => {
    setSelectedChapter(chapter);
    setSelectedSubchapter(subchapter);
    setSelectedPartida(null);
    setSelectedActividad(null);
    setSelectedRecurso(null);
    setSelectedView('subchapter');
  };

  const handlePartidaSelect = (chapter, subchapter, partida) => {
    setSelectedChapter(chapter);
    setSelectedSubchapter(subchapter);
    setSelectedPartida(partida);
    setSelectedActividad(null);
    setSelectedRecurso(null);
    setSelectedView('partida');
  };

  const handleActividadSelect = (chapter, subchapter, partida, actividad) => {
    setSelectedChapter(chapter);
    setSelectedSubchapter(subchapter);
    setSelectedPartida(partida);
    setSelectedActividad(actividad);
    setSelectedRecurso(null);
    setSelectedView('actividad');
  };

  const handleRecursoSelect = (chapter, subchapter, partida, actividad, recurso) => {
    setSelectedChapter(chapter);
    setSelectedSubchapter(subchapter);
    setSelectedPartida(partida);
    setSelectedActividad(actividad);
    setSelectedRecurso(recurso);
    setSelectedView('recurso');
  };

  const handleNavItemClick = (view) => {
    setSelectedView(view);
    setSidebarOpen(false); // Cerrar el sidebar al hacer clic en un elemento del menú superior
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Layout 
      onChapterSelect={handleChapterSelect} 
      onSubchapterSelect={handleSubchapterSelect}
      onPartidaSelect={handlePartidaSelect}
      onActividadSelect={handleActividadSelect}
      onRecursoSelect={handleRecursoSelect}
      onNavItemClick={handleNavItemClick}
      toggleSidebar={toggleSidebar}
      sidebarOpen={sidebarOpen}
    >
      {selectedView === 'home' && <Home />}
      {selectedView === 'partidas' && <PartidasList />}
      {selectedView === 'actividades' && <ActividadesList />}
      {selectedView === 'recursos' && <RecursosList />}
      {selectedView === 'chapter' && <ChapterDetails chapter={selectedChapter} />}
      {selectedView === 'subchapter' && <SubchapterDetails chapter={selectedChapter} subchapter={selectedSubchapter} />}
      {selectedView === 'partida' && <PartidaDetails chapter={selectedChapter} subchapter={selectedSubchapter} partida={selectedPartida} />}
      {selectedView === 'actividad' && <ActividadDetails chapter={selectedChapter} subchapter={selectedSubchapter} partida={selectedPartida} actividad={selectedActividad} />}
      {selectedView === 'recurso' && <RecursoDetails chapter={selectedChapter} subchapter={selectedSubchapter} partida={selectedPartida} actividad={selectedActividad} recurso={selectedRecurso} />}
    </Layout>
  )
}

export default App