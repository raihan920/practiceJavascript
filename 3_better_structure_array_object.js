// const productInfo1 = {
//     productId: 102,
//     productName: "Television",
//     productCategory: "Electronics",
//     productPrice: 25000,
//     productQuantity: 5,
//     productAvailable: true
// }
// const productInfo2 = {
//     productId: 401,
//     productName: "Nokia 3310",
//     productCategory: "Electronics",
//     productPrice: 3500,
//     productQuantity: 15,
//     productAvailable: true
// }

const products = [
    {
        productId: 102,
        productName: "Television",
        productCategory: "Electronics",
        productPrice: 25000,
        productQuantity: 5,
        productAvailable: true
    },
    {
        productId: 401,
        productName: "Nokia 3310",
        productCategory: "Electronics",
        productPrice: 3500,
        productQuantity: 15,
        productAvailable: true
    }
]

function getProduct(p){
    /* way 1 */
    // const [product1, product2] = p;    
    // return `Product id: ${product1.productId}, product name: ${product1.productName}, product category: ${product1.productCategory}, product price: ${product1.productPrice}, product quantity: ${product1.productQuantity} and product availability: ${product1.productAvailable}\n`;

    /* way 2 */
    let myStr = '';
    console.log(p.length)
    for(let i=0; i<p.length; i++){
        console.log(i);
        myStr += `Product id: ${p[i].productId}, product name: ${p[i].productName}, product category: ${p[i].productCategory}, product price: ${p[i].productPrice}, product quantity: ${p[i].productQuantity} and product availability: ${p[i].productAvailable}\n`;
    }
    return myStr;    
}

let myProduct = getProduct(products);
console.log(myProduct);