// const TelegramBot = require('node-telegram-bot-api'); 


//BOT para integração com o Telegram e botões para selecionar opções

module.exports = (robot) => {
  robot.respond(/iptu/i, function (res) {
    res.envelope.telegram = {
            reply_markup: JSON.stringify({          
            keyboard: [
              [{text: 'Consultar IPTU', url: 'http://portalservicos.santarem.pa.gov.br/01/servlet/ps_iptu'}],
              [{text: 'Pagar IPTU', url: 'http://portalservicos.santarem.pa.gov.br/01/servlet/ps_iptu'} ], 
              [{text: 'Consula Debitos', callback_data: 'consultadebitos'} ],
              [{text: 'Validar Certidão', callback_data: 'validarcertidao'} ]
            ], 
            hide_keyboard: true,
            one_time_keyboard: true
            })
          }
          res.send("Selecione uma das opções do teclado.")
  })
    robot.respond(/consultariptu/, (res) => {
    res.send (`Me informe o numero do imovel: formato 00.00.000.0000.000\n
    `)
  })

  robot.hear(/\/start/ig, (res) => {
    res.send (`*Serviços ao Cidadão e Empresas de Santarém* \n
\t Aqui você encontra nossos serviços on-line disponíveis ao cidadão e empresas.\n
\t /cidadao - Você tem acesso aos serviços disponíveis ao cidadão. \n
\t /empresa - Você tem acesso aos serviços disponíveis para empresas. \n
    `)
  })
 
  //================ SERVIÇOS AO CIDADÃO ==================
  robot.hear(/\/cidadao/ig, (res) => {
    res.send (`*Serviços ao Cidadão:*

\t /impostosetaxaspf - IMPOSTOS E TAXAS (IPTU, Alvará, ITBI, Nota Fiscal, DAM) de Pessoa Física \n
\t /certidoespf - Certidões negativa de débito de Pessoa Física, IPTU, ITBI \n
\t /autenticidadespf - Validar autenticidade de certidões negativa de débito de Pessoa Física, IPTU, ITBI, Alvará, Nota Fiscal, Obra, Autônomo. \n
\t /outrosservicospf - Serviços diversos - , Portal da Transparência, Canal do Contribuinte, Perguntas Frequentes \n

\t Digite / para ver a lista de serviços disponíveis \n
\t Ou /start para voltar ao menu inicial de serviços\n
    `)
  })

  /*

  IMPOSTOS E TAXAS
Segunda Via IPTU - OK - OK
Impressao on-line de Alvara - OK - OK
Calculo Previo de ITBI - OK - OK
Nota Fiscal Eletronica - OK - OK
Consultar Pagamento DAM - OK - OK

CERTIDÕES/CERTIDÕES NEGATIVAS
certidao negativa pessoa fisica - OK - OK
certidao negativa IPTU - OK - 
certidao negativa ITBI - OK  - 

AUTENTICIDADES
CND Pessoa Física - OK - OK
CND IPTU - OK - 
CND ITBI - OK - 
CND Autonomo - OK - 
CND Obra - OK - 
CND Alvará - OK - 
Nota Fiscal - OK - 
ITBI - OK - 

OUTROS SERVIÇOS
Portal da Transparencia - OK
Canal do contribuinte - OK
Perguntas Frequentes - OK

concursos - http://santarem.pa.gov.br/pagina.asp?id_pagina=66
Ouvidoria Municipal SUS/SEMSA - http://santarem.pa.gov.br/pagina.asp?id_pagina=96
Plano Diretor e Planos Setoriais - http://santarem.pa.gov.br/pagina.asp?id_pagina=86
Proposta Curricular - http://santarem.pa.gov.br/pagina.asp?id_pagina=98

  */

 robot.hear(/\/impostosetaxaspf/ig, (res) => {
  res.send (`Entendi. Deseja verificar algo relacionado a IMPOSTOS E TAXAS.
Você pode escolher uma das opções disponíveis abaixo: \n
  
\t /iptu - Emite a segunda via de *IPTU*\n
\t /alvara - Impressão do *Alvará*\n
\t /calculoitbi - Mostra o calculo prévio de ITBI \n
\t /notafiscal - Emissão de Nota Fiscal \n
\t /dam - Consulta pagamento do documento de arrecadação municipal (DAM) \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
  `)
})

robot.hear(/\/certidoespf/ig, (res) => {
  res.send (`Entendi. Deseja verificar algo relacionado a CERTIDÕES.
Você pode escolher uma das opções disponíveis abaixo: \n
  
\t /certidaonegativapf - Emite a *certidão negativa de débitos* (CND) de *Pessoa Física*. \n
\t /certidaonegativaiptu - Emite a *Certidão Negativa de Débitos de IPTU* de *Pessoa Física*. \n
\t /certidaonegativaitbi - Emite a *Certidão Negativa de Débitos de ITBI* de *Pessoa Física*. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
  `)
})

robot.hear(/\/autenticidadespf/ig, (res) => {
  res.send (`Entendi. Deseja verificar algo relacionado a AUTENTICIDADES.
Você pode escolher uma das opções disponíveis abaixo: \n
  
\t /autenticarcndpf - Validar Certidão Negativa de Débito de Pessoa Física \n
\t /autenticarcndiptu - Validar Certidão Negativa de Débito de IPTU \n
\t /autenticarcnditbi - Validar Certidão Negativa de Débito de ITBI \n
\t /autenticarcndautonomo - Validar Certidão Negativa de Débito de Autônomo \n
\t /autenticarcndobra - Validar Certidão Negativa de Débito de ISS da Construção Civil \n
\t /autenticaralvara - Validar Alvará de Funcionamento \n
\t /autenticarnf - Validar autenticidade de Nota Fiscal \n
\t /consultaritbi - Consultar autenticidade de ITBI \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
  `)
})

robot.hear(/\/outrosservicospf/ig, (res) => {
  res.send (`Entendi. Deseja verificar algo relacionado a OUTROS SERVIÇOS.
Você pode escolher uma das opções disponíveis abaixo: \n
  
\t /alterarsenhapj -  Altera senha de acesso de empresas para acesso ao sistema \n
\t /acessosecretarias - Acesso para Secretarias \n
\t /acessoportalconsignado - Acesso ao Portal Consignado \n
\t /portaltransparencia - Você encontra o link para acesso ao *Portal da Transparência*.\n
\t /canaldocontribuinte - Acesso ao Canal do Contribuinte \n
\t /perguntasfrequentes - Perguntas frequentes\n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
  `)
})


  //--IMPOSTOS E TAXAS--
  robot.hear(/\/iptu/ig, (res) => {
    res.send (`Entendi. Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_iptu \n
\t Você precisará do número do imovél. \n
\t Ele está no formato 00.00.000.0000.000 \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/alvara/ig, (res) => {
    res.send (`Entendi. Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/imprimiralvara \n
\t Você precisará do número do imovél.\n
\t Ele está no formato 00.00.000.0000.000 \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  //--CERTIDÕES--
  robot.hear(/\/certidaonegativapf/ig, (res) => {
    res.send (`Entendi. Você deseja solicitar uma certidão ou validar uma certidão? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_solicitarcndpf \n
\t Para solicitar uma CND (Certidão negativa de débitos), você precisará do número do CPF. \n
\t Para validar uma CND, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  //--AUTENTICIDADES
  robot.hear(/\/autenticarcndpf/ig, (res) => {
    res.send (`Entendi. Você deseja validar uma Certidão Negativa de Débitos (CND) Pessoa Física? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_autenticidadecndpf \n
\t Para validar uma Certidão Negativa de Débitos (CND) de Pessoa Física, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  //--OUTROS SERVIÇOS--
  robot.hear(/\/portaltransparencia/ig, (res) => {
    res.send (`Entendi. Acesse: http://portaltransparencia.santarem.pa.gov.br/02/servlet/pt_menutransparencia \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  /*
  Portal de Serviços

  --IMPOSTOS E TAXAS--
  2 via do IPTU - OK - OK
  Alvara On-line - OK - OK
  Calculo Previo de ITBI - OK - OK
  Nota Fiscal Eletronica - OK - OK
  Consultar Pagamento DAM - OK - OK

  --EMISSÃO CERTIDÕES--
  CND Pessoa Juridica - OK - OK
  CND IPTU - OK - OK
  CND ITBI - OK - OK
  Cadastramento PJ - OK - OK

  --AUTENTICIDADES DOCUMENTOS--
  Autenticar CND Pessoa Juridica - OK - OK
  Autenticar CND IPTU - OK - OK
  Autenticar CND ITBI - OK - OK
  Autenticar Cadastramento PJ -  OK - OK
  Autenticar CND Autonomo - OK - OK
  Autenticar CND Obra - OK - OK
  Autenticar Alvara - OK - OK
  Autenticar NF - OK - OK
  Autenticar ITBI - OK - OK
  Autenticar CRC - 

  --OUTROS SERVICOS--
  Altera Senha Acesso de Empresas - OK - OK
  Acesso Secretarias - OK - OK
  Portal Consignado - OK - OK
  portal da transparencia - VER NO SERVICOS AO CIDADAO
  Perguntas Frequentes


  Alterar senha de empresas
  Certidao Negativa PJ
  Impressao On-line de Alvara
  Licenciamento Ambiental
  

  */



  //================ SERVIÇOS A EMPRESAS ==================
  robot.hear(/\/empresa/ig, (res) => {
    res.send (`
    *PREFEITURA MUNICIPAL DE SANTARÉM* 
    *Serviços a Empresas:* \n

\t /impostosetaxaspj - IMPOSTOS E TAXAS (IPTU, Alvará, ITBI, Nota Fiscal, DAM) \n
\t /certidoespj - Certidões negativa de débito de Pessoa Jurídica, IPTU, ITBI, Cadastro de PJ \n
\t /autenticidadespj - Validar autenticidade de certidões negativa de débito de Pessoa Jurídica, IPTU, ITBI, Alvará, Cadastro de PJ, Nota Fiscal, CRC, Obra, Autônomo. \n
\t /outrosservicospj - Serviços diversos - Alterar senha de empresas, Acesso Secretarias, Portal Consignado, Portal da Transparência, Canal do Contribuinte, Perguntas Frequentes \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n    
    `)
  })

  robot.hear(/\/impostosetaxaspj/ig, (res) => {
    res.send (`Entendi. Deseja verificar algo relacionado a IMPOSTOS E TAXAS.
Você pode escolher uma das opções disponíveis abaixo: \n
    
\t /iptu - Emite a segunda via de *IPTU*\n
\t /alvara - Impressão do *Alvará*\n
\t /calculoitbi - Mostra o calculo prévio de ITBI \n
\t /notafiscal - Emissão de Nota Fiscal \n
\t /dam - Consulta pagamento do documento de arrecadação municipal (DAM) \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })
  
  robot.hear(/\/certidoespj/ig, (res) => {
    res.send (`Entendi. Deseja verificar algo relacionado a CERTIDÕES.
Você pode escolher uma das opções disponíveis abaixo: \n
    
\t /certidaonegativapj - Emite a *certidão negativa de débitos* (CND) de *Pessoa Jurídica*. \n
\t /certidaonegativaiptu - Emite a *Certidão Negativa de Débitos de IPTU* de *Pessoa Jurídica*. \n
\t /certidaonegativaitbi - Emite a *Certidão Negativa de Débitos de ITBI* de *Pessoa Jurídica*. \n
\t /certidaocadastropj - Emite a solicitação de Certidão de Cadastramento de Pessoa Jurídica \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/autenticidadespj/ig, (res) => {
    res.send (`Entendi. Deseja verificar algo relacionado a AUTENTICIDADES.
Você pode escolher uma das opções disponíveis abaixo: \n
    
\t /autenticarcndpj - Validar Certidão Negativa de Débito de Pessoa Jurídica \n
\t /autenticarcndiptu - Validar Certidão Negativa de Débito de IPTU \n
\t /autenticarcnditbi - Validar Certidão Negativa de Débito de ITBI \n
\t /autenticarcadastropj - Validar Cadastro Pessoa Jurídica \n
\t /autenticarcndautonomo - Validar Certidão Negativa de Débito de Autônomo \n
\t /autenticarcndobra - Validar Certidão Negativa de Débito de ISS da Construção Civil \n
\t /autenticaralvara - Validar Alvará de Funcionamento \n
\t /autenticarnf - Validar autenticidade de Nota Fiscal \n
\t /consultaritbi - Consultar autenticidade de ITBI \n
\t /consultarcrc - Consultar autenticidade de Certificado de Registro Cadastral (CRC) \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/outrosservicospj/ig, (res) => {
    res.send (`Entendi. Deseja verificar algo relacionado a OUTROS SERVIÇOS.
Você pode escolher uma das opções disponíveis abaixo: \n
    
\t /alterarsenhapj -  Altera senha de acesso de empresas para acesso ao sistema \n
\t /acessosecretarias - Acesso para Secretarias \n
\t /acessoportalconsignado - Acesso ao Portal Consignado \n
\t /portaltransparencia - Você encontra o link para acesso ao *Portal da Transparência*.\n
\t /canaldocontribuinte - Acesso ao Canal do Contribuinte \n
\t /perguntasfrequentes - Perguntas frequentes\n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  //--IMPOSTOS E TAXAS--PESSOA JURÍDICA
  robot.hear(/\/calculoitbi/ig, (res) => {
    res.send (`Entendi. Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/tb_calcularitbi \n
    
\t Você precisará do número do imovél.\n
\t Ele está no formato 00.00.000.0000.000 \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/notafiscal/ig, (res) => {
    res.send (`Entendi. Acesse: https://siapsistemas.com.br/santarempgiss/servlet/mainsantarem \n
    
\t Neste link você encontrará: \n
\t Acesso *Contribuinte*: https://siapsistemas.com.br/santarempgiss/servlet/logincontribuinte \n
\t Acesso *Contador*: https://siapsistemas.com.br/santarempgiss/servlet/logincontador \n
\t Acesso *Prefeitura*: https://siapsistemas.com.br/santarempgiss/servlet/selecionartipoacessoprefeitura \n
\t Acesso *Bancos*: https://siapsistemas.com.br/santarempgiss/servlet/logininstfinanceira \n
\t Acesso *Escolas*: https://siapsistemas.com.br/santarempgiss/servlet/logininstensino  \n
\t Acesso *Nota Fiscal Avulsa*: https://siapsistemas.com.br/santarempgiss/servlet/loginavulsa \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/dam/ig, (res) => {
    res.send (`Entendi. Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/tb_consultarpagtodamiptu \n
    
\t Você precisará do número do imovél (somente números) e o número do DAM. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  //--CERTIDÕES--PESSOA JURÍDICA
  robot.hear(/\/certidaonegativapj/ig, (res) => {
    res.send (`Entendi. Você deseja solicitar uma certidão ou validar uma certidão? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_solicitarcnd \n
\t Para solicitar uma CND (Certidão negativa de débitos), você precisará do número da Inscrição Municipal. \n
\t Para validar uma CND, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/certidaonegativaiptu/ig, (res) => {
    res.send (`Entendi. Você deseja solicitar uma certidão ou validar uma certidão negativa de imóvel? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_telacni \n
\t Para solicitar uma Certidão Negativa de IPTU, você precisará do número da Inscrição Imobiliária. \n
\t Para validar uma Certidão Negativa de IPTU, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/certidaonegativaitbi/ig, (res) => {
    res.send (`Entendi. Você deseja solicitar uma certidão ou validar uma certidão negativa de ITBI? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_solicitarcnditbi \n
\t Para solicitar uma Certidão Negativa de ITBI, você precisará do número do ITBI e CNPJ do comprador. \n
\t Para validar uma Certidão Negativa de ITBI, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/certidaocadastropj/ig, (res) => {
    res.send (`Entendi. Você deseja solicitar uma certidão de cadastramento de Pessoa Jurídica? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_solicitarcertidaodecadastro \n
\t Para solicitar uma Certidão de Cadastramento de Pessoa Jurídica, você precisará do número da Inscrição Municipal. \n
\t Para validar uma Certidão de Cadastramento de Pessoa Jurídica, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  //--AUTENTICIDADES--PESSOA JURÍDICA
  robot.hear(/\/autenticarcndpj/ig, (res) => {
    res.send (`Entendi. Você deseja validar uma Certidão Negativa de Débitos (CND) Pessoa Jurídica? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_autenticarcnd \n
\t Para validar uma Certidão Negativa de Débitos (CND) de Pessoa Jurídica, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/autenticarcndiptu/ig, (res) => {
    res.send (`Entendi. Você deseja validar uma certidão Certidão Negativa de Débitos (CND) de IPTU? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_autenticarcni \n
\t Para validar uma Certidão Negativa de Débitos (CND) de IPTU, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/autenticarcnditbi/ig, (res) => {
    res.send (`Entendi. Você deseja validar uma certidão Certidão Negativa de Débitos (CND) de ITBI? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_autenticarcni \n
\t Para validar uma Certidão Negativa de Débitos (CND) de ITBI, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/autenticarcadastropj/ig, (res) => {
    res.send (`Entendi. Você deseja validar uma Certidão de Cadastro de Pessoa Jurídica? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_autenticarcertcadastro \n
\t Para validar uma Certidão de Cadastro de Pessoa Jurídica, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })
  
  robot.hear(/\/autenticarcndautonomo/ig, (res) => {
    res.send (`Entendi. Você deseja validar uma Certidão Negativa de Débito de Autônomo? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_consultarautenticidadecertautonomo \n
\t Para validar uma Certidão Negativa de Débito de Autônomo, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/autenticarcndobra/ig, (res) => {
    res.send (`Entendi. Você deseja validar uma Certidão Negativa de Débito de ISS da Construção Civil? \n
\t Acesse: https://siapsistemas.com.br/santarempgiss/servlet/checarautenticidadecndobra \n
\t Para validar uma Certidão Negativa de Débito de ISS da Construção Civil, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/autenticaralvara/ig, (res) => {
    res.send (`Entendi. Você deseja validar um Alvará de Funcionamento? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_consultarautenticidadealvara \n
\t Para validar um Alvará de Funcionamento, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/autenticarnf/ig, (res) => {
    res.send (`Entendi. Você deseja validar autenticidade de uma Nota Fiscal? \n
\t Acesse: https://siapsistemas.com.br/santarempgiss/servlet/checarautenticidadedenota \n
\t Para validar autenticidade de uma Nota Fiscal, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/autenticaritbi/ig, (res) => {
    res.send (`Entendi. Você deseja consultar autenticidade de um ITBI? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/cm_consultaautenticidadeitbi \n
\t Para consultar autenticidade de um ITBI, você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/autenticarcrc/ig, (res) => {
    res.send (`Entendi. Você deseja consultar autenticidade de Certificado de Registro Cadastral (CRC)? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_consultarautenticidadecrc \n
\t Para consultar Certificado de Registro Cadastral (CRC), você utilizará o código de autenticidade. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })
  
  //--OUTROS SERIVÇOS--PESSOA JURÍDICA
  robot.hear(/\/alterarsenhapj/ig, (res) => {
    res.send (`Entendi. Você deseja alterar a senha de acesso de empresa? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_pasempresausuario \n
\t Para alterar a senha de acesso de empresa, você utilizará a Inscrição Municipal. \n

\t IMPORTANTE: \n
\t A primeira senha só poderá ser criada na Central de Atendimento ao Contribuinte. Depois de criada o usuário da empresa poderá fazer aqui nesta opção, alterações na senha ou no e-mail da empresa, quando achar conveniente. É importante o cadastramento de uma conta de e-mail válida para empresa. É por este e-mail que a prefeitura vai informar a empresa sobre o andamento de suas certidões e outros serviços deste portal. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/acessosecretarias/ig, (res) => {
    res.send (`Entendi. Você deseja o acesso para Secretarias? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_opcoessecretarias \n
\t Para ter acesso ao login de Secretarias, você utilizará Usuário e Senha. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/acessoportalconsignado/ig, (res) => {
    res.send (`Entendi. Você deseja o acesso ao Portal Consignado? \n
\t Acesse: https://siapsistemas.com.br/consig/servlet/menumodulos \n
\t Para ter acesso ao Portal Consignado, você utilizará Usuário e Senha. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/canaldocontribuinte/ig, (res) => {
    res.send (`Entendi. Você deseja o acesso ao Canal do Contribuinte? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_canaldocontribuinte \n
\t Este canal serve para você, contribuinte, tirar suas dúvidas ou enviar sugestões. \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })

  robot.hear(/\/perguntasfrequentes/ig, (res) => {
    res.send (`Entendi. Você deseja saber quais as perguntas mais frenquentes? \n
\t Acesse: http://portalservicos.santarem.pa.gov.br/01/servlet/ps_perguntasfrequentes \n

\t Se desejar mais algum serviço, digite / para ver a lista de serviços disponíveis \n
\t ou /start para ver o menu inicial. \n
    `)
  })
}


/*
Serviços ao Cidadão:

/iptu - Emite a segunda via de IPTU

Entendi, Pio. Digite sua inscrição imobiliária. Exemplo: 00.00.0000.0000.0000


/debitosdocumento - Consulta Débitos por CPF/CNPJ

Entendi, Pio. Digite o CPF ou CNPJ (somente números).


/debitosinscricao - Consulta Débitos por Inscrição

Entendi, Pio. Digite o número da inscrição. Imóvel: 00.00.0000.0000.0000


/extrato - Extrato detalhado de débitos

Entendi, Pio. Digite o número da inscrição. Imóvel: 00.00.0000.0000.0000


/processo - Consulta de Processo Administrativo

/negativa - Emite a Certidão Negativa

Entendi, Pio. Digite sua inscrição imobiliária. Exemplo: 00.00.0000.0000.0000


/valorvenal - Emite a certidão de Valor Venal

Entendi, Pio. Digite sua inscrição imobiliária. Exemplo: 00.00.0000.0000.0000


/validacertidao - Confirma a Autenticidade da Certidão

Entendi, Pio. Digite de código de segurança da certidão.


/pagamento - Emite guia(s) para pagamento

Entendi, Pio. Digite o número da inscrição. Imóvel: 00.00.0000.0000.0000


iptu - Emite a segunda via de IPTU
debitosdocumento - Consulta Débitos por CPF/CNPJ
debitosinscricao - Consulta Débitos por Inscrição
extrato - Extrato detalhado de débitos
negativa - Emite a Certidão Negativa
valorvenal - Emite a certidão de Valor Venal
validacertidao - Confirma a Autenticidade da Certidão
pagamento - Emite guia(s) para pagamento
alvara - Impressão do Alvará



sitesantarem
http://santarem.pa.gov.br/

portaldatransparencia
http://portaltransparencia.santarem.pa.gov.br/02/servlet/pt_menutransparencia

iptu
http://portalservicos.santarem.pa.gov.br/01/servlet/ps_iptu

*/