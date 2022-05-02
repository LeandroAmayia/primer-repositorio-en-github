// $num1 = parseInt(prompt("ingrese un número y le mostrare : el menor , el mayor y el intermedio de éstos"));
// $num2 = parseInt(prompt("ingrese otro y le mostrare el menor , el mayor y el intermedio de éstos"));
// $num3 = parseInt(prompt("ingrese el último y le mostrare el menos , el mayor y el intermedio de éstos"));

// if( $num1 > $num2 && $num1 > $num3){
//     document.write($num1 +"  es el mayor " );
// }if( $num1 == $num2){
//     document.write( $num1 +" y "+ $num2 + "  son iguales");
// }if( $num1 == $num3){
//     document.write( $num1 +" y "+ $num3 + "  son iguales");
// }if( $num2 == $num3){
//     document.write( $num2 +" y "+ $num3 + "  son iguales");
// }else if( $num1 < $num2 ){
//     document.write($num1 +"  es el menor ");
// }if( $num1 == $num2){
//     document.write( $num1 +" y "+ $num2 + "  son iguales");
// }if( $num1 == $num3){
//     document.write( $num1 +" y "+ $num3 + "  son iguales");
// }else if( $num3 < $num2 && $num1 > $num3){
//  document.write($num3 +"  es el mayor ");
// }else if( $num2 > $num1 && $num2 > $num3){
//     document.write( $num2 + " es el mayor");
// }else if( $num3 > $num1 && $num3 > $num2){
//     document.write( $num2 + " es el mayor");
// }else{
//     document.write($num2 +"es el menor")
// }


    //   EJERCICIOS PARA MEJORAR EN JS 

    //   PRIMER EJERCICIO
     
//  $num = parseInt( prompt(" ingresá un número y te digo si es par o impar"));
//  function parim( $num) {
//      resultado = $num % 2 ;
//      if(resultado == 0){
//          document.write($num + "  es un número par")
//      }else{
//          document.write( $num + "  es un número impar")
//      }
//  }  
// parim($num)

//      SEGUNDO EJERCICIO

// function nega( $num1, $num2){
//     $resta = $num1 - $num2;
//     if($resta >= 0 ){
//         document.write("  " + $num1 + " menos " + $num2 + " es " + $resta);
//     }else{
//         document.write("  " + $num1 + " menos " + $num2 + " es " + $resta * (-1) + " y es de valor es negativo");
//     }
// }
// $n1 = parseInt(prompt( " ingrese un número para la resta"));
// $n2 = parseInt(prompt( " ingrese otro por favor"));
// nega( $n1, $n2);

//      TERCER EJERCICIO

$mutual = prompt( " digamé que mutual tiene : OSEP , OSDE, PAMI , MEDICUS ");
$local = prompt( " digamé su localidad por favor : MAIPU , DORREGO , JUNIN ");

function ubi ( $mutual , $local ){
    if( $local.toLowerCase()==" maipu" ){
        $coseguro = 350;
    }else if( $local.toLowerCase()=="dorrego"){
        $coseguro = 450;
    }else {
        $coseguro = 500;
    }


switch( $mutual.toUpperCase()){

    case "OSEP" :
        $precio = $coseguro * 30 / 100 ;
        document.write( " usted es de   " + $local + " y su precio coseguro es de  " + $precio);
        break;

    case "OSDE" :
        $precio = $coseguro + ( $coseguro * 40 / 100);
        document.write( " usted es de  " + $local + " y su precio de coseguro es de " + $precio);
        break;
        
    case "PAMI" :
        $precio = $coseguro - ( $coseguro * 25 / 100);
        document.write( " usted es de " + $local + " y su precio es de " + $precio);
        break;
        
    case "MEDICUS" :
        $precio = $coseguro + ( $coseguro * 15 / 100);
        document.write( " usted es de " + $local + " y su precio es de " + $precio);
        break;
        

}
}

ubi ($mutual, $local);

