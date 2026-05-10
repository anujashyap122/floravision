'use client'

const variants = {
  primary:
    'bg-[#f0ede6] text-[#1a2416] px-7 py-3 text-sm font-semibold rounded-lg ' +
    'hover:bg-[#e0ddd6] hover:-translate-y-px transition-all duration-200 cursor-pointer',

  outline:
    'bg-transparent text-[#f0ede6] border border-[rgba(255,255,255,0.08)] px-6 py-3 text-sm ' +
    'rounded-lg hover:border-[#6db33f] flex items-center gap-2 transition-all duration-200 cursor-pointer',

  explore:
    'bg-transparent text-[#f0ede6] border border-[rgba(255,255,255,0.08)] px-5 py-2 text-sm ' +
    'rounded-lg hover:border-[#6db33f] hover:bg-[rgba(109,179,63,0.08)] transition-all duration-200 cursor-pointer',

  cart:
    'w-10 h-10 rounded-lg bg-transparent border border-[rgba(255,255,255,0.08)] flex items-center ' +
    'justify-center text-base cursor-pointer hover:border-[#6db33f] hover:bg-[rgba(109,179,63,0.1)] transition-all duration-200',

  buySmall:
    'bg-[#f0ede6] text-[#1a2416] px-4 py-2 text-xs font-semibold rounded-md ' +
    'hover:bg-[#e0ddd6] transition-colors duration-200 cursor-pointer',

  subscribe:
    'bg-[#6db33f] text-[#1a2416] px-4 py-3 text-xs font-bold tracking-wide ' +
    'hover:bg-[#8bc34a] transition-colors duration-200 cursor-pointer',
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
}) {
  return (
    <button
      type={type}
      className={`${variants[variant]} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
