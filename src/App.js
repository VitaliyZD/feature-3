import Competencies from './components/Competencies';
import './App.css'

function App() {

  const competencies = [
    {
      name: 'HTML',
      description: 'Язык разметки страницы',
      level: '40%'
    },
    {
      name: 'CSS',
      description: 'Язык стилей страницы',
      level: '30%'
    },
    {
      name: 'JS',
      description: 'Язык программирования',
      level: '20%'
    },
    {
      name: 'React',
      description: 'Библиотека пользовательских интерфейсов',
      level: '10%'
    }
  ]

  return (
    <div className='content'>
      <h1>Компетенции и уровень их изучения</h1>
      <Competencies competencies={competencies}></Competencies>
    </div>
  );
}

export default App;