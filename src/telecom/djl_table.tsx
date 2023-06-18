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

function createData(col1: number, col2: number, col3: number, col4: string) {
  return { col1, col2, col3, col4 };
}

const rows = [
  { col1: 1, col2: -1, col3: -1, col4: '通话时长数值越界' },
  { col1: 2, col2: -1, col3: 0, col4: '通话时长数值越界' },
  { col1: 3, col2: -1, col3: 2, col4: '通话时长数值越界' },
  { col1: 4, col2: -1, col3: 3, col4: '通话时长数值越界' },
  { col1: 5, col2: -1, col3: 6, col4: '通话时长数值越界' },
  { col1: 6, col2: -1, col3: 11, col4: '通话时长数值越界' },
  { col1: 7, col2: -1, col3: 12, col4: '通话时长数值越界' },
  { col1: 8, col2: 60, col3: -1, col4: '未按时缴费次数越界' },
  { col1: 9, col2: 60, col3: 0, col4: '33.91' },
  { col1: 10, col2: 60, col3: 2, col4: '34.0' },
  { col1: 11, col2: 60, col3: 3, col4: '34.0' },
  { col1: 12, col2: 60, col3: 6, col4: '34.0' },
  { col1: 13, col2: 60, col3: 11, col4: '34.0' },
  { col1: 14, col2: 60, col3: 12, col4: '未按时缴费次数越界' },
  { col1: 15, col2: 120, col3: -1, col4: '未按时缴费次数越界' },
  { col1: 16, col2: 120, col3: 0, col4: '42.73' },
  { col1: 17, col2: 120, col3: 2, col4: '42.73' },
  { col1: 18, col2: 120, col3: 3, col4: '43' },
  { col1: 19, col2: 120, col3: 6, col4: '43' },
  { col1: 20, col2: 120, col3: 11, col4: '43' },
  { col1: 21, col2: 120, col3: 12, col4: '未按时缴费次数越界' },
  { col1: 22, col2: 180, col3: -1, col4: '未按时缴费次数越界' },
  { col1: 23, col2: 180, col3: 0, col4: '51.46' },
  { col1: 24, col2: 180, col3: 2, col4: '51.46' },
  { col1: 25, col2: 180, col3: 3, col4: '51.46' },
  { col1: 26, col2: 180, col3: 6, col4: '52' },
  { col1: 27, col2: 180, col3: 11, col4: '52' },
  { col1: 28, col2: 180, col3: 12, col4: '未按时缴费次数越界' },
  { col1: 29, col2: 300, col3: -1, col4: '未按时缴费次数越界' },
  { col1: 30, col2: 300, col3: 0, col4: '68.875' },
  { col1: 31, col2: 300, col3: 2, col4: '68.875' },
  { col1: 32, col2: 300, col3: 3, col4: '68.875' },
  { col1: 33, col2: 300, col3: 6, col4: '70' },
  { col1: 34, col2: 300, col3: 11, col4: '70' },
  { col1: 35, col2: 300, col3: 12, col4: '未按时缴费次数越界' },
  { col1: 36, col2: 350, col3: -1, col4: '未按时缴费次数越界' },
  { col1: 37, col2: 350, col3: 0, col4: '75.925' },
  { col1: 38, col2: 350, col3: 2, col4: '75.925' },
  { col1: 39, col2: 350, col3: 3, col4: '75.925' },
  { col1: 40, col2: 350, col3: 6, col4: '75.925' },
  { col1: 41, col2: 350, col3: 11, col4: '77.5' },
  { col1: 42, col2: 350, col3: 12, col4: '未按时缴费次数越界' },
  { col1: 43, col2: 44641, col3: -1, col4: '未按时缴费次数越界' },
  { col1: 44, col2: 44641, col3: 0, col4: '通话时长数值越界' },
  { col1: 45, col2: 44641, col3: 2, col4: '通话时长数值越界' },
  { col1: 46, col2: 44641, col3: 3, col4: '通话时长数值越界' },
  { col1: 47, col2: 44641, col3: 6, col4: '通话时长数值越界' },
  { col1: 48, col2: 44641, col3: 11, col4: '通话时长数值越界' },
  { col1: 49, col2: 44641, col3: 12, col4: '通话时长数值越界' },
];


export default function CaseTable() {
  return (
    <TableContainer component={Paper} style={{ maxHeight: 400 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>序号</TableCell>
            <TableCell>通话分钟</TableCell>
            <TableCell>不按时缴费次数</TableCell>
            <TableCell>预期输出</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.col1}>
              <TableCell>{row.col1}</TableCell>
              <TableCell>{row.col2}</TableCell>
              <TableCell>{row.col3}</TableCell>
              <TableCell>{row.col4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
