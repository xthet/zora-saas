import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"
import localFont from "next/font/local"
import Layout from "@/components/layouts/root_layout"

const satoshi = localFont({
	src: [
		{
			path: "../public/fonts/Satoshi/Satoshi-Variable.woff2",
			style: "normal",
		},
		{
			path: "../public/fonts/Satoshi/Satoshi-VariableItalic.woff2",
			style: "italic",
		},
	],
	variable: "--font-pri",
})

const instrumentSerif = Instrument_Serif({
	subsets: ["latin"],
	weight: "400",
	style: "italic",
	variable: "--font-sec",
})

export const metadata = {
	title: "Zora",
	description: "Zora helps you turn data into smarter sales decisions.",
	keywords: [
		"sales analytics",
		"data-driven sales",
		"Zora",
		"sales platform",
		"B2B SaaS",
	],
	authors: [{ name: "Zora Team", url: "https://zora.tht.agency" }],
	metadataBase: new URL("https://zora.tht.agency"),
	openGraph: {
		title: "Zora",
		description: "Zora helps you turn data into smarter sales decisions.",
		url: "https://zora.tht.agency",
		siteName: "Zora",
		images: [
			{
				url: "https://zora.tht.agency/og-image.png", // replace with your real OG image
				width: 1200,
				height: 630,
				alt: "Zora - Sales Powered by Data",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Zora",
		description: "Zora helps you turn data into smarter sales decisions.",
		site: "@zorahq", // change to your real Twitter handle
		images: ["https://zora.tht.agency/og-image.png"],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${satoshi.variable} ${instrumentSerif.variable} antialiased`}
			>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
