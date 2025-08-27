import type React from 'react';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Rajib Ahamed | MERN Stack Developer',
    description:
        'Portfolio of Rajib Ahamed, MERN Stack Developer specializing in building scalable and modern full-stack applications with a focus on clean architecture, intuitive design, and user-centric experiences.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
