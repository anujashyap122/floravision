'use client'

import Image from 'next/image'
import Button from './Button'

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 flex items-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 38% 60%, rgba(74,124,63,0.28) 0%, transparent 60%),' +
            'radial-gradient(ellipse at 72% 28%, rgba(139,195,74,0.1) 0%, transparent 50%)',
        }}
      />

      {/* Background plant image */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[58%] max-md:w-full"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.38,
          WebkitMaskImage:
            'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 80%)',
          maskImage:
            'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 80%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 px-12 max-md:px-6 py-24 max-w-[580px]">
        <h1
          className="font-display font-bold text-[#f0ede6] leading-[1.05] mb-5"
          style={{ fontSize: 'clamp(46px, 7vw, 82px)' }}
        >
          Earth&apos;s<br />Exhale
        </h1>

        <p className="text-[15px] text-[#9aab8e] leading-[1.75] max-w-[400px] mb-9">
          &ldquo;Earth Exhale&rdquo; symbolizes the purity and vitality of the Earth&apos;s
          natural environment and its essential role in sustaining life.
        </p>

        <div className="flex items-center gap-4 flex-wrap mb-10">
          <Button variant="primary">Buy Now</Button>
          <Button variant="outline">
            <span
              className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.15)]
                         flex items-center justify-center text-[10px]"
            >
              ▶
            </span>
            Live Demo...
          </Button>
        </div>

        {/* Review card */}
        <div
          className="bg-[rgba(30,43,26,0.88)] backdrop-blur-md border border-[rgba(255,255,255,0.08)]
                     rounded-xl p-4 max-w-[260px]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="https://i.pravatar.cc/36?img=47"
                alt="Ronnie Hamill"
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#f0ede6]">Ronnie Hamill</p>
              <p className="text-[#f5c842] text-[11px] mt-0.5">★★★★★</p>
            </div>
          </div>
          <p className="text-[12px] text-[#9aab8e] leading-[1.65]">
            I can&apos;t express how thrilled I am with my new natural plants! They bring
            such a fresh and vibrant energy to my home.
          </p>
        </div>
      </div>

      {/* Floating product card – hidden on mobile */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 z-20
                   hidden lg:block
                   bg-[rgba(30,43,26,0.92)] backdrop-blur-xl
                   border border-[rgba(255,255,255,0.08)] rounded-2xl p-5 w-[196px]
                   shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
      >
        <Image
          src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=300&q=80"
          alt="Aglaonema Plant"
          width={160}
          height={140}
          className="object-contain w-full h-[140px] mb-3"
        />
        <p className="text-[11px] text-[#6b7c63] uppercase tracking-[0.8px] mb-1">Indoor Plant</p>
        <p className="font-display text-[15px] font-medium text-[#f0ede6] mb-3">Aglaonema plant</p>
        <Button variant="buySmall">Buy Now</Button>
        <div className="flex gap-1.5 mt-4">
          <span className="w-2 h-2 rounded-full bg-[#6db33f] inline-block" />
          <span className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.12)] inline-block cursor-pointer" />
          <span className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.12)] inline-block cursor-pointer" />
        </div>
      </div>
    </section>
  )
}
