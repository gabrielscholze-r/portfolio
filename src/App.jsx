import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import AppRoutes from "./routes/AppRoutes";
import "./theme.css";
import Background from "./components/common/background/Background";

function App() {
  return (
    <div className="App">
      <Background />
      <div className="content-wrapper">
        <header className="fixed-top">
          <Header />
        </header>
        <main className="pt-5 mt-5">
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

export default App;
