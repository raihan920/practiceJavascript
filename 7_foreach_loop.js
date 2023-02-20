const arr = ['We', 'love', 'web', 'development'];

arr.forEach(function(elm){
    console.log(elm);
});
//(value, index, array )
arr.forEach(function(elm, index){
    console.log(index, elm);
});

// for array traversing use- of
for(let elm of arr){
    console.log(elm);
}

const product = 
{
    productId: 102,
    productName: "Television",
    productCategory: "Electronics",
    productPrice: 25000,
    productQuantity: 5,
    productAvailable: true
}
// for traversing an object use- in
for(let elm in product){
    console.log(elm);
    console.log(product[elm])
}
//createing an array of multiple product
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
        productId: 201,
        productName: "Nokia 3310",
        productCategory: "Electronics",
        productPrice: 3500,
        productQuantity: 15,
        productAvailable: true
    },
    {
        productId: 301,
        productName: "Water Bottle",
        productCategory: "Crocaries Item",
        productPrice: 500,
        productQuantity: 0,
        productAvailable: false
    }
]

function showProductInfo(products){
    //getting data of each product
    products.forEach(function(product){
        console.log(product.productId);
        console.log(product.productName);
        console.log(product.productCategory);
        console.log(product.productPrice);
        console.log(product.productQuantity);
        console.log(product.productAvailable);

        console.log(`Product Name: ${product.productName} and Product Price: ${product.productPrice}`);
    });

    // using for of loot for traversing
    for(let product of products){
        console.log(product.productId);
        console.log(product.productName);
        console.log(product.productCategory);
        console.log(product.productPrice);
        console.log(product.productQuantity);
        console.log(product.productAvailable);

        console.log(`Product Name: ${product.productName} and Product Price: ${product.productPrice}`);
    }
}
//calling the function
showProductInfo(products);

