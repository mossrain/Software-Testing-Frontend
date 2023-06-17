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

function createData(col1: number, col2: number, col3: number, col4: string, col5: string) {
  return { col1, col2, col3, col4, col5 };
}

const rows = [
  createData(1, 300, 5, '90%','BEGH'),
  createData(2, 300, 5, '50%','BFI'),
  createData(3, 100, 5, '90%','ACGH'),
  createData(4, 100, 5, '50%','ADGH'),
];

export default function CaseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>测试编号</TableCell>
            <TableCell >年销售额</TableCell>
            <TableCell >请假天数</TableCell>
            <TableCell >现金到账</TableCell>
            <TableCell >所走路径</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.col1}>
              <TableCell > {row.col1}</TableCell>
              <TableCell >{row.col2}</TableCell>
              <TableCell >{row.col3}</TableCell>
              <TableCell >{row.col4}</TableCell>
              <TableCell >{row.col5}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
