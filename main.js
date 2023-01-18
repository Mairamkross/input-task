// const btn = document.querySelector('.btn')
// console.log(btn.innerHTML);

// btn.onclick = func1
// btn.onclick = func2

// function func1(){
//     console.log('func1');
//     removeEventListener('click' , func1)
// }
// function func2 (){
//     console.log('func2');
//     removeEventListener('click' , func2)
// }


// btn.addEventListener('click' , func1)
// btn.addEventListener('click' , func2)

   


// onmouseover  - мышканы алып барганда иштейт
//onmouseout - мышканы алганда иштейт
//mousedown - mouseup - мышканы алып барып мышканын 2 жагын тен басканда иштейт
//dblclick - мышканы алып барып эки жолу басканда иштейт
//change - жазып буткондо
//oninput - жазып жатканда

// var block = document.querySelector('.block')

// block.addEventListener('dblclick' , () => {alert('hello')})








// const inp = document.querySelectorAll('.inp')
// // console.log(inp);
// inp[0].addEventListener('change' , ()=>{console.log(inp[0].value);})

// inp[1].addEventListener('input' , ()=>{console.log(inp[1].value);})


// let block  = document.querySelector('.block')
// let inp = document.querySelectorAll('.inp')

// inp[0].addEventListener('input' , ()=>{
//     block.style.width = inp[0].value
// })
// inp[1].addEventListener('input' , ()=>{
//     block.style.height = inp[1].value
// })
// inp[2].addEventListener('input' , ()=>{
//     block.style.backgroundColor = inp[2].value
// })
// inp[3].addEventListener('input' , ()=>{
//     block.style.borderRadius = inp[3].value
// })




// let inp1 = document.querySelector('.inp1')
// let img = document.querySelector('.img')
// let btn1 = document.querySelector('.btn1')
// btn1.addEventListener('click' , ()=>{
//     img.src = inp1.value
// })




// let red = document.querySelector('.red')
// let inp = document.querySelector('.inp')
// inp.addEventListener('input' , ()=>{
//     if(inp.value.length >= 5 ){
//          red.innerHTML = 'надежный'
//          red.style.color  = 'green'
//     }else{
//         red.innerHTML = 'не достаточно символов'
//         red.style.color  = 'red'
//     }
    
// })




let inp1 = document.querySelector('.inp1')
let som = document.querySelector('.som')
let etaj = document.querySelectorAll('.etaj')
console.log(etaj);
inp1.addEventListener('input' , ()=>{
    if(inp1.value == 1){
        som.innerHTML = '100c'
        etaj[9].style.backgroundColor = 'red'
    } else{
        etaj[9].style.backgroundColor = 'white'
    }
    if(inp1.value == 2){
        som.innerHTML = '200c'
        etaj[8].style.backgroundColor = 'red'
    }else{
        etaj[8].style.backgroundColor = 'white'
    }
    if(inp1.value == 3){
        som.innerHTML = '300c'
        etaj[7].style.backgroundColor = 'red'
    }else{
        etaj[7].style.backgroundColor = 'white'
    }
    if(inp1.value == 4){
        som.innerHTML = '400c'
        etaj[6].style.backgroundColor = 'red'
    }else{
        etaj[6].style.backgroundColor = 'white'
    }
    if(inp1.value == 5){
        som.innerHTML = '500c'
        etaj[5].style.backgroundColor = 'red'
    }else{
        etaj[5].style.backgroundColor = 'white'
    }
    if(inp1.value == 6){
        som.innerHTML = '600c'
        etaj[4].style.backgroundColor = 'red'
    }else{
        etaj[4].style.backgroundColor = 'white'
    }
    if(inp1.value == 7){
        som.innerHTML = '700c'
        etaj[3].style.backgroundColor = 'red'
    }else{
        etaj[3].style.backgroundColor = 'white'
    }
    if(inp1.value == 8){
        som.innerHTML = '800c'
        etaj[2].style.backgroundColor = 'red'
    }else{
        etaj[2].style.backgroundColor = 'white'
    }
    if(inp1.value == 9){
        som.innerHTML = '900c'
        etaj[1].style.backgroundColor = 'red'
    }else{
        etaj[1].style.backgroundColor = 'white'
    }
    if(inp1.value == 10){
        som.innerHTML = '1000c'
        etaj[0].style.backgroundColor = 'red'
    }else{
        etaj[0].style.backgroundColor = 'white'
    }
})


















