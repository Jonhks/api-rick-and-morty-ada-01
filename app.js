// const nombres = ['Jonh', 'Javier', 'Ana', 'Victoria', 'Catalina', 'Angelica', 'Veronica', 'Andrea', 'Mariana', 'Susana', 'Pepe'];

// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);
// console.log(nombres[4]);
// console.log(nombres[5]);
// console.log(nombres[6]);

// for(let index = 0; index < 7; index++){
//   console.log(nombres[index])
// }
// indiceoposicion  0 ,   1      ,  2   ,  3        ,      4    ,     5      ,   6      ,   7     ,   8       ,   9    ,  10
// const nombres = ['Jonh', 'Javier', 'Ana', 'Victoria', 'Catalina', 'Angelica', 'Veronica', 'Andrea', 'Mariana', 'Susana', 'Pepe'];
// valor o elem    Jonh    Javeir    ANa     Vic       Cata

// nombres.push('Juana');
// console.log(nombres[0]);
//        11                   11            10 = 10 + 1;
// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index])
// }

// console.log(nombres)


// index   Valor en el arreglo
//  0           Jonh
//  1           Javier
//  2           Ana
//  3           Victoria
// .... 


// const otras = ['textos', 34, true, undefined, 'mas textos'];

// for(let i = 0; i < otras.length; i++ ){
//   console.log(otras[i])
// }

// const coches = [
//   'bocho', 
//   'seat', 
//   'audi', 
//   'ferrari', 
//   'combi',
//   'astra',
//   'atos'
// ];

// for (let index = 0; index < coches.length; index++) {
//   console.log(coches[index]);
// }


                    // Objetos


// const jonh = {
//   nombre: 'Jonh',
//   edad: 35,
//   altura: 1.85,
//   ojos: 'cafes',
//   cabello: null,
//   mujer: false,
//   amigos: [
//     {
//       beber: 'cerveza', 
//       jugar: 'Video juegos', 
//       cine: 'Terror'
//     }
//     ,'Edder', 
//     'Jacke', 
//     'Juan', 
//     'Pedro', 
//     'Ana', 
//     'Melissa',
//     [
//     'Mario', 
//     'Luigi', 
//     'Kratos'
//   ]
// ],
//   mascota: {
//     nombre: 'Logan',
//     raza: {
//       principal: 'Dogo',
//       secundaria: 'Terry'
//     },
//     edad: 5,
//     peso: 70,
//     color: 'blanco',
//     juguetes: ['pelota', 'hueso', 'carnasa', 'trapo']
//   },
//   saludar: () => alert('Hola Soy Jonh'),
// };

// console.log(jonh.amigos[0].beber);

// Para ingresar a las propiedas de los:

// objetos es  obj.propiedad  =  valor

// arreglos    areglo[indice] = valor




// Fetch

// console.log('https://rickandmortyapi.com/api/character');
const root = document.getElementById('root');
const url = 'https://rickandmortyapi.com/api/character';

fetch(url)
  .then(respuesta => respuesta.json())
  .then(datos => {
    const arreglo = datos.results;
    let mensaje = '';
    for(let i = 0; i < arreglo.length; i++){
      console.log(arreglo[i])
      mensaje +=  `
      <div class="col s12 m6 l3">
        <div class="card">
          <div class="card-image">
            <img src=${arreglo[i].image}>
          </div>
          <div class="card-content">
            <span class="card-title">${arreglo[i].name}</span>
            <p>Gender: ${arreglo[i].gender}</p>
            <p>Species: ${arreglo[i].species}</p>
            <p>Status: ${arreglo[i].status}</p>
            <p>Origin: ${arreglo[i].origin.name}</p>
            <p>Location: ${arreglo[i].location.name}</p>
          </div>
        </div>
      </div> `
    }
    root.innerHTML = mensaje;
  }
  )

//   let mensaje = '';
//   // '' =   ''   +  `<h1>Hola mundo</h1>`  // `<h1>Hola mundo</h1>`
//   mensaje = mensaje +`<h1>Hola mundo</h1>`
// // `<h1>Hola mundo</h1>` = `<h1>Hola mundo</h1>` + <p>Hola</p>`
//   mensaje +=  `<p>Hola</p>`

//   // `<h1>Hola mundo</h1><p>Hola</p>`

// root.innerHTML = mensaje;




