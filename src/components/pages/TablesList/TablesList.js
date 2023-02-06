import React from 'react';
import {useSelector} from 'react-redux';
import {getAllTables} from '../../../redux/tablesRedux.js';
import TableRender from '../../features/TableRender/TableRender.js';

const TablesList = () => {
  const tables = useSelector(state => getAllTables(state));
  return (
    <div>
      <h1>All Tables</h1>
      {tables.map(props => (
        <TableRender id={props.id} key={props.id} status={props.status} peopleAmount={props.peopleAmount} maxPeopleAmount={props.maxPeopleAmount} />
      ))}
    </div>
  );
};

export default TablesList;