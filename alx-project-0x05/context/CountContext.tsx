import { createContext, useContext,  useState, ReactNode } from "react"

// 1. Create a Shape for the Data (the interface)
// This ensures your context always contains:
// count
// increment
// decrement
interface CountContextProps {
  count: number
  increment: () => void;
  decrement: () => void;
}

// This is your global storage box.
// Think of CountContext as a special container that lives outside of any single component.
// It stores the data: count, increment(), decrement().
// By itself, it doesn’t “do” anything until you wrap your app in a provider.
// It’s called global because any component inside that provider can reach inside and get the data — no need to pass props from parent → child → grandchild.
// So when you wrap your app in <CountProvider> later, it activates the container for all children.
export const CountContext = createContext<CountContextProps | undefined>(undefined)


// What is happening here?
// CountProvider WRAPS your entire app
// It owns the count state
// Any component inside it can access the state
// Children = all your pages, header, footer, etc
// This is why Context API = global state.
export const CountProvider = ({ children }: { children: ReactNode}) => {

  const [count, setCount] = useState<number>(0)

  const increment = () => setCount((count ) =>count + 1)
  const decrement = () => setCount((count) => count > 0 ? count - 1 : 0)

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  )
}


// Think of this as a shortcut to grab the keys from the global box.

// useContext(CountContext) looks inside the box.

// The if (!context) check is just safety — if you try to use the counter outside the provider, it will throw an error.

// Finally, it returns the actual data & functions: count, increment, decrement.
export const useCount = () => {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error("useCount must be within a Count Provider")
  }

  return context
}




// TL;DR of the flow

// Context file: creates a global “box” to store state & functions.

// Provider: wraps your app and activates the global box.

// Custom hook: shortcut to get the box contents safely.

// _app.tsx: wraps the Layout & pages inside the provider so all pages/components can access global state.

// Header / CounterApp: import the hook → can read/update global count instantly.