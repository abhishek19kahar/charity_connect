import React, { useEffect } from 'react'

export const DynamicFavicon: React.FC = () => {
  useEffect(() => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="32" height="32">
        <circle cx="50" cy="50" r="48" fill="#E53E3E" />
        <text
          x="50"
          y="70"
          font-family="Arial, sans-serif"
          font-size="60"
          font-weight="bold"
          text-anchor="middle"
          fill="white"
        >
          C²
        </text>
      </svg>
    `

    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link')
    favicon.type = 'image/svg+xml'
    favicon.rel = 'shortcut icon'
    favicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`

    document.head.appendChild(favicon)
  }, [])

  return null
}

