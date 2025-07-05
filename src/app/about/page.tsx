import React from 'react'
import MainHeader from '../components/mainHeader'
import Image from 'next/image'
import MainFooter from '../components/mainFooter'

function About() {
  return (
    <>
        <MainHeader/>
        <br />
        <br />
        <br />
        <section className="lilo-special">
                <div className="text">
                  <h2>WHAT MAKES LILO SPECIAL?</h2>
                  <h3>Not just activewear. A new way to feel your body.</h3>
                  <p>Lilo is where design meets intention. Every piece is crafted to move with you — on the mat, in motion, or at rest. We don’t chase trends. We create elevated essentials that combine form, function, and feeling. Thoughtful cuts. Sculpting fabrics. A second-skin softness made to empower, not restrict.</p>
                </div>
                <div className="image">
                  <Image src="/assets/imgs/1Y7A1012.png" alt="Lilo purple set with tennis balls" width={600} height={600} />
                </div>
        </section>

           {/* Ticker Footer */}
        <div className="footer-bar">
            <div className="ticker">
            {Array.from({ length: 10 }).map((_, i) => (
                <span key={i}>LILO ACTIVEWEAR</span>
            ))}
            </div>
        </div>

        <MainFooter/>


    </>
  )
}

export default About