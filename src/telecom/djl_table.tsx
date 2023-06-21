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
  const data = [
    { id: 1, calling_time: 12, count: 1, discount: '1%', result: 26.782 },
    { id: 2, calling_time: 20, count: 2, discount: '0.00%', result: 28 },
    { id: 3, calling_time: 30, count: 3, discount: '0.00%', result: 29.5 },
    { id: 4, calling_time: 40, count: 5, discount: '0.00%', result: 31 },
    { id: 5, calling_time: 53, count: 8, discount: '0.00%', result: 32.95 },
    { id: 6, calling_time: 63, count: 1, discount: '1.50%', result: 34.30825 },
    { id: 7, calling_time: 70, count: 2, discount: '1.50%', result: 35.3425 },
    { id: 8, calling_time: 83, count: 3, discount: '0.00%', result: 37.45 },
    { id: 9, calling_time: 95, count: 6, discount: '0.00%', result: 39.25 },
    { id: 10, calling_time: 118, count: 9, discount: '0.00%', result: 42.7 },
    { id: 11, calling_time: 128, count: 1, discount: '2%', result: 43.816 },
    { id: 12, calling_time: 146, count: 2, discount: '2%', result: 46.462 },
    { id: 13, calling_time: 156, count: 3, discount: '2%', result: 47.932 },
    { id: 14, calling_time: 167, count: 4, discount: '0%', result: 50.05 },
    { id: 15, calling_time: 176, count: 7, discount: '0%', result: 51.4 },
    { id: 16, calling_time: 207, count: 1, discount: '2.50%', result: 55.27375 },
    { id: 17, calling_time: 213, count: 2, discount: '2.50%', result: 56.15125 },
    { id: 18, calling_time: 246, count: 3, discount: '2.50%', result: 60.9775 },
    { id: 19, calling_time: 257, count: 5, discount: '0.00%', result: 63.55 },
    { id: 20, calling_time: 269, count: 10, discount: '0.00%', result: 65.35 },
    { id: 21, calling_time: 345, count: 1, discount: '3%', result: 75.1975 },
    { id: 22, calling_time: 364, count: 2, discount: '3%', result: 77.962 },
    { id: 23, calling_time: 465, count: 3, discount: '3%', result: 92.6575 },
    { id: 24, calling_time: 3567, count: 5, discount: '3%', result: 543.9985 },
    { id: 25, calling_time: 4567, count: 8, discount: '0%', result: 710.05 },
    { id: 26, calling_time: -2, count: 1, discount: '0%', result: '通话时长数值越界' },
    { id: 27, calling_time: 0, count: 2, discount: '0.00%', result: '通话时长数值越界' },
    { id: 28, calling_time: -4, count: 3, discount: '0.00%', result: '通话时长数值越界' },
    { id: 29, calling_time: -15, count: 5, discount: '0.00%', result: '通话时长数值越界' },
    { id: 30, calling_time: -20, count: 8, discount: '0.00%', result: '通话时长数值越界' },
    { id: 31, calling_time: 100000, count: 1, discount: '0.00%', result: '通话时长数值越界' },
    { id: 32, calling_time: 50000, count: 2, discount: '0.00%', result: '通话时长数值越界' },
    { id: 33, calling_time: 64765, count: 3, discount: '0.00%', result: '通话时长数值越界' },
    { id: 34, calling_time: 74253, count: 4, discount: '0.00%', result: '通话时长数值越界' },
    { id: 35, calling_time: 83432, count: 9, discount: '0.00%', result: '通话时长数值越界' },
    { id: 36, calling_time: 24, count: -2, discount: '0%', result: '未按时缴费次数越界' },
    { id: 37, calling_time: 64, count: -4, discount: '0%', result: '未按时缴费次数越界' },
    { id: 38, calling_time: 134, count: -6, discount: '0%', result: '未按时缴费次数越界' },
    { id: 39, calling_time: 294, count: -20, discount: '0%', result: '未按时缴费次数越界' },
    { id: 40, calling_time: 355, count: -30, discount: '0%', result: '未按时缴费次数越界' },
    { id: 41, calling_time: 32, count: 12, discount: '0.00%', result: '未按时缴费次数越界' },
    { id: 42, calling_time: 83, count: 34, discount: '0.00%', result: '未按时缴费次数越界' },
    { id: 43, calling_time: 156, count: 45, discount: '0.00%', result: '未按时缴费次数越界' },
    { id: 44, calling_time: 233, count: 76, discount: '0.00%', result: '未按时缴费次数越界' },
    { id: 45, calling_time: 546, count: 666, discount: '0.00%', result: '未按时缴费次数越界' },
    { id: 46, calling_time: -2, count: -5, discount: '0%', result: '通话时长数值越界' },
    { id: 47, calling_time: -1, count: 53, discount: '0%', result: '通话时长数值越界' },
    { id: 48, calling_time: 98783, count: -8, discount: '0%', result: '通话时长数值越界' },
    { id: 49, calling_time: 183748, count: 15, discount: '0%', result: '通话时长数值越界' },
  ];



export default function CaseTable() {
  return (
    <TableContainer component={Paper} style={{ maxHeight: 420 }}>
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
        {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.calling_time}</TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell>{row.discount}</TableCell>
              <TableCell>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
