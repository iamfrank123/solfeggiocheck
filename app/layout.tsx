import './globals.css'
import '../styles/mobile.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Solfeggio - Piano Trainer',
    description: 'Learn piano with real-time MIDI feedback and digital sheet music',
    manifest: '/manifest.json',
    icons: {
        icon: '/icon.png',
        apple: '/apple-touch-icon.png',
    },
}

export const viewport = {
    themeColor: '#4a148c',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
}

import PWAControls from '@/components/PWAControls'
import { LanguageProvider } from '@/context/LanguageContext'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="it">
            <body>
                <LanguageProvider>
                    {children}
                    <PWAControls />
                </LanguageProvider>
            </body>
        </html>
    )
}
