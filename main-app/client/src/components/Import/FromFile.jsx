// const ImportFromFile = () => {
//   let fileReader;
//
//   const handleFileRead = (e) => {
//     const content = fileReader.result;
//     console.log(content);
//     // … do something with the 'content' …
//   };
//
//   const handleFileChosen = (file) => {
//     fileReader = new FileReader();
//     fileReader.onloadend = handleFileRead;
//     fileReader.readAsText(file);
//   };
//
//   return <div className='upload-expense'>
//     <input type='file'
//            id='file'
//            className='input-file'
//            accept='.csv'
//            onChange={e => handleFileChosen(e.target.files[0])}
//     />
//   </div>;
// };
// export default ImportFromFile;

import React from 'react';
import { API_ENDPOINT } from './../../get_uri';
const axios = require('axios');

class ImportFromFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      error: null,
      loading: true,
    }
  }
  componentDidMount() {

  }
  render() {
    let { file, loading, error } = this.state;
    return (
      <div className='file--container'>
        { loading && <div id='loader'><i className='fas fa-spinner'></i></div> }
        { file && file }
        blah!
      </div>
    )
  }
}

export default ImportFromFile;