import React, { Component } from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'
import Pagination from './Pagination'
import { participantData } from './dataset'
import './participantsList.scss'
import getParticipants from '../../api/getParticipants.api'

class Participants extends Component {
  state = {
    qtyPerPage: 20,
    curPage: 1,
    paginationStartPoint: 1,
    loading: false,
    records: [],
    header_fields: {
      urgent: {
        as: 'Rush',
        fields: ['urgent'],
        format: 'flame',
      },
      created_at: {
        as: 'Date',
        fields: ['created_at'],
        format: 'date',
      },
      referral_source: {
        as: 'Referral Source',
        fields: ['referral_source'],
        format: 'string',
      },
      name: {
        as: 'Name',
        fields: ['first_name', 'last_name'],
        format: 'string',
      },
      status: {
        as: 'Case Status',
        fields: ['status'],
        format: 'string',
      },
      updated_at: {
        as: 'Last Update',
        fields: ['updated_at'],
        format: 'date',
      },
      view: {
        special: 'link',
      },
    },
  }

  componentDidMount() {
    getParticipants().then(res => {
      this.setState(prevState => ({
        records: res.data,
      }))
    })
  }

  setCurrentPage = index => {
    this.setState(prevState => ({
      curPage: index,
    }))
  }

  handlePrevNextSelection = value => {
    if (typeof value === 'number') {
      this.setState(prevState => {
        let endindgCurPage = prevState.curPage + value
        let maxPage = Math.ceil(prevState.records.length / prevState.qtyPerPage)
        if (endindgCurPage > 0 && endindgCurPage <= maxPage) {
          return { curPage: prevState.curPage + value }
        }
      })
    }
  }

  renderRecords = () => {
    let { records, curPage, qtyPerPage, header_fields } = this.state
    let ends = curPage * qtyPerPage
    let starts = curPage * qtyPerPage - qtyPerPage
    let recordsToshow = records.slice(starts, ends)
    let results = recordsToshow.map((record, index) => (
      <TableRow key={index} record={record} header_fields={header_fields} />
    ))
    return results
  }

  render() {
    let { curPage, qtyPerPage, records, header_fields } = this.state
    let startingRecord = 1 + curPage * qtyPerPage - qtyPerPage
    let endingRecord =
      records.length < curPage * qtyPerPage
        ? records.length
        : curPage * qtyPerPage

    return (
      <div className="participants-table">
        <table>
          <caption>
            Cases {startingRecord} - {endingRecord} of {records.length}
          </caption>
          <TableHead headings={header_fields} />

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
        {this.state.participants.JSON.stringify()}
      </div>
    )
  }
}

export default Participants
