'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import Button from './Button'

const TRENDING = [
  {
    id: 1,
    title: 'For Your Desks Decorations',
    desc: 'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
    price: 'Rs. 599/-',
    img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80',
    reverse: false,
  },
  {
    id: 2,
    title: 'For Your Desks Decorations',
    desc: 'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.',
    price: 'Rs. 399/-',
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80',
    reverse: true,
  },
]

function TrendingCard({ title, desc, price, img, reverse }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal flex items-center gap-10 max-md:flex-col max-md:text-center
        bg-[rgba(30,43,26,0.65)] border border-[rgba(255,255,255,0.08)]
        rounded-2xl px-10 py-8 max-md:px-6 max-md:py-7
        hover:border-[rgba(106,179,63,0.4)] hover:-translate-y-0.5
        transition-all duration-300 overflow-hidden
        ${reverse ? 'flex-row-reverse' : ''}`}
    >
      <Image
        src={img}
        alt={title}
        width={200}
        height={200}
        className="object-contain flex-shrink-0 drop-shadow-2xl w-[180px] h-[180px] max-md:w-[140px] max-md:h-[140px]"
      />

      <div className="flex-1">
        <h3 className="font-display text-[22px] font-semibold text-[#f0ede6] mb-3">
          {title}
        </h3>
        <p className="text-sm text-[#9aab8e] leading-[1.75] mb-5 max-w-[460px] max-md:mx-auto">
          {desc}
        </p>
        <p className="text-[22px] font-bold text-[#f0ede6] mb-4">{price}</p>

        <div className="flex items-center gap-3 max-md:justify-center">
          <Button variant="explore">Explore</Button>
          <Button variant="cart" ariaLabel="Add to cart">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function TrendingPlants() {
  return (
    <section
      id="trending"
      className="px-12 max-md:px-6 py-20 max-md:py-14 bg-[#1a2416]"
    >
      <SectionTitle>Our Trendy plants</SectionTitle>

      <div className="flex flex-col gap-5">
        {TRENDING.map((item) => (
          <TrendingCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
