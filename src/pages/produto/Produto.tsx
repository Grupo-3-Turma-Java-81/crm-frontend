import React, { useEffect, useState } from 'react';

type Agendamento = {
    id: number;
    paciente: string;
    horario: string;
    data: string;
};

const agendamentosMock: Agendamento[] = [
    { id: 1, paciente: 'Maria Silva', horario: '23:00', data: '2025-06-02' },
    { id: 2, paciente: 'João Souza', horario: '23:01', data: '2025-06-02' },
    { id: 3, paciente: 'Ana Lima', horario: '14:00', data: '2025-06-03' },
];

const AgendamentosDoDia: React.FC = () => {
    const [agendamentosHoje, setAgendamentosHoje] = useState<Agendamento[]>([]);

    useEffect(() => {
        const hoje = new Date();
        const dataLocal = hoje.toLocaleDateString('sv-SE'); 
        const filtrados = agendamentosMock.filter((ag) => ag.data === dataLocal);
        setAgendamentosHoje(filtrados);
    }, []);

    return (
        <div className="bg-white p-6 rounded shadow w-full">
            <h2 className="text-xl font-bold mb-4">Agendamentos do Dia</h2>
            {agendamentosHoje.length > 0 ? (
                <div className="flex gap-4 overflow-x-auto">
                    {agendamentosHoje.map((ag) => (
                        <div
                            key={ag.id}
                            className="min-w-[200px] border rounded-lg p-4 shadow hover:shadow-md transition"
                        >
                            <h3 className="font-semibold text-lg">{ag.paciente}</h3>
                            <p className="text-gray-600">Horário: {ag.horario}</p>
                            <p className="text-gray-500 text-sm">Data: {ag.data}</p>
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