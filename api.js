
function random(number) {
    return Math.floor(Math.random() * number)
}

function bgchange() {
    const randomcolor = `rgb(${random(255)} , ${random(255)} , ${random(255)})`;
    return randomcolor
    // console.log(randomcolor);
}

const cont = document.querySelectorAll(".box")
// using arraow function
// cont.forEach((x) => {
//     x.addEventListener('mouseover', (Event) => {
//         Event.target.style.backgroundColor = bgchange();
//         // Event.target.style.border = `2px solid ${bgchange()}`
//     })
// })

// using function
// cont.forEach(function(x){
//     x.addEventListener('mouseover', (Event) => {
//         Event.target.style.backgroundColor = bgchange();
//         // Event.target.style.border = `2px solid ${bgchange()}`
//     })
// })


// third method using for of function
for(let i of cont)
{
    i.addEventListener('mouseover', (Event) => {
            Event.target.style.backgroundColor = bgchange();
    })
}

