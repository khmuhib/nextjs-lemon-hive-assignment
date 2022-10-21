import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"
import Styles from '../styles/Layout.module.css'

export default function layout({ children }) {
    return (
        <>
            <Head>
                <title>React</title>
            </Head>
            <div className="bg-[#F5F5F5]">
                <div className={`w-[350px] h-[412px] left-[0px] top-[-200px] bg-[#7C3EFF] opacity-[0.3] blur-[250px] absolute ` }></div>
                <div className={`w-[350px] h-[412px] right-[0px] top-[-200px] bg-[#7C3EFF] opacity-[0.3] blur-[250px] absolute` }></div>
                <Header></Header>
                <main>{children}</main>
                <Footer></Footer>
            </div>
        </>
    )
}
