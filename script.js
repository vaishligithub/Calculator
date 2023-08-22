let input=document.getElementById(`input`);
let inputValue=``;
let buttons=document.querySelectorAll(`button`);
for(item of buttons){
    item.addEventListener(`click`,(e)=>{
        buttonText=e.target.innerText;
        console.log(`button is`,buttonText);
        if(buttonText==`X`){
            buttonText =`*`;
            inputValue+=buttonText;
            input.value=inputValue;
        }
        else if(buttonText==`=`){
           input.value=eval(inputValue);

        }
        else if(buttonText==`C`){
            inputValue=" ";
          input.value =inputValue; 
 }
 else{
    inputValue+=buttonText;
    input.value=inputValue;
 }
    })
}