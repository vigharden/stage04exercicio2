/*
Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

Nesse desafio você irá criar uma lista de **estudantes** e, 
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique 
**se** cada aluno obteve sucesso ou não em entrar no concurso e mostre 
uma mensagem na tela.
*/

let studentsList = [
    {
        studentName: "Luiz",
        firstGrade: 10,
        secondGrade: 9,
    },
    {
        studentName: "Maria",
        firstGrade: 5,
        secondGrade: 9,
    },
    {
        studentName: "Jose",
        firstGrade: 5,
        secondGrade: 3,
    }
]

alert("Bem-vindo ao portal do aluno!")

function averageResult(firstGrade, secondGrade) {
   let average = ((firstGrade + secondGrade) / 2).toFixed(2)
   return average
}

for(let student of studentsList) {
    personalAverage = averageResult(student.firstGrade, student.secondGrade)
    let approvedOrNot = personalAverage < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

    alert(`A média de ${student.studentName} é ${personalAverage}. ${approvedOrNot}`)
}

