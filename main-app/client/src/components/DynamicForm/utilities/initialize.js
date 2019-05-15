import {
    _validateAllAnswers,
    _getDefaultFormData,
} from "./formMethods";

const _initializeState = (props) => {
    const {
        questions,
        editable,
        editableMode,
        initialData
    } = props;

    let state = {
        questions,
        form_data: _getDefaultFormData(questions),
        editable,
        editableMode
    }

    return initialData ? _initializeExistingData(state, initialData) : state;
}

const _initializeValidation = (state, props) => {
    const { questions, onValidate } = props;
    const { form_data } = state;
    let new_validation = _validateAllAnswers(form_data, questions, onValidate)
    return { ...state, ...new_validation }
}

const _initializeExistingData = (state, initialData) => {
    const { form_data } = state;
    let new_form_data = Object.assign(form_data, initialData);
    return { ...state, ...new_form_data }
}

export const _initialize = (props) => {
    let state = _initializeState(props)
    return _initializeValidation(state, props)
}