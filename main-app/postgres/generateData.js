let fs = require('fs');
let faker = require('faker')
let moment = require('moment')

let ethnicity = ['caucasian', 'chinese', 'mexican', 'indian', 'indonesian', 'african']
let race = ['white', 'yellow', 'brown', 'brown', 'yellow', 'black']
let gender = ['male', 'female']
let bool = ['true', 'false']

let generateData = () => {
  for(let i = 1; i < 31; i += 1){
    let raceIndex = Math.floor(Math.random()* (race.length-1))
    let date = faker.date.past(100)
    let formatDate = moment(date).format('MM-DD-YYYY')
    let age = moment(new Date()).year() - moment(date).year();
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let formatLastName = ''
    for (let k = 0; k < lastName.length; k += 1){
      if (lastName[k] !== "'"){
        formatLastName += lastName[k]
      }
    }
    let violationsNumber = 1235 + i
    let citationNumber = 322 + i
    let phoneNumber = ''
    let unformatPhoneNum = faker.phone.phoneNumberFormat()
    for (let p = 0; p < unformatPhoneNum.length; p += 1){
      if (unformatPhoneNum[p] !== '-'){
        phoneNumber += unformatPhoneNum[p];
      }
    }

    fs.appendFile('participantSeed.sql',
    `
    INSERT INTO participants (
      first_name,
      middle_name,
      last_name,
      aka,
      status,
      dob,
      phone,
      email,
      address,
      age,
      ethnicity,
      race,
      gender,
      income_source,
      income_range,
      family_status,
      housing_status,
      chronic_homeless,
      veteran_status,
      urgent,
      services)
    VALUES (
      '${firstName}',
      'W',
      '${formatLastName}',
      ARRAY['${firstName.slice(0, 5)}'],
      'status',
      DATE('${formatDate}'),
      '${phoneNumber}',
      '${faker.internet.email()}',
      '${faker.address.streetAddress()}',
      '${age}',
      '${ethnicity[raceIndex]}',
      '${race[raceIndex]}',
      '${gender[Math.round(Math.random())]}',
      'work',
      '1-1000000',
      'single',
      'rent',
      ${bool[Math.round(Math.random())]},
      'not veteran',
      ${bool[Math.round(Math.random())]},
      ARRAY['service1', 'service2']);
    `,
    (err) => {if (err) {console.log(err)}}
    )

    fs.appendFile('citationSeed.sql',
    `
    INSERT INTO citations (
      citation_number,
      court_code,
      violations,
      citation_status,
      participant_id
    ) VALUES (
      '1123-${citationNumber}',
      'CC ${violationsNumber}',
      ARRAY['VN ${violationsNumber}'],
      'warrant',
      ${i+1}
    );
    `,
    (err) => {if (err) {console.log(err)}}
    )
  }

}


generateData();