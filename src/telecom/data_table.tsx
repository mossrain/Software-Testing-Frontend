import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

export default function DataTable() {
  const data = [
    { id: 1, calling_time: 1, count: 0, discount: '1.00%', result: '25.1485' },
    { id: 2, calling_time: 2, count: 1, discount: '1.00%', result: '25.297' },
    { id: 3, calling_time: 4, count: 1, discount: '1.00%', result: '25.594' },
    { id: 4, calling_time: 6, count: 0, discount: '1.00%', result: '25.891' },
    { id: 5, calling_time: 30, count: 0, discount: '1.00%', result: '29.4325' },
    { id: 6, calling_time: 59, count: 1, discount: '1.00%', result: '33.71725' },
    { id: 7, calling_time: 60, count: 2, discount: '1.00%', result: '33.865' },
    { id: 8, calling_time: 61, count: 0, discount: '1.50%', result: '34.01275' },
    { id: 9, calling_time: 64, count: 1, discount: '1.50%', result: '34.456' },
    { id: 10, calling_time: 90, count: 0, discount: '1.50%', result: '38.2975' },
    { id: 11, calling_time: 118, count: 1, discount: '1.50%', result: '42.4345' },
    { id: 12, calling_time: 119, count: 3, discount: '1.50%', result: '42.58225' },
    { id: 13, calling_time: 120, count: 0, discount: '1.50%', result: '42.73' },
    { id: 14, calling_time: 121, count: 3, discount: '2.00%', result: '42.787' },
    { id: 15, calling_time: 129, count: 2, discount: '2.00%', result: '43.963' },
    { id: 16, calling_time: 150, count: 3, discount: '2.00%', result: '47.05' },
    { id: 17, calling_time: 178, count: 2, discount: '2.00%', result: '51.166' },
    { id: 18, calling_time: 179, count: 0, discount: '2.00%', result: '51.313' },
    { id: 19, calling_time: 180, count: 3, discount: '2.00%', result: '51.46' },
    { id: 20, calling_time: 181, count: 3, discount: '2.50%', result: '51.47125' },
    { id: 21, calling_time: 184, count: 2, discount: '2.50%', result: '51.91' },
    { id: 22, calling_time: 240, count: 1, discount: '2.50%', result: '60.1' },
    { id: 23, calling_time: 274, count: 2, discount: '2.50%', result: '65.0725' },
    { id: 24, calling_time: 297, count: 0, discount: '2.50%', result: '68.43625' },
    { id: 25, calling_time: 299, count: 6, discount: '2.50%', result: '68.72875' },
    { id: 26, calling_time: 300, count: 6, discount: '2.50%', result: '68.875' },
    { id: 27, calling_time: 301, count: 6, discount: '3.00%', result: '68.7955' },
    { id: 28, calling_time: 304, count: 1, discount: '3.00%', result: '69.232' },
    { id: 29, calling_time: 379, count: 2, discount: '3.00%', result: '80.1445' },
    { id: 30, calling_time: 451, count: 3, discount: '3.00%', result: '90.6205' },
    { id: 31, calling_time: 503, count: 20, discount: '3.00%', result: '98.1865' },
    { id: 32, calling_time: 19304, count: 5, discount: '3.00%', result: '2833.732' },
    { id: 33, calling_time: 29487, count: 2, discount: '3.00%', result: '4315.3585' },
    { id: 34, calling_time: 43924, count: 4, discount: '3.00%', result: '6415.942' },
    { id: 35, calling_time: 44630, count: 2, discount: '3.00%', result: '6518.665' },
    { id: 36, calling_time: 44638, count: 6, discount: '3.00%', result: '6519.829' },
    { id: 37, calling_time: 44639, count: 0, discount: '3.00%', result: '6519.9745' },
    { id: 38, calling_time: 44640, count: 6, discount: '3.00%', result: '6520.12' },
  ];

  return (
    <TableContainer component={Paper} style={{ maxHeight: 300 }}>
      <Table className='datatable' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>序号</TableCell>
            <TableCell>通话时间</TableCell>
            <TableCell>未缴费次数</TableCell>
            <TableCell>预期折扣</TableCell>
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
