import NextLink from 'next/link'

interface LinkProps {
  children: React.ReactNode
  href: string
}

const Link = (link: LinkProps) => {
  return <NextLink href={link.href}>{link.children}</NextLink>
}

export default Link
