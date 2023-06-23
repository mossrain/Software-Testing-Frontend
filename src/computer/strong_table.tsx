import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function StrongBasicBoundaryDataTable() {
  const data = [
    {
      host_num: -1,
      display_num: 40,
      peripheral_num: 45,
      result: " 系统计算佣金",
    },
    {
      host_num: 0,
      display_num: 40,
      peripheral_num: 45,
      result: "销量超出范围",
    },
    {
      host_num: 71,
      display_num: 40,
      peripheral_num: 45,
      result: " 销量超出范围",
    },
    {
      host_num: 35,
      display_num: -1,
      peripheral_num: 45,
      result: " 销量超出范围",
    },
    {
      host_num: 35,
      display_num: 0,
      peripheral_num: 45,
      result: "销量超出范围",
    },
    {
      host_num: 35,
      display_num: 81,
      peripheral_num: 45,
      result: " 销量超出范围",
    },
    {
      host_num: 35,
      display_num: 40,
      peripheral_num: -1,
      result: " 销量超出范围",
    },
    {
      host_num: 35,
      display_num: 40,
      peripheral_num: 0,
      result: " 销量超出范围",
    },
    {
      host_num: 35,
      display_num: 40,
      peripheral_num: 91,
      result: "销量超出范围",
    },
  ];
  return (
    <TableContainer component={Paper} style={{ maxHeight: 500 }}>
      <Table className="datatable" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>序号</TableCell>
            <TableCell>主机数量</TableCell>
            <TableCell>显示器数量</TableCell>
            <TableCell>外设数量</TableCell>
            <TableCell>结果</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.host_num + row.display_num + row.peripheral_num}>
              <TableCell> {index + 1}</TableCell>
              <TableCell> {row.host_num}</TableCell>
              <TableCell>{row.display_num}</TableCell>
              <TableCell>{row.peripheral_num}</TableCell>
              <TableCell>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StrongBasicBoundaryDataTable;
