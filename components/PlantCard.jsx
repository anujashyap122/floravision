'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from './Button'

export default function PlantCard({
  name,
  description,
  price,
  image,
  defaultSelected = false,
}) {
  const [selected, setSelected] = useState(defaultSelected)

  return (
    <article
      onClick={() => setSelected((p) => !p)}
      className={`card-glow group relative bg-[rgba(30,43,26,0.6)] border rounded-2xl p-5
                  cursor-pointer transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]
                  ${selected
                    ? 'border-[#6db33f]'
                    : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(106,179,63,0.4)]'}`}
    >
      {/* Plant image */}
      <div className="h-40 flex items-center justify-center mb-4">
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="object-contain max-h-full drop-shadow-2xl
                     group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <h3 className="font-display text-[17px] font-medium text-[#f0ede6] mb-2">{name}</h3>
      <p className="text-xs text-[#9aab8e] leading-relaxed mb-4 min-h-[54px]">
        {description}
      </p>

      {/* Footer row */}
      <div className="flex items-center justify-between">
        <span className="text-base font-bold text-[#f0ede6]">{price}</span>
        <Button
          variant="cart"
          ariaLabel={`Add ${name} to cart`}
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </Button>
      </div>
    </article>
  )
}
