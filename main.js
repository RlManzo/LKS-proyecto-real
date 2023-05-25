class Producto{
    constructor(id,nombre,informacion, img,categoria){
        this.id = id;
        this.nombre = nombre;
        this.informacion = informacion;
        this.img = img;
        this.categoria = categoria;
        this.cantidad = 1;
      }
    }

const producto1 = new Producto(1,"remera1","","vinilo");
const producto2 = new Producto(2,"remera2","","sublimable");
const producto3 = new Producto(3,"remera3","","polimero");
const producto4 = new Producto(4,"remera4","","3d");
const producto5 = new Producto(5,"remera5","","sublimable");

const arrayProductos = [producto1, producto2, producto3, producto4, producto5];

const carrito = [];

const contenedorProductos = document.getElementById("contenedorProductos");

//funcion para pintar productos en la seccion Productos
function mostrarProductos(){
  arrayProductos.forEach(producto =>{
    const card = document.createElement("div");
    card.classList.add( "col-xl-3", "col-md-6", "col-xs-12");
    card.innerHTML =  `
                      <div class="">
                         <img src="${producto.img}" class="" alt="${producto.nombre}">
                           <div>
                            <h5 class="card-title text-center">${producto.nombre}</h5>
                            <h5 class="card-title text-center">${producto.informacion}</h5>
                            <button class="btn btn-primary botonHeader" id= boton${producto.id}>Agregar</button>
                            <button class="btn btn-primary" id= boton>Pedir info</button>
                           </div>
                      </div>`
    
    contenedorProductos.appendChild(card);

     const botonCard = document.getElementById(`boton${producto.id}`)
     
     botonCard.addEventListener("click", ()=>{
      agregarAlCarrito(producto.id)
     })

  })
}

//funcion agregar al carrito desde el boton de las cards

function agregarAlCarrito(id){
    const productoEnCarrito = carrito.find(Producto => Producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }
    else{
       const nuevoProducto = arrayProductos.find(Producto => Producto.id === id);
       carrito.push(nuevoProducto);
      console.log(carrito)
    }
}

mostrarProductos()

//funcion Buscador 
const buscador = document.getElementById("buscador");
const resultado = document.getElementById("resultado");
const busqueda = document.getElementById("busqueda");
        
const filtrar = () => {
           resultado.innerHTML = '';
           const texto = buscador.value.toLowerCase();
             for ( let producto of arrayProductos ){
                let nombre = producto.nombre.toLowerCase();
                   
                if ( nombre.indexOf(texto) !== -1){
                    resultado.innerHTML += 
                    
                    `<li class="listStyle">
                        <img src=${producto.img} <h5 class="textoBuscador" >${producto.nombre}</h5>
                        <p></p></li>
                        <button class="botonHeader" id= botton${producto.id}>ver producto</button>`    
                    
                    busqueda.style.opacity = 1;
                  
                    const botton = document.getElementById(`botton${producto.id}`);
                    botton.addEventListener("click", () => {
                        agregarAlCarrito(producto.id);
                        
                    } )
                  
                 }
              
               if( resultado.innerHTML == '' ){
                 resultado.innerHTML = `<li>Producto no encontrado</li>`;
            }
            const cerrarBusqueda = document.getElementById("cerrarBusqueda")
            cerrarBusqueda.addEventListener("click", () =>{
                busqueda.style.opacity = 0;
            })
            };
            
        };
    
buscador.addEventListener("keyup", filtrar)
