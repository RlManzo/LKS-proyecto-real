class Producto{
    constructor(id,nombre, img,categoria){
        this.id = id;
        this.nombre = nombre;
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

//funcion ver carrito haciendo click en el boton
const verCarrito = document.getElementById("verCarrito")
const contenedorCarrito = document.getElementById("contenedorCarrito")
verCarrito.addEventListener("click",()=>{
      mostrarCarrito();


})
function mostrarCarrito(){
      contenedorCarrito.innerHTML = "";
      carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add( "col-xl-3", "col-md-6", "col-xs-12");
        innerHTML = `${producto.nombre} ${producto.precio}`
        card.innerHTML =  `
                          <div>
                          <div class="img1">
                          <img src="${producto.img}" class="imgProductos" alt="${producto.nombre}">
                           <button class="botonEliminar" id= eliminar${producto.id}>
                          <i><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75598 0.955026H1.10607C0.698197 0.955026 0.367188 1.28268 0.367188 1.68641C0.367188 2.09015 0.698197 2.4178 1.10607 2.4178H1.89675L2.94752 16.491C3.03328 17.6334 3.9953 18.5185 5.15377 18.5185H14.7917C15.9503 18.5185 16.9124 17.6334 16.998 16.491L18.0487 2.4178H18.8394C19.2473 2.4178 19.5783 2.09015 19.5783 1.68641C19.5783 1.28268 19.2473 0.955026 18.8394 0.955026H12.1895V0.953556C12.1895 0.549822 11.8585 0.222168 11.4506 0.222168H8.49511C8.08724 0.222168 7.75623 0.549822 7.75623 0.953556V0.955026H7.75598ZM16.5664 2.4178H3.37886L4.42072 16.3827C4.45024 16.7616 4.76954 17.0557 5.15365 17.0557H14.7916C15.1759 17.0557 15.495 16.7617 15.5245 16.3827L16.5664 2.4178ZM7.0171 6.08503V11.9361C7.0171 12.3399 7.34811 12.6675 7.75598 12.6675C8.16385 12.6675 8.49486 12.3399 8.49486 11.9361V6.08503C8.49486 5.68129 8.16385 5.35364 7.75598 5.35364C7.34811 5.35364 7.0171 5.68129 7.0171 6.08503ZM11.4504 6.08503V11.9361C11.4504 12.3399 11.7814 12.6675 12.1893 12.6675C12.5971 12.6675 12.9281 12.3399 12.9281 11.9361V6.08503C12.9281 5.68129 12.5971 5.35364 12.1893 5.35364C11.7814 5.35364 11.4504 5.68129 11.4504 6.08503Z" fill="#EA5534"/>
                          </svg>
                          </i></button>
                          <h5 class="card-title ">${producto.nombre}</h5>
                          <h6 class="card-title ">${producto.categoria}</h>
                          <div>
                         
          </div>
       `

contenedorCarrito.appendChild(card);
      
const botonEliminarProducto = document.getElementById(`eliminar${producto.id}`)
botonEliminarProducto.addEventListener("click", ()=>{
  eliminarProducto(producto.id);  
     });
   });
}
 
//funcion eliminar producto del carrito

function eliminarProducto(id){
  const producto = carrito.find(Producto => Producto.id === id);
  const indice = carrito.indexOf(producto);
  carrito.splice(indice, 1);
 
mostrarCarrito();
}

//funcion que envia al whatapps la lista del carrito

const mandarCarrito = document.getElementById("mandarCarrito");

mandarCarrito.addEventListener("click",()=>{
  sendcarrito()
})
const sendcarrito = () => {
  let totalCompra = "";
  let cantidad = 0;
  carrito.forEach(Producto =>{
      totalCompra += `  Producto:${Producto.nombre} Cantidad: ${Producto.cantidad} `;
      cantidad = Producto.precio * Producto.cantidad 
  })
  
  
  
  mandarCarrito.innerHTML = ` <button class="text-center botonHeader"" ><a class="btn-primary" href="https://api.whatsapp.com/send?phone=1131686767&text=Hola!%20Me%20gustaria%20hacer%20el%20siguiente%20pedido:%0A%0A${totalCompra}%0A%0A" target="_blank"</>consultar</button>`
  
   
  
}

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
