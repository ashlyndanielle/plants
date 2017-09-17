import React from 'react';
import styled from 'styled-components';

import StyledTable from './StyledTable';

const Tables = () => {
  return (
    <div>
      <TableContainer>
        <caption>this is a table</caption>
        <thead>
          <tr>
            <CellHeader scope='col'>WORDS</CellHeader>
            <CellHeader scope='col'>NUMBERS</CellHeader>
            <CellHeader scope='col'>DATE</CellHeader>
            <CellHeader scope='col'>PRICE</CellHeader>
          </tr>
        </thead>
        <tbody>
          <Row>
            <DataCell>stuff and things</DataCell>
            <DataCell>20</DataCell>
            <DataCell>September 10, 2017</DataCell>
            <DataCell>180$</DataCell>
          </Row>
          <Row>
            <DataCell>things and stuff</DataCell>
            <DataCell></DataCell>
            <DataCell>October 28, 2017</DataCell>
            <DataCell>290$</DataCell>
          </Row>
          <Row>
            <DataCell>places and peoples</DataCell>
            <DataCell>7</DataCell>
            <DataCell>May 15, 2017</DataCell>
            <DataCell>30$</DataCell>
          </Row>
        </tbody>
        <tfoot>
          <tr>
            <LeftAlign colSpan={3}>Total</LeftAlign>
            <DataCell>500$</DataCell>
          </tr>
        </tfoot>
      </TableContainer>
      <StyledTable />
    </div>
  );
};

export default Tables;

const TableContainer = styled.table`
  border-collapse: separate;
  border-spacing: 5px;
  border: 1px solid #02043E;
`
const Row = styled.tr`
  :nth-child(odd){
    background: gray;
  }
`
const DataCell = styled.td`
  border: 1px solid #02043E;
  padding: 3px 15px;
`
const CellHeader = styled.th`
  border: 1px solid #02043E;
  padding: 3px 15px;
`
const LeftAlign = styled.td`
  text-align: left;
  border: 1px solid #02043E;
  padding: 3px 15px;
`