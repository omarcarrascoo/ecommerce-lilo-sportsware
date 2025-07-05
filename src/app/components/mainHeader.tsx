'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import './mainHeader.css'

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="main-header">
      <div className="top-bar">
        <div className="ticker2">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>New Drop Coming Soon</span>
          ))}
        </div>
      </div>

      <header className="nav">
        <nav>
          <div className="header-top">
            <Link href="/" className="logo">
              <img src="/assets/imgs/logos/logo.png" alt="Lilo Logo" width={100} height={50} />
            </Link>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
          </div>

          <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>

            <Link href="/" className="logo logo-top">
              <img src="/assets/imgs/logos/logo.png" alt="Lilo Logo" width={100} height={50} />
            </Link>

            <ul className="nav-links">
              <li><Link href="/">New arrivals</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
            <ul className="nav-links right">
              <li>
                <Link href="/cart" className="flex items-center gap-1">
                  <ShoppingCart size={20} />
                  <span>Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}
