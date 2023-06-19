class Producto{
    constructor(id,nombre, img, info,categoria){
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.info = info;
        this.categoria = categoria;
        
      }
    }

const producto1 = new Producto(1,"Remera sublimada","https://http2.mlstatic.com/D_NQ_NP_815250-MLA49035064606_022022-O.webp","vinilo","vinilo");
const producto2 = new Producto(2,"Remera vinilo","https://http2.mlstatic.com/D_NQ_NP_815250-MLA49035064606_022022-O.webp","sublimable","sublimable");
const producto3 = new Producto(3,"Remera serigrafia","https://http2.mlstatic.com/D_NQ_NP_815250-MLA49035064606_022022-O.webp","polimero","vinilo");
const producto4 = new Producto(4,"Remera sublimada","https://http2.mlstatic.com/D_NQ_NP_815250-MLA49035064606_022022-O.webp","3d","sublimable");
const producto5 = new Producto(5,"Remera sublimada","https://http2.mlstatic.com/D_NQ_NP_815250-MLA49035064606_022022-O.webp","sublimable","sublimable");
const producto6 = new Producto(6,"Remera serigrafia","https://http2.mlstatic.com/D_NQ_NP_815250-MLA49035064606_022022-O.webp","polimero","vinilo");
const producto7 = new Producto(7,"Remera sublimada","https://http2.mlstatic.com/D_NQ_NP_815250-MLA49035064606_022022-O.webp","3d","vinilo");
const producto8 = new Producto(8,"Remera sublimada","https://http2.mlstatic.com/D_NQ_NP_815250-MLA49035064606_022022-O.webp","sublimable","dtf");
const producto9 = new Producto(9,"Remera sublimada","https://http2.mlstatic.com/D_NQ_NP_815250-MLA49035064606_022022-O.webp","sublimable","dtf");

const arrayProductos = [producto1, producto2, producto3, producto4, producto5, producto6,producto7,producto8,producto9];
console.log(arrayProductos)
const carrito = [];
const modal = [];

//variable(div) donde se pegan los productos
const cardProductos = document.getElementById("cardsProductos")

//FUNCIONES DE SECCION PRODUCTOS

//funcion para pintar productos en la seccion Productos

//funcion principal para mostrar productos
function mostrarProducto(){
  cardProductos.innerHTML = '';
  categoriaFiltrar.forEach(producto=>{
  cardSeccion(producto); 
   })
}

//funcion plantilla de las cards Productos
const cardSeccion = (producto)=>{
  cardProductos.innerHTML +=   
    `<div class="cardStyles position-relative text-center col-6">
  <img class="cardImg" src="${producto.img}" id="detalle${producto.id}" onClick="agregarAlModal(${producto.id}),mostrarDetalleProducto()" alt="${producto.nombre}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <div class="">
     <h5 class="textCard">${producto.nombre}</h5>
     <h5 class="card-title h6">${producto.info}</h5>
     </div>
     <div class="infoCard">
     <button class=" botonHeader botonProductos1" id= boton${producto.id} onClick="agregarAlCarrito(${producto.id},agregarNumeroCarrito())">AGREGAR</button>
     <button class="botonHeader botonProductos2" id= boton><a class="botonInfo" href="https://api.whatsapp.com/send?phone=1131686767&text=Hola!%20Me%20gustaria%20saber%20mas%20%20sobre%20el%20siguiente%20articulo:%0A%0A${producto.nombre}%20Categoria:%0A%0A${producto.info}%0A%0A" target="_blank"</><i><img class="iconoWhatapps" src="./assets/whatappsLogo.svg" alt=""></i>Pedir Info</button>
     
     </div>
</div>`
    
} 

//botones filtrar productos
const botonFiltar1 = document.getElementById("botonProducto1");
const botonFiltar2 = document.getElementById("botonProducto2");
const botonFiltar3 = document.getElementById("botonProducto3");
const botonFiltar4 = document.getElementById("botonProducto4");

//variables para filtrar productos
const categoriaFiltrar = arrayProductos
const categoriaFiltrar2 = arrayProductos.filter(producto=> producto.categoria === "sublimable");
const categoriaFiltrar3 = arrayProductos.filter(producto=> producto.categoria === "vinilo");
const categoriaFiltrar4 = arrayProductos.filter(producto=> producto.categoria === "dtf");


mostrarProducto()

