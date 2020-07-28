'use strict'
const chai = require('chai')
chai.use(require('sinon-chai'))

const expect = chai.expect

const User = require('/Users/xroot/hubot-rocketchat-boilerplate/node_modules/hubot/src/user.js')
const Message = require('/Users/xroot/hubot-rocketchat-boilerplate/node_modules/hubot/src/message.js').Message
const TextMessage = require('/Users/xroot/hubot-rocketchat-boilerplate/node_modules/hubot/src/message.js').TextMessage


module.exports = (robot) => {
    //Pergunta se o paciente tem febre
    robot.hear(/[0-9]/ig, (res) => {
      res.send(`Voc   tem febre? \n 
  \t 1  - N  o \n 
  \t 2  - Sim, abaixo de 38 \n 
  \t 3  - Sim, 38 ou acima \n
  \t Digite um dos n  meros acima \n
  \t Elemento match - ${res.match[0]} \n
  \t Elemento message - ${res.message.text} \n `)

  res.match[0].shift();
  })
    
    
}