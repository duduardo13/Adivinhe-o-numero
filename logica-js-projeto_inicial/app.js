alert('Boas vindas ao jogos do número secreto');

let numeroMax = 100;
let numero_secreto = parseInt(Math.random() * numeroMax) + 1; //Gerando número aleatório
console.log(numero_secreto);
let chute;
let tentativas = 1;

//Enquanto o chute não for certo

while(chute != numero_secreto){
    chute= prompt(`Digite o número entre 1 e ${numeroMax}`);

    if (numero_secreto == chute){
        break;
     }else{
         alert('Burro');
             
            if(numero_secreto > chute){
                 alert(`O número secreto é maior que o ${chute}`);
             }else{
                 alert(`O número secreto é menor que o ${chute}`)
             }
            
        tentativas++; 
        
     }
     
    
}

//if(?) e else(:) enxutado
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numero_secreto} com ${tentativas} ${palavraTentativa}`);