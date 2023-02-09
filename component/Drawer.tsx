import { FC, ReactNode } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

type Props = {
  isOpen: boolean
  titles: string[]
  childrens: ReactNode[]
}

export const Drawer: FC<Props> = ({ isOpen, titles, childrens }) => {
  if (!isOpen) return null
  return (
    <div className="relative z-20 h-full bg-base-light/10 flex flex-col py-10 px-10 space-y-8 bg-blur-md md:w-[30%] text-center items-center backdrop-blur-sm overflow-y-auto">
      <Tabs.Root defaultValue={'0'}>
        <Tabs.List>
          {titles.map((title, idx) => (
            <Tabs.Trigger value={idx.toString()} key={idx}>
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
