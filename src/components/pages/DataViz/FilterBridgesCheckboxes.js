import React from 'react';
import { Checkbox } from 'antd';

const FilterBridgesCheckboxes = props => {
  return (
    <div className="check-box-section">
      <div
        className="restricted"
        style={{
          backgroundColor: 'black',
          color: 'white',
          textShadow: '0 0 5px black',
          padding: '.2rem',
          paddingRight: '.3rem',
          borderRadius: '5px',
          margin: '.2rem',
        }}
      >
        <Checkbox
          checked={props.allChecked}
          onChange={() => props.setAllChecked(!props.allChecked)}
          style={{ margin: '0 5px' }}
        />
        All
      </div>
      <div
        className="restricted"
        style={{
          backgroundColor: 'red',
          color: 'white',
          textShadow: '0 0 5px black',
          padding: '.2rem',
          paddingRight: '.3rem',
          borderRadius: '5px',
          margin: '.2rem',
        }}
      >
        <Checkbox
          checked={props.rejectedChecked}
          onChange={() => props.setRejectedChecked(!props.rejectedChecked)}
          style={{ margin: '0 5px' }}
        />
        Rejected
      </div>
      <div
        className="restricted"
        style={{
          backgroundColor: 'orange',
          color: 'white',
          textShadow: '0 0 5px black',
          padding: '.2rem',
          paddingRight: '.3rem',
          borderRadius: '5px',
          margin: '.2rem',
        }}
      >
        <Checkbox
          checked={props.identifiedChecked}
          onChange={() => props.setIdentifiedChecked(!props.identifiedChecked)}
          style={{ margin: '0 5px' }}
        />{' '}
        Identified
      </div>
      <div
        className="restricted"
        style={{
          backgroundColor: 'green',
          color: 'white',
          textShadow: '0 0 5px black',
          padding: '.2rem',
          paddingRight: '.3rem',
          borderRadius: '5px',
          margin: '.2rem',
        }}
      >
        <Checkbox
          checked={props.completedChecked}
          onChange={() => props.setCompletedChecked(!props.completedChecked)}
          style={{ margin: '0 5px' }}
        />
        Completed
      </div>
      <div
        className="restricted"
        style={{
          backgroundColor: 'purple',
          color: 'white',
          textShadow: '0 0 5px black',
          padding: '.2rem',
          paddingRight: '.3rem',
          borderRadius: '5px',
          margin: '.2rem',
        }}
      >
        <Checkbox
          checked={props.confirmedChecked}
          onChange={() => props.setConfirmedChecked(!props.confirmedChecked)}
          style={{ margin: '0 5px' }}
        />{' '}
        Confirmed
      </div>
      <div
        className="restricted"
        style={{
          backgroundColor: 'blue',
          color: 'white',
          textShadow: '0 0 5px black',
          padding: '.2rem',
          paddingRight: '.3rem',
          borderRadius: '5px',
          margin: '.2rem',
        }}
      >
        {' '}
        <Checkbox
          checked={props.prospectingChecked}
          onChange={() =>
            props.setProspectingChecked(!props.prospectingChecked)
          }
          style={{ margin: '0 5px' }}
        />{' '}
        Prospecting
      </div>
      <div
        className="restricted"
        style={{
          backgroundColor: 'darkgray',
          color: 'white',
          textShadow: '0 0 5px black',
          padding: '.2rem',
          paddingRight: '.3rem',
          borderRadius: '5px',
          margin: '.2rem',
        }}
      >
        <Checkbox
          checked={props.constructionChecked}
          onChange={() =>
            props.setConstructionChecked(!props.constructionChecked)
          }
          style={{ margin: '0 5px' }}
        />{' '}
        Under Construction
      </div>
    </div>
  );
};

export default FilterBridgesCheckboxes;
