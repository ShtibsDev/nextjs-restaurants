import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="max-w-screen-2xl m-auto bg-white">
					<Navbar />
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
