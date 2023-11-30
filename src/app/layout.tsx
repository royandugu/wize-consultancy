import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import MenuDisplay from '../../components/userComponents/primaryComponents/menuComponents/menuDisplay'
import Footer from '../../components/userComponents/primaryComponents/footerComponents/footer'
import mongoose from "mongoose";

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return <DbConnection children={children}/>
}

export const DbConnection=async ({
  children,
}: {
  children: React.ReactNode
})=>{
  try{
    const res=await mongoose.connect("mongodb+srv://wizeconsultancy117:OU5hPunzU4bS8kLg@cluster0.coe86cy.mongodb.net/");
    return (
      <html lang="en">
        <body className={inter.className}>
          <MenuDisplay/>
          {children}
          <Footer/>
        </body>
      </html>
    )
  }
  catch(err){
    console.log("Error in connecting to the database ", err);
  }
}