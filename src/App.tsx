import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import SobreNos from './pages/sobre-nos/SobreNos';
import AgendamentosDoDia from './pages/agendamentos/Agendamento';

function App() {
    return (
        <>
            <BrowserRouter>
                < Navbar />

                <div className="min-h-[80vh]">
                    <Routes>
                        < Route path="/" element={< Home />} />
                        < Route path="/home" element={< Home />} />
                        < Route path="/sobre-nos" element={< SobreNos />} />
                        < Route path="/agendamento" element={< AgendamentosDoDia />} />
                    </Routes>
                </div>

                < Footer />
            </BrowserRouter>
        </>
    )
}

export default App
