import React from 'react';
import './search-box.styles.css';

const SeachBox = ({setSeatchField, filterDataEvent}) => {
  return (
    <div>
      <input className="search" type="text" placeholder="Search monsters" onChange={e => {
        setSeatchField(e.target.value);
        filterDataEvent(e);
      }}/>
    </div>
  );
};

export default SeachBox;
