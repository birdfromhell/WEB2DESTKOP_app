
const { ipcMain } = require('electron');

module.exports = [
    {role : 'reload'},
    { type: 'separator' },
    {label : 'Print', click: printPage},
]

// Print page method
function printPage() {
    ipcMain.emit('printPage')
}