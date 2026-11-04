const { app,BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: `${__dirname}/preload.js`,
        }
    });

    win.loadFile('./hosted/homePage.html')
};

app.whenReady().then(() => {
    createWindow();

    // if statement that fixes Mac issues
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    };


});

// Force closes window if this is a Mac
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});