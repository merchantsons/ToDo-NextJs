import type { Metadata } from 'next'
import { Inter,Poppins,Grey_Qo,Qwitcher_Grypen,Great_Vibes,Cinzel } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--poppins",
  weight:["100","200","300","400","500"]
 });

 const greyqo = Grey_Qo({ 
  subsets: ["latin"],
  variable: "--Grey_Qo",
  weight:["400"]
 });

 const qwitcher_grypen = Qwitcher_Grypen({ 
  subsets: ["latin"],
  variable: "--Qwitcher_Grypen",
  weight:["400"]
 });

 const  great_vibes = Great_Vibes({ 
  subsets: ["latin"],
  variable: "--Great_Vibes",
  weight:["400"]
 });

 const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--Cinzel",
  weight:["400"]
 });

export const metadata: Metadata = {
  title: 'ToDo - NextJs & Typescript',
  description: 'By - Merchantsons For GIAIC Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
