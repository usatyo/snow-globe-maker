import dynamic from 'next/dynamic'

export default dynamic(() => import('./canvas/PathTracingCanvas'), { ssr: false })
