import React, { Component } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import Pagination from './Pagination';
import { participantData } from './dataset';
import './participantsList.scss';
import getParticipants from '../../api/getParticipants.api';

class Participants extends Component {
  state = {
    qtyPerPage: 20,
    curPage: 2,
    paginationStartPoint: 1,
    loading: false,
    records: participantData,
    participants: [],
  };

  componentDidMount() {
    // currently using fake data to populate list
    // getParcicipants hits the backend with one record
    let results = getParticipants();
    results.then(res => {
      this.setState(prevState => ({
        participants: prevState.participants.concat(res.data),
      }));
    });
  }

  setCurrentPage = index => {
    this.setState(prevState => ({
      curPage: index,
    }));
  };

  handlePrevNextSelection = value => {
    if (typeof value === 'number') {
      this.setState(prevState => {
        let endindgCurPage = prevState.curPage + value;
        let maxPage = Math.ceil(
          prevState.records.length / prevState.qtyPerPage,
        );
        if (endindgCurPage > 0 && endindgCurPage <= maxPage) {
          return { curPage: prevState.curPage + value };
        }
      });
    }
  };

  renderRecords = () => {
    let { records, curPage, qtyPerPage } = this.state;
    let ends = curPage * qtyPerPage;
    let starts = curPage * qtyPerPage - qtyPerPage;
    let recordsToshow = records.slice(starts, ends);
    let results = recordsToshow.map((record, index) => (
      <TableRow key={index} record={record} />
    ));
    return results;
  };

  render() {
    let { curPage, qtyPerPage, records } = this.state;
    let startingRecord = 1 + curPage * qtyPerPage - qtyPerPage;
    let endingRecord =
      records.length < curPage * qtyPerPage
        ? records.length
        : curPage * qtyPerPage;

    return (
      <div className="participants-table">
        <table>
          <caption>
            Cases {startingRecord} - {endingRecord} of {records.length}
          </caption>
          <TableHead
            headings={[
              'Date',
              'Referral Source',
              'Case Status',
              'Last Update',
              'name',
              '',
            ]}
          />

          <tbody>{this.renderRecords()}</tbody>
        </table>
        <Pagination
          totalRecords={records.length}
          recordsPerPage={qtyPerPage}
          activeIndex={curPage}
          visibleTabQty={4}
          handlePrevNextSelection={this.handlePrevNextSelection}
          setCurrentPage={this.setCurrentPage}
        />
      </div>
    );
  }
}

export default Participants;
