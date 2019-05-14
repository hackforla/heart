# Props
 * @prop {array} questions array of Question data objects for rendering
 * @prop {string} purpose Dynamic Form collection name (for form data persistence)
 * @prop {array} questions array of Dynamic Question objects
 *
 * -- OPTIONAL --
 * @prop {object} initialData CAUTION: very delicate - must match expected shape EXACTLY. Provide initial form_data.
 * @prop {object} hiddenData values for 'hidden' input types -> { field_name: value }
 * @prop {bool} persistence controls storing form data in LS onFormChange
 * @prop {func} onSubmit wrapper callback for handling submit behavior
 * @prop {func} onDelete wrapper callback for handling deletion behavior
 * @prop {func} onValidate callback for whole form validation
 * @prop {func} onInputChange observation-only handler with args (field_name, value, form_data)
 * @prop {func} customComponents custom input_type components (merged with defaults, precedence to custom components)
 * @prop {bool} editable controls whether form is editable or non-editable
 