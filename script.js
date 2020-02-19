const prices = Array.from(document.getElementsByClassName('price'))
const qtes = Array.from(document.getElementsByClassName('quantity'))
const btnAddArray = Array.from(document.getElementsByClassName('button-inc'))
const btnRemoveArray = Array.from(document.getElementsByClassName('button-dec'))
const btnRemoveElement = Array.from(document.getElementsByClassName('button-del'))
const btnLikeElement = Array.from(document.getElementsByClassName('btn_like'))
const total = document.getElementById('total')

let sum = 0

for (let index in btnAddArray) {
    btnAddArray[index].addEventListener('click', () => {

        qtes[index].innerHTML = Number(qtes[index].innerHTML) + 1
        sum += Number(prices[index].innerHTML.replace('$',''))
        total.innerHTML = sum
    })
}

for(let index in btnRemoveArray){
    btnRemoveArray[index].addEventListener('click',()=>{
        if ((Number(qtes[index].innerHTML)) > 0) {qtes[index].innerHTML = Number(qtes[index].innerHTML)-1 
        sum -= Number(prices[index].innerHTML.replace('$','')) 
        total.innerHTML = sum}
    })
}


for (let i = 0; i < btnRemoveElement.length; i++) {
    //butn_del[i].innerHTML
    btnRemoveElement[i].addEventListener('click', function () {
        console.log(btnRemoveElement[i].parentElement.remove())
    })
}



for(let index in btnLikeElement){
    btnLikeElement[index].addEventListener('click',()=>{
        btnLikeElement[index].style.color = btnLikeElement[index].style.color == 'black' ? 'red' : 'black'
      
    })

}

 
  
  
 

    