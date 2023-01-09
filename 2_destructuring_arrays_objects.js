/* destructuring objects */
// const productInfo = {
//     productId: 102,
//     productName: "Television",
//     productCategory: "Electronics",
//     productPrice: 25000,
//     productQuantity: 5,
//     productAvailable: true
// }

// function obj_getProductInfo(p){
//     let { productId, productName, productCategory, productPrice, productQuantity, productAvailable } = p;
//     console.log(`Product Name: ${productName} and Product Price: ${productPrice}`);
// }

// obj_getProductInfo(productInfo);


/* destructuring arrays */
const productInfo2 = [102,"Television","Electronics", 25000, 5, true];

function arr_getProductInfo(p){
    let [productId, productName, , productPrice, productQuantity, productAvailable] = p;
    console.log(`Product Name: ${productName} and Product Price: ${productPrice}`);
}

arr_getProductInfo(productInfo2);