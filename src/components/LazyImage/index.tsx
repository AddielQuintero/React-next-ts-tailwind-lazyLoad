import React, { useEffect, useRef, useState } from 'react'
import { CustomImage } from '../common/Image'

type LazyImageProps = {
  src: string
  onLazyLoad?: (img: HTMLImageElement) => void
}

export const LazyImage = ({ src, onLazyLoad }: LazyImageProps): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [isLazyLoaded, setIsLazyLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  )

  useEffect(() => {
    if (isLazyLoaded) {
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
          observer.disconnect()
          setIsLazyLoaded(true)
        }
      })
    })

    node.current && observer.observe(node.current)

    return () => {
      observer.disconnect()
    }
  }, [src])

  return (
    <CustomImage
      className="rounded object-cover h-44 bg-gray-300 mx-auto"
      alt="foxes"
      width="320"
      height="320"
      src={currentSrc}
      imgRef={node}
      onClick={() => console.log('click')}
    />
  )
}
