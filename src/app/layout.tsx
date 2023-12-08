require("dotenv").config();

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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


  return <DbConnection children={children} />
}

const DbConnection = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  try {
    if (process.env.MONGO_URI) {
      const res = await mongoose.connect(process.env.MONGO_URI);
      return (
        <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
        </html>
      )
    }
    else return <h5> Mongo URI not present </h5>
  }
  catch (err) {
    console.log("Error in connecting to the database ", err);
    return <h5> Error connecting to database </h5>
  }
}