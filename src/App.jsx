import './App.css'
import Header from './components/header/Header'
import AppRoutes from './routes/AppRoutes'
import './theme.css'

function App() {

  return (
    <div className='App'>
      <header>
        <Header/>
      </header>
      <AppRoutes/>
    </div>
  )
}

export default App
