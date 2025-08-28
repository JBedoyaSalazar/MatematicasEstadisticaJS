const inputPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#coupon')
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', calcularPrecioConDescuento);

// const arrayUObjecto = undefined;

// const couponsObj = {
//     'FelizAniversario2025':30,
//     'ShutUp': 20,
//     'Happy New Year': 50,
// }

const couponsList = [];
couponsList.push({
    nameCoupon: 'NuevoDescuento', 
    discount: 45,
})

function calcularPrecioConDescuento(){

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        pResult.innerHTML = 'Ingresa un valor en los campos marcados'
        return;
    }

    let discount;

    function isCouponInArray (couponElement){
        return couponElement.nameCoupon == coupon;
    }

    couponInArray = couponsList.find(isCouponInArray);

    if(couponInArray){
        discount = couponInArray.discount
    }else{
        pResult.innerHTML = 'El cupon ingresado <span style="color:#e0e6edce; color:rgba(224,230,237,.81); font-size:2.1rem;">NO ES VALIDO</span>';
        return;
    }

    // if(couponsObj[coupon]){
    //     discount = couponsObj[coupon]
    // }else{
    //     pResult.innerHTML = 'El cupon ingresado <span style="color:#e0e6edce; color:rgba(224,230,237,.81); font-size:2.1rem;">NO ES VALIDO</span>';
    //     return;
    // }
    
    // if(coupon == 'FelizAniversario2025'){
    //     discount = 30;
    // }else if(coupon == 'ShutUp'){
    //     discount = 20;
    // }else{
    //     pResult.innerHTML = 'El cupon ingresado <span style="color:#e0e6edce; color:rgba(224,230,237,.81); font-size:2.1rem;">NO ES VALIDO</span>';
    //     return;
    // }

    const newPrice = (price * (100-discount))/100;

    pResult.innerHTML = 'El nuevo precio es $'+newPrice
    
}