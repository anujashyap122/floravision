'use client'

import { useEffect, useRef } from 'react'
import SectionTitle from './SectionTitle'
import PlantCard from './PlantCard'

const PLANTS = [
  {
    id: 1,
    name: 'Aglaonema plant',
    description:
      'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.',
    price: 'Rs. 300/-',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80',
    defaultSelected: false,
  },
  {
    id: 2,
    name: 'Plantain Lilies',
    description:
      'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.',
    price: 'Rs. 380/-',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500&q=80',
    defaultSelected: false,
  },
  {
    id: 3,
    name: 'Cactus',
    description:
      'It is known for their ability to thrive in arid and environments with minimal water requirements.',
    price: 'Rs. 259/-',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&q=80',
    defaultSelected: false,
  },
  {
    id: 4,
    name: 'Swiss cheese Plant',
    description:
      'It is a popular tropical houseplant known for its distinctive, perforated leaves.',
    price: 'Rs. 400/-',
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=500&q=80',
    defaultSelected: true,
  },
  {
    id: 5,
    name: 'Sansevieria plant',
    description:
      'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&q=80',
    defaultSelected: false,
  },
  {
    id: 6,
    name: 'Agave plant',
    description:
      'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architecture forms.',
    price: 'Rs. 359/-',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500&q=80',
    defaultSelected: false,
  },
]

function RevealWrapper({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}

export default function TopSelling() {
  return (
    <section
      id="plants-type"
      className="px-12 max-md:px-6 py-20 max-md:py-14"
      style={{ background: 'linear-gradient(180deg, #1a2416 0%, #141e10 100%)' }}
    >
      <SectionTitle>Our Top Selling Plants</SectionTitle>

      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
        {PLANTS.map((plant, i) => (
          <RevealWrapper key={plant.id} delay={i * 70}>
            <PlantCard {...plant} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
