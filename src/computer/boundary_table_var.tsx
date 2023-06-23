import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function BasicBoundaryVarTable() {
  const data = [
    {
      host_num: 1,
      display_num: 40,
      peripheral_num: 45,
      sale_amount: 3250,
      result: " 650",
    },
    {
      host_num: 2,
      display_num: 40,
      peripheral_num: 45,
      sale_amount: 3275,
      result: " 655",
    },
    {
      host_num: 35,
      display_num: 40,
      peripheral_num: 45,
      sale_amount: 4100,
      result: " 820",
    },
    {
      host_num: 69,
      display_num: 40,
      peripheral_num: 45,
      sale_amount: 4950,
      result: " 990",
    },
    {
      host_num: 70,
      display_num: 40,
      peripheral_num: 45,
      sale_amount: 4975,
      result: " 995",
    },
    {
      host_num: 35,
      display_num: 1,
      peripheral_num: 45,
      sale_amount: 2930,
      result: " 586",
    },
    {
      host_num: 35,
      display_num: 2,
      peripheral_num: 45,
      sale_amount: 2960,
      result: " 592",
    },
    {
      host_num: 35,
      display_num: 79,
      peripheral_num: 45,
      sale_amount: 5270,
      result: "  1054",
    },
    {
      host_num: 35,
      display_num: 80,
      peripheral_num: 45,
      sale_amount: 5300,
      result: " 1060",
    },
    {
      host_num: 35,
      display_num: 40,
      peripheral_num: 1,
      sale_amount: 2120,
      result: " 424",
    },
    {
      host_num: 35,
      display_num: 40,
      peripheral_num: 2,
      sale_amount: 2165,
      result: "  433",
    },
    {
      host_num: 35,
      display_num: 40,
      peripheral_num: 89,
      sale_amount: 6080,
      result: "  1216",
    },
    {
      host_num: 35,
      display_num: 40,
      peripheral_num: 90,
      sale_amount: 6120,
      result: " 1224",
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
            <TableCell>销售总额</TableCell>
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
              <TableCell>{row.sale_amount}</TableCell>
              <TableCell>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicBoundaryVarTable;
