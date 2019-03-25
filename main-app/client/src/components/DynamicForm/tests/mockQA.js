const custom_validation_types = [
  {
    name: "myCustomInput",
    validationFn: function(value) {}
  }
];

export const question_set_1 = [
  {
    category_name: "",
    category_contents: [
      {
        row: [
          {
            text: "Clinic Attended",
            input_type: "text",
            field_name: "clinic_attended",
            placeholder: "location",
            optional: true
          }
        ]
      }
    ]
  },
  {
    category_name: "Personal Information",
    category_contents: [
      {
        row: [
          {
            text: "First Name",
            input_type: "text",
            field_name: "first_name",
            placeholder: "First Name"
          }
        ]
      },
      {
        text: "Also known as",
        input_type: "text",
        field_name: "known_as",
        placeholder: "Other names they go by",
        optional: true
      }
    ]
  },
  {
    category_name: "Contact Information",
    category_contents: [
      {
        text: "Email Address (optional)",
        input_type: "email",
        field_name: "email",
        placeholder: "email@emailaddress.com"
      }
    ]
  },
  {
    text: "Age",
    input_type: "dropdown",
    field_name: "age",
    placeholder: "Choose Age Range",
    options: [
      { text: "18-24" },
      { text: "25-54" },
      { text: "55-61" },
      { text: "62-Older" }
    ]
  },
  {
    text: "Ethnicity",
    input_type: "dropdown",
    field_name: "ethnicity",
    placeholder: "Choose Ethnicity",
    optional: true,
    options: [
      { text: "Hispanic/Latino" },
      { text: "Not Hispanic/Latino" },
      { text: "Unknown" }
    ]
  },
  {
    text: "Violations",
    input_type: "dropdown-multi",
    field_name: "violations",
    placeholder: "Ex.PC 123.4",
    isMulti: true,
    optional: true,
    options: [
      { text: "VC 4000", description: "Registration Required" },
      { text: "VC 4152.5", description: "Foreign Vehicle Registration" },
      { text: "VC 4159", description: "Notice of Change of Address" },
      { text: "VC 4454", description: "Registration Card Kept With Vehicle" }
    ]
  },
  {
    text: "Location",
    input_type: "dropdown-multi",
    field_name: "location",
    placeholder: "Los Angeles",
    isMulti: true,
    options: [
      { text: "Los Angeles" },
      { text: "San Francisco" },
      { text: "San Diego" }
    ]
  }
];
