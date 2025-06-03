import React from "react";

import UltimasNoticias from "./UltimasNoticias";
import { agendamentosMock } from "../agendamentos/AgendamentosMock";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 pl-64 pt-20">
            <div className="container mx-auto px-8 space-y-4">

                <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex justify-start">
                        <button className="bg-[#D91147] text-white px-6 py-2 rounded-md 
                                            hover:bg-[#B30E3C] transition-colors font-semibold">
                            <Link to='/novoagendamento' className='flex items-center gap-2 hover:underline'>
                                <span className="font-bold">Novo Agendamento</span>
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 w-full">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                        Agendamentos do Dia
                    </h2>
                    <div className="overflow-x-auto">
                        <div className="flex space-x-4 min-w-fit">
                            {agendamentosMock.map((ag, idx) => (
                                <div
                                    key={idx}
                                    className="min-w-[250px] border rounded-md p-4 bg-white shadow-sm"
                                >
                                    <p className="font-bold">{ag.paciente}</p>
                                    <p>Horário: {ag.horario}</p>
                                    <p>Data: {ag.data}</p>
                                    <p>Especialidade: {ag.especialidade}</p>
                                    <p className="font-semibold text-gray-800">
                                        Médico: {ag.medico}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                < UltimasNoticias />
            </div>
        </div>
    );
};

export default Home;