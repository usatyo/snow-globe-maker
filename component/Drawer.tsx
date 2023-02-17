import { FC, ReactNode } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

type Props = {
  isOpen: boolean
  titles: string[]
  childrens: ReactNode[]
  className?: string
}

export const Drawer: FC<Props> = ({ isOpen, titles, childrens, className }) => {
  if (!isOpen) return null
  return (
    <div
      className={`md:mt-20 relative  z-20 h-full bg-base-light/10 flex flex-col py-12 px-10 space-y-8 bg-blur-md md:w-[30%] text-center items-center backdrop-blur-sm overflow-y-auto ${className}`}
    >
      <Tabs.Root defaultValue={'0'}>
        <Tabs.List>
          {titles.map((title, idx) => (
            <Tabs.Trigger
              value={idx.toString()}
              key={idx}
              className={
                'mx-5 mb-10 text-accent-original font-italianno tracking-wide text-[2rem] md:text-[2.5rem] opacity-30 data-[state=active]:opacity-100 duration-300'
              }
            >
              {title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {childrens.map((children, idx) => (
          <Tabs.Content value={idx.toString()} key={idx}>
            {children}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}

export default Drawer
