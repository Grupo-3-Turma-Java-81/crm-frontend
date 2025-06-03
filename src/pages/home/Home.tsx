import AgendamentosDoDia from "../agendamentos/Agendamento"

function Home() {
    return (
        <>
            <div className="flex justify-center p-4">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex justify-around gap-4">
                        <div className="flex justify-around gap-4 font-bold">
                            <button
                                className='border rounded px-4 py-2 hover:bg-gray-200 text-blue-950'>
                                Novo Agendamento
                            </button>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <AgendamentosDoDia/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home