//funciones para filtrar por secciones
botonFiltar1.addEventListener("click",()=>{
  mostrarProducto(); 
   botonFiltar1.className = "selectText:hover"
   })

 botonFiltar2.addEventListener("click",()=>{
  cardProductos.innerHTML = '';
  categoriaFiltrar2.forEach(producto=>{
cardSeccion(producto)

  });
 })  
 botonFiltar3.addEventListener("click",()=>{
  cardProductos.innerHTML = '';
  categoriaFiltrar3.forEach(producto=>{
cardSeccion(producto)
  });
 }) 
 botonFiltar4.addEventListener("click",()=>{
  cardProductos.innerHTML = '';
  categoriaFiltrar4.forEach(producto=>{
cardSeccion(producto)
  });
 }) 


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
    Toastify({
      text: "Agregaste el producto!",
      gravity: "top",
      style: {
          background: "linear-gradient(247deg, rgba(37,177,86,0.6727065826330532) 0%, rgba(44,205,14,1) 100%)",
          
      }
  }).showToast();
   
}




//FUNCIONES DEL DETALLE PRODUCTO(MODAL)

//modal detalle producto
const contenedorDetalleProducto = document.getElementById("contenedorDetalleProducto")

//funcion agregar el producto al modal
function agregarAlModal(id){
  const productoEnCarrito = modal.find(Producto => Producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }
    else{
       const nuevoProducto = arrayProductos.find(Producto => Producto.id === id);
       modal.push(nuevoProducto);
      console.log(carrito)
    }
    
}
  

function mostrarDetalleProducto(){
  contenedorDetalleProducto.innerHTML = "";
    modal.forEach(producto => {
    const card = document.createElement("div"); 
    
    innerHTML = `${producto.nombre} ${producto.precio}`
    card.innerHTML =  `
                      <div class="row g-0 data-aos="fade-right"">
                        <div class="col-md-2">
                        <img src="${producto.img}" class="imgModalDetail card-img-top" alt="${producto.nombre}">
                        <img src="${producto.img}" class="imgModalDetail card-img-top" alt="${producto.nombre}">
                        <img src="${producto.img}" class="imgModalDetail card-img-top" alt="${producto.nombre}">
                        <img src="${producto.img}" class="imgModalDetail card-img-top" alt="${producto.nombre}">
                        </div>
                        <div class="col-md-2">
                         <img src="${producto.img}" class="imgModal card-img-top" alt="${producto.nombre}">
                         </div>
                         <div class=" col-md-8">
                            <div className="card-body text-center .col-md-4 .ms-auto ">
                            <h5 class="h3  card-title textModalProducto">${producto.nombre}</h5>
                            
                            <h6 class=" text-end h8 textDescriptionModal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse soluta fugit vero dicta nisi, dolorem harum cumque excepturi a. Quod omnis soluta distinctio adipisci eum! Sit facilis repellat commodi tempore? </h6>
                               <div class="d-flex botonesDetalleModal">
                                  <button class="text-center botonHeader botonDetalle1" id="botonModal${producto.id}">AGREGAR</button>
                                  <button class="text-center botonHeader botonDetalle2" data-bs-dismiss="modal" aria-label="Close" id="cancelarModal">CANCELAR</Button>
                               </div>
                               </div>
                         </div>              
                      </div>
   `

contenedorDetalleProducto.appendChild(card);
const botonModal = document.getElementById(`botonModal${producto.id}`);
botonModal.addEventListener("click",()=>{
  agregarAlCarrito(producto.id)
  agregarNumeroCarrito()
 
})

const cancelarProducto = document.getElementById("cancelarModal")
cancelarProducto.addEventListener("click",()=>{
  eliminarProductoModal(producto.id)
})
});

}
//funcion para evitar que el modal se duplique

const cerrarModal = document.getElementById("cerrarModal")
cerrarModal.addEventListener("click", ()=>{
  eliminarProductoModal(producto.id)
})

function eliminarProductoModal(id){
  const producto = modal.find(Producto => Producto.id === id);
  const indice = modal.indexOf(producto);
  modal.splice(indice, 1);
  
mostrarDetalleProducto();
}


//FUNCIONES DEL CARRITO


//funcion ver carrito haciendo click en el boton
const verCarrito = document.getElementById("verCarrito")
const contenedorCarrito = document.getElementById("contenedorCarrito")
verCarrito.addEventListener("click",()=>{
    mostrarCarrito()
})

//funcion para agregar numero carrito
const numeroCarrito = document.getElementById("numeroCarrito");
let contador = 0;
function agregarNumeroCarrito(){
  contador++;
  numeroCarrito.textContent = contador
  
}

