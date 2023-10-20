import { createContext, ReactNode } from 'react'
import { Store } from '../Core/store'

interface ContextProps {
	state: Store
	dispatch: any
}
export const CONTEXT = createContext<ContextProps>({ state: {}, dispatch: () => {} })

type ProviderType = {
	value: any | any[]
	children: ReactNode
}

const Provider = ({ value, children }: ProviderType) => <CONTEXT.Provider value={value}>{children}</CONTEXT.Provider>

export default Provider
