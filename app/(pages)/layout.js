"use client"

import Footer from "../components/organisms/Footer"
import Header from "../components/organisms/Header"


const MainLayouts = ({ children }) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default MainLayouts