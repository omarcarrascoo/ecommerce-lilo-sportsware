'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './cart.css' // Ensure you have styles for the cart
import MainHeader from '../components/mainHeader'
import { useCart } from '../context/cartContext'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const shipping = 150
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal + shipping

  return (
    <>
      <MainHeader />

      <main>
        <section className="cart">
          {cart.length === 0 ? (
            <>
            <br />
            <br />
            <br />
            <p>Your cart is empty.</p>
            </>
          ) : (
            cart.map((item, idx) => (
              <div className="cart-item" key={idx} data-price={item.price}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={400}
                />
                <div className="details">
                  <div className="top">
                    <div>
                      <h3>{item.name}</h3>
                      <p>${item.price} MXN</p>
                      <p>Size: {item.size} | Color: {item.color}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <button className="remove" onClick={() => removeFromCart(item.id, item.color, item.size)}>
                      REMOVE ITEM 🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="totals">
            <div className="line">
              <span>Subtotal:</span>
              <span id="subtotal">${subtotal} MXN</span>
            </div>
            <div className="line">
              <span>Shipping:</span>
              <span>${shipping} MXN</span>
            </div>
            <div className="line total">
              <span>Total:</span>
              <span id="total">${total} MXN</span>
            </div>
          </div>

          <div className="checkout">
            <button disabled={cart.length === 0}>CHECK OUT</button>
            <button onClick={clearCart} disabled={cart.length === 0} style={{marginLeft: 8}}>Clear Cart</button>
          </div>
        </section>
      </main>

    </>
  )
}
