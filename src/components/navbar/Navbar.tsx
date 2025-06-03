import { Link } from "react-router-dom";
import { Home, Users, Pill } from "lucide-react";

function Navbar() {
    return (
        <div className='h-screen w-64 bg-gray-200 text-blue-950 flex flex-col p-6 fixed'>

            <Link to='/' className="flex justify-center mb-10">
                <img src="./src/assets/logo-gen.png"
                alt="Logo Clínica Médica Gen"
                className="w-20 h-20 rounded-full" />
            </Link>

            <div className='flex flex-col gap-6 text-lg'>
                <Link to='/home' className='flex items-center gap-2 hover:underline'>
                    <Home size={20} />
                    <span className="font-bold">Início</span>
                </Link>

                <Link to='/sobre-nos' className='flex items-center gap-2 hover:underline'>
                    <Users size={20} />
                    <span className="font-bold">Sobre Nós</span>
                </Link>

                <Link to='/produto' className='flex items-center gap-2 hover:underline'>
                    <Pill size={20} />
                    <span className="font-bold">Produto</span>
                </Link>

            </div>
        </div>
    );
}

export default Navbar;
