import Contacts from '@/components/sections/contacts';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import { Separator } from '@/components/ui/separator';

export default function Homepage() {
  return (
    <div className='space-y-8'>
      <Hero />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Contacts />
    </div>
  )
}
