'use client'

import { useState } from 'react'

const QUICK_LINKS = [
  { label: 'Home',             href: '#home' },
  { label: "Type's of plant's", href: '#plants-type' },
  { label: 'Contact',          href: '#contact' },
  { label: 'Privacy',          href: '#' },
]

const SOCIAL = [
  { label: 'FB', href: '#', ariaLabel: 'Facebook' },
  { label: 'TW', href: '#', ariaLabel: 'Twitter' },
  { label: 'LI', href: '#', ariaLabel: 'LinkedIn' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-[#141e10] border-t border-[rgba(255,255,255,0.08)] px-12 max-md:px-6 pt-14 pb-8">
      <div
        className="grid gap-12 mb-10"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 font-bold text-lg text-[#f0ede6] mb-4">
            <span className="text-2xl">🪴</span>
            FloraVision
            <span className="text-[#6db33f]">.</span>
          </div>
          <p className="text-[13px] text-[#9aab8e] leading-[1.75] max-w-[250px] italic mb-5">
            &ldquo;From lush indoor greens to vibrant outdoor blooms, our plants are crafted
            to thrive and elevate your living environment.&rdquo;
          </p>
          <div className="flex gap-4">
            {SOCIAL.map(({ label, href, ariaLabel }) => (
              <a
                key={label}
                href={href}
                aria-label={ariaLabel}
                className="text-xs font-bold tracking-[1.5px] text-[#9aab8e]
                           no-underline hover:text-[#6db33f] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-[#f0ede6] mb-5">Quick Link&apos;s</h4>
          <ul className="list-none flex flex-col gap-3 p-0 m-0">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-[#9aab8e] no-underline hover:text-[#f0ede6] transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-[#f0ede6] mb-3">For Every Update.</h4>
          <p className="text-[13px] text-[#9aab8e] leading-[1.7] mb-4">
            Stay up to date with our latest plant arrivals and care tips.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex border border-[rgba(255,255,255,0.08)] rounded-lg overflow-hidden"
            noValidate
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              aria-label="Email address for newsletter"
              className="flex-1 bg-[rgba(255,255,255,0.04)] border-none px-4 py-3
                         text-[#f0ede6] text-[13px] outline-none placeholder:text-[#6b7c63]"
            />
            <button
              type="submit"
              className="bg-[#6db33f] text-[#1a2416] px-4 py-3 text-xs font-bold
                         tracking-wide cursor-pointer border-none
                         hover:bg-[#8bc34a] transition-colors duration-200"
            >
              {subscribed ? '✓ Done!' : 'SUBSCRIBE'}
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-[#6db33f] mt-2">
              ✓ Thanks for subscribing!
            </p>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between pt-6
                   border-t border-[rgba(255,255,255,0.08)]
                   max-sm:flex-col max-sm:gap-3 max-sm:text-center"
      >
        <span />
        <p className="text-xs text-[#6b7c63]">
          FloraVision &copy; all right reserve
        </p>
      </div>
    </footer>
  )
}
