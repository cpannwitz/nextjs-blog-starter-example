import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { getPostBySlug, getAllPosts } from '../../lib/postApi'
import type { GetStaticPaths, GetStaticProps } from 'next'
import PostComments from '../../components/PostComments'
import markdownToReact from '../../lib/markdownToReact'

export default function BlogPost({ post }: any) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  // TODO!
  return (
    <div>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title} | pnwtz - Blog</title>
            </Head>
            {markdownToReact(post.content)}
          </article>
        </>
      )}
      <PostComments />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.slug && !Array.isArray(params.slug)) {
    const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content'])

    return {
      props: {
        post
      }
    }
  }
  return {
    props: {}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
