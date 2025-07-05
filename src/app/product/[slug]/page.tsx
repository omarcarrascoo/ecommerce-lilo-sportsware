'use client'

import React, { useState } from 'react'
import { useParams, notFound, redirect } from 'next/navigation'
import Image from 'next/image'
import './product.css'
import { products } from '@/app/data'
import MainHeader from '@/app/components/mainHeader'
import { useCart } from '@/app/context/cartContext'

export default function ProductPage() {
  const params = useParams()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug

  const product = products.find(p => p.id === slug)
  console.log('Product:', product)
  
  if (!product) {
    return (
      <>
        <MainHeader />
        <p>Product not found.</p>
      </>
    )
  }

  // Inicializamos el color con la primera clave de colors
  const [size, setSize] = useState('S')
  const [color, setColor] = useState(Object.keys(product.colors)[0] || '')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      color,
      size,
      quantity,
      image: product.colors[color][0],
    })
    redirect('/cart')
  }

  return (
    <>
      <MainHeader />

      <section className="product-detail">
        <h1 className="product-title">{product.name}</h1>

        <div className="product-images">
          {/* Mostrar imágenes basadas en el color seleccionado */}
          {product.colors[color].map((imgSrc, i) => (
            <Image
              key={i}
              id={i === 0 ? 'img-front' : `img-${i}`}
              src={imgSrc}
              alt={`${product.name} ${color} image ${i + 1}`}
              width={320}
              height={500}
            />
          ))}
        </div>

        <div className="product-options">
          <div className="option-group">
            <span>SIZE</span>
            {['S', 'M', 'L'].map((s) => (
              <label key={s}>
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={() => setSize(s)}
                /> {s}
              </label>
            ))}
          </div>

          <div className="option-group">
            <span>COLOR</span>
            {Object.keys(product.colors).map((c) => (
              <label key={c}>
                <input
                  type="radio"
                  name="color"
                  value={c}
                  checked={color === c}
                  onChange={() => setColor(c)}
                />
                <span className={`dot ${c}`} style={{ backgroundColor: c }}></span>
              </label>
            ))}
          </div>

          <div className="option-group">
            <span>QUANTITY</span>
            <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
              {[1,2,3,4,5].map(q => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          <p className="product-price">${product.price} MXN</p>
          <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
        </div>
      </section>
    </>
  )
}
