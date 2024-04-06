'use client'

import React, { useState } from 'react'

import classes from './index.module.scss'
import Link from 'next/link'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import Image from 'next/image'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'

const CartItem = ({ product, qty, title, metaImage, addItemToCart }) => {
  const [quantity, setQuantity] = useState(qty)

  const handleIncrement = () => {
    const updatedQty = quantity + 1 
    setQuantity(updatedQty)
    addItemToCart({ product, quantity: Number(updatedQty) })
  }

  const handleDecrement = () => {
    const updatedQty = quantity > 1 ? quantity - 1 : 1
    setQuantity(updatedQty)
    addItemToCart({ product, quantity: Number(updatedQty) })
  }

  const enterQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setQuantity(value)
    addItemToCart({ product, quantity: value })
  }
  return (
    <li className={classes.item}>
      <Link
        href={`/products/${product.slug}`}
        className={classes.mediaWrapper}
      >
        {!metaImage && (
          <span>No Image</span>
        )}
        {metaImage && typeof metaImage !== 'string' && (
          <Media
            className={classes.media}
            imgClassName={classes.image}
            resource={metaImage}
            fill
          />
        )}
      </Link>
      <div className={classes.itemDetails}>
        <div className={classes.titleWrapper}>
          <h6>{title}</h6>
          <Price product={product} button={false} />
        </div>
        <div className={classes.quantity}>
          <div
            className={classes.quantityBtn}
            onClick={handleDecrement}
          >
            <Image
              src={'/assets/icons/minus.svg'}
              alt="minus"
              width={24}
              height={24}
              className={classes.qtnBt}
            />
          </div>
          <input
            type="text"
            value={quantity}
            onChange={enterQty}
            className={classes.quantityInput}
          />
          <div
            className={classes.quantityBtn}
            onClick={handleIncrement}
          >
            <Image
              src={'/assets/icons/plus.svg'}
              alt="plus"
              width={24}
              height={24}
              className={classes.qtnBt}
            />
          </div>
        </div>
      </div>
      <div className={classes.subtotalWrapper}>
        <Price product={product} button={false} quantity={quantity} />
        <RemoveFromCartButton product={product} />
      </div>
    </li>
  )
}

export default CartItem