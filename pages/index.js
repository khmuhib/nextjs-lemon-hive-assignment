import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroSection from '../components/HeroSection'
import EventSchedule from '../components/EventSchedule'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='Generate by create next app' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection></HeroSection>
      <EventSchedule></EventSchedule>
    </>
  )
}
