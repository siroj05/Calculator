
const btn = document.querySelectorAll('.btn');
const displayIn = document.querySelector('.display-in');
const displayOut = document.querySelector('.display-out')


btn.forEach(m => {
  m.addEventListener('click', function(e){
    // console.log(e.target.innerText);
    switch(e.target.innerText){
      case 'C' : 
        displayIn.innerText = '';
        break;
      case '=' :
        try{
          displayIn.innerText = eval(displayIn.innerText);
          console.log('ok');
        }
        catch{
          displayIn.innerText = 'ERROR!';
        }
        
        break;
      default:
        console.log('ok2');
        displayIn.innerText += e.target.innerText;
        
    }
  })
})

  
