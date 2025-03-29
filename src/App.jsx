import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AppRoutes from './routes/AppRoutes'
import './theme.css'
import Background from './components/background/Background'

function App() {
  return (
    <div className='App'>
      <Background />
      <div className="content-wrapper">

        <header>
          <Header />
        </header>
        <main>
          <AppRoutes />
        </main>
        <footer>
          <Footer />
        </footer>
        <ToastContainer />
      </div>
    </div>
  );
}


export default App
