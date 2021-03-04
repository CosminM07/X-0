
document.addEventListener("DOMContentLoaded", function(){
  playGame();

  const playerWin = document.getElementById('playerWin');
  playerWin.style.visibility = "hidden";
});


function checkWinner() {
  let cell1 = document.querySelector('#table tr:nth-child(1) td:nth-child(1)').innerHTML;
  let cell2 = document.querySelector('#table tr:nth-child(1) td:nth-child(2)').innerHTML;
  let cell3 = document.querySelector('#table tr:nth-child(1) td:nth-child(3)').innerHTML;
  let cell4 = document.querySelector('#table tr:nth-child(2) td:nth-child(1)').innerHTML;
  let cell5 = document.querySelector('#table tr:nth-child(2) td:nth-child(2)').innerHTML;
  let cell6 = document.querySelector('#table tr:nth-child(2) td:nth-child(3)').innerHTML;
  let cell7 = document.querySelector('#table tr:nth-child(3) td:nth-child(1)').innerHTML;
  let cell8 = document.querySelector('#table tr:nth-child(3) td:nth-child(2)').innerHTML;
  let cell9 = document.querySelector('#table tr:nth-child(3) td:nth-child(3)').innerHTML;

  // verifica randurile
  if((cell1==cell2) && (cell2==cell3) && cell3 != ''){
    return cell3;
  }

  if((cell4==cell5) && (cell5==cell6) && cell6 != ''){
    return cell6;
  }

  if((cell7==cell8) && (cell8==cell9) && cell9 != ''){
    return cell9;
  }

   // verifica coloanele
  if((cell1==cell4) && (cell4==cell7) && cell7 != ''){
    return cell7;
  }

  if((cell2==cell5) && (cell5==cell8) && cell8 != ''){
    return cell8;
  }

  if((cell3==cell6) && (cell6==cell9) && cell9 != ''){
    return cell9;
  }

  // verifica diagonalele
  if((cell1==cell5) && (cell5==cell9) && cell9 != ''){
    return cell9;
  }

  if((cell3==cell5) && (cell5==cell7) && cell7 != ''){
    return cell7;
  }

  // niciun castigator
  return -1;
}


function playGame() {
  
  let move = 1;
  let playing = true;
  
  // variabila cells va contine toate celulele (td) din tabelul cu id-ul #tabel
  let cells = document.querySelectorAll('#table tr td');

  //pentru fiecare celula din tabel
  for(let i=0; i<cells.length; i++){
      
      let cell = cells[i];
      // specificam comportamentul celulele atunci cand este apasata
      cell.onclick = function(e){
         if(cell.innerHTML == '' && playing){
           
            if(move % 2 == 1){
              cell.innerHTML = 'X';
            } else {
              cell.innerHTML = 'O'; 
            }

            move++;

            let winnerSign = checkWinner();
            //niciun castigator; iesim din functie
            if(winnerSign == '' || winnerSign == -1){
      
              return;
            }
            const playerWin = document.getElementById('playerWin');
            
            let playerWinner =  (winnerSign == 'X') ? '1' : '2'; 
            playerWin.style.visibility='visible';
            playerWin.innerHTML += playerWinner;
            playing = false;
         }     
      }
  }
}

 function newGame() {
  
  move = 1;
  playing = true;         

 document.querySelector('#table tr:nth-child(1) td:nth-child(1)').innerHTML = "";
 document.querySelector('#table tr:nth-child(1) td:nth-child(2)').innerHTML = "";
 document.querySelector('#table tr:nth-child(1) td:nth-child(3)').innerHTML = "";
 document.querySelector('#table tr:nth-child(2) td:nth-child(1)').innerHTML = "";
 document.querySelector('#table tr:nth-child(2) td:nth-child(2)').innerHTML = "";
 document.querySelector('#table tr:nth-child(2) td:nth-child(3)').innerHTML = "";
 document.querySelector('#table tr:nth-child(3) td:nth-child(1)').innerHTML = "";
 document.querySelector('#table tr:nth-child(3) td:nth-child(2)').innerHTML = "";
 document.querySelector('#table tr:nth-child(3) td:nth-child(3)').innerHTML = "";
 
 playerWin.style.visibility = "hidden";
 playerWin.innerHTML="The winner is player:"
 
 playGame();


}


