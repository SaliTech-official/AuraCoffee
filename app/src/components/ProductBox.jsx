import React, { useState } from 'react'

export default function ProductBox({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="border-2 border-cream rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-brown transition-all duration-300">
      <div className="relative aspect-[21/9] overflow-hidden rounded-t-lg bg-cream">
        <img 
          src={product.image} 
          alt={product.title}
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-brown/30 border-t-brown rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-heading font-semibold text-brown mb-2">{product.title}</h3>
        <p className="text-sm font-body text-brown mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-brown font-body font-bold">{product.price}</span>
          <span className="text-xs font-body px-2 py-1 border border-brown text-brown rounded-full">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  )
}
