import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
    interface Window {
        electron: ElectronAPI
        api: {
            windowManager: {
                minimize: () => void
                maximize: () => void
                close: () => void
            }
        }
    }
}
