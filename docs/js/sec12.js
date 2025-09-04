window.addEventListener('DOMContentLoaded', ()=>{
    const wrap = document.querySelector('.sec1 .wrap');
    const sec2_outBox1 = document.querySelector('.sec2 .outBox1');

    if(wrap){
        wrap.classList.add('on')}

    if(sec2_outBox1){
        setTimeout(()=>{
            sec2_outBox1.classList.add('on');
        },200)
    }
})
