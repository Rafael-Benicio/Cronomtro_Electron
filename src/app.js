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
    div.h.appendChild(input.h).setAttribute('type','text')
    div.m.appendChild(input.m).setAttribute('type','text')
    div.s.appendChild(input.s).setAttribute('type','text')
}

function AppendP(){
    root.appendChild(div.t)
    div.t.appendChild(p)
}

function Inicia(){
    if(!Pau){
        Pau=true
    }else{
        req.h=input.h.value
        req.m=input.m.value
        req.s=input.s.value
        Remove()
        AppendP()
        Toca()
    }
}

function Remove(){
    div.h.remove()
    div.m.remove()
    div.s.remove()
    div.t.remove()
}

function Toca(){
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


    if(Pau){
        p.innerHTML=`${Show.h}:${Show.m}:${Show.s}`
    }

    ani =requestAnimationFrame(Toca)

}

function Pausar(){
    Pau=false
    console.log(Pau);
}

function Parar(){
    Remove()
    AppendRoot()
    AppendInput()
    cancelAnimationFrame(ani)
}

AppendRoot()

AppendInput()