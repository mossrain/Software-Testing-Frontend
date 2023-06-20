import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function BasicBoundaryDataTable() {
  const data = [
    {
      host_num: 0,
      display_num: 40,
      peripheral_num: 40,
      result: "未卖出一台完整机器",
    },
    { host_num: 1, display_num: 40, peripheral_num: 40, result: "605" },
    { host_num: 2, display_num: 40, peripheral_num: 40, result: "610" },
    { host_num: 69, display_num: 40, peripheral_num: 40, result: "945" },
    { host_num: 70, display_num: 40, peripheral_num: 40, result: "950" },
    {
      host_num: 71,
      display_num: 40,
      peripheral_num: 40,
      result: "主机数量超出限制",
    },
    {
      host_num: 40,
      display_num: 0,
      peripheral_num: 40,
      result: "未卖出一台完整机器",
    },
    { host_num: 40, display_num: 1, peripheral_num: 40, result: "566" },
    { host_num: 40, display_num: 2, peripheral_num: 40, result: "572" },
    { host_num: 40, display_num: 79, peripheral_num: 40, result: "1034" },
    { host_num: 40, display_num: 80, peripheral_num: 40, result: "1040" },
    {
      host_num: 40,
      display_num: 81,
      peripheral_num: 40,
      result: "显示器数量超出限制",
    },
    {
      host_num: 40,
      display_num: 40,
      peripheral_num: 0,
      result: "未卖出一台完整机器",
    },
    { host_num: 40, display_num: 40, peripheral_num: 1, result: "449" },
    { host_num: 40, display_num: 40, peripheral_num: 2, result: "458" },
    { host_num: 40, display_num: 40, peripheral_num: 89, result: "1241" },
    { host_num: 40, display_num: 40, peripheral_num: 90, result: "1250" },
    {
      host_num: 40,
      display_num: 40,
      peripheral_num: 91,
      result: "外设数量超出限制",
    },
    { host_num: 40, display_num: 40, peripheral_num: 40, result: "800" },
    {
      host_num: -1,
      display_num: 40,
      peripheral_num: 40,
      result: "自动统计本月销售总额",
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

export default BasicBoundaryDataTable;
