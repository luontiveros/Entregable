let nombre=prompt("Dí tu nombre");

nombre = nombre.toUpperCase();

console.log("HOLA",nombre);
alert("HOLA " + nombre);

let operacion = prompt(`ESCRIBE LA OP DESEADA: 
POTENCIA
RAIZ
TERMINAR`);

operacion = operacion.toUpperCase(); 

    while(operacion!=="TERMINAR");     
    {   
        let operacion = prompt(`ESCRIBE LA OP DESEADA: 
        POTENCIA
        RAIZ
        TERMINAR`);
        operacion = operacion.toUpperCase();  

        if(operacion!=="POTENCIA" &&
           operacion!=="RAIZ" &&
           operacion!=="TERMINAR")
           {
               alert("OPCION INVALIDA")
           }

        if(operacion ==="POTENCIA"  || operacion ==="RAIZ");
            {
            let base = Number (prompt ("INGRESE EL NUMERO BASE"));           
            let exponente = Number (prompt ("INGRESE EL EXPONENTE"))
                
            if(isNaN(base) || isNaN(exponente))
            {
            alert("INGRESE SOLO NUMEROS")
            }
            else 
            {
            if(operacion === "POTENCIA")
            {
                alert(Math.pow(base, exponente))
            }
            else if(operacion === "RAIZ")
            {
                alert(Math.pow(base, exponente))
            }

        }
    }
    }         
