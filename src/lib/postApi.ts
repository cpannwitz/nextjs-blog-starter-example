import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

// define frontmatter fields which shall be available
const frontmatterFields = {
  title: 'title',
  date: 'date',
  excerpt: 'excerpt',
  content: 'content',
  slug: 'slug'
}

type FMField = keyof typeof frontmatterFields
const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
  // get file names, which are the post slugs
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: FMField[] = []) {
  // get the full path of the file
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  // read the file contents
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // extract frontmatter data
  const mattered = matter(fileContents)
  const content = mattered.content
  // typecast frontmatter data to our available fields
  const data = mattered.data as { [key in FMField]: string }

  const items: { [key in keyof typeof frontmatterFields]?: string } = {}

  fields.forEach(field => {
    // assign file name as slug to frontmatter data
    if (field === 'slug') {
      items[field] = realSlug
    }
    // assign file content as content to frontmatter data
    if (field === 'content') {
      items[field] = content
    }
    // Ensure only the minimal needed frontmatter data is exposed
    if (data[field] && Object.keys(frontmatterFields).includes(field)) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: FMField[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date && post2.date ? (post1.date > post2.date ? -1 : 1) : 0))
  return posts
}
