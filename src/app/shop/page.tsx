'use client'

import React from 'react'
import { products } from '../data'
import Link from 'next/link'
import Image from 'next/image'
import MainHeader from '../components/mainHeader'
import Script from 'next/script'

export default function ProductGalleryPage() {
  return (
    <div>
      <MainHeader />

      {/* Ticker header */}
      <footer className="footer-bar">
        <div className="ticker">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>LILO ACTIVEWEAR</span>
          ))}
        </div>
      </footer>

      <section className="product-gallery">
        <h2>THE ACTIVE LIFESTYLE</h2>
        <p>
          Designed for motion, crafted for life. This collection moves with you—whether you’re flowing
          through a workout, walking through the city, or grounding yourself in stillness.
        </p>
        <br />
        <br />
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card" data-product-id={p.id}>
              <Link href={`/product/${p.id}`}>
                <div>
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={300}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                  <h3>{p.name}</h3>
                  <p>${p.price} MXN</p>
                  <div className="colors">
                    {Array.isArray(p.colors) &&
                      p.colors.map((c) => <span key={c} className={`dot ${c}`} />)}
                  </div>
                  <span className="view-button">View</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Ticker footer */}
      <footer className="footer-bar">
        <div className="ticker">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>LILO ACTIVEWEAR</span>
          ))}
        </div>
      </footer>

      <Script src="/scripts/main.scripts.js" strategy="afterInteractive" />
    </div>
  )
}
