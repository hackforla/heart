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

    let fileReader;

    const handleFileRead = (e) => {
      const content = fileReader.result;
      console.log(content);
      // … do something with the 'content' …
    };

    const handleFileChosen = (file) => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };

  }
  render() {
    let { file, loading, error } = this.state;
    return (
      <div className='file--container'>
        { loading && <div id='loader'><i className='fas fa-spinner'></i></div> }
        { file && file }
        <input type='file'
               id='file'
               className='input-file'
               accept='.csv'
               onChange={e => handleFileChosen(e.target.files[0])}
             />
        <input type="submit" onClick={e => console.log('process button')}/>
      </div>
    )
  }
}

export default ImportFromFile;