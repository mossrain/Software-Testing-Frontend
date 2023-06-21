import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";


export default function NewDataTable() {
    const data = [
      { id: 1, calling_time: -1, count: 0, discount: '0%', result: '通话时长数值越界' },
      { id: 2, calling_time: 0, count: 2, discount: '0%', result: '25' },
      { id: 3, calling_time: 54250, count: 1, discount: '0%', result: '通话时长数值越界' },
      { id: 4, calling_time: 234, count: -1, discount: '0%', result: '未按时缴费次数越界' },
      { id: 5, calling_time: 132, count: -4, discount: '0%', result: '未按时缴费次数越界' },
      { id: 6, calling_time: 521, count: 15, discount: '0%', result: '未按时缴费次数越界' },
      { id: 7, calling_time: 213, count: 42, discount: '0%', result: '未按时缴费次数越界' },
      { id: 8, calling_time: -1, count: -1, discount: '0%', result: '通话时长数值越界' },
      { id: 9, calling_time: -4, count: -12, discount: '0%', result: '通话时长数值越界' },
      { id: 10, calling_time: 54250, count: -2, discount: '0%', result: '通话时长数值越界' },
      { id: 11, calling_time: 678934, count: 54, discount: '0%', result: '通话时长数值越界' },
    ];
  
    return (
        <TableContainer component={Paper} style={{ maxHeight:300 }}>
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
    
  