import { FC, ReactNode } from 'react'
import Drawer from './Drawer'

type Props = {
  isOpen: boolean
}

export const OriginalDrawer: FC<Props> = ({ isOpen }) => {
  const titles: string[] = ['position']
  const childrens: ReactNode[] = [<p>aaa</p>]
  return <Drawer isOpen={isOpen} titles={titles} childrens={childrens} />
}

export default OriginalDrawer
