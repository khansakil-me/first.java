console.log(Math.round(Math.random()*50));


for (let i = 0; i <=50; i++) {
    console.log(i)
    
}


function woodCalculator(katPrice, chairPrice , tablePrice) {
    const  perChair= 5;
    const perKat = 10; 
    const perTable =20;


    const priceK = perKat * katPrice ;
    const priceC = perChair * chairPrice ;
    const priceT = perTable *tablePrice;


    const totalPrice = priceK + priceC + priceT ;
    return totalPrice;

    
}
 const totalPrice = woodCalculator(0 ,0, 3)
 console.log(totalPrice);
