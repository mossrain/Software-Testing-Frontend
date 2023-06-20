import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
  } from "@material-ui/core";
  
  function EquivalenceTable() {
    const data = [
      { a: 10, b: 10, c: 10, result: "构成等边三角形" },
      { a: 20, b: 20, c: 30, result: "构成等腰三角形" },
      { a: 10, b: 11, c: 12, result: "构成普通三角形" },
      { a: 20, b: 5, c: 5, result: "不构成三角形" },

      { a: -1, b: 50, c: 50, result: "边长超出设定范围" },
      { a: 200, b: 50, c: 50, result: "边长超出设定范围" },
      { a: 0, b: 50, c: 50, result: "边长超出设定范围" },

      { a: 10, b: -5, c: 50, result: "边长超出设定范围" },
      { a: 10, b: 500, c: 50, result: "边长超出设定范围" },
      { a: 10, b: 0, c: 50, result: "边长超出设定范围" },

      { a: 20, b: 50, c: -5, result: "边长超出设定范围" },
      { a: 20, b: 50, c: 0, result: "边长超出设定范围" },
      { a: 20, b: 50, c: 105, result: "边长超出设定范围" },
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
  
  export default EquivalenceTable;
  