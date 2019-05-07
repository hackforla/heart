import React from 'react';
import PropTypes from 'prop-types';
import Arrow from './Arrow';
import PaginationBtn from './PaginationBtn';
import './pagination.scss';

const Pagination = ({
  totalRecords,
  recordsPerPage,
  visibleTabQty,
  activeIndex,
  setCurrentPage,
  handlePrevNextSelection,
}) => {
  let maxTab = Math.ceil(totalRecords / recordsPerPage);
  let tabList = Array.from(new Array(maxTab)).reduce(function(
    prev,
    cur,
    index,
  ) {
    prev.push(index + 1);
    return prev;
  },
  []);

  let getTabList = () => {
    let tabRatio = 1 / visibleTabQty;
    if (activeIndex === maxTab || activeIndex >= maxTab - (visibleTabQty - 1)) {
      return tabList.slice(maxTab - visibleTabQty, maxTab);
    } else if (activeIndex <= visibleTabQty) {
      return tabList.slice(0, visibleTabQty);
    } else {
      let startIndex =
        (Math.floor(activeIndex / visibleTabQty) + tabRatio) * visibleTabQty -
        1;
      console.log('start index', startIndex);
      return tabList.slice(startIndex, startIndex + visibleTabQty);
    }
  };

  let tabsToShow = getTabList();
  return (
    <div className="pagination-container">
      <Arrow direction="first" handleClick={() => setCurrentPage(1)} />
      <Arrow direction="left" handleClick={() => handlePrevNextSelection(-1)} />
      {tabsToShow.map((item, index) => (
        <PaginationBtn
          key={index}
          classes={activeIndex === item ? 'pagination-active-tab' : ''}
          label={item}
          handleClick={setCurrentPage}
        />
      ))}
      <Arrow direction="right" handleClick={() => handlePrevNextSelection(1)} />
      <Arrow direction="last" handleClick={() => setCurrentPage(maxTab)} />
    </div>
  );
};

Pagination.propTypes = {
  totalRecords: PropTypes.number,
  recordsPerPage: PropTypes.number,
  visibleTabQty: PropTypes.number,
  activeIndex: PropTypes.number,
  setCurrentPage: PropTypes.func,
  handlePrevNextSelection: PropTypes.func,
};

export default Pagination;
