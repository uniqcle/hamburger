const btn = document.getElementById('btn'); 
const nav = document.getElementById('nav'); 

btn.addEventListener('click', (e)=>{
    nav.classList.toggle('active'); 
    btn.classList.toggle('active'); 
})