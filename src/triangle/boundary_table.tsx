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
    { a: 1, b: 50, c: 50, result: "构成等腰三角形" },
    { a: 2, b: 50, c: 50, result: "构成等腰三角形" },
    { a: 50, b: 50, c: 50, result: "构成等边三角形" },
    { a: 99, b: 50, c: 50, result: "构成等腰三角形" },
    { a: 100, b: 50, c: 50, result: "构成不构成三角形" },
    { a: 50, b: 1, c: 50, result: "构成等腰三角形" },
    { a: 50, b: 2, c: 50, result: "构成等腰三角形" },
    { a: 50, b: 99, c: 50, result: "构成等腰三角形" },
    { a: 50, b: 100, c: 50, result: "不构成三角形" },
    { a: 50, b: 50, c: 1, result: "构成等腰三角形" },
    { a: 50, b: 50, c: 2, result: "构成等腰三角形" },
    { a: 50, b: 50, c: 99, result: "构成等腰三角形" },
    { a: 50, b: 50, c: 100, result: "不构成三角形" },
    { a: 0, b: 50, c: 50, result: "边长超出设定范围" },
    { a: 1, b: 50, c: 50, result: "构成等腰三角形" },
    { a: 2, b: 50, c: 50, result: "构成等腰三角形" },
    { a: 50, b: 50, c: 50, result: "构成等边三角形" },
    { a: 99, b: 50, c: 50, result: "构成等腰三角形" },
    { a: 100, b: 50, c: 50, result: "不构成三角形" },
    { a: 101, b: 50, c: 50, result: "边长超出设定范围" },
    { a: 50, b: 0, c: 50, result: "边长超出设定范围" },
    { a: 50, b: 1, c: 50, result: "构成等腰三角形" },
    { a: 50, b: 2, c: 50, result: "构成等腰三角形" },
    { a: 50, b: 99, c: 50, result: "构成等腰三角形" },
    { a: 50, b: 100, c: 50, result: "不构成三角形" },
    { a: 50, b: 101, c: 50, result: "边长超出设定范围" },
    { a: 50, b: 50, c: 0, result: "边长超出设定范围" },
    { a: 50, b: 50, c: 1, result: "构成等腰三角形" },
    { a: 50, b: 50, c: 2, result: "构成等腰三角形" },
    { a: 50, b: 50, c: 99, result: "构成等腰三角形" },
    { a: 50, b: 50, c: 100, result: "不构成三角形" },
    { a: 50, b: 50, c: 101, result: "边长超出设定范围" },
  ];
  return (
    <TableContainer component={Paper} style={{ maxHeight: 500 }}>
      <Table className="datatable" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>序号</TableCell>
            <TableCell>边a</TableCell>
            <TableCell>边b</TableCell>
            <TableCell>边c</TableCell>
            <TableCell>预期输出</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.a + row.b + row.c}>
              <TableCell> {index + 1}</TableCell>
              <TableCell> {row.a}</TableCell>
              <TableCell>{row.b}</TableCell>
              <TableCell>{row.c}</TableCell>
              <TableCell>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicBoundaryDataTable;
