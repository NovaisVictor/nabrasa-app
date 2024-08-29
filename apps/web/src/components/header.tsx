import { House, UtensilsCrossed } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../app/assets/Nabrasa.svg'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="flex items-center pl-2 pt-1">
      <Link href="/">
        <Image className="size-14 dark:invert" src={Logo} alt="Logo Image" />
      </Link>
      <div className="flex w-screen justify-between">
        <div>
          <a
            className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground text-muted-foreground data-[current=true]:text-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            href=""
          >
            <House /> <p className="p-2">Home</p>
          </a>

          <a
            className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground text-muted-foreground data-[current=true]:text-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            href=""
          >
            <UtensilsCrossed /> <p className="p-2">Pedidos</p>
          </a>
        </div>
        <Button>ola</Button>
      </div>
    </header>
  )
}
