import NextImage from 'next/image'

interface ImageProps {
  src?: string
  url?: string
  alt?: string
}

const Image = (img: ImageProps) => {
  return (
    <NextImage
      key={img.url}
      src={'/blog/' + img.url || img.src || ''}
      alt={img.alt}
      layout="responsive"
      width="100%"
      height="auto"
    />
  )
}

export default Image
