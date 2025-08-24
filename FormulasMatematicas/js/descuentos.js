const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento(){

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount){
        pResult.innerHTML = 'Ingresa un valor en los campos marcados'
    }else if(discount<100){
        const newPrice = (price*(100-discount))/100;
        pResult.innerHTML = 'El nuevo precio con descuento es $' + newPrice;
    }else{
        pResult.textContent = 'El valor ingresado en el descuento es mayor al permitido'
    }

    
}