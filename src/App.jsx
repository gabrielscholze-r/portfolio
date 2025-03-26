import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AppRoutes from './routes/AppRoutes'
import './theme.css'

function App() {
  return (
    <div className='App'>
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
  );
}


export default App
