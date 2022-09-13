
const productos = [
    {nombre: "arroz", precio: 120},
    {nombre: "fideo", precio: 100},
    {nombre: "sal", precio: 60},
    {nombre: "leche", precio: 200},
    {nombre: "gaseosa", precio: 250},
    
];

let carrito = [];

function menu() {    
    let opcion = prompt("Hola desea comprar algun producto?. si o no");    
    return opcion;  
}

let opcion = menu();

function deseaComprar (){
    while (opcion != "si" && opcion != "no"){
        alert("Ingrese si o no");
        opcion = prompt("Desea comprar algo? ");
        return opcion;
    }
}
 
deseaComprar();

if(opcion === "si"){
    alert("Lista de productos");
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join("  -  "));
} else if (opcion === "no") {
    alert("Gracias, Vuelva pronto!!");    
}

while (opcion != "no"){
    let producto = prompt("Elegi un producto: arroz, fideo, sal, leche, gaseosa");
    let precio = 0;

    if (producto === "arroz" || producto === "fideo" || producto === "sal" ||producto === "leche" || producto === "gaseosa" ){
        switch (producto){
            case "arroz":
                precio = 120;
                break;
            case "fideo":
                precio = 100;
                break;        
            case "sal":
                precio = 60;
                break;
            case "leche":
                precio = 200;
                break;
            case "gaseosa":
                precio = 250;
                break;
            default:
                break;
        }

    let unidades = parseInt(prompt("Cuantas unidades quiere llevar:"));
    carrito.push({producto, unidades, precio});
    console.log(carrito);
    } else{
        alert("No tenemos ese producto");
    }  
    opcion = prompt("Desea seguir comprando?: si/no");
    while(opcion === "no"){
        alert("Gracias por la compra");
        carrito.forEach((carritoFinal)=> {
            console.log("Producto: " + carritoFinal.producto + ", Unidades " + carritoFinal.unidades + ", Total a pagar por producto: "+ carritoFinal.unidades * carritoFinal.precio+ "$")
        })
    break;
    }
}

const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.unidades, 0);
console.log("El total a pagar es: "+ total +"$");
