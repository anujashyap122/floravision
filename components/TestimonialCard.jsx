import Image from 'next/image'

export default function TestimonialCard({ name, rating, review, avatar, altText }) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating ? '★' : '☆'
  ).join('')

  return (
    <article
      className="bg-[rgba(30,43,26,0.6)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6
                 hover:border-[rgba(106,179,63,0.4)] transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={avatar}
            alt={altText || name}
            width={44}
            height={44}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#f0ede6]">{name}</p>
          <p className="text-[#f5c842] text-xs mt-0.5" aria-label={`${rating} out of 5 stars`}>
            {stars}
          </p>
        </div>
      </div>
      <p className="text-[13px] text-[#9aab8e] leading-[1.75]">{review}</p>
    </article>
  )
}
