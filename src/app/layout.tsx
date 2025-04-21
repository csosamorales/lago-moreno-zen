import type { Metadata } from 'next';
import {
	Geist,
	Geist_Mono,
	Montserrat,
	Poiret_One,
} from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const monstserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

const poiret = Poiret_One({
	variable: '--font-poiret',
	subsets: ['latin'],
	weight: ['400'],
});

export const metadata: Metadata = {
	title: 'Lago Moreno Zen',
	description: 'Alquileres turisticos en Lago Moreno, Bariloche',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<GoogleAnalytics gaId="G-SSXFZENWCP" />
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${monstserrat.variable} ${poiret.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
