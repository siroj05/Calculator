
const btn = document.querySelectorAll('.btn');
const displayIn = document.querySelector('.display-in');
const displayOut = document.querySelector('.display-out')


btn.forEach(m => {
  m.addEventListener('click', function(e){
    // console.log(e.target.innerText);
    switch(e.target.innerText){
      case 'C' : 
        displayIn.innerText = '';
        displayOut.innerText = '';
        break;
      case '=' :
        try{
          displayOut.innerText = eval(displayIn.innerText);
          displayIn.innerText = '';
        }
        catch{
          displayOut.innerText = 'ERROR!'
          displayIn.innerText = '';
        }
        
        break;
      default:
        displayIn.innerText += e.target.innerText;
        displayOut.innerText = ''
    }
  })
})

  
