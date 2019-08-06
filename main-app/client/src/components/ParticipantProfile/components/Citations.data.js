const violationStyles = {
  control: styles => ({
    ...styles,
    border: '1px solid #e6e6e6',
    boxShadow: 'inset 0 0 3px #e6e6e6',
    borderRadius: '2px',
    backgroundColor: 'white',
  }),
  option: (provided, state) => ({
    ...provided,
  }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      display: 'none',
    }
  },
}

const courtStyles = {
  control: (styles, state) => ({
    ...styles,
    padding: '2px',
    paddingLeft: '0px',
    marginTop: '5px',
    border: '1px solid #e6e6e6',
    boxShadow: 'inset 0 0 3px #e6e6e6',
    borderRadius: '2px',
    backgroundColor: 'white',
  }),
  option: (provided, state) => ({
    ...provided,
  }),
}

const CitationsQA = [
  {
    row: [
      {
        text: 'Citation No.',
        input_type: 'text',
        field_name: 'citation_number',
        placeholder: 'C11111',
        optional: true,
      },
      {
        text: 'Court Code',
        input_type: 'dropdown',
        field_name: 'court_code',
        placeholder: 'Court',
        customStyles: courtStyles,
        options: [
          { text: 'ALH' },
          { text: 'ATP' },
          { text: 'BF' },
          { text: 'BH' },
          { text: 'BUR' },
          { text: 'CIT' },
          { text: 'COM' },
          { text: 'CC' },
          { text: 'DOW' },
          { text: 'ELA' },
          { text: 'ELM' },
          { text: 'GLN' },
          { text: 'HP' },
          { text: 'ING' },
          { text: 'LB' },
          { text: 'LAA' },
          { text: 'LAX' },
          { text: 'CHA' },
          { text: 'LAM' },
          { text: 'LAS' },
          { text: 'LAP' },
          { text: 'LAV' },
          { text: 'LC' },
          { text: 'LYN' },
          { text: 'MAL' },
          { text: 'NEW' },
          { text: 'NK' },
          { text: 'PAS' },
          { text: 'POM' },
          { text: 'SBA' },
          { text: 'SNI' },
          { text: 'SM' },
          { text: 'SG' },
          { text: 'TOR' },
          { text: 'WC' },
          { text: 'WH' },
        ],
        optional: true,
      },
      {
        text: 'Status',
        input_type: 'dropdown',
        field_name: 'citation_status',
        placeholder: 'Status',
        customStyles: courtStyles,
        options: [{ text: 'Not Sent' }, { text: 'Sent' }],
        optional: true,
      },
    ],
  },
  {
    text: 'Violations',
    input_type: 'dropdown-multi',
    field_name: 'violations',
    placeholder: 'Ex.PC 123.4',
    isMulti: true,
    customStyles: violationStyles,
    options: [
      { text: 'VC 4000', description: 'Registration Required' },
      {
        text: 'VC 4000.1',
        description: 'Pollution Control Device: Certificate or Statement',
      },
      { text: 'VC 4152.5', description: 'Foreign Vehicle Registration' },
      { text: 'VC 4159', description: 'Notice of Change of Address' },
      { text: 'VC 4454', description: 'Registration Card Kept With Vehicle' },
      {
        text: 'VC 4462',
        description:
          'Presentation of Evidence of Registration; Vehicle Identification Documents; Unlawful Use or Possession',
      },
      {
        text: 'VC 5037',
        description: 'Motorized Bicycle License Plate Required',
      },
      { text: 'VC 5200', description: 'Display of License Plates' },
      { text: 'VC 5201', description: 'Positioning of Plates' },
      { text: 'VC 5202', description: 'Period of Display' },
      { text: 'VC 5204', description: 'Registration Tabs' },
      {
        text: 'VC 5900',
        description: 'Notice of Sale or Transfer and Mileage',
      },
      { text: 'VC 12951', description: "Driver's License Not in Possession" },
      {
        text: 'VC 13007',
        description: 'Failure to Notify DMV of Change of Address',
      },
      {
        text: 'VC 16025',
        description: 'Mandatory Exchange of Information in Accident',
      },
      { text: 'VC 16028', description: 'Evidence of Financial Responsibility' },
      {
        text: 'VC 12500',
        description:
          '**Unlawful to Drive Unless Licensed – LEVEL 2 - 8 HOURS DUE – POST CONVICTION ONLY',
      },
      {
        text: 'VC 14601.1A',
        description:
          '**Driving When Privilege Suspended or Revoked – LEVEL 2 - 8 HOURS DUE – POST CONVICTION ONLY',
      },
      {
        text: 'VC 21106',
        description: 'Establishment of Crosswalks; Crossing Violations',
      },
      { text: 'VC 21113', description: 'Driving or Parking on Public Grounds' },
      {
        text: 'VC 21201',
        description:
          'Bicycle - Equipment Requirements;  Brakes; Handlebar Restrictions; Lamp or Reflectors During Darkness',
      },
      {
        text: 'VC 21202',
        description: 'Bicycle - must ride near right curb lane',
      },
      {
        text: 'VC 21203',
        description:
          'Bicycle - rider must not attach bicycle to any other moving vehicle',
      },
      {
        text: 'VC 21204',
        description: 'Bicycle - rider/passenger must ride on permanent seat',
      },
      {
        text: 'VC 21208',
        description:
          'Bicycle - must not travel slower than normal flow of traffic if outside of the bicycle lane',
      },
      {
        text: 'VC 21210',
        description: 'Bicycle - parking must not obstruct pedestrian traffic',
      },
      {
        text: 'VC 21451',
        description: 'Failure to Go on Green Light; Crossing Violation',
      },
      {
        text: 'VC 21453',
        description:
          'Failure to Stop at Red Light or Arrow; Crossing Violation',
      },
      {
        text: 'VC 21456',
        description: "Crossing Violation: Walk, Wait, or Don't Walk",
      },
      {
        text: 'VC 21457',
        description:
          'Flashing Signals; Failure to Stop at Flashing Red; Caution at Flashing Yellow',
      },
      { text: 'VC 21460', description: 'Double Lines' },
      {
        text: 'VC 21461',
        description: 'Obedience by Driver to Official Traffic Control Devices',
      },
      {
        text: 'VC 21461.5',
        description:
          'Obedience by Pedestrian to Official Traffic Control Devices',
      },
      {
        text: 'VC 21650',
        description: 'Failure to Drive on Right Side of Roadway',
      },
      {
        text: 'VC 21650.1',
        description: 'Failure to Ride Bicycle on Right Side of Roadway',
      },
      {
        text: 'VC 21651',
        description: 'Driving in Divided Section of Highway',
      },
      {
        text: 'VC 21654',
        description: 'Slow-Moving Vehicles Must Drive in Right Lane',
      },
      {
        text: 'VC 21655.5',
        description:
          'Exclusive or Preferential-Use Lanes for High Occupancy Vehicles (i.e., Carpool Lane Violation)',
      },
      {
        text: 'VC 21655.8',
        description:
          'Entering or Exiting Exclusive or Preferential-Use Lanes; Crossing Double Solid Lines',
      },
      {
        text: 'VC 21657',
        description: 'Designated Traffic Direction; Driving in Wrong Direction',
      },
      { text: 'VC 21658', description: 'Laned Roadways; Straddling Lanes ' },
      { text: 'VC 21703', description: 'Following Too Closely' },
      { text: 'VC 21754', description: 'Restrictions on Passing on the Right' },
      { text: 'VC 21755', description: 'Passing on the Right Shoulder' },
      {
        text: 'VC 21801',
        description: 'Unsafe or Illegal Left Turn or U-Turn ',
      },
      {
        text: 'VC 21804',
        description:
          'Entry Onto Highway; Failure to Yield to Right-of-Way Traffic',
      },
      {
        text: 'VC 21950',
        description:
          'Right-of-Way at Crosswalks; Failure to Yield to Pedestrian; Failure of Pedestrian to Exercise Due Care',
      },
      {
        text: 'VC 21951',
        description:
          'Vehicles Stopped for Pedestrians; Approaching Vehicle May Not Pass or Overtake Stopped Vehicle',
      },
      {
        text: 'VC 21952',
        description:
          'Right-of-Way on Sidewalk; Failure to Yield Right-of-Way to Pedestrian',
      },
      {
        text: 'VC 21953',
        description:
          'Tunnel or Overhead Crossing; Failure of Pedestrian to Yield Right-of Way to Vehicles',
      },
      {
        text: 'VC 21954',
        description:
          'Pedestrian Outside Crosswalks; Pedestrian Crossing Violation',
      },
      {
        text: 'VC 21955',
        description:
          'Crossing Between Controlled Intersections; Pedestrian Crossing Violation',
      },
      {
        text: 'VC 21956',
        description: 'Pedestrian on Roadway; Pedestrian Crossing Violation',
      },
      { text: 'VC 21957', description: 'Hitchhiking' },
      {
        text: 'VC 21966',
        description: 'Pedestrian on bicycle path when sidewalk available',
      },
      {
        text: 'VC 22100',
        description: 'Turning Upon Highway; Turning Violation',
      },
      { text: 'VC 22102', description: 'U-Turn in Business District' },
      { text: 'VC 22103', description: 'U-Turn in Residential Area' },
      {
        text: 'VC 22107',
        description:
          'Turning Movements and Required Signals; Failure to Exercise Safety and / or Signal',
      },
      {
        text: 'VC 22108',
        description: 'Duration of Signal; 100 Feet Before Turning',
      },
      { text: 'VC 22110', description: 'Method of Signaling; Signal Lamp' },
      {
        text: 'VC 22348',
        description: 'Excessive Speed and Designated Lane Use',
      },
      { text: 'VC 22349', description: 'Maximum Speed Limit; Speeding' },
      { text: 'VC 22350', description: 'Basic Speed Law; Speeding' },
      { text: 'VC 22400', description: 'Minimum Speed Law' },
      { text: 'VC 22406', description: 'Speeding' },
      {
        text: 'VC 22450',
        description: 'Stop Requirements; Failure to Stop Properly',
      },
      {
        text: 'VC 22451',
        description:
          'Failure to Stop at Railroad or Rail Transit Grade Crossings',
      },
      {
        text: 'VC 22500',
        description: 'Prohibited Stopping, Standing, or Parking',
      },
      {
        text: 'VC 22520.5',
        description: 'Vending on or Near Freeways',
      },
      {
        text: 'VC 23111',
        description: 'Throwing Substances on Highways or Adjoining Areas',
      },
      {
        text: 'VC 23112',
        description: 'Throwing, Depositing, or Dumping Matter on Highway',
      },
      {
        text: 'VC 23123',
        description: 'Use of Wireless Telephone While Driving',
      },
      {
        text: 'VC 24250',
        description:
          'Lighting During Darkness; Failure to Use Lights After Dark',
      },
      {
        text: 'VC 24252',
        description: 'Lighting Equipment Requirements',
      },
      {
        text: 'VC 24400',
        description: 'Headlamps on Motor Vehicles',
      },
      {
        text: 'VC 24600',
        description: 'Tail lamps',
      },
      {
        text: 'VC 24601',
        description: 'License Plate Lamp',
      },
      {
        text: 'VC 24603',
        description: 'Stop lamps',
      },
      {
        text: 'VC 26703',
        description: 'Replacement of Glazing Material',
      },
      {
        text: 'VC 26708',
        description: "Material Obstructing or Reducing Driver's View",
      },
      {
        text: 'VC 26709',
        description: "Mirrors; Rearview and Driver's Side Mirrors",
      },
      {
        text: 'VC 26710',
        description: 'Defective Windshields and Rear Windows',
      },
      {
        text: 'VC 27007',
        description: 'Sound Amplification Devices; Loud Music',
      },
      {
        text: 'VC 27153',
        description: 'Exhaust Products; Excessive Exhaust',
      },
      {
        text: 'VC 27315',
        description: 'Mandatory Seat Belt Law',
      },
      {
        text: 'VC 27315.1',
        description: 'Mandatory Seat Belt Law: Three-Wheeled Motor Vehicle',
      },
      {
        text: 'VC 27360',
        description:
          '++Child Passenger Restraint: Requirements (i.e., no child car seat)  ++ NOT DISMISSED BY DA',
      },
      {
        text: 'VC 27360.5',
        description:
          '++Child Passenger Restraint System; Safety Belts  ++ NOT DISMISSED BY DA',
      },
      {
        text: 'VC 27400',
        description:
          'Wearing of Headsets or Earplugs (i.e., must not cover both ears)',
      },
      {
        text: 'VC 27600',
        description: 'Fenders and Mudguards ',
      },
      {
        text: 'VC 40508',
        description:
          'Violation of Promise to Appear or Pay Fine - Only if resulting from non-appearance on a ticket',
      },
    ],
    optional: true,
  },
]

export default CitationsQA
