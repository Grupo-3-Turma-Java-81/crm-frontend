export type Agendamento = {
    id: number;
    paciente: string;
    horario: string;
    data: string;
    medico: string;
    especialidade: string;
};

export const agendamentosMock: Agendamento[] = [
    {
        id: 1, paciente: 'Fernanda Pires', horario: '08:45', data: '2025-06-03',
        medico: 'Henrique Castro', especialidade: 'Cardiologista'
    },
    {
        id: 2, paciente: 'Luiz Fernando Reis', horario: '09:00', data: '2025-06-03',
        medico: 'Roberta Lima', especialidade: 'Dermatologista'
    },
    {
        id: 3, paciente: 'Juliana Freire', horario: '09:40', data: '2025-06-03',
        medico: 'Ana Braga', especialidade: 'Cardiologia'
    },
    {
        id: 4, paciente: 'Eduardo Leal', horario: '09:30', data: '2025-06-03',
        medico: 'Camila Andrade', especialidade: 'Neurologista'
    },
    {
        id: 5, paciente: 'Sandra Aparecida Melo', horario: '10:30', data: '2025-06-03',
        medico: 'Roberta Lima', especialidade: 'Dermatologista'
    },
    {
        id: 6, paciente: 'Gustavo Rodrigues', horario: '10:30', data: '2025-06-03',
        medico: 'Alfredo Campos', especialidade: 'Urologia'
    },
    {
        id: 7, paciente: 'Isabella Barros', horario: '10:45', data: '2025-06-03',
        medico: 'Cassia Santos', especialidade: 'Ginecologia'
    },
    {
        id: 8, paciente: 'Caio Menezes', horario: '11:15', data: '2025-06-03',
        medico: 'Roberta Lima', especialidade: 'Dermatologista'
    },
    {
        id: 9, paciente: 'Beatriz Lima Costa', horario: '13:00', data: '2025-06-03',
        medico: 'Camila Andrade', especialidade: 'Neurologista'
    },
    {
        id: 10, paciente: 'Pedro Silveira', horario: '13:40', data: '2025-06-03',
        medico: 'Maria Rodrigues', especialidade: 'Pediatra'
    },
    {
        id: 11, paciente: 'João Ricardo Nogueira', horario: '14:10', data: '2025-06-03',
        medico: 'Henrique Castro', especialidade: 'Cardiologista'
    },
    {
        id: 12, paciente: 'Edgar Santos', horario: '14:20', data: '2025-06-03',
        medico: 'José Alfredo', especialidade: 'Clinico Geral'
    },
    {
        id: 13, paciente: 'João Souza', horario: '14:20', data: '2025-06-03',
        medico: 'Juberto Santos', especialidade: 'Ortopedista'
    },
    {
        id: 14, paciente: 'Ana Uliana', horario: '15:00', data: '2025-06-03',
        medico: 'José Alfredo', especialidade: 'Clinico Geral'
    },
    {
        id: 15, paciente: 'Maria Silva', horario: '15:00', data: '2025-06-03',
        medico: 'Juberto Santos', especialidade: 'Ortopedista'
    },
    {
        id: 16, paciente: 'Edson Boing', horario: '15:35', data: '2025-06-03',
        medico: 'Alfredo Campos', especialidade: 'Urologia'
    },
    {
        id: 17, paciente: 'Ricardo Fagundes', horario: '15:40', data: '2025-06-03',
        medico: 'Camila Andrade', especialidade: 'Neurologista'
    },
    {
        id: 18, paciente: 'Thais Santos', horario: '15:45', data: '2025-06-03',
        medico: 'Ana Braga', especialidade: 'Cardiologia'
    },
    {
        id: 19, paciente: 'Ana Lima', horario: '16:40', data: '2025-06-03',
        medico: 'Juberto Santos', especialidade: 'Ortopedista'
    },
    {
        id: 20, paciente: 'Mariana Duarte', horario: '16:20', data: '2025-06-03',
        medico: 'Henrique Castro', especialidade: 'Cardiologista'
    },
    {
        id: 21, paciente: 'Joaquina Ferreira', horario: '17:00', data: '2025-06-03',
        medico: 'Maria Rodrigues', especialidade: 'Pediatra'
    },
    {
        id: 22, paciente: 'Gabriela Cavalcante', horario: '18:50', data: '2025-06-03',
        medico: 'Maria Rodrigues', especialidade: 'Pediatra'
    },
    {
        id: 23, paciente: 'Nathalia Monteiro', horario: '11:50', data: '2025-06-03',
        medico: 'Vinícius Almeida', especialidade: 'Endocrinologista'
    },
    {
        id: 24, paciente: 'Bruno Teixeira', horario: '17:40', data: '2025-06-03',
        medico: 'Lorena Vasques', especialidade: 'Reumatologista'
    }
];
