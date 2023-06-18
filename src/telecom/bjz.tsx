import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

export default function CaseTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>编号</TableCell>
            <TableCell>minute</TableCell>
            <TableCell>count</TableCell>
            <TableCell>discount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>(0,60]</TableCell>
            <TableCell>[0,1]</TableCell>
            <TableCell>1.0%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>(60,120]</TableCell>
            <TableCell>[0,2]</TableCell>
            <TableCell>1.5%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>(120,180]</TableCell>
            <TableCell>[0,3]</TableCell>
            <TableCell>2.0%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>(180,300]</TableCell>
            <TableCell>[0,3]</TableCell>
            <TableCell>2.5%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>(300,44640]</TableCell>
            <TableCell>[0,6]</TableCell>
            <TableCell>3.0%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
