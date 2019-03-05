import React from 'react';
import Papa from 'papaparse';
import { API_ENDPOINT } from './../../get_uri';
const axios = require('axios');


class ImportFromFile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      csvfile: null,
      error: null,
      loading: true,
    }
    this.updateData = this.updateData.bind(this);
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true
    });
  };

  updateData(result) {
    var data = result.data;
    console.log(data);
  }

  render() {
    console.log(this.state.csvfile);
    return (
      <div className="ImportFromFile">
        <h2>Import CSV File!</h2>
        <input
          className="csv-input"
          type="file"
          ref={input => {
            this.filesInput = input;
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
        />
        <p />
        <button onClick={this.importCSV}> Upload now!</button>
      </div>
    );
  }

  // render() {
  //   let { file, loading, error } = this.state;
  //   return (
  //     <div className='file--container'>
  //       { loading && <div id='loader'><i className='fas fa-spinner'></i></div> }
  //       { file && file }
  //       <input type='file'
  //              id='file'
  //              className='input-file'
  //              accept='.csv'
  //            />
  //       <input type="submit" onClick={e => this.handleFileChosen(e)}/>
  //     </div>
  //   )
  // }
}

export default ImportFromFile;