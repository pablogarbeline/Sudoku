const celulas = document.querySelectorAll('.sub-blocos')
const sudoku = [
                [ , , , 8, , , , , ],
                [ 7, 8, 9, , 1, , , , 6],
                [ , , , , , 6, 1, , ],
                [ , , 7, , , , , 5, ],
                [ 5, , 8, 7, , 9, 3, , 4],
                [ , 4, , , , , 2, , ],
                [ , , 3, 2, , , , , ],
                [ 8, , , , 7, , 4, 3, 9],
                [ , , , , , 1, , , ]
                ]

for(let i=0; i<celulas.length; i++){
    if(celulas[i].childNodes[0] == NodeList[0]){
    celulas[i].addEventListener("click", captureNum)
    celulas[i].style.cursor = "pointer"    
    }
    else{
        celulas[i].style.cursor="none"
    }
}

function captureNum(e){

    let entrada = prompt("Por favor, digite um número");
    if(entrada == 1 || entrada == 2 || entrada == 3 || entrada == 4 ||
       entrada == 5 || entrada == 6 || entrada == 7 || entrada == 8 || entrada == 9){
        let number = parseInt(entrada)
        console.log(e.target.parentNode)
        document.getElementById(e.target.id).innerHTML = number
        let x = e.target.id //armazeno o id da celula clicada
        let id0 = parseInt(x.slice(2,3)) //pego somente o número contido no nome do id
        let id1 = parseInt(x.slice(3))
        sudoku[id0][id1] = number   
    }
    else{
       invalidInput()
    }
}

//caixa de mensagem de entrada inválida
function invalidInput(){
    let container = document.getElementsByClassName('tela-jogo')[0]
    container.style.background="rosybrown"
    container.style.opacity="0.05"
    let boxmsg = document.getElementsByClassName('invalidInput')[0]
    boxmsg.style.display="flex"
    setTimeout(getOutInvalidInput,1500)
}
function getOutInvalidInput(){
    let container = document.getElementsByClassName('tela-jogo')[0]
    container.style.background="none"
    container.style.opacity="1"
    let boxmsg = document.getElementsByClassName('invalidInput')[0]
    boxmsg.style.display="none"
}


//caixa de mensagem de parabenização
function congratulations(){
    let container = document.getElementsByClassName('tela-jogo')[0]
    container.style.background="rosybrown"
    container.style.opacity="0.05"
    let boxmsg = document.getElementsByClassName('parabens')[0]
    boxmsg.style.display="flex"
    setTimeout(getOutCongratulations,10000)
}
function getOutCongratulations(){
    let container = document.getElementsByClassName('tela-jogo')[0]
    container.style.background="none"
    container.style.opacity="1"
    let boxmsg = document.getElementsByClassName('parabens')[0]
    boxmsg.style.display="none"
}


//caixa de mensagem de errrrrou
function errou(){
    let container = document.getElementsByClassName('tela-jogo')[0]
    container.style.background="rosybrown"
    container.style.opacity="0.05"
    let boxmsg = document.getElementsByClassName('errrrou')[0]
    boxmsg.style.display="flex"
    setTimeout(getOutErrou,4500)
}
function getOutErrou(){
    let container = document.getElementsByClassName('tela-jogo')[0]
    container.style.background="none"
    container.style.opacity="1"
    let boxmsg = document.getElementsByClassName('errrrou')[0]
    boxmsg.style.display="none"
}




//validação do que foi preenchido

let btn = document.getElementsByTagName('button')[0]
btn.addEventListener('click', validSolution)

function validSolution(){
    //validação para horizontal
    let valHor = 0
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 8; j++){
        for(let k = j+1 ; k < 9; k++){
          if(sudoku[i][j] == sudoku[i][k]){valHor++}
        }      
      }
    }
    //validação vertical
    let valVer = 0
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 8; j++){
        for(let k = j+1 ; k < 9; k++){
          if(sudoku[j][i] == sudoku[k][i]){valVer++}
        }      
      }
    }
    //validação sub-bloco
   let valIn = 0
    for(let i = 0; i < 2; i++){
      for(let j = 0; j < 3; j++){
        for(let k = 0 ; k < 3; k++){
            if(sudoku[i][j] == sudoku[i+1][k]){valIn++}
        }      
      }
      for(let j = 3; j < 6; j++){
        for(let k = 3 ; k < 6; k++){
          if(sudoku[i][j] == sudoku[i+1][k]){valIn++}
        }      
      }
      for(let j = 6; j < 9; j++){
        for(let k = 6 ; k < 9; k++){
            if(sudoku[i][j] == sudoku[i+1][k]){valIn++}
        }      
      }
    }
   
    for(let i = 3; i < 5; i++){
      for(let j = 0; j < 3; j++){
        for(let k = 0 ; k < 3; k++){
            if(sudoku[i][j] == sudoku[i+1][k]){valIn++}
        }      
      }
      for(let j = 3; j < 6; j++){
        for(let k = 3 ; k < 6; k++){
            if(sudoku[i][j] == sudoku[i+1][k]){valIn++}
        }      
      }
      for(let j = 6; j < 9; j++){
        for(let k = 6 ; k < 9; k++){
            if(sudoku[i][j] == sudoku[i+1][k]){valIn++}
        }      
      }
    }
      
    for(let i = 6; i < 8; i++){
      for(let j = 0; j < 3; j++){
        for(let k = 0 ; k < 3; k++){
            if(sudoku[i][j] == sudoku[i+1][k]){valIn++}
        }      
      }
      for(let j = 3; j < 6; j++){
        for(let k = 3 ; k < 6; k++){
            if(sudoku[i][j] == sudoku[i+1][k]){valIn++}
        }      
      }
      for(let j = 6; j < 9; j++){
        for(let k = 6 ; k < 9; k++){
            if(sudoku[i][j] == sudoku[i+1][k]){valIn++}
        }      
      }
    }
      
    if(valHor == 0 && valVer == 0 && valIn == 0)
      return congratulations()
    else
      return errou()
  }
 
  

  
//Reset do jogo
let btn2 = document.getElementsByTagName('button')[1]
btn2.addEventListener('click', reload)

function reload(){
    document.location.reload(true)
}
