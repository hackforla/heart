import { useContext } from 'react'
import { FormEditingContext } from '../contexts/FormEditingContext'

/*
This hook is meant to be used when there are several forms on a page and there
is a need to block other forms from being edited when one form is currently
being edited.
*/
const useIsFormEditing = () => {
  const [state, setState] = useContext(FormEditingContext)

  const toggleEdit = form => {
    let formInEdit = form ? form : 'none'
    setState(state => ({
      ...state,
      isEditing: !state.isEditing,
      formBeingEdited: formInEdit,
    }))
  }

  return {
    toggleEdit,
    isEditing: state.isEditing,
    formBeingEdited: state.formBeingEdited,
  }
}

export default useIsFormEditing
