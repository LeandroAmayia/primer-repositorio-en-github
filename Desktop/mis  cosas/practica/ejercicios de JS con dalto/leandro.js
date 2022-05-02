// ejercicio 1 

// ( problema A )

// 3 chicos 23 años perfectamente normales estan en una heladeria para comprar um helado , pero hay un problema :los precios no estan al lado de cada estante con su respectivo helado .
// Ellos quieren comprar el helado mas caro que puedan con la plata que tienen ,asi que ... veamos como podemos ayudarlos .

// ROBERTO tiene $ 1.6 USD
// PEDRO tiene $ 1.7 USD
// COFLA tiene $ 3 USD

// LOS PRECIOS DE LOS HELADOS SON LOS SIGUIENTES :

// palito de agua : $ 0.6 USD
// palito helado de crema : $ 1 USD
// bonbom helado marca heladix : $ 1.6 USD
// bonbom helado marca heladovich : $ 1.7 USD
// bonbom helado marca helardo : $ 1.8 USD 
// potecito de helado con confites : $ 2.9 USD
// pote de 1/4 KG : $ 2.9 USD 

//        CREAR SOLUCIIONES  :

//        _ pedirles que ingresen el dinero que tienen y mostrarles el helado mas caro que puedan comprar 
//        _ si hay dos o mas con el mismo precio, mostrarles àmbos
//        _cofla quiere saber cuanto es el vuelto.

    // 
    
//         SEGUNDO EJERCICIO

// (A)_ un joven muy afortunado logro ganar el primer premio de la loteria .. exacto, estamos hablando del pobre al que cofla le dio el boleto, el tipo decide hacer una fiesta en su casa para festejar que salio de la pobreza , como ahora es millonario compro una maquina que  solo deja pasar a los mayores de 18 años ..

