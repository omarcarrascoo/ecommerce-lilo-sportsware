"use client"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import MainHeader from './components/mainHeader'
import { products } from './data'
import { useState } from 'react'
import MainFooter from './components/mainFooter'

const Home: NextPage = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const handleColorChange = (productId: string, color: string) => {
    setSelectedColor(color)
  }

  return (
    <>
      <Head>
        <title>LILO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/main.style.css" />
      </Head>

      <MainHeader />

      <main className="hero">
        <div className="image-wrapper">
          <Image src="/assets/imgs/der.png" alt="Model left" width={600} height={50} style={{ objectFit: 'cover' }} className="left-image" />
          <Image src="/assets/imgs/izq.png" alt="Model right" width={600} height={50} style={{ objectFit: 'cover' }} className="right-image" />
        </div>
        <div className="hero-text">
          <h1>
            Soft power.<br />
            Clean cuts.<br />
            Designed to<br />
            move with<br />
            you.
          </h1>
          <p className="sub">Own the Movement</p>
          <Link href="/shop" className="button">Shop Now</Link>
        </div>
      </main>

      {/* Ticker Footer */}
      <footer className="footer-bar">
        <div className="ticker">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>LILO ACTIVEWEAR</span>
          ))}
        </div>
      </footer>

      <section className="product-gallery">
        <h2>THE ACTIVE LIFESTYLE</h2>
        <p>Designed for motion, crafted for life. This collection moves with you—whether you’re flowing through a workout, walking through the city, or grounding yourself in stillness.</p>
        <br />
        <br />
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card" data-product-id={p.id}>
              <Link href={`/product/${p.id}`}>
                <>
                  {/* Display the first image or the one based on the selected color */}
                  <Image
                    src={selectedColor ? p.colors[selectedColor][0] : p.src}
                    alt={p.name}
                    width={300}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                  <h3>{p.name}</h3>
                  <p>${p.price} MXN</p>
                  <div className="colors">
                    {Object.keys(p.colors).map((color) => (
                      <span
                        key={color}
                        className={`dot ${color}`}
                        onClick={() => handleColorChange(p.id, color)}
                      />
                    ))}
                  </div>
                  <span className="view-button">View</span>
                </>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Ticker Footer */}
      <footer className="footer-bar">
        <div className="ticker">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>LILO ACTIVEWEAR</span>
          ))}
        </div>
      </footer>

      <section className="hero-banner">
        <div className="background">
          <Image src="/assets/imgs/d7.jpg" alt="Left section" width={1600} height={900} style={{ objectFit: 'cover' }} className="left" />
          <Image src="/assets/imgs/d3.JPG" alt="Center section" width={1600} height={900} style={{ objectFit: 'cover' }} className="center centerD" />
          <Image src="/assets/imgs/d1.JPG" alt="Right section" width={1600} height={6900} style={{ objectFit: 'cover' }} className="right" />
        </div>
        <div className="overlay" />
        <div className="text">New Textures. New Shapes. New Energy.</div>
      </section>

      {/* Ticker Footer */}
      <footer className="footer-bar">
        <div className="ticker">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>LILO ACTIVEWEAR</span>
          ))}
        </div>
      </footer>

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
      <footer className="footer-bar">
        <div className="ticker">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>LILO ACTIVEWEAR</span>
          ))}
        </div>
      </footer>
      <MainFooter/>

      {/* External JS for modal interactions and ticker */}
      <Script src="/scripts/main.scripts.js" strategy="afterInteractive" />
    </>
  )
}

export default Home
