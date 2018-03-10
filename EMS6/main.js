let correos = [
    {usuario: 'JoseElMaquina', email: 'jose.el.maquina@gmail.com'},
    {usuario: 'PepeElCorrecto', email: 'pepe@corecto.com'},
    {usuario: 'JoseLuisDaBest', email: 'joseluis@dabest.com.eu'},
    {usuario: 'EsteEstaBien', email: 'este@bien.com'},
    {usuario: 'Elcarterista', email: 'elcarterista20@gmail.com'}
];

var email = correos.filter(e => !e.email.endsWith("gmail.com"));
console.log(email);


let procesadores = [
    {modelo: 'pentiumII', operacionesPorSegundo: 10500, tasaDeFallos: 15},
    {modelo: 'i7', operacionesPorSegundo: 20000, tasaDeFallos: 60},
    {modelo: '8086', operacionesPorSegundo: 30, tasaDeFallos: 26.3},
    {modelo: 'i3', operacionesPorSegundo: 11389, tasaDeFallos: 58.4},
    {modelo: 'i5', operacionesPorSegundo: 15000, tasaDeFallos: 10},
    {modelo: 'celeron', operacionesPorSegundo: 200, tasaDeFallos: 80}
]

var proBuenos = procesadores.filter(pro => pro.tasaDeFallos <=50)
    .sort((pro,pro2) => pro2.operacionesPorSegundo - pro.operacionesPorSegundo);
console.log(proBuenos);


var alojamientos = [
    {
        nombre: 'Bahía Feliz',
        comentarios: [
            {
                usuario: 'Franz Kartofen',
                comentario: 'Gut',
                valoracion: 6
            },
            {
                usuario: 'Ferdinando',
                comentario: 'Muy bueno',
                valoracion: 9
            },
            {
                usuario: 'Roberthino',
                comentario: 'Molto malo',
                valoracion: 3
            },    
        ]
    },
    {
        nombre: 'Nacho Sol',
        comentarios: [
            {
                usuario: 'Manolín',
                comentario: 'Estuvo chido',
                valoracion: 10
            },
            {
                usuario: 'Solete',
                comentario: 'Muy sucio',
                valoracion: 2
            }    
        ]
    }
    
]

/**
 * alojamientos.forEach(
 *      alojamiento =>
 *              alojamiento.media = alojamiento.comentarios.reduce(
 *                  (anterior, actual) => anterior + actual.valoracion, 0)/alojamiento.comentarios.length)
 */
var valoraciones = alojamientos.map(alojamiento => alojamiento.comentarios.map(comentario => comentario.valoracion));

for(var i = 0; i<valoraciones.length;i++){
     alojamientos[i].media = valoraciones[i].reduce((a,b) => a + b)/valoraciones[i].length;
}

console.log(alojamientos);


var usuarios = [
    {
        "nombre": "Gustav Fransua",
        "email": "gustav@gmail.com" 
    },
    {
        "nombre": "Francisco Paco",
        "email": "fran@gmail.com"
    },
    {
        "nombre": "Manolín Vega",
        "email": "vega.manolin@gmail.com"
    },
    {
        "nombre": "Orlando Florencio",
        "email": "orlan@gmail.com"
    },
    {
        "nombre": "Andrea Pérez",
        "email": "andre.perez@gmail.com"
    },
    {
        "nombre": "Floren Hi",
        "email": "crypto@gmail.com"
    },
    {
        "nombre": "Pedro García",
        "email": "pedrogar@gmail.com"
    },
    {
        "nombre": "Elena Ramírez",
        "email": "elenra@gmail.com"
    }
];

var alojamientos = [
    {
     "nombre": "RIU",
     "comentarios": [{
       "usuario": "Manolín Vega",
       "comentario": "Estancia agradable",
       "valoracion": 8.5
     }, {
       "usuario": "Orlando Florencio",
       "comentario": "Bonito el sitio",
       "valoracion": 7
     }, {
       "usuario": "Andrea Pérez",
       "comentario": "Estancia inolvidable",
       "valoracion": 10
     }]
   },
   {
     "nombre": "Nacho Sol",
     "comentarios": [{
       "usuario": "Floren Hi",
       "comentario": "Un lugar para pensar en cryptos y mucho sol",
       "valoracion": 10
     }, {
       "usuario": "Pedro García",
       "comentario": "Decente tirando a bajo",
       "valoracion": 4
     }]
   },
   {
     "nombre": "Hilton",
     "comentarios": [{
       "usuario": "Elena Ramírez",
       "comentario": "Todo fantástico, acorde con el precio",
       "valoracion": 10
     }, {
       "usuario": "Gustav Fransua",
       "comentario": "Best sitio in the world",
       "valoracion": 10
     }, {
       "usuario": "Francisco Paco",
       "comentario": "Lo mejor la comida",
       "valoracion": 9.5
     }]
   },
   {
     "nombre": "El desastrillo",
     "comentarios": [{
       "usuario": "Manolín Vega",
       "comentario": "Chiquita porquería",
       "valoracion": 3
     }]
   }
 ]

 
 //var nombre = alojamientos.map(a=>a.comentarios);

 alojamientos.forEach (alojamiento =>{
     alojamiento.comentarios.forEach( comentario => {

        var nombreDelHotel = alojamiento.nombre;
        var putuacion = comentario.valoracion;

        var nombreDelUsuario = comentario.usuario;

        var usuario = usuarios.find( user => user.nombre === nombreDelUsuario);
        if( !usuario.valoraciones ){
            usuario.valoraciones = [];  
        }
        usuario.valoraciones.push({hotel: nombreDelHotel, nota:putuacion});
     })
 });

 console.log(usuarios);


let provincias = [
    {nombre: 'Madrid', codigoPostal: '28223'},
    {nombre: 'Albacete', codigoPostal: '02653'},
    {nombre: 'Madrid', codigoPostal: '28223'},
    {nombre: 'Las Palmas', codigoPostal: '35118'},
    {nombre: 'Barcelona', codigoPostal: '08480'},
    {nombre: 'Madrid', codigoPostal: '28001'},
    {nombre: 'Barcelona', codigoPostal: '08480'},
];

let result = _.uniq(provincias.map( provincia => provincia.codigoPostal));

console,console.log(result);

let servidores = [
    {
        almacenan: '.mp4',
        nodos: ['ordenador1','ordenador2','ordenador3']
    },{
        almacenan: '.mp3',
        nodos: ['ordenador2','ordenador5']
    },{
        almacenan: '.json',
        nodos: ['ordenador1','ordenador4','ordenador6']
    },{
        almacenan: '.png',
        nodos: ['ordenador1', 'ordenador4']
    },{
        almacenan: '.avi',
        nodos: ['ordenador1','ordenador7']
    },
];

var nodos = servidores.filter(servidor => servidor.almacenan === ".mp4" || servidor.almacenan === ".png")
        .map(nodo => nodo.nodos);
 var nodosSinRepetidos = _.uniq( _.flatten(nodos));


console.log(nodosSinRepetidos);
