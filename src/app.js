//rest geriye kalanlar
//burda products bir array
let showProducts=function(id,...products){
     console.log(id)
     console.log(products[0])
}
showProducts(10,["e","a","k"])
//2tane iç içe array var

//spread:arrayi parametre gibi virgülle ayırır
let points =[1,2,3,4,60,14,5]
console.log(...points)
console.log(Math.max(...points))
//restte virgül ile gönderilir

