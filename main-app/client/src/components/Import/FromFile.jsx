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

  // handleFileRead = () => {
  //   console.log(`i have read`);
  // };

  handleFileChosen = (e) => {
      console.log(`i have chosen`);
      let fileReader = new FileReader();
      // console.log(fileReader);
      // fileReader.onloadend = handleFileRead;
      // fileReader.readAsText(e);
  };

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
             />
        <input type="submit" onClick={e => this.handleFileChosen(e)}/>
      </div>
    )
  }
}

export default ImportFromFile;