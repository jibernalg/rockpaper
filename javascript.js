//CODIGO PARA GENERAR LA IMAGEN DINAMICA DEL RIVAL
let images=new Array();
images[0]="piedra.png";
images[1]="papel.png";
images[2]="tijeras.png";
images[3]="question.jpg";

setInterval("cambioImagen()",200);

let x=0;
function cambioImagen(){
    if (x<4){
        document.getElementById("img").src=images[x];
        x+=1;
    } else{
        x=0;
        cambioImagen();
    }
}

//CODIGO PARA ESCRIBIR QUE ESCOGIO EL JUGADOR
let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
function pressPiedra(){
    document.getElementById("respuesta").textContent="Piedra vs "; 
    a=1;   
}
function pressPapel(){
    document.getElementById("respuesta").textContent="Papel vs ";
    b=1;
}
function pressTijera(){
    document.getElementById("respuesta").textContent="Tijeras vs ";
    c=1;
    //const respuesta=document.querySelector('#respuesta');
    //const contenido=document.createElement('div');
    //contenido.classList.add('contenido');
    //contenido.textContent="Tijeras vs";
    //respuesta.appendChild(contenido);    
}


//CODIGO PARA CARTA ALEATORIA DEL RIVAL

function rival(){
    aleatorio=Math.floor((Math.random()*(4-1))+1);
    if (aleatorio===1){
        document.getElementById("eleccionRival").textContent=" Piedra";
        d=1;
    } else if (aleatorio===2){
        document.getElementById("eleccionRival").textContent=" Papel";
        e=1;
    } else if (aleatorio===3){
        document.getElementById("eleccionRival").textContent=" Tijeras";
        f=1;
    }
}

let conteoJugador=0;
let conteoRival=0;
function resultado(){
        if (a==1){
            if(d==1){
                d=0;    
            } else if(e==1){
                conteoRival++;
                e=0;
            }else if(f==1){
                conteoJugador++;
                f=0;
            }
            a=0;
        }else if (b==1){
            if(d==1){
                conteoJugador++;
                d=0;
            } else if(e==1){
                e=0;
            }else if(f==1){
                conteoRival++;
                f=0;
            }
            b=0;
        }else if (c==1){
            if(d==1){
                conteoRival++;
                d=0;    
            } else if(e==1){
                conteoJugador++;
                e=0;
            }else if(f==1){
                f=0;
            }
            c=0;
        }
        document.getElementById("resumenResultados").textContent="Jugador ("+conteoJugador +")"+" - Computador ("+conteoRival+")";
        if (conteoJugador==3){
            document.getElementById("resumenResultados").textContent="Ganaste";
            conteoJugador=0;
            conteoRival=0;
        } else if (conteoRival==3){
            document.getElementById("resumenResultados").textContent="Perdiste";
            conteoJugador=0;
            conteoRival=0;
        }
}



