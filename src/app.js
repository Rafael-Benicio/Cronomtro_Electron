let time = 0
let Pau = false
let audioP = '../src/mus/song.mp3'
let varAud

const root = document.getElementById('root')

const audio = document.createElement('audio')

const p = document.createElement('p')

const div = {
    h: document.createElement('div'),
    m: document.createElement('div'),
    s: document.createElement('div'),
    t: document.createElement('div'),
    q: document.createElement('div'),
}

const input = {
    h: document.createElement('input'),
    m: document.createElement('input'),
    s: document.createElement('input'),
    q: document.createElement('input'),
}

const req = {
    h: 0,
    m: 0,
    s: 0,
}

const label = {
    h: document.createElement('label'),
    m: document.createElement('label'),
}

const Show = {
    h: "", m: "", s: "",
}


addEventListener('keydown',(e)=>{
    let key=e.keyCode
    if(key ==13)Inicia()
    if(key ==8)Pausar()
    if(key ==123)Parar()
})


function AppendRoot() {
    root.appendChild(div.h).setAttribute('class', 'container')
    root.appendChild(label.h).innerHTML = ":"
    root.appendChild(div.m).setAttribute('class', 'container')
    root.appendChild(label.m).innerHTML = ":"
    root.appendChild(div.s).setAttribute('class', 'container')
}

function AppendAudio() {
    root.appendChild(audio).setAttribute('src', audioP)
}

function AppendInput() {
    input.h.setAttribute('type', 'text')
    input.h.setAttribute('placeholder', '00')
    input.h.setAttribute('maxlength', '2')
    input.m.setAttribute('type', 'text')
    input.m.setAttribute('placeholder', '00')
    input.m.setAttribute('maxlength', '2')
    input.s.setAttribute('type', 'text')
    input.s.setAttribute('placeholder', '00')
    input.s.setAttribute('maxlength', '2')
    div.h.appendChild(input.h)
    div.m.appendChild(input.m)
    div.s.appendChild(input.s)
}

function AppendP() {
    root.appendChild(div.t)
    div.t.appendChild(p)
}

function AppendSel() {
    div.q.setAttribute('class', 'sele')
    root.appendChild(div.q)
    input.q.setAttribute('type', 'file')
    input.q.setAttribute('id', 'file')
    div.q.appendChild(input.q)
}

function Inicia() {
    if (!Pau) {
        try {
            req.h = Number(input.h.value)
            req.m = Number(input.m.value)
            req.s = Number(input.s.value)
            if (isNaN(req.h)) {
                req.h = 0
            }
            if (isNaN(req.m)) {
                req.m = 0
            }
            if (isNaN(req.s) || req.s <= 0) {
                req.s = 1
            }
        } catch (error) {
            alert('Desculpe, mas ouve um erro na execução. Verifique se os valores passados estão corretos')
        }
        if (req.m >= 60) {
            req.m = 60
        }
        if (req.s >= 60) {
            req.s = 60
        }
        if (req.h <= -1) {
            req.h = 0
        }
        if (req.m <= -1) {
            req.m = 0
        }
        if (req.s <= -1) {
            req.s = 0
        }
        Remove()
        AppendP()
        AppendAudio()
        Toca()
    } else {
        Pau = false
        console.log(Pau);
    }
}

function Remove() {
    div.h.remove()
    div.m.remove()
    div.s.remove()
    div.t.remove()
    label.h.remove()
    label.m.remove()
}

function RemoveAudio() {
    audio.remove()
}

function Toca() {
    if (!Pau) {
        time += 1
        if (time == 60) {
            time = 0
            req.s -= 1
            if (req.s <= 0 && req.m > 0) {
                req.m -= 1
                req.s = 60
            }
            if (req.s == 0 && req.m == 0 && req.h > 0) {
                req.h -= 1
                req.m = 59
                req.s = 60
            }

            if (req.s == 0 && req.m == 0 && req.h == 0) {
                Remove()
                // começar audio em x tempos
                // audio.currentTime=60
                audio.play()
                AppendRoot()
                AppendInput()
            }
        }
        if (req.h < 10)
            Show.h = "0" + req.h
        else
            Show.h = req.h
        if (req.m < 10)
            Show.m = "0" + req.m
        else
            Show.m = req.m
        if (req.s < 10)
            Show.s = "0" + req.s
        else
            Show.s = req.s

        p.innerHTML = `${Show.h}:${Show.m}:${Show.s}`
    }
}

function Pausar() {
    Pau = true
    RemoveAudio()
    console.log(Pau);
}

function Parar() {
    Pau = false
    Remove()
    AppendRoot()
    AppendInput()
}

function control() {
    requestAnimationFrame(control)
    requestAnimationFrame(Toca)
}

function MusicaP() {
    varAud = confirm("Quer usar uma musica própria?")
    if (varAud) {
        AppendSel()
    }
}

function RemoveSele() {
    div.q.remove()
}

MusicaP()

if (!varAud) {
    AppendRoot()

    AppendInput()

    control()
}

try {  
    document.getElementById('file').addEventListener('change', (e) => {
        audioP = e.target.files[0].path;
        RemoveSele()

        AppendRoot()

        AppendInput()

        control()
    })    
}catch(error){
    console.log('no');  
}

// 13:enter
// 8:backspace
// 123:f12