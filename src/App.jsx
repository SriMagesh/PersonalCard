import React from "react"
import About from "./components/about"
import Footer from "./components/footer"
import Info from "./components/info"
import Interests from "./components/interests"


export default function App() {
  return(
    <main>
      <div className="Card">
        <Info/>
        <About/>
        <Interests/>
        <div className="Footer">
          <Footer/>
        </div>
      </div>
    </main>
  )
}

