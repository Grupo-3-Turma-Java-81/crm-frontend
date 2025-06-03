import React, { useEffect, useState } from 'react';

import { agendamentosMock, type Agendamento } from './AgendamentosMock';

const AgendamentosDoDia: React.FC = () => {
    const [agendamentosHoje, setAgendamentosHoje] = useState<Agendamento[]>([]);

    useEffect(() => {
        const hoje = new Date();
        const dataLocal = hoje.toLocaleDateString('sv-SE');
        const filtrados = agendamentosMock.filter((ag) => ag.data === dataLocal);
        setAgendamentosHoje(filtrados);
    }, []);

    return (
        <div className="bg-white p-6 rounded shadow min-h-screen pb-20 ml-50">
            <h2 className="text-xl font-bold mb-4">Agendamentos do Dia</h2>

            {agendamentosHoje.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pr-6">
                    {agendamentosHoje.map((ag) => (
                        <div
                            key={ag.id}
                            className="border rounded-lg p-4 shadow hover:shadow-md transition"
                        >
                            <h3 className="font-semibold text-lg">{ag.paciente}</h3>
                            <p className="text-gray-600">Horário: {ag.horario}</p>
                            <p className="text-gray-500 text-sm">Data: {ag.data}</p>
                            <p className="text-gray-500 text-sm font-semibold">Especialidade: {ag.especialidade}</p>
                            <p className="text-gray-600 font-semibold">Médico: {ag.medico}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">Não há agendamentos para hoje.</p>
            )}
        </div>
    );
};

export default AgendamentosDoDia;