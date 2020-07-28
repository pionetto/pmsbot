module.exports = (robot) => {

    function initial() {

    var contador = Number();
        //[A-z]
    robot.hear(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/ig, (res) =>
    
    // robot.hear(/[0-9]/ig, (res) =>
        {
            // teste = res.match[0];
            res.send (`Como você está se sentindo hoje?  \n
            \t 1  - Ótimo \n
            \t 2  - Bem \n
            \t 3  - Regular \n
            \t 4  - Mal \n
            \t Digite um dos números acima \n `)

            res.send (`Eu estou bem - valor do match initial function ${res.match[0]}`)
            // res.finish();
            return getHowAreyouFeeling();
            
        })

        function getHowAreyouFeeling() {
            robot.hear(/[0-9]/ig, (res) =>
        {
            res.send (`Eu estou bem - valor do match ${res.match[0]}`)
            howareyou = parseInt(res.match[0]);
            
            // res.send (`Como você está se sentindo hoje? ${howareyou} \n`)
               
        switch (howareyou) {
            case 1:
                contador += 1
                // res.send (`Deu certo - ${res.match[0]}`)
                // res.message.text = "10";
                res.send (`Eu estou bem - valor do match ${res.match[0]}`)
                res.send (`Eu estou bem - valor do message ${res.message.text}`)
                res.message.text = 'amem';
                res.send (`Valor do message - ${res.message.text}`)
                res.match[0] = res.message.text;
                res.match[0].shift()
                res.send (`Valor do res.match[0] - ${res.match[0]}`)
                res.send (`Valor do howareyou res.match[0]  - ${howareyou}`)
                // res.message.text = '.';
                // res.match[0] = res.message.text;
                res.send (`Valor do res.match[0] 2 - ${res.match[0]}`)

                return getDoYouHaveFever();
                break;
            case 2:
                contador += 2
                // res.send (`Deu certo - ${contador}`)
                break;
            case 3:
                contador += 3
                // res.send (`Deu certo - ${contador}`)
                break;
            case 4:
                contador += 4
                // res.send (`Voce precisa de atendimento medico. Pontos: ${contador}`)
                break;
            default:
                res.finish();
                res.send (`Opção inválida!`)
                return getHowAreyouFeeling()
                break;
            }
            })

        }
        
        function getDoYouHaveFever() {

            robot.hear(/[0-9]/ig, (res) =>  
        {

            youhavefever = parseInt(res.match[0]);
            res.send(`Você tem febre? \n 
            \t 1  - Não \n 
            \t 2  - Sim, abaixo de 38 \n 
            \t 3  - Sim, 38 ou acima \n
            \t Digite um dos n  meros acima \n
            \t Valor do message \n - ${res.message.text}
            \t Valor do match \n - ${res.match[0]}
            `)

        switch (youhavefever) {
            case 1:
                contador += 1
                res.send (`Sim, tenho febre - message ${res.message.text}`)
                res.send (`Sim, tenho febre - match ${res.match[0]}`)
                res.send (`Sim, tenho febre - youhavefever ${youhavefever}`)
                // res.message.text = "";
                return getHaveCough()
                
                break;
            case 2:
                contador += 2
                // res.send (`Deu certo - ${contador}`)
                return getHaveCough()
                break;
            case 3:
                contador += 3
                // res.send (`Deu certo - ${contador}`)
                break;
            default:
                res.finish();
                res.send (`Opção inválida!`)
                return getDoYouHaveFever()
                break;
            
            }

            })
        }

        function getHaveCough() {
            robot.hear(/[0-9]/ig, (res) =>
        {
            havecough = parseInt(res.match[0]);
            res.send(`Você tem tosse? \n
            \t 1  - Não \n
            \t 2  - Sim, tosse seca \n
            \t 3  - Sim, tosse com catarro \n
            \t Digite um dos números acima \n
             `)
            //  res.finish();

        switch (havecough) {
            case 1:
                contador += 1
                // res.send (`Deu certo - ${res.match[0]}`)
                res.send (`Sim, tenho tosse - message ${res.message.text}`)
                res.send (`Sim, tenho tosse - match ${res.match[0]}`)
                res.send (`Sim, tenho tosse - havecough ${havecough}`)
                initial();
                res.finish();
                break;
            case 2:
                contador += 2
                // res.send (`Deu certo - ${contador}`)
                return getHowAreyouFeeling();
                break;
            case 3:
                contador += 3
                // res.send (`Deu certo - ${contador}`)
                break;
            default:
                res.finish();
                res.send (`Opção inválida!`)
                return getHaveCough()
                break;
            
            }
            // getTeste();
            })   
        }
        // getDoYouHaveFever();
        // getHaveCough();       
}
initial();
}

// getTeste();

// function getTeste() {
// module.exports = (robot) => {
//     robot.hear(/[0-9]/ig, (res) =>
// {
//     chamada = parseInt(res.match[0]);
//     res.send(`Testando a chamada da funcao `)

// switch (chamada) {
//     case 1:
//         contador += 1
//         res.send (`chamada da funcao - ${res.match[0]}`)
//         break;
//     case 2:
//         contador += 2
//         // res.send (`Deu certo - ${contador}`)
//         break;
//     case 3:
//         contador += 3
//         // res.send (`Deu certo - ${contador}`)
//         break;
//     default:
//         res.send (`Opção inválida!`)
//         break;
    
//     }

//     })
// }
// }