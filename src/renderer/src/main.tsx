import './assets/main.css'

import { HashRouter, Route, Routes } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Template from './template'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Template>
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
            </Template>
        </HashRouter>
    </StrictMode>
)
