let ip = document.getElementById('input_txt');
let btn = document.getElementById('btn1');
let counter=0;
let header=document.getElementById('header_1');

btn.addEventListener('click',function(){
    let first_input=ip.value.toUpperCase();
    for(i=0;i<first_input.length;i++){
      var outCom=first_input.charAt(i);
      if(outCom=='A'||outCom=='E'||outCom=='I'||outCom=='O'||outCom=='U'){
        counter++;
      }
    }
    (counter>=1)?header.innerHTML= ip.value +' has '+ counter+' vowel ':null;
    ip.value='';
    
})
