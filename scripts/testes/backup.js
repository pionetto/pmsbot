// Description:
//    An example script, tells you the time. See below on how documentation works.
//    https://github.com/hubotio/hubot/blob/master/docs/scripting.md#documenting-scripts
// 
// Commands:
//    bot what time is it? - Tells you the time
//    bot what's the time? - Tells you the time
//
// module.exports = (robot) => {
//   robot.hear (/netto/, (res) => {
//     res.send 'Como voce esta se sentindo hoje?'

//     res.send "1 - Ótimo "
//     res.send "2 - Bem "
//     res.send "3 - Regular "
//     res.send "4 - Mal "
//     res.send "digite um dos números acima "
//   })
//   robot.hear (/4/, (res) => {
//     res.send "Voce tem febre? "
//     res.send "1 - Nao "
//     res.send "2 - Sim, abaixo de 38 "
//     res.send "3 - Sim, 38 ou acima "

//   robot.hear /3/, (res) =>
//     res.send "Voce tem tosse?"
//   })
// }

/*
Nome
febre
tosse
respirar
encaminha
naotem
condutas
videos

*/


//Pergunta como o paciente esta se sentindo
module.exports = (robot) => {
  robot.hear(/^[A-Za-z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/gi, (res) => {
    res.send (`Como você está se sentindo hoje?  \n
\t 1  - Ótimo \n
\t 2  - Bem \n
\t 3  - Regular \n
\t 4  - Mal \n
\t Digite um dos números acima \n `)
  })
  
  //Pergunta se o paciente tem febre
  robot.hear(/febre/i, (res) => {
    res.send(`Voce tem febre? \n 
\t 1  - Nao \n 
\t 2  - Sim, abaixo de 38 \n 
\t 3  - Sim, 38 ou acima \n
\t Digite um dos n  meros acima \n `)
  })

  //Pergunta se o paciente tem tosse
  robot.hear(/tosse/i, (res) => {
    res.send(`Voc   tem tosse? \n
\t 1  - N  o \n
\t 2  - Sim, tosse seca \n
\t 3  - Sim, tosse com catarro \n
\t Digite um dos n  meros acima \n
                `)
  })


    //Pergunta se o paciente tem dificuldade em respirar
    robot.hear(/respirar/i, (res) => {
      res.send(`Voc   est   com dificuldade para respirar? \n
  \t 1  - N  o \n
  \t 2  - Sim, mas n  o me impede de fazer tarefas simples \n
  \t 3  - Sim, me impede de fazer tarefas simples \n
  \t Digite um dos n  meros acima \n
                  `)
    })
    
    //Encaminha para um atendente
    robot.hear(/encaminha/i, (res) => {
      res.send(`Vou te encaminhar para um atendente, mas antes preciso que me informe alguns dados pessoais. \n 
  \t Qual o seu nome completo? \n
                `)
    })
  
    //Resposta informando que n  o tem sintomas que se enquadram ao coronav  rus
    robot.hear(/naotem/i, (res) => {
      res.send(`Baseado em suas respostas,    prov  vel que esta situa    o N ^cO se enquadre como caso suspeito de doen  a pelo coronav  rus. \n
  \t No entanto, isso n  o se trata de diagn  stico. \n
  \t Mantenha as condutas de precau    o e preven    o. \n
  \n
  \t 1  - Ver condutas de preven    o \n
  \t 2  - Sair \n
  \t Digite um dos n  meros acima \n
                  `)
    })
  
    //Informa condutas de preven    o
    robot.hear(/condutas/i, (res) => {
      res.send(`Lave as m  os com frequ  ncia usando   gua e sab  o ou higienize com   lcool gel 70%; \n
  - Cubra a boca e nariz com im len  o de papel ao tossir ou espirrar e jogue no lixo \n
  ap  s o uso, ou proteja com o antebra  o (nunca com as m  os); \n
  - Evite tocar nos olhos, nariz e boca com as m  os n  o lavadas; \n
  - Evite locais com aglomera    o de pessoas; \n
  - N  o compartilhe objetos de uso pessoal; \n
  - Evite contato pr  ximo com pessoas resfriadas ou que estejam com sintomas de gripe; \n
  - Beba pelo menos 6 a 8 copos de   gua por dia; \n
  \n
  1  - Ver v  deos informativos \n
  2  - Sair \n
  \n
  Digite um dos n  meros acima \n
                  `)
    })
  
    //Informa os v  deos informativos
  
    robot.hear(/videos/i, (res) => {
      res.send(`
  - Aprenda a maneira correta de lavar as m  os \n
  - Etiquetas de higiene \n
  - Preven  ao coronav  rus \n
  - Aprenda a maneira correta de lavar as m  os \n
  - Etiquetas de higiene \n
  - Preven  ao coronav  rus \n
  \n
  Foi um prazer te atender! Juntos vamos vencer esta doen  a. \n
                  `)
    })

}

/*

Encaminhando mensagem a um usuario
Messages to a room or user
Messages can be sent to a specified room or user using the messageRoom function.

module.exports = (robot) ->

  robot.hear /green eggs/i, (res) ->
    room = "mytestroom"
    robot.messageRoom room, "I do not like green eggs and ham.  I do not like them sam-I-am."
User name can be explicitely specified if desired ( for a cc to an admin/manager), or using the response object a private message can be sent to the original sender.

  robot.respond /I don't like Sam-I-am/i, (res) ->
    room =  'joemanager'
    robot.messageRoom room, "Someone does not like Dr. Seus"
    res.reply  "That Sam-I-am\nThat Sam-I-am\nI do not like\nthat Sam-I-am"

  robot.hear /Sam-I-am/i, (res) ->
    room =  res.envelope.user.name
    robot.messageRoom room, "That Sam-I-am\nThat Sam-I-am\nI do not like\nthat Sam-I-am"
*/