//     _dejar pasar solo a los mayores de edad 
//     _la primer persona que entra despues de las 2 AM no paga 

    // let free = false ;

    // const validarCliente = (time)=>{
    //     let edad = prompt('cual es tu edad ?');
    //     if( edad >= 18){
    //             if( time >= 2 && time < 6 && free == false){
    //                 alert('podes pasar gratis por ser el primero despues de las 2 AM ');
    //                 free=true
    //             }else{
    //                 alert('son las ' + time + ' hs podes pasar si pagas ');
    //             }
    //     }else{
    //         alert('sos menor de edad , asi que no vas a pasar por PEKE');
    //     }
    // }

    // validarCliente(23);
    // validarCliente(24);
    // validarCliente(0.2);
    // validarCliente(0.6);
    // validarCliente(1);
    // validarCliente(2);
    // validarCliente(2.4);
    // validarCliente(3);
    
    // (B)_cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir ...
    //    Al otro dia comienza las clases del siclo basico de de la universidad ( por qeu cofla quiere ser programador y se inscribio en la facultad de ingenieria de software).
    //    en el curso en total son 19 alumnos , pero surgio un problema que dificulto a la facultad :
    //    se rompio el sistema de registro de asistencias y durante los proximos 30 dias no se podran hacer registros de datos  de 
    //    ningun tipo, por ende las clases no podran comenzar hasta que esto se solucione.

    //    _crear mini-sistema que nos permita registrar los alumnos que esten precentes ( P ) y ausentes ( A ) en clases .
    //    _pasado los 30 dias , mopstrar la situacion final de todos los alumnos ( Nro de presentes y aucentes ).
    //    _se puede tener un maximo de 10% de ausensias por semestre , si se tiene mas , aclarar que esta desaprobado. 

        // let cantidad = prompt(' cuantos alumnos son ?');
        // let alumnosTotales = [] ;
        // for( i = 0 ; i < cantidad ; i++){
        //     alumnosTotales[i]= [ prompt(' Nombre del Alumno'+ (i+1)), 0 ];
        // };
        // const tomarAsistensia = (nombre,p)=>{
        //     let presencia = prompt(nombre);
        //     if( presencia == "p" || presencia == "P"){
        //         alumnosTotales[p][1]++;
        //     }
        // }

        // for( i = 0 ; i < 30 ; i++){
        //     for( alumno in alumnosTotales){
        //         tomarAsistensia(alumnosTotales[alumno][0], alumno);
        //     }
        // }

        // for( alumno in alumnosTotales){
        //     let resultado = alumnosTotales[alumno] [0]+' <br>' ;
        //     _________presentes :' <b> ' +alumnosTotales[alumno] [1] +'</b> <br> '
        //     _________ausentes : '<b>' +  30 - parstInt(alumnosTotales[alumno] [1]) +'</b>';
        //     if( 30 - alumnosTotales[alumno] [1] > 18){
        //         resultado += " <b style='color = red'>REPROBADO POR INASISTENCIA </b><br><br> ";
        //     }else{
        //         resultado+=" <br> <br>"
        //     }
        //     document.write(resultado)
        // }
          
        // (C)_cofla feliz por haber empezado las clases volvio a su casa y ya tiene tarea basica de calculo; tiene que hacer un par de 
        //     ejercicios de matematica que incluyen sumas , resta , multiplicacion y division, realizar esto en una calculadora 
        //     puede ser mucho mas efectivo.
              
        //       _crear una calculadora que nos simplifique el trabajo

        // const sumar =( num1, num2)=>{
        //     return parseInt (num1) + parseInt(num2);
        // }
        // const restar =( num1, num2)=>{
        //     return parseInt (num1) - parseInt(num2);
        // }
        // const multiplicar =( num1, num2)=>{
        //     return parseInt (num1) * parseInt(num2);
        // }
        // const dividir =( num1, num2)=>{
        //     return parseInt (num1) / parseInt(num2);
        // }
        // alert(' que operacion deseas realizar ?');
        //  let operacion = prompt( " 1: suma , 2:resta , 3: multiplica , 4: divide");
        //  if( operacion == 1){
        //      let numero1 = prompt (' primer numero para sumar');
        //      let numero2 = prompt (' segundo numero para sumar');
        //      resultado = sumar( numero1,numero2)
        //      alert(' tu resultado es '+resultado)
        //  }
        //   else if( operacion == 2){
        //     let numero1 = prompt (' primer numero para restar');
        //     let numero2 = prompt (' segundo numero para restar');
        //     resultado = restar( numero1,numero2)
        //     alert(' tu resultado es '+resultado)
        // }
        //  else if( operacion == 3){
        //     let numero1 = prompt (' primer numero para multiplicar');
        //     let numero2 = prompt (' segundo numero para multiplicar');
        //     resultado = multiplicar( numero1,numero2)
        //     alert(' tu resultado es '+resultado)
        // }
        //  else if( operacion == 4){
        //     let numero1 = prompt (' primer numero para dividir');
        //     let numero2 = prompt (' segundo numero para dividir');
        //     resultado = dividir( numero1,numero2)
        //     alert(' tu resultado es '+resultado)
        // }else{
        //     alert(' no se encontro la operacion requerida')
        // }
    
            // CREAR SOLUCION 3

            // (A)_ cofla entro a una tienda que vende celulares  por que le parecio bastante bueno  comprarse un nuevo celular.
            //      de todos los modelos que hay disponibles en la tienda , a cofla le llamaron la atencion 3 telefonos especificamente ,
            //      El problema es que ningun vendedor sabe nada al respecto, entonces no pueden recomendarle nada ... pero claro :
            //      él antes de comprar esos celulares quiere ver  las cualidades y comportamientos de cada uno para poder comprarlos , 
            //      ahí entramos nosotros

            //         _crear un sistema para mostrarle las particularidades  de los tres celulares 
            //         _cada celular debe tener : color , peso , resolucion de pantalla , resolucion de camara  y memoria ram
            //         _ cada celular debe : prender , tomar fotos y grabar .


        //     class celular {
        //         constructor( color , peso , tamaño , rdc , ram){
        //             this.color = color ;
        //             this.peso = peso ;
        //             this.tamaño = tamaño ;
        //             this.resolucionDeCamara = rdc ;
        //             this.memoriaRam = ram ;
        //             this.encendido = false ;
        //         }
        //         presionarBotonEncendido(){
        //             if( this.encendido == false){
        //                 alert( "celular encendido ");
        //                 this.encendido = true;                       
        //             }else{
        //                 alert(" celular apagado ") ;
        //                 this.encendido=false
        //             }
        //         }

        //         reiniciar(){
        //             if( this.encendido == true){
        //                 alert( " el celular esta reiniciando");
        //             } else{
        //                 alert(" el celular esta apagado ");
        //             }
        //         }
        //         tomarFoto(){
        //             alert( " foto tomada en una resolucion de " + this.resolucionDeCamara);    
        //         }
        //         grabarVideos(){
        //             alert(" grabando video en "+ this.resolucionDeCamara)
                               
        //         }
        //         mobileInfo(){
        //             return`
        //             Color: <b> ${this.color} </b> <br>
        //             Peso : <b> ${this.peso} </b> <br>
        //             Tamaño : <b> ${this.tamaño} </b> <br>
        //             Resolucion de video : <b> ${this.resolucionDeCamara} </b> <br>
        //             memoria RAM : <b> ${this.memoriaRam} </b> <br> `;
        //         }
        //     }
            

        //     celular1 = new celular( "rojo", "150 g " , "5 pulgadas" , " HD", "1 GB ");
        //     celular2 = new celular( "negro", "155 g " , "5.4 pulgadas" , "Full HD", "2 GB ");
        //     celular3 = new celular( "blanco", "145 g " , "5.9 pulgadas" , "Full HD", "2 GB ");

        //     // celular1.presionarBotonEncendido();
        //     // celular1.tomarFoto();
        //     // celular1.grabarVideos();
        //     // celular1.reiniciar();
        //     // celular1.presionarBotonEncendido();

        //   document.write(`
        //   ${ celular1.mobileInfo()} <br>
        //   ${ celular2.mobileInfo()} <br>
        //   ${ celular3.mobileInfo()} <br>
        //   `);

            //  (B)_ COFLA no esta satisfecho con los celulares asi que decide ir a la seccion celulares de alta gama , donde va a poder
            //  encontrar los celulares mas caros del lugar , asi que al entrar vio 2 celulares que le encantaron , estos dos celulares de alta 
            //  gama pueden hacer todo lo que podian hacer los otros tres anteriores pero tienen mejores caracteristicas y ademas pueden grabar en 
            //  camara  super lenta, tiene reconocimiento facial y una camara extra.

            //     CREAR SOLUCIONES 

            //     - IMPLEMENTAR  todas estas cualidades en los celulares de alta gama

            // class celular {
            //              constructor( color , peso , tamaño , rdc , ram){
            //                  this.color = color ;
            //                  this.peso = peso ;
            //                  this.tamaño = tamaño ;
            //                  this.resolucionDeCamara = rdc ;
            //                  this.memoriaRam = ram ;
            //                  this.encendido = false ;
            //              }
            //              presionarBotonEncendido(){
            //                  if( this.encendido == false){
            //                      alert( "celular encendido ");
            //                      this.encendido = true;                       
            //                  }else{
            //                      alert(" celular apagado ") ;
            //                      this.encendido=false
            //                  }
            //              }
        
            //              reiniciar(){
            //                  if( this.encendido == true){
            //                      alert( " el celular esta reiniciando");
            //                  } else{
            //                      alert(" el celular esta apagado ");
            //                  }
            //              }
            //              tomarFoto(){
            //                  alert( " foto tomada en una resolucion de " + this.resolucionDeCamara);    
            //              }
            //              grabarVideos(){
            //                  alert(" grabando video en "+ this.resolucionDeCamara)
                                       
            //              }
            //             mobileInfo(){
            //                  return`
            //                  Color: <b> ${this.color} </b> <br>
            //                  Peso : <b> ${this.peso} </b> <br>
            //                  Tamaño : <b> ${this.tamaño} </b> <br>
            //                  Resolucion de video : <b> ${this.resolucionDeCamara} </b> <br>
            //                  memoria RAM : <b> ${this.memoriaRam} </b> <br>
            //                  Resolucion de camara extra : <b> ${this.resolucionDeCamara} </b> <br> `
                            
            //              }
                      
            //          }
            //           class celularAltaGama extends celular {
            //             constructor( color , peso , tamaño , rdc , ram , rdce){
            //                 super(color,peso,tamaño,rdc,ram);
            //                 this.resolucionDeCamaraExtra = rdce
            //             }
            //             grabarVideosLento(){
            //                 alert(" Estas grabando en camara lenta");
            //             }
            //             reconocimientoFacial(){
            //                 alert(" vamos a hacer un reconocimiento facial");
            //             }
            //             infoAltaGama(){
            //                 return this.infoAltaGama()+`resolucion de camara extra : ${this.resolucionDeCamaraExtra}` 
            //             }

            //           }
                     
                    
        
            //         //  celular1 = new celular( "rojo", "150 g " , "5 pulgadas" , " HD", "1 GB ");
            //         //  celular2 = new celular( "negro", "155 g " , "5.4 pulgadas" , "Full HD", "2 GB ");
            //         //  celular3 = new celular( "blanco", "145 g " , "5.9 pulgadas" , "Full HD", "2 GB ");
        
            //          // celular1.presionarBotonEncendido();
            //          // celular1.tomarFoto();
            //          // celular1.grabarVideos();
            //          // celular1.reiniciar();
            //          // celular1.presionarBotonEncendido();

            //          celular1 = new celularAltaGama("rojo","130g","5.2","4K","3GB", "Full HD");
            //          celular2 = new celularAltaGama("Blanco","134g","5.4","4K","4GB", "HD");
        
            //         document.write(`
            //        ${ celular1.mobileInfo()} <br>
            //        ${ celular2.mobileInfo()} <br>
            
            //        `);

            //    (C)_ COFLA ya tiene su nuevo celular y ahora esta mirando las aplicaciones de la play store ya que quiere jugar juegos  que sean 
            //    muy populares,que tengan buena puntuacion y que pesen poco, pero  las 7 apps que llamaron su atencion son de un tamaño similar
            //    y sabe que si se descarga Todas, probablemente juegue con todas, pero él se va a desacargar solo 2 para tener no perdidas
            //    innecesarias de timpojugando juegos con su celular, pero el problem viene cuando no puede decidirse cual de todas estas 
            //    aplicaciones es la que va a descargar.
               
            //           CREAR SOLUCIONES

            //           _crear un sistema que ayude a cofla a decidir cual apps descargar.
            //           _la informacion de los instaladores debe tener la cantidad de descargas , la puntuacion y el peso.
            //           _las Apps de deben poder instalar, abrir , cerrar y desintalar.
        
            //     class App {
            //         constructor(descargas,puntuacion,peso){
            //             this.descargas = descargas ;
            //             this.puntuacion = puntuacion ;
            //             this.peso = peso ;
            //             this.iniciada = false ;
            //             this.instalada = false ;
            //         }
            //         instalar(){
            //             if( this.instalada == false && this.instalada == true){
            //                 this.instalada = true ;
            //                 alert(" se puede instalar correctamente");
            //             }
            //         }
            //         desinstalar(){
            //             if( this.instalada == true){
            //                 this.instalada = false ;
            //                 alert(" se puede desinstalar correctamente");
            //             }
            //         }
            //         abrir(){
            //             if( this.iniciada == false && this.instalada == true){
            //                 this.iniciada = true ;
            //                     alert( "app encendida") ;
            //             }
            //         }
            //         cerrar(){
            //             if( this.iniciada == true && this.instalada == true){
            //                 this.iniciada = false ;
            //                     alert( "app cerrada") ;
            //             }
            //         }
            //         appInfo(){
            //             return `
            //             Descargas : <b> ${ this.descargas} </b> <br>
            //             Puntuacion : <b> ${ this.puntuacion} </b> <br>
            //             Peso : <b> ${ this.peso} </b> <br>`
            //         }
                   
                    

            //     }
            //     app = new App("16.000","5 estrellas","900 mb");
            //     app2 = new App("14.000","3 estrellas","1200 mb");
            //     app3 = new App("18.000","5.5 estrellas","950 mb");
            //     app4 = new App("16.400","5.2 estrellas","940 mb");
            //     app5 = new App("16.800","5.4 estrellas","945 mb");
            //     app6 = new App("12.000","3 estrellas","1500 mb");
            //     app7 = new App("17.000","5 estrellas","800 mb");

            //    document.write(`
            //       ${app.appInfo()}<br> 
            //       ${app2.appInfo()}<br> 
            //       ${app3.appInfo()}<br> 
            //       ${app4.appInfo()}<br> 
            //       ${app5.appInfo()}<br> 
            //       ${app6.appInfo()}<br> 
            //       ${app7.appInfo()}<br> 
            //    `);

                    

                // (A)_cofla ya esta terminando el primer semestre del primer ciclo, la tarea que debe realizar es mucho mas avanzada que las que teniamos antes, ademas de resta , suma , multiplicacion y division 
                // , ahora tambien necesita calcular potencia , raiz cuadrada y cubica
                 

                //     CREAR SOLUCIONES


                //  _ crear calculadora para agrgarle las nuevas funciones


                // (B)_la facultad de cofla esta por comenzar y ya las 12 materias tienen asignado un profesor y todos los alumnos que ser anotaron en dichas clases
                //  ,pero nbecesitamos ver esto mas ordenado 

                //         CREAR SOLUCIONES

                //         _ crea una funcion que al pasarle como parametro la materia nos devuelva:

                //                 "profesor asignado "

                //                 " el nombre de todos los alumnos"
                //         _ crea una funcion que nos diga en cuantas clases esta cofla.
                //         _ nombra las clases en las que esta y los profesores de cada una     
                
                //     const obtenerInformacion = (materia)=>{
                        
                //         materias = {
                //             fisica:[ "perez ","nuri","cofla", " mauri", " agus"],
                //             programacion:[ "gomez ","nuri","ger" , " agus"],
                //             logica:[ "ramirez ","nuri","ger", " mauri", " agus"],
                //             quimica:[ "sanchez ","nuri","ger", " mauri", " agus"],
                //         }
                //         if ( materias[materia] !== undefined) {
                //             return [materias[materia],materia];
                //         }else{
                //             return " la materia no exixte "
                //         }
                //     }

                //    let informacion = obtenerInformacion("fisica");
                  
                //    if( informacion !== false){
                //        let profesor = obtenerInformacion ("fisica")[0][0];
                //        let alumnos = obtenerInformacion ("fisica")[0].shift();
                //        document.write(`el profesor de  <b>${informacion [1]}</b> es : <b style="color:red">${informacion [0]}</b> <br> `)
                //    }

                //   (A)_termino el primer semestre y cofla no sabe si aprobara las materias,para lograrlo necesitara :
                //     - contar con almenos el 90% de asistencias.
                //     -el promedio por materia debe ser de al menos 7 / 10.
                //     -debe tener al menos el 75% de los trabajos practicos entregados.

                //       - solicitar los datos y decirle si aprueba o no .
                //       -mostrar todo esto con colores representativos en consola  ( ej : no aprobar con rojo) .
                //       -todo esto estructurado comno tabla

                const materias = {

                    fisica : [90,6,3,"fisica"],
                    matematica : [84,8,2,"matematica"],
                    logica : [92,8,4,"logica"],
                    quimica : [96,6,4,"quimica"],
                    calculo : [91,6,3,"calculo"],
                    programacion : [79,9,4,"programacion"],
                    biologia : [75,9,2,"biologia"],
                    bbdd : [98,9,1,"base de dato"],
                    algebra : [100,10,4,"algebra"],
                
                 $asistencia = ()=> {
                    for (materia in materias) {
                        let asistencias = materias[materia][0];
                    } if (asistencias >= 90) {
                        console.log(materias[materia][3]);
                        console.log("%c  Aprobado", "   color:green");
                    } else {
                        console.log(materias[materia][3]);
                        console.log("%c  Desaprobado", "   color:red");


                    }
                }
        }

                $asistencia()
            
            
               
             
