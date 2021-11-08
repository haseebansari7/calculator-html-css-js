let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');

for (item of button) {
       
   
    item.addEventListener('click', (e) => {
        var buttonText = e.target.innerText;
        try{
            if (buttonText == 'x') {
                buttonText = '*';
            }
            
            else if (buttonText == 'C') {
                screen.value = "";
            }
            else if (buttonText == '=') {
                screen.value = eval(screen.value)
            }
            
            else {
                screen.value += buttonText;
    
            }
        }
        catch{
            screen.value = 'Error!'
        }
    });

}

// });






// let screen = document.getElementById('screen');
// let button = document.querySelectorAll('button');
// let screenValue ='';
// // console.log(screen.value)
// for(item of button){
//     item.addEventListener('click',(e)=>{
//         buttonText = e.target.innerText;
//         if(buttonText == 'x'){
//             buttonText ='*';
//             screen += buttonText.value
//             // screen.value = screenValue;
//         }
//         else if(buttonText == 'C'){
//             screen.value ="";
//             screen.value = screenValue;
//         }
//         else if(buttonText == '='){
//             screen.value = eval(screenValue)
//         }
//         else{
//             screen.value += buttonText;
//             screen.value = screenValue;
//         }
//     });
// }

