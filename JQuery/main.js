var array = [];
function addUser() {
    var user = getParametros();
    if (validaEmailRepetidos(user.correo)) {
        var userValidated = validarUsuario(user);
        if (userValidated.valid) {
            array.push(user);
            generateHtml(user);
        }
    } else {
        alert("El correo se encuentra repetido");
    }
}
function searchNames() {
    var nombre = $("input[name=searchText]").val();
    if(nombre === "") return showAllCards();
    showAllCards();
    let noNameArray = array.filter(user => user.nombre != nombre);
    for (let i = 0; i < noNameArray.length; i++) {
        let correoId = noNameArray[i].correo.toString().replace('.', '-').replace('@', '-');
        $("#" + correoId).hide();
    }
}

function showAllCards() {
    for (let i = 0; i < array.length; i++) {
        let correoId = array[i].correo.toString().replace('.', '-').replace('@', '-');
        $("#" + correoId).show();
    }
}
function removeCard(correo, idCorreo) {
    var indiceUser = array.map(user => user.correo).indexOf(correo);
    $("#" + idCorreo).remove();
    array.splice(indiceUser);
}

function validaEmailRepetidos(correo) {
    if (array.length != 0) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].correo === correo) return false;
        }
    }
    return true;
}


function generateHtml(user) {
    var idCorreo = user.correo.toString().replace('.', '-').replace('@', '-');
    var html = ' <div id=' + idCorreo + ' class="card" style="width: 18rem;">';
    html += '<div class="card-header">' + user.nombre + '</div> <ul class="list-group list-group-flush"> <li class="list-group-item"> <div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text" id="inputGroup-sizing-default">Nombre</span> </div>';
    html += '<input name="Nombre" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"  value=' + user.nombre + ' disabled>'
    html += '</div> </li> <li class="list-group-item"> <div class="input-group mb-3"> <div class="input-group-prepend"> <span class="input-group-text" id="inputGroup-sizing-default">Correo</span>';
    html += '</div> <input name="Correo" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value=' + user.correo + '  disabled>';
    html += '</div> </li> <li class="list-group-item"> <div class="input-group mb-3"> <div class="input-group-prepend"> <span class="input-group-text" id="inputGroup-sizing-default">Edad</span> </div>';
    html += '<input name="Edad" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value=' + user.edad + ' disabled>';
    html += '</div> </li> </ul><input class="btn btn-danger" type="submit" value="Eliminar" onclick="removeCard(\'' + user.correo + '\',\'' + idCorreo + '\')"></div>';

    $(".cards").append(html);
}
function getParametros() {
    var edad = $("#principal input[name=Edad]").val();
    var nombre = $("#principal input[name=Nombre]").val();
    var correo = $("#principal input[name=Correo]").val();
    var user = { nombre: nombre, correo: correo, edad: edad };
    return user;
}

function validarUsuario(user) {
    var obj = { valid: true, errors: [] };
    validaNombre(user, obj);
    validaCorreo(user, obj);
    validaEdad(user, obj);
    return obj;
}

var valid = true;

function applyStyle(selector) {
    if (valid == false) {
        paintBorder(selector, 'red');
    } else {
        paintBorder(selector, 'green');
    }
}

function paintBorder(query, color) {
    $(query).css('border-color', color);
}


function validaNombre(user, obj) {
    valid = true
    validaMin(user.nombre.length, obj, 5, "nombre_invalid_min_length", "El nombre debe contener más de 5 caracteres.");
    validaMax(user.nombre.length, obj, 60, "nombre_invalid_max_length", "El nombre debe contener menos o igual de 60 caracteres.");
    validaReg(user.nombre, obj, /\b[a-zA-ZÁÉÍÓÚáéíóúÄËÏÖÜäëïöü\s]+\b/, "nombre_invalid", "El nombre debe contener solo letras y caracteres.");
    applyStyle("#principal input[name=Nombre]");
}


function validaCorreo(user, obj) {
    valid = true
    validaMin(user.correo.length, obj, 7, "email_invalid_min_length", "El correo debe contener más de 7 caracteres.");
    validaMax(user.correo.length, obj, 60, "correo_invalid_max_length", "El correo debe contener menos o igual de 60 caracteres.");
    validaReg(user.correo, obj, /\w+@\w+/, "email_invalid", "El email es invalido.");
    applyStyle("#principal input[name=Correo]");
}

function validaEdad(user, obj) {
    valid = true
    validaMin(user.edad, obj, 5, "edad_invalid", "La edad debe ser más de 5 .");
    validaMax(user.edad, obj, 150, "edad_invalid_max_length", "La edad debe contener menos o igual de 150 .");
    applyStyle("#principal input[name=Edad]");
}

function actualizaObj(error, validar, obj) {
    obj.valid = validar;
    obj.errors.push(error);
}

function validaMin(user, obj, min, code, text) {
    if (user < min) {
        valid = false;
        var error = { code: code, text: text };
        actualizaObj(error, false, obj);
    }
}

function validaMax(user, obj, max, code, text) {
    if (user > max) {
        valid = false;
        var error = { code: code, text: text };
        actualizaObj(error, false, obj);
    }
    return true;
}

function validaReg(user, obj, exprex, code, text) {
    if (!user.match(exprex)) {
        valid = false;
        var error = { code: code, text: text };
        actualizaObj(error, false, obj);
    }
    return true;
}