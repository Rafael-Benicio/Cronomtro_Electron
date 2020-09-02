const electron=require('electron')

const { app ,BrowserWindow , globalShortcut } = require('electron')



function createWindow(){
    
    const win =new BrowserWindow({
        width:500,
        height:150,
        webPreferences:{
            nodeIntegration:true,
        }
    })

    win.loadFile('public/index.html')
    
    // Para abrir as ferramentas de desenvolvimento  
    // win.webContents.openDevTools()
    win.setProgressBar(0,5)
}


app.whenReady().then(createWindow)

// app.whenReady().then(() => {
//   globalShortcut.register('CommandOrControl+X', () => {
//     console.log('CommandOrControl+X is pressed')
//   })
// })