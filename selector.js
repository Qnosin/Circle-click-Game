function random(){
    let newNUm = Math.floor(Math.random(1) * 10)
    return newNUm;
}
let points = 0
document.querySelector('.p').textContent = points;
function MainBlock(){
    let d = document.createElement('div');
    d.classList.add('target');
    let allDiv = document.querySelectorAll('.block')
    for(let x of allDiv){
        if(x.className.includes(random())){
            if(!x.firstChild){
                x.appendChild(d)
            }
            d.addEventListener('click',()=>{
                x.removeChild(d)
                document.querySelector('.p').textContent = points+=1;
                if(points == 10){
                    document.querySelector('body').textContent = `GameOver Your Point was : ${points}`;
                    document.querySelector('body').style.display = 'flex'
                    document.querySelector('body').style.justifyContent = 'center'
                    document.querySelector('body').style.alignItems= 'center'
                    document.querySelector('body').style.height = '100vh'
                    document.querySelector('body').style.fontSize = '2rem'
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                }
            })
        }
    }
    //$("d").addClass(target).appendTo()
}
MainBlock()
setInterval(() => {
    MainBlock();
}, 3000);

