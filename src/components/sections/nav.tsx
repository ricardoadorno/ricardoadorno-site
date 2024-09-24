import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import Text from '../ui/text'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight flex justify-between items-center">
      <Text variant={'body-big'} weight={'bold'} href='/' className="animated-gradient">
        Ricardo Adorno
      </Text>

      <NavigationMenu>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <NavigationMenuItem key={path} className='list-none'>
              <Link
                href={path}
                className={navigationMenuTriggerStyle()}
              >
                {name}
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenu>
    </aside>
  )
}
