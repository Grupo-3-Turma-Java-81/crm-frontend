import { agendamentosMock } from "./AgendamentosMock";

function AgendamentosForm() {

    return (
        <form className="p-4  rounded max-w-md mx-auto shadow">
            <h2 className="text-xl font-bold mb-4">Agendar Consulta</h2>

            <div className="mb-3">
                <label className="block mb-1 font-medium">Nome do Paciente</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Digite o nome do paciente"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Hora</label>
                <input
                    type="time"
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-3">
                <label className="block mb-1 font-medium">Data</label>
                <input
                    type="date"
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-3">
                <label className="block mb-1 font-medium">Médico</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Digite o nome do médico"
                />
            </div>

            <div className="mb-3">
                <label className="block mb-1 font-medium">Especialidade</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Digite a especialidade"
                />
            </div>

            <button className="bg-[#D91147] text-white px-6 py-2 rounded-md 
                                            hover:bg-[#B30E3C] transition-colors font-semibold">

                Agendar
            </button>
        </form>
    );
};

export default AgendamentosForm;
