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
      { y: 2007,m: 2,d: 25, result: "<1> 、 <4> 、 <7> 、 <9> 、 <16>"},
      { y: 2008,m:2,d: 28 , result:"<1> 、 <4> 、 <7> 、 <11> 、 <16>"},
      { y:  2005,m:5,d: 30 , result:"<1> 、 <4> 、 <7> 、 <13> 、 <16>"},
      { y:  1990,m:4,d: 18, result: "<1> 、 <4> 、 <7> 、 <15> 、 <16>"},
      { y:  1895,m:10,d: 31 , result:"<2>"},
      { y:  2150,m:2,d: 1 , result:"<3>"},
      { y: 2008,m:-1,d: 1 , result:"<5>"},
      { y: 2008,m:13,d: 1 , result:"<6>"},
      { y: 2008,m:1,d: -1 , result:"<8>"},
      { y:  2007,m:2,d: 29 , result:"<10>"},
      { y:  2008,m:2,d: 30 , result:"<12>"},
      { y:  2019,m:5,d: 33 , result:"<14>"},
      { y:  2019,m:4,d: 31 , result:"<16>"},
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
              <TableCell>覆盖的类</TableCell>
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
  
  export default EquivalenceTable;
  