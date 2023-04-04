import Image, { ImageProps } from 'next/image'

interface Props extends ImageProps {
  imgRef: React.RefObject<HTMLImageElement | null>
}

export const CustomImage = ({ imgRef, ...imgProps }: Props): JSX.Element => {
  return <Image ref={imgRef} {...imgProps} />
}
