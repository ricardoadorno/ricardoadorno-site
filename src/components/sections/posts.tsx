
import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import Text from '../ui/text'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <Text className="tabular-nums" lightness={500}>
                {formatDate(post.metadata.publishedAt, false)}
              </Text>
              <Text >
                {post.metadata.title}
              </Text>
            </div>
          </Link>
        ))}
    </div>
  )
}
