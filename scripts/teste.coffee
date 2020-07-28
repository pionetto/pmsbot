TextMessage = require('hubot').TextMessage

class EarDropping 
  constructor: (@robot) ->
    @cache = []
    @robot.brain.on 'loaded', =>
      if @robot.brain.data.eardropping
        @cache = @robot.brain.data.eardropping
  add: (pattern, action, order) ->
    task = {key: pattern, task: action, order: order}
    @cache.push task
    @robot.brain.data.eardropping = @cache
  all: -> @cache
  deleteByPattern: (pattern) ->
    @cache = @cache.filter (n) -> n.key != pattern
    @robot.brain.data.eardropping = @cache
  deleteAll: () ->
    @cache = []
    @robot.brain.data.eardropping = @cache

module.exports = (robot) ->
  earDropping = new EarDropping robot

  
  # re = /p (.+?) e (.+?)$/i
  # str = 'p 20 e 30'

  # arrayteste = re.exec(str)
  
  robot.respond /p (.+?) e (.+?)$/i, (msg) ->
    key = msg.match[1]
    for task_raw in msg.match[2].split ";"
      task_split = task_raw.split "|"
      # If it's a single task, don't add an "order" property
      if not task_split[1]
        earDropping.add(key, task_split[0])
      else
        earDropping.add(key, task_split[1], task_split[0])
    # msg.send "=========================================================@="
    # msg.send "O elemento 0 da matriz é: #{msg.match[0]}."
    # msg.send "O elemento 1 da matriz é: #{msg.match[1]}."
    # msg.send "O elemento 2 da matriz é: #{msg.match[2]}."
    # msg.send "============================================================"
    # msg.send "O elemento teste e: #{arrayteste}."
    # earDropping.deleteAll()
    msg.match.splice(0, 3)
    msg.send "O elemento 0 da matriz é: #{msg.match[0]}."
    msg.send "O elemento 1 da matriz é: #{msg.match[1]}."
    msg.send "O elemento 2 da matriz é: #{msg.match[2]}."
#     msg.send "O elemento key é: #{key}."
#     earDropping.deleteAll()
  
  robot.hear /p (.+?) e (.+?)$/i, (msg) ->
      # earDropping.deleteAll()
      msg.reply "============================================================"
      msg.reply "O elemento 0 da matriz da segunda chamada é: #{msg.match[0]}."
      msg.reply "O elemento 1 da matriz da segunda chamada é: #{msg.match[1]}."
      msg.reply "O elemento 2 da matriz da segunda chamada é: #{msg.match[2]}."
#       msg.send "O elemento key da segunda chamada é: #{earDropping.n.key}."
#       msg.send 'Ainda tem itens na lista'

  # robot.respond /pare de ouvir *teste$/i, (msg) ->
  #   earDropping.deleteAll()
  #   msg.send 'Okay, fine. :( I will keep my ears shut.'
  #   msg.send "O elemento 0 da matriz é: #{msg.match[0]}."
  #   msg.send "O elemento 1 da matriz é: #{msg.match[1]}."
  #   msg.send "O elemento 2 da matriz é: #{msg.match[2]}."    

  # robot.hear /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/i, (msg) ->

  robot.respond /testando123(.+)$/i, (msg) ->
    robotHeard = msg.match[1]
    msg.send "testando123456"

    tasks = earDropping.all()
    tasks.sort (a,b) ->
      return if a.order >= b.order then 1 else -1

    tasksToRun = []
    for task in tasks
      if new RegExp(task.key, "i").test(robotHeard)
        tasksToRun.push task

    tasksToRun.sort (a,b) ->
      return if a.order >= b.order then 1 else -1

    for task in tasksToRun
      if (robot.name != msg.message.user.name && !(new RegExp("^#{robot.name}", "i").test(robotHeard)))
        robot.receive new TextMessage(msg.message.user, "#{robot.name}: #{task.task}")