import { app, BrowserWindow, ipcMain } from 'electron'

export default function StartWindowManagerService() {
    ipcMain.on('window-manager:minimize', () => {
        BrowserWindow.getFocusedWindow()?.minimize()
    })

    ipcMain.on('window-manager:maximize', () => {
        if (BrowserWindow.getFocusedWindow()?.isMaximized()) {
            const window = BrowserWindow.getFocusedWindow()
            const bounds = window?.getBounds()
            window?.unmaximize()
            window?.setBounds({
                width: bounds!.width / 2,
                height: bounds!.height / 2,
                x: bounds!.x,
                y: bounds!.y
            })
        } else {
            BrowserWindow.getFocusedWindow()?.maximize()
        }
    })
    
    ipcMain.on('window-manager:close', () => {
        app.quit()
    })
}