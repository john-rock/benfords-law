import React, { useState } from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {

  const [resultsArray, setresultsArray] = useState([]);

  const store = {
    resultsArray: [resultsArray, setresultsArray]
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}