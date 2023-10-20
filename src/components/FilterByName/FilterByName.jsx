import React from 'react';
import PropTypes from 'prop-types';
import { StyledDesc, StyledFilter, StyledInput } from './FilterByNamestyled';

const FilterByName = ({ onFilterChange, filterValue }) => {
  return (
    <StyledFilter>
      <StyledDesc className="filter-label" htmlFor="contact-filter">
        Find contact by name
        <StyledInput
          onChange={onFilterChange}
          name="filter"
          id="contact-filter"
          filter={filterValue}
        ></StyledInput>
      </StyledDesc>
    </StyledFilter>
  );
};

FilterByName.propTypes = {
  onFilterChange: PropTypes.func,
  filterValue: PropTypes.string,
};

export default FilterByName;
