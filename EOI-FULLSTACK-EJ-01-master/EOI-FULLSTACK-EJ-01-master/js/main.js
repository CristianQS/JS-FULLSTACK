

// Devuelve EL NOMBRE del mayor de los tres
function quienEsMayorDeLosTres(p1, p2, p3) {
    var edad1 = parseInt(p1.age),
    edad2 = parseInt(p2.age),
    edad3 = parseInt(p3.age);
    if (edad1 && edad2 && edad3) {
        if (edad1 > edad2 && edad1 > edad3) {
            return p1.name;
        } else if (edad2 > edad1 && edad2 > edad3) {
            return p2.name;
        } else if (edad3 > edad2 && edad3 > edad1) {
            return p3.name;
        }else{
            return "Hay nombres iguales"
        }
    }else {
        alert("La edad es con número")
    }
}

// Devuelve en forma de boolean el resultado
// NOTA: las mayúsculas y minúsculas no se consideran distintas
function hayAlgunCorreoRepetido(p1, p2, p3) {
    var e1 = p1.email.toLowerCase();
    var e2 = p2.email.toLowerCase();
    var e3 = p3.email.toLowerCase();
    return (e1 === e2 || e1  === e3 ||e2 === e3);

}

// Pregunta al usuario por su edad y devuelve en boolean la respuesta
function elUsuarioEsMayorQueLosTres(p1, p2, p3) {
    var edad = parseInt(prompt("¿Cuál es su edad?"));
    while (!(parseInt(edad))) {
        edad = prompt("La edad va con número ¿Cuál es su edad?");
    }

    return (edad > parseInt(p1.age) && edad > parseInt(p2.age) && edad > parseInt(p3.age));


}

// Devuelve el número de los que tienen correo acabado en gmail.com
// RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()
// RESTRICCIÓN: Resuélvelo usando el método .search()
// RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()
// RESTRICCIÓN: Plantea otra forma de solucionarlo que no use ninguno de los métodos de arriba
// Deja descomentada solo una de las soluciones
function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3) {
    var array = [p1,p2, p3];
    var result = 0;
   /* for(var i = 0; i<array.length;i++){
        if(array[i].email.indexOf("gmail.com") != -1){
            result++;
        } 
    }
    for(var i = 0; i<array.length;i++){
        if(array[i].email.search("gmail.com") != -1){
            result++;
        } 
    }*/
    for(var i = 0; i<array.length;i++){
        if(array[i].email.substring(array[i].email.indexOf("gmail.com")) == "gmail.com"){
            result++;
        } 
    }
    

    return result;
}

