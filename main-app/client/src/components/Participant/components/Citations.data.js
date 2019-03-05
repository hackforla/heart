const violationStyles = {
  control: styles => ({
    ...styles,
    border: "none",
    borderBottom: "1px solid #7f7f7f",
    borderRadius: "0px"
  }),
  option: (provided, state) => ({
    ...provided
  })
};

const courtStyles = {
  control: styles => ({
    ...styles,
    border: "none",
    backgroundColor: "transparent",
    borderBottom: "3px dotted #adadad",
    borderRadius: "0px",
    padding: "6px",
    paddingLeft: "0px"
  }),
  option: (provided, state) => ({
    ...provided
  })
};

const CitationsQA = [
  {
    row: [
      {
        text: "Citation No.",
        input_type: "text",
        field_name: "citation_no",
        placeholder: "C11111",
        optional: true
      },
      {
        text: "Court Code",
        input_type: "dropdown",
        field_name: "court_code",
        placeholder: "Court",
        customStyles: courtStyles,
        options: [{ text: "SM" }],
        optional: true
      },
      {
        text: "Status",
        input_type: "dropdown",
        field_name: "status",
        placeholder: "Status",
        customStyles: courtStyles,
        options: [{ text: "Not Sent" }, { text: "Sent" }],
        optional: true
      }
    ]
  },
  {
    text: "Violations",
    input_type: "dropdown-multi",
    field_name: "violations",
    placeholder: "Ex.PC 123.4",
    // isMulti: true,
    customStyles: violationStyles,
    options: [
      { text: "640(b)(1)" },
      { text: "800.1" },
      { text: "800.2" },
      { text: "800.3" }
    ],
    optional: true
  }
];

export default CitationsQA;
