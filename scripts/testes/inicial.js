module.exports = (robot) => {
    robot.hear(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/ig, (res) => {
      res.send (`Como você está se sentindo hoje?  \n
  \t 1  - Ótimo \n
  \t 2  - Bem \n
  \t 3  - Regular \n
  \t 4  - Mal \n
  \t Digite um dos números acima \n 
  \t Elemento match - ${res.match[0]} \n `)
  
  res.match[1] = res.match[0];
  res.match[0].shift()
})
  
}