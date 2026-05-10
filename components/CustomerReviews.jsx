'use client'

import { useEffect, useRef } from 'react'
import SectionTitle from './SectionTitle'
import TestimonialCard from './TestimonialCard'

const REVIEWS = [
  {
    id: 1,
    name: 'Shelly Russel',
    rating: 4,
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    avatar: 'https://i.pravatar.cc/44?img=5',
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    rating: 4,
    review:
      "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    avatar: 'https://i.pravatar.cc/44?img=9',
  },
  {
    id: 3,
    name: 'Carol Huels',
    rating: 4,
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    avatar: 'https://i.pravatar.cc/44?img=23',
  },
]

export default function CustomerReviews() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.reveal')
    if (!cards) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 100)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    cards.forEach((c) => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="px-12 max-md:px-6 py-20 max-md:py-14 bg-[#1a2416]"
    >
      <SectionTitle>Customer Review</SectionTitle>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
        {REVIEWS.map((review) => (
          <div key={review.id} className="reveal">
            <TestimonialCard {...review} />
          </div>
        ))}
      </div>
    </section>
  )
}
