export const _mergeWithPersistedData = (
    base_state,
    persistence,
    initial_form_data
  ) => {
    const persisted_data = JSON.parse(persistence);
    let state = Object.assign({}, base_state, persisted_data);
    if (persisted_data.form_data) {
      state.form_data = Object.assign({}, base_state.form_data, persisted_data.form_data);
    }
    if (initial_form_data) {
      state.form_data = { ...state.form_data, ...initial_form_data };
    }
  
    return state;
  };
  
  export const _saveStateToLocalStorage = (
      form_data,
      fields_is_valid,
      purpose
  ) => {
    const persisted_data = JSON.stringify({
        form_data,
        fields_is_valid
    });
    localStorage.setItem(purpose, persisted_data);
  }

  export const _getFromLocalStorage = (purpose) => {
    return localStorage.getItem(purpose);
  }