//funcion productos en el carrito
function mostrarCarrito(){
      contenedorCarrito.innerHTML = "";
      carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add( "col-xl-3", "col-md-6", "col-xs-12");
        innerHTML = `${producto.nombre} ${producto.precio}`
        contenedorCarrito.innerHTML +=  `
                          <div class="container carritoContainer">
                          <div class="">
                          <button class="botonEliminar" id= eliminar${producto.id} onClick="eliminarProducto(${producto.id})">
                          <i><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75598 0.955026H1.10607C0.698197 0.955026 0.367188 1.28268 0.367188 1.68641C0.367188 2.09015 0.698197 2.4178 1.10607 2.4178H1.89675L2.94752 16.491C3.03328 17.6334 3.9953 18.5185 5.15377 18.5185H14.7917C15.9503 18.5185 16.9124 17.6334 16.998 16.491L18.0487 2.4178H18.8394C19.2473 2.4178 19.5783 2.09015 19.5783 1.68641C19.5783 1.28268 19.2473 0.955026 18.8394 0.955026H12.1895V0.953556C12.1895 0.549822 11.8585 0.222168 11.4506 0.222168H8.49511C8.08724 0.222168 7.75623 0.549822 7.75623 0.953556V0.955026H7.75598ZM16.5664 2.4178H3.37886L4.42072 16.3827C4.45024 16.7616 4.76954 17.0557 5.15365 17.0557H14.7916C15.1759 17.0557 15.495 16.7617 15.5245 16.3827L16.5664 2.4178ZM7.0171 6.08503V11.9361C7.0171 12.3399 7.34811 12.6675 7.75598 12.6675C8.16385 12.6675 8.49486 12.3399 8.49486 11.9361V6.08503C8.49486 5.68129 8.16385 5.35364 7.75598 5.35364C7.34811 5.35364 7.0171 5.68129 7.0171 6.08503ZM11.4504 6.08503V11.9361C11.4504 12.3399 11.7814 12.6675 12.1893 12.6675C12.5971 12.6675 12.9281 12.3399 12.9281 11.9361V6.08503C12.9281 5.68129 12.5971 5.35364 12.1893 5.35364C11.7814 5.35364 11.4504 5.68129 11.4504 6.08503Z" fill="#EA5534"/>
                          </svg>
                          </i></button>
                          <img src="${producto.img}" class="img1" alt="${producto.nombre}">
                          
                          <div class="titleCards ">
                          <h5 class="h6">${producto.nombre}</h5>
                          <h6 class="h8">${producto.categoria}</h>
                          </div>
                                         
          </div>
       `

contenedorCarrito.appendChild(card);
 /*     
const botonEliminarProducto = document.getElementById(`eliminar${producto.id}`)
botonEliminarProducto.addEventListener("click", ()=>{
  eliminarProducto(producto.id);  
  contador--;
  
   });*/
   });
}
 
//funcion eliminar producto del carrito

function eliminarProducto(id){
  const producto = carrito.find(Producto => Producto.id === id);
  const indice = carrito.indexOf(producto);
  carrito.pop();
  contador = 0; 
  mostrarCarrito();
  numeroCarrito.textContent = contador
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
  
  
  
  mandarCarrito.innerHTML = ` <button class="text-center botonHeader"" ><a class="botonPresupuesto" href="https://api.whatsapp.com/send?phone=1131686767&text=Hola!%20Me%20gustaria%20hacer%20el%20siguiente%20pedido:%0A%0A${totalCompra}%0A%0A" target="_blank"</>Pedir Presupuesto</button>`
  
   
  
}

//BUSCADOR

//funcion Buscador <h5 class="textoBuscador" >${producto.nombre}</h5>
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
                    
                    `<li class="listStyles">
                       <img class="img1"  src=${producto.img} />
                       <div>
                       <h6 class="textBuscador">${producto.nombre}</h5>
                       </div>
                       <button class="botonProductos2 botonHeader botonBuscador" id= botton${producto.id} onClick="agregarAlModal(${producto.id}),mostrarDetalleProducto()" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><img class="ojoStyle" src="./assets/ojo.png"/></button>    
                    </li>`
                    busqueda.style.opacity = 1;
                  
                    const botton = document.getElementById(`botton${producto.id}`);
                    botton.addEventListener("click", () => {
                        agregarAlCarrito(producto.id);
                        
                    } );
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


