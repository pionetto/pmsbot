//Pergunta como o paciente esta se sentindo
module.exports = (robot) => {

      //Pergunta se o paciente tem dificuldade em respirar
      robot.hear(/[0-9]/ig, (res) => {
        res.send(`Voc   est   com dificuldade para respirar? \n
    \t 1  - N  o \n
    \t 2  - Sim, mas n  o me impede de fazer tarefas simples \n
    \t 3  - Sim, me impede de fazer tarefas simples \n
    \t Digite um dos n  meros acima \n
                    `)
    
                    res.match[0].shift()
                })
    
      
      
}