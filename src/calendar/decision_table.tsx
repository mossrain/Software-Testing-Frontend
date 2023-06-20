import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function DecisionTable() {
  const data = [

    { y: 2000, m: 1, d: 15, result: "输入日期存在" },
    { y: 2000, m: 1, d: 28, result: "输入日期存在" },
    { y: 2000, m: 1, d: 29, result: "输入日期存在" },
    { y: 2000, m: 1, d: 30, result: "输入日期存在" },
    { y: 2000, m: 1, d: 31, result: "输入日期存在" },


    { y: 2000, m: 2, d: 15, result: "输入日期存在" },
    { y: 2000, m: 2, d: 28, result: "输入日期存在" },
    { y: 2000, m: 2, d: 29, result: "输入日期存在" },
    { y: 2000, m: 2, d: 30, result: "输入日期不存在" },
    { y: 2000, m: 2, d: 31, result: "输入日期不存在" },

    { y: 2000, m: 4, d: 15, result: "输入日期存在" },
    { y: 2000, m: 4, d: 28, result: "输入日期存在" },
    { y: 2000, m: 4, d: 29, result: "输入日期存在" },
    { y: 2000, m: 4, d: 30, result: "输入日期存在" },
    { y: 2000, m: 4, d: 31, result: "输入日期不存在" },

    { y: 2001, m: 1, d: 15, result: "输入日期存在" },
    { y: 2001, m: 1, d: 28, result: "输入日期存在" },
    { y: 2001, m: 1, d: 29, result: "输入日期存在" },
    { y: 2001, m: 1, d: 30, result: "输入日期存在" },
    { y: 2001, m: 1, d: 31, result: "输入日期存在" },


    { y: 2001, m: 2, d: 15, result: "输入日期存在" },
    { y: 2001, m: 2, d: 28, result: "输入日期存在" },
    { y: 2001, m: 2, d: 29, result: "输入日期不存在" },
    { y: 2001, m: 2, d: 30, result: "输入日期不存在" },
    { y: 2001, m: 2, d: 31, result: "输入日期不存在" },

    { y: 2001, m: 4, d: 15, result: "输入日期存在" },
    { y: 2001, m: 4, d: 28, result: "输入日期存在" },
    { y: 2001, m: 4, d: 29, result: "输入日期存在" },
    { y: 2001, m: 4, d: 30, result: "输入日期存在" },
    { y: 2001, m: 4, d: 31, result: "输入日期不存在" },

  ];
  return (
    <TableContainer component={Paper} style={{ maxHeight: 500 }}>
      <Table className="datatable" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>序号</TableCell>
            <TableCell>年</TableCell>
            <TableCell>月</TableCell>
            <TableCell>日</TableCell>
            <TableCell>结果</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.y + row.m + row.d}>
              <TableCell> {index + 1}</TableCell>
              <TableCell> {row.y}</TableCell>
              <TableCell>{row.m}</TableCell>
              <TableCell>{row.d}</TableCell>
              <TableCell>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DecisionTable;
