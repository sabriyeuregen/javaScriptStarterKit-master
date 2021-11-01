function addToCart (quantity,productName="Elma") {
    console.log("Sepete eklendi:"+
    productName+ "adet:" +quantity) 
}
//addToCart("elma")
//addToCart("karpuz")
addToCart("armut",10)

let sayHello = ()=>{ //fonk değişkene atadı
  console.log("Hello World!")

}

sayHello()

let sayHello2 = function name() {
     console.log("Hello World2")
}
 sayHello2()

 function addToCart2(productName,quantity,unitPrice) {
     
 }

 let product1 = {productName:"Elma",unitPrice:10,quantity:5}

 function addToCart3(product) {
     console.log("Ürün:"+product.productName)
     console.log("Adet:"+product.quantity)
     console.log("Fiyat:"+product.unitPrice)
    }

 addToCart3(product1) //product1 üstteki producta atandı
 
 let product2 = {productName:"Elma",unitPrice:10,quantity:5}
 let product3= {productName:"Elma",unitPrice:10,quantity:5}

product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)

}

let products = [
   {productName:"Elma",unitPrice:10,quantity:5},
   {productName:"Erik",unitPrice:10,quantity:5},
   {productName:"Kiraz",unitPrice:10,quantity:5}
]
addToCart4(products)//products addtocart4 x e referans gönderiyor
//sonuç let productstaki objeler gidiyor

function add(...numbers) { //rest operatörü
    let total=0
   for (let i = 0; i< numbers.length; i++) {
       total = total +numbers[i]
   }
     console.log (total);
   }   

add(20,30)
add(20,30,40,50)
//spread ayrıştırır rest toparlar

let numbers=[30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [içAnadolu,marmara,Karadeniz,[icAnadoluSehirleri]] =[

    {name:"iç anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
console.log(içAnadolu.population)
console.log(marmara.name)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({
    newProductName:productName, 
    newUnitPrice:unitPrice, 
    newQuantity:quantity
} = {productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)






















