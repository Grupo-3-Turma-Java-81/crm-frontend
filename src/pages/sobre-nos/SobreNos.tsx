import { equipe } from "./Equipe";

function SobreNos() {
    return (
        <div className="min-h-screen ml-50 p-8 pb-20">

            <h1 className="text-3xl font-bold text-center mb-10 text-blue-950">Sobre Nós</h1>

            <div className="flex justify-center mb-12">
                <div className="flex items-center gap-6 max-w-6xl w-full px-4">

                    <a
                        href="https://github.com/Grupo-3-Turma-Java-81/crm-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="./src/assets/logo/logo-gen.png"
                            alt="Logo Gen Clínica Médica"
                            className="w-60 h-60 object-contain border-2 border-gray-300 shadow-md"
                        />
                    </a>

                    <div className="flex flex-col gap-6 text-justify">
                        <p className="max-w-3xl">
                            O sistema da Clínica Médica Gen é simples e eficiente de cadastro, consulta,
                            atualização e exclusão de informações de pacientes e médicos. Voltado para o
                            uso interno de clínicas, substituindo métodos manuais de organização por uma
                            solução digital ágil e segura.
                        </p>

                        <div className="max-w-3xl">
                            <p className="font-bold text-[#D91147] mb-1">Nosso objetivo:</p>
                            <p>
                                Automatizar o gerenciamento de dados básicos em clínicas médicas, melhorando
                                a organização do ambiente de trabalho, reduzindo erros e aumentando a eficiência
                                no atendimento.
                            </p>
                        </div>
                    </div>
                </div>
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
                            </a>

                            <div className="text-left max-w-2xl space-y-1">
                                <div className="flex flex-wrap items-center gap-x-2">
                                    <p className="text-lg font-bold">{pessoa.nome}</p>
                                    <span className="text-gray-600 text-sm">— {pessoa.descricao}</span>
                                </div>
                                <p className="font-normal text-justify">{pessoa.sobre}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default SobreNos