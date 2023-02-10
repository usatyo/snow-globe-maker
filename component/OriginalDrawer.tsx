import { FC, ReactNode } from 'react'
import Drawer from './Drawer'

type Props = {
  isOpen: boolean
}

export const OriginalDrawer: FC<Props> = ({ isOpen }) => {
  const titles: string[] = [
    "setting"
  ]
  const childrens: ReactNode[] = [
    <SettingContent />
  ]
  return (
    <Drawer isOpen={isOpen} titles={titles} childrens={childrens} />
    )
  }

  const SettingContent = () => {
    return (
      <button>make</button>
    )
  }
  
  export default OriginalDrawer
