import { session } from 'electron'

// TODO: do authentication system
export default async function StartAuthService() {
    // await session.defaultSession.cookies.set({ name: 'viatask_auth-token', value: '123456778', path: '/', url: 'http://localhost', expirationDate: Date.now() + 1000 * 60 * 60 * 24 * 30 })

    const data = await session.defaultSession.cookies.get({ name: 'viatask_auth-token', path: '/', url: 'http://localhost' })

    if (data && data.length > 0) {
        
    }
}