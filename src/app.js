const root = document.getElementById('root')

const div={
    h:document.createElement('div'),
    m:document.createElement('div'),
    s:document.createElement('div'),
    t:document.createElement('div'),
}

const input={
    h:document.createElement('input'),
    m:document.createElement('input'),
    s:document.createElement('input'),
}

const req={
    h:0,
    m:0,
    s:0,
}

const Show={
    h:"",m:"",s:"",
}

const p=document.createElement('p')

let time=0
let Pau=false
let ani

function AppendRoot(){
    root.appendChild(div.h).setAttribute('class','container')
    root.appendChild(div.m).setAttribute('class','container')
    root.appendChild(div.s).setAttribute('class','container')
}

function AppendInput(){
    input.h.setAttribute('type','text')
    input.h.setAttribute('placeholder','00')
    input.h.setAttribute('maxlength','2')
    input.m.setAttribute('type','text')
    input.m.setAttribute('placeholder','00')
    input.m.setAttribute('maxlength','2')
    input.s.setAttribute('type','text')
    input.s.setAttribute('placeholder','00')
    input.s.setAttribute('maxlength','2')
    div.h.appendChild(input.h)
    div.m.appendChild(input.m)
    div.s.appendChild(input.s)
}

function AppendP(){
    root.appendChild(div.t)
    div.t.appendChild(p)
}

function Inicia(){
    if(!Pau){
        try {
            req.h=Number(input.h.value)
            req.m=Number(input.m.value)
            req.s=Number(input.s.value)  
            if(isNaN(req.h)){
                req.h=0
            }
            if(isNaN(req.m)){
                req.m=0
            }
            if(isNaN(req.s)|| req.s<=0 ){
                req.s=1
            }
        } catch (error) {
            alert('Desculpe, mas ouve um erro na execução. Verifique se os valores passados estão corretos')
        }
        if(req.m>=60){
            req.m=60
        }
        if(req.s>=60){
            req.s=60
        }
        if(req.h<=-1){
            req.h=0
        }
        if(req.m<=-1){
            req.m=0
        }
        if(req.s<=-1){
            req.s=0
        }
        Remove()
        AppendP()
        Toca()
    }else{
        Pau=false
        console.log(Pau);
    }
}

function Remove(){
    div.h.remove()
    div.m.remove()
    div.s.remove()
    div.t.remove()
}

function Toca(){
    if(!Pau){
        time+=1
        if(time==60){
            time=0
            req.s-=1
            if(req.s<=0 && req.m>0){
                req.m-=1
                req.s=60
            }
            if(req.s==0 && req.m==0 && req.h>0){
                req.h-=1
                req.m=59
                req.s=60
            }
    
            if(req.s==0 && req.m==0 && req.h==0){
                Remove()
                AppendRoot()
                AppendInput()
            }
        }
        if(req.h<10)
            Show.h="0"+req.h
        else
            Show.h=req.h
        if(req.m<10)
            Show.m="0"+req.m
        else
            Show.m=req.m
        if(req.s<10)
            Show.s="0"+req.s
        else
            Show.s=req.s

        p.innerHTML=`${Show.h}:${Show.m}:${Show.s}`
    }
}

function Pausar(){
    Pau=true
    console.log(Pau);
}

function Parar(){
    Pau=false
    Remove()
    AppendRoot()
    AppendInput()
}

function control(){
    requestAnimationFrame(control)
    requestAnimationFrame(Toca)
}

AppendRoot()

AppendInput()

control()