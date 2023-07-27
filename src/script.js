var count = 1
document.querySelectorAll('.card').forEach(el=>{
    el.style.animationDelay = (count * 0.25) + 's'
    count+=1
})