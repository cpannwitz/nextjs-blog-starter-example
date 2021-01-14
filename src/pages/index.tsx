import { getAllPosts } from '../lib/postApi'
import Head from 'next/head'
import Link from 'next/link'

interface IndexProps {
  allPosts: any
}

export default function Index({ allPosts }: IndexProps) {
  return (
    <div>
      <Head>
        <title>Next.js Blog Example with</title>
      </Head>
      {allPosts.map((post: any, index: number) => {
        return (
          <div key={index}>
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  // TODO! pagination
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt'])

  return {
    props: { allPosts }
  }
}
