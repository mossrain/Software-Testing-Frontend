import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";



function DataTable() {
    
const data = [
    { calling_time: -1, count: -1, result: '通话时长数值越界' },
    { calling_time: -1, count: 0, result: '通话时长数值越界' },
    { calling_time: -1, count: 1, result: '通话时长数值越界' },
    { calling_time: -1, count: 11, result: '通话时长数值越界' },
    { calling_time: -1, count: 12, result: '通话时长数值越界' },
    { calling_time: 0, count: -1, result: '未按时缴费次数越界' },
    { calling_time: 0, count: 0, result: '25.0' },
    { calling_time: 0, count: 1, result: '25.0' },
    { calling_time: 0, count: 11, result: '25.0' },
    { calling_time: 0, count: 12, result: '未按时缴费次数越界' },
    { calling_time: 1, count: -1, result: '未按时缴费次数越界' },
    { calling_time: 1, count: 0, result: '25.15' },
    { calling_time: 1, count: 10, result: '25.15' },
    { calling_time: 1, count: 11, result: '25.15' },
    { calling_time: 1, count: 12, result: '未按时缴费次数越界' },
    { calling_time: 150, count: -1, result: '未按时缴费次数越界' },
    { calling_time: 150, count: 0, result: '47.05' },
    { calling_time: 150, count: 5, result: '47.5' },
    { calling_time: 150, count: 11, result: '47.5' },
    { calling_time: 150, count: 12, result: '未按时缴费次数越界' },
    { calling_time: 20000, count: -1, result: '未按时缴费次数越界' },
    { calling_time: 20000, count: 0, result: '2935.0' },
    { calling_time: 20000, count: 10, result: '3025.0' },
    { calling_time: 20000, count: 12, result: '未按时缴费次数越界' },
    { calling_time: 44639, count: -1, result: '未按时缴费次数越界' },
    { calling_time: 44639, count: 0, result: '6519.97' },
    { calling_time: 44639, count: 10, result: '6720.85' },
    { calling_time: 44639, count: 12, result: '未按时缴费次数越界' },
    { calling_time: 44640, count: -1, result: '未按时缴费次数越界' },
    { calling_time: 44640, count: 0, result: '6520.12' },
    { calling_time: 44640, count: 5, result: '6520.12' },
    { calling_time: 44640, count: 11, result: '6721.0' },
    { calling_time: 44640, count: 12, result: '未按时缴费次数越界' },
    { calling_time: 44641, count: -1, result: '通话时长数值越界' },
    { calling_time: 44641, count: 0, result: '通话时长数值越界' },
    { calling_time: 44641, count: 5, result: '通话时长数值越界' },
    { calling_time: 44641, count: 12, result: '通话时长数值越界' },
  ];
  return (
    <TableContainer component={Paper} style ={{maxHeight:500}}>
      <Table className='datatable' aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>序号</TableCell>
            <TableCell>通话分钟</TableCell>
            <TableCell >	不按时缴费次数	</TableCell>
            <TableCell >预期输出</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <TableRow key={row.calling_time+row.count} >
              <TableCell > {index+1}</TableCell>
              <TableCell > {row.calling_time}</TableCell>
              <TableCell >{row.count}</TableCell>
              <TableCell >{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
