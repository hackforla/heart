import React, { useState } from 'react'

const FormEditingContext = React.createContext([{}, () => {}])

const FormEditingProvider = props => {
  const [state, setState] = useState({
    isEditing: false,
    formBeingEdited: 'none',
  })
  return (
    <FormEditingContext.Provider value={[state, setState]}>
      {props.children}
    </FormEditingContext.Provider>
  )
}

export { FormEditingContext, FormEditingProvider }
