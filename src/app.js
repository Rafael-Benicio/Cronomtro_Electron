const root = document.getElementById('root')

const div={
    h:document.getElementById('h'),
    m:document.getElementById('m'),
    s:document.getElementById('s'),
}

const input={
    h:document.createElement('input'),
    m:document.createElement('input'),
    s:document.createElement('input'),
}

div.h.appendChild(input.h).setAttribute('type','text')
div.m.appendChild(input.m).setAttribute('type','text')
div.s.appendChild(input.s).setAttribute('type','text')

const req={
    h,
    m,
    s,
}

function Inicia(){  
    req.h=parseInt(input.h.value)
    req.m=parseInt(input.m.value)
    req.s=parseInt(input.s.value)
    Toca()
}

function Para(){

}

function Toca(){
    
    const Request=requestAnimationFrame(Toca)
}

function Remove(){
    input.h.remove()
    input.m.remove()
    input.s.remove()
}