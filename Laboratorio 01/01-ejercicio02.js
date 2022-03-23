/**
 * Mostrar los 50 primeros 
 * números múltiplos de 7, 
 * pero NO múltiplos de 2,3 o 5.
 */

const multiple = (valor, multiple) => {
    let resto = valor % multiple;
    if(resto==0){
        return true;
    }
    else{
        return false;
    }
};
 
var multiples_3=[];
var multiples_5=[];
var multiples_7=[];
 
for(var i=1;i<=50;i++)
{
    if(multiple(i,3)){
        multiples_3.push(i);
    }
    if(multiple(i,5)){
        multiples_5.push(i);
    }
    if(multiple(i,7)){
        multiples_7.push(i);
    }
    
}
console.log("Los multiplos de 3 son: ",multiples_3);
console.log("<br>Los multiplos de 5 son: ",multiples_5);
console.log("<br>Los multiplos de 7 son: ",multiples_7);




