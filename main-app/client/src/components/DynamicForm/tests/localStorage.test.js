import {
    _mergeWithPersistedData,
    _saveStateToLocalStorage
} from "../utilities/localStorage";

describe('localStorage', () => {
    it('saves state to storage', () => {
        const form_data = { first_name: "Joe" }
        const form_data_validation = { first_name: true }
        const purpose = "form state"

        _saveStateToLocalStorage(form_data, form_data_validation, purpose)
        expect(localStorage.getItem(purpose)).toEqual(JSON.stringify({
            form_data,
            fields_is_valid: form_data_validation
        }))
    })
    
    it('merges existing state and localStorage state', () => {
        const base_state = { form_data: { first_name: "Joe"  }, test: 1 }
        const persistence = JSON.stringify({ form_data: { last_name: "Biden" } })
        const initialData = { address: "123 Cherry"  }

        const new_state = _mergeWithPersistedData(base_state, persistence, initialData)
        expect(new_state).toEqual({
            test: 1,
            form_data: {
                first_name: "Joe",
                last_name: "Biden",
                address: "123 Cherry"
            }
        })
    })
})