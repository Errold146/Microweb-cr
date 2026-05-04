import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

import { generateTitle } from '../src/utils/index';
import { Navbar } from "@/src/components";

const spaceGroptesk = Space_Grotesk({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: generateTitle(),
	description: "Web oficial de Microweb-cr su aliado en tecnología desde Costa Rica",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${spaceGroptesk.className} h-full bg-mirage-50`}
			suppressHydrationWarning
		>
			<body className="min-h-full flex flex-col">
                <Navbar />
                <main>
                    {children}
                </main>
            </body>
		</html>
	);
}
