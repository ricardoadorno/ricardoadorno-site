import Text from '@/components/ui/text';

export default function Homepage() {
  return (
    <section>
      <Text variant={'heading1'} weight={'semibold'} className="mb-8">
        My Portfolio
      </Text>
      <Text className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </Text>
    </section>
  )
}
