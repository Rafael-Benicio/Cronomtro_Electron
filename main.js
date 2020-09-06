const electron=require('electron')

const { app ,BrowserWindow , globalShortcut} = require('electron')


function createWindow(){
    
    const win =new BrowserWindow({
        minWidth:500,
        minHeight:150,
        maxHeight:150,
        maxWidth:500,
        title:"Crônos",
        icon: './src/icon/icon.png',
        autoHideMenuBar:true,
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