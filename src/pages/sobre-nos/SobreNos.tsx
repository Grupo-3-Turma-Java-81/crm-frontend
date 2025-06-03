import { equipe } from "./Equipe";

function SobreNos() {
    return (
        <div className="min-h-screen ml-[200px] p-8">
            <h1 className="text-3xl font-bold text-center mb-10 text-blue-950">Sobre Nós</h1>

            <div className="flex items-center gap-6">
                <a href="https://github.com/Grupo-3-Turma-Java-81/crm-backend">
                    <img
                        src="./src/assets/logo-gen.png"
                        alt="Logo Gen Clínica Médica"
                        className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-md"
                    />
                    <p className="text-gray-700 text-justify">
                        O sistema da Clínica Médica Gen é simples e eficiente de cadastro, consulta,
                        atualização e exclusão de informações de pacientes e médicos. Voltado para o
                        uso interno de clínicas, o objetivo é substituir métodos manuais de organização
                        por uma solução digital ágil e segura.
                    </p>
                </a>
            </div>

            <div className="flex flex-col gap-16 px-20 py-10">
                {equipe.map((pessoa, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-10 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    >
                        <div className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <a href={pessoa.github} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={pessoa.imagem}
                                    alt={`Imagem de ${pessoa.nome}`}
                                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-md"
                                />
                                <div className="text-left">
                                    <p className="text-lg font-bold">{pessoa.nome}</p>
                                    <p className="text-gray-600">{pessoa.descricao}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SobreNos