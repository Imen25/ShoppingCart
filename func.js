let butn_inc = document.getElementsByClassName('button-inc')
let butn_dec = document.getElementsByClassName('button-dec')
let quantity = Array.from(document.getElementsByClassName('quantity'))
let total = document.getElementById('total')
let prices = Array.from(document.getElementsByClassName('price'))
console.log('prices',prices)
let butn_del = document.getElementsByClassName('button-del')





for (let i = 0; i < butn_inc.length; i++) {
    console.log(butn_inc.length)
    let sum=0
    // console.log(sum)
    butn_inc[i].addEventListener('click', function () {
        quantity[i].innerHTML++
        sum+=Number(prices[i].innerHTML)
        /* console.log(quantity[i].innerHTML)
        console.log(s[i].innerHTML.replace('$',''))*/

        //console.log(Number(total.innerHTML))
        // console.log(sum)
        // panier()
             total.innerHTML = sum

    })
}
const panier = () => {
    let sum = 0
    for (let index in quantity) {
        console.log('index:',index)
        sum = Number(quantity[index].innerHTML) * Number(prices[index].innerHTML)
        console.log('sum', sum)
    }

}

for (let i = 0; i < butn_dec.length; i++) {
    //console.log(butn_inc.length)
    butn_dec[i].addEventListener('click', function () {
        (quantity[i].innerHTML)--
        panier()
    })
}

for (let i = 0; i < butn_del.length; i++) {
    //butn_del[i].innerHTML
    butn_del[i].addEventListener('click', function () {
        console.log("vdfgj")
        console.log(butn_del[i].parentElement.remove())
    })
}



