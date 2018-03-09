

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


function ejercicio01(email) {
    return (email.toLowerCase() === "yunior.developer@hotmail.com" 
    || email.toLowerCase() === "miguel@mrbug.es" 
    || email.toLowerCase() === "imanol@mercadona.com.");
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


function ejercicio02(email) {
    var correo = email.toLowerCase();
    var num = 0;
    for (var i = 0; i < correo.length; i++) {
        if (correo.charAt(i) === "m") {
            num++;
        }
    }
    var result = "El correo " + email.toLowerCase() + " tiene " 
    + email.length + " caracteres y en mayúsculas se quedaría así " + email.toUpperCase();
    if (num == 0) return result += ". Además no contiene ninguna letra M"
    return result += ". Además contiene " + num + " letras M";

}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


function ejercicio03(email) {
    var numeros = "0123456789";
    var numerosCorreo = numeros.length;
    var nums = 0;

    var correo = email.toLowerCase();
    var principio = correo.indexOf("@")
    var dominio = correo.substring(principio, );

    for (var i = 0; i < correo.length; i++) {
        for (var j = 0; j < numerosCorreo; j++) {
            if (correo.charAt(i) === numeros.charAt(j)) {
                nums++;
            }
        }
    }
    var result='';
    if(principio === -1){
        principio = correo.length;
        result = "El correo " + correo + "no tiene dominio. ";
    }else{
        result = "El correo " + correo + " pertenece al dominio " + dominio + " y tiene " + (principio) + " caracteres sin contar el dominio ni el @."
    }
    if (nums == 0) return result += "Además, el correo no contiene ningún número";
    return result += "Además, el correo contiene " + nums + " números";
}



////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user) {
    comprobaciónForm(user)
    var result = "El usuario " + user.nombre;
    if (parseInt(user.edad) >= 18) {
        result += " es mayor de edad. Por lo tanto, le he creado un usuario con el correo " + user.correo;
    } else {
        result += "no tiene correo por ser menor de edad";
    }
    return result;
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////
function comprobaciónForm(user){
    if(parseInt(user.nombre)) return alert("El nombre va con caracteres");
    if(!parseInt(user.edad)) return alert("La edad va con numeros");
}

function ejercicio05(user) {
    comprobaciónForm(user)
    if (user.nombre != "Yunior") {
        return "La persona introducida no es Yunior";
    }
    else if (user.correo === "yunior.developer@hotmail.com" && user.edad === "24") {
        return "La persona introducida pudiera ser Yunior. Ya que tiene " + user.correo + "/" + user.edad + "/" + user.nombre;
    } else {
        return "La persona introducida es Yunior";
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////


function ejercicio06(user) {
    var obj = {valid: true,errors: []};
    
    validaMin(user.nombre.length,obj,5,"nombre_invalid_min_length", "El nombre debe contener más de 5 caracteres.");
    validaMax(user.nombre.length,obj,60,"nombre_invalid_max_length","El nombre debe contener menos o igual de 60 caracteres.");
    validaReg(user.nombre,obj,/\b[a-zA-ZÁÉÍÓÚáéíóúÄËÏÖÜäëïöü\s]+\b/,"nombre_invalid","El nombre debe contener solo letras y caracteres.");

    validaMin(user.correo.length,obj,7,"email_invalid_min_length","El correo debe contener más de 7 caracteres.");
    validaMax(user.correo.length,obj,60,"correo_invalid_max_length","El correo debe contener menos o igual de 60 caracteres.");
    validaReg(user.correo,obj,/\w+@\w+/,"email_invalid","El email es invalido.");

    validaMin(user.edad,obj,5,"edad_invalid","La edad debe ser más de 5 .");
    validaMax(user.edad,obj,150,"edad_invalid_max_length","La edad debe contener menos o igual de 150 .");

    return obj;

}

function actualizaObj(error, validar, obj) {
    obj.valid = false;
    obj.errors.push(error);
}

function validaMin(user,obj,min,code,text) {
    if (user < min) {
        valid = false;
        var error = {code: code,text: text};
        actualizaObj(error, false, obj);
    }
}

function validaMax (user,obj,max,code,text){
    if (user > max) {
        valid = false;
        var error = {code: code,text: text};
        actualizaObj(error, false, obj);
    }
}

function validaReg(user,obj,exprex,code,text) {
    if (!user.match(exprex)) {
        valid = false;
        var error = {code: code,text: text};
        actualizaObj(error, false, obj);
    }
}

////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////

var objUsers = {items_inserted: 0 ,ids : [],with_errors : [],users_stored:[]};

function ejercicio07(users) {
    for(var i = 0; i<users.length;i++){
        var user = ejercicio06(users[i]);
        if(user.valid){
            objUsers.users_stored.push(users[i]);
            objUsers.ids.push(i+1);
            objUsers.items_inserted++;
        }else {
            objUsers.with_errors.push(user.errors);
        }
    }
    return objUsers;
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////
