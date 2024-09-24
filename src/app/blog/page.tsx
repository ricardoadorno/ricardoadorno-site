import { BlogPosts } from '@/components/sections/posts'
import Text from '@/components/ui/text'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <Text gradient={'test'} variant={'heading1'} weight={'semibold'} className='mb-8'

      >My Blog</Text>
      <BlogPosts />
    </section>
  )
}
