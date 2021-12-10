import { createContext, useContext, useState, useMemo } from 'react'

const ClientContext = createContext()

const initialClientState = {
  lastName: '',
  firstName: '',
  companyName: '',
  address: '',
  zip: '',
  city: '',
  state: '',
  phone: '',
  email: '',
  mobile: '',
  vat: '',
  ira: '',
  profession: '',
}

export function useClient() {
  return useContext(ClientContext)
}

export default function ClientProvider({ children }) {
  const [client, setClient] = useState(initialClientState)
  const clientProvider = useMemo(() => ({ client, setClient }), [client])

  return (
    <ClientContext.Provider value={clientProvider}>
      {children}
    </ClientContext.Provider>
  )
}
