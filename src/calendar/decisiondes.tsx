import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

export default function DecisionDes() {
  return (
    <TableContainer component={Paper} style={{maxHeight: 260}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>规则</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
            <TableCell>6</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>year</TableCell>
            <TableCell>y1</TableCell>
            <TableCell>y1</TableCell>
            <TableCell>y1</TableCell>
            <TableCell>y2</TableCell>
            <TableCell>y2</TableCell>
            <TableCell>y2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>month</TableCell>
            <TableCell>m1</TableCell>
            <TableCell>m2</TableCell>
            <TableCell>m3</TableCell>
            <TableCell>m1</TableCell>
            <TableCell>m2</TableCell>
            <TableCell>m3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>day</TableCell>
            <TableCell>d1,d2,d3,d4,d5</TableCell>
            <TableCell>d1,d2,d3,d4,d5</TableCell>
            <TableCell>d1,d2,d3,d4,d5</TableCell>
            <TableCell>d1,d2,d3,d4,d5</TableCell>
            <TableCell>d1,d2,d3,d4,d5</TableCell>
            <TableCell>d1,d2,d3,d4,d5</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
