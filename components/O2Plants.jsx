'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import Button from './Button'

const O2_SLIDES = [
  {
    id: 1,
    title: "We Have Small And Best O2 Plants Collection's",
    p1: 'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
    p2: 'Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.',
    img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200&q=80',
  },
  {
    id: 2,
    title: "Peace Lily - Nature's Air Purifier",
    p1: 'The Peace Lily is one of the most effective air-purifying plants, removing harmful VOCs from indoor air and continuously releasing fresh oxygen.',
    p2: 'It thrives in low-light conditions, making it perfect for offices and bedrooms where it works silently to improve air quality 24 hours a day.',
    img: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=1200&q=80',
  },
  {
    id: 3,
    title: 'Snake Plant - Oxygen at Night',
    p1: 'Unlike most plants, the Sansevieria (Snake Plant) continues to release oxygen even at night, making it an ideal companion for your bedroom.',
    p2: 'It is incredibly resilient, tolerating low light and irregular watering while consistently improving the air quality in your home.',
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80',
  },
  {
    id: 4,
    title: 'Aloe Vera - Healing & Breathing',
    p1: 'Aloe Vera not only soothes burns and skin irritations - it is also a powerful oxygen producer that helps remove benzene and formaldehyde from the air.',
    p2: 'Easy to care for and incredibly versatile, Aloe Vera belongs on every windowsill for both its health and air-purifying benefits.',
    img: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=1200&q=80',
  },
]

export default function O2Plants() {
  const [current, setCurrent] = useState(0)
  const total = O2_SLIDES.length
  const sectionRef = useRef(null)

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1))
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1))

  useEffect(() => {
    const el = sectionRef.current?.querySelector('.reveal')
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const slide = O2_SLIDES[current]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-12 max-md:px-6 py-20 max-md:py-14"
      style={{ background: 'linear-gradient(180deg, #141e10 0%, #1a2416 100%)' }}
    >
      <SectionTitle>Our Best o2</SectionTitle>

      <div className="reveal flex items-center max-md:flex-col overflow-hidden bg-[rgba(30,43,26,0.6)] border border-[rgba(255,255,255,0.08)] rounded-2xl min-h-[300px]">
        <div className="flex-shrink-0 flex items-center justify-center w-[280px] max-md:w-full h-[300px] max-md:h-[220px] p-6">
          <Image
            key={slide.img}
            src={slide.img}
            alt={slide.title}
            width={240}
            height={260}
            className="object-contain max-h-full drop-shadow-2xl"
          />
        </div>

        <div className="flex-1 px-10 py-12 max-md:px-6 max-md:py-8">
          <h3 className="font-display text-[26px] max-md:text-xl font-semibold text-[#f0ede6] mb-5 leading-snug">
            {slide.title}
          </h3>
          <p className="text-sm text-[#9aab8e] leading-[1.8] mb-3 max-w-[420px]">
            {slide.p1}
          </p>
          <p className="text-sm text-[#9aab8e] leading-[1.8] max-w-[420px]">
            {slide.p2}
          </p>

          <div className="flex items-center justify-between mt-7 max-sm:flex-col max-sm:items-start gap-4">
            <Button variant="explore">Explore</Button>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#f0ede6] bg-transparent cursor-pointer hover:border-[#6db33f] hover:bg-[rgba(109,179,63,0.1)] transition-all duration-200"
              >
                &lsaquo;
              </button>

              <span className="text-sm text-[#9aab8e]">
                {String(current + 1).padStart(2, '0')}/
                {String(total).padStart(2, '0')}
              </span>

              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#f0ede6] bg-transparent cursor-pointer hover:border-[#6db33f] hover:bg-[rgba(109,179,63,0.1)] transition-all duration-200"
              >
                &rsaquo;
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {O2_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full border-none cursor-pointer transition-colors duration-200 ${
              i === current ? 'bg-[#6db33f]' : 'bg-[rgba(255,255,255,0.15)]'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
