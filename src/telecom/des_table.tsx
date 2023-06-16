import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

function createData(col1: string, col2: number, col3: string) {
  return { col1, col2, col3 };
}

const rows = [
  createData('0<通话时间≤60', 1, '1.0%'),
  createData('60<通话时间≤120', 2, '1.5%'),
  createData('120<通话时间≤180', 3, '2.0%'),
  createData('180<通话时间≤200', 3, '2.5%'),
  createData('300<通话时间', 6, '3.0%'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>本月通话的分钟数</TableCell>
            <TableCell >通话时间段的最大容许不按时缴费次数</TableCell>
            <TableCell >通话时间段的折扣率</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.col1} >
              <TableCell > {row.col1}</TableCell>
              <TableCell >{row.col2}</TableCell>
              <TableCell >{row.col3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
