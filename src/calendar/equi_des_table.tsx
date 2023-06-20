import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

function createData(col1: string, col2: string, col3: string) {
  return { col1, col2, col3 };
}


const rows = [
  createData("年份范围" ,"<1> 1900<=年份<=2100", "<2> 年份<1900 <3> 年份>2100"),
  createData("月份范围", "<4> 1<=月份<=12", "<5> 月份<1  <6> 月份>12"),
  createData("日期下限" ,"<7> 日期>=1" ,"<8> 日期<1"),
  createData("平年2月份日期上限", "<9> 日期<=28" ,"<10> 日期>28"),
  createData("闰年2月份日期上限" ,"<11> 日期<=29", "<12> 日期>29"),
  createData("1、3、5、7、8、10、12月份" ,"<13> 日期<=31", "<14> 日期>31"),
  createData("4、6、9、11月份", "<15> 日期<=30" ,"<16> 日期>30"),
];

export default function EquiDesTable() {
  const classes = useStyles();

  return (
    <div style={{ maxHeight: '150px', overflow: 'auto' }}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>输入条件</TableCell>
            <TableCell>有效等价类</TableCell>
            <TableCell>无效等价类</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.col1}>
              <TableCell> {row.col1}</TableCell>
              <TableCell>{row.col2}</TableCell>
              <TableCell>{row.col3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

  );
}
