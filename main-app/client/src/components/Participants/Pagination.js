import React from 'react'
import PropTypes from 'prop-types'
import {
  TableFooter,
  TableRow,
  TablePagination,
  TableCell,
} from '@material-ui/core'
import TablePaginationActions from './TablePaginationActions'

const Pagination = ({
  recordCount,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  colCount,
}) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          colSpan={colCount}
          count={recordCount}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
          component={TableCell}
        />
      </TableRow>
    </TableFooter>
  )
}

Pagination.propTypes = {
  recordCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  colCount: PropTypes.number.isRequired,
}

export default Pagination
