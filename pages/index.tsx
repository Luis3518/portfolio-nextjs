import Head from 'next/head'
import { Inter } from '@next/font/google'
import Description from "../components/description"
import Experience from "../components/experience"
import Navbar from "../components/navbar"
import * as Scroll from "react-scroll"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Porfolio</title>
        <meta name="description" content="Porfolio Luis Rodriguez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar samePage={true} />
      <Scroll.Element name="description">
        <Description />
      </Scroll.Element>
      <Scroll.Element name="experience">
        <Experience />
      </Scroll.Element>
    </>
  )
}
