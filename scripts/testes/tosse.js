module.exports = (robot) => {

    //Pergunta se o paciente tem tosse
    robot.hear(/[0-9]/ig, (res) => {
      res.send(`Voc   tem tosse? \n
  \t 1  - N  o \n
  \t 2  - Sim, tosse seca \n
  \t 3  - Sim, tosse com catarro \n
  \t Digite um dos n  meros acima \n
                  `)
    
                  res.match[0].shift()
                })
    
    
}