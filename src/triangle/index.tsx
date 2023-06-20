import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  InputLabel,
  NativeSelect,
  Typography,
} from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import BasicTable from "./des_table";
import BasicBoundaryDataTable from "./boundary_table";
import EchartsTest from "./echart_test";
import TriangleTest from "./test";
import EquivalenceTable from "./equivalence_table";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    Paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      minHeight: 780,
    },
  })
);

//写一个UseCase函数组件，返回的JSX随option value变化
function UseCase(props: { value: string }) {
  switch (props.value) {
    case "1":
      return (
        <div>
          <br />
          <Typography style={{ fontWeight: "bold" }}>边界值测试</Typography>
          <Typography>设计的边界值测试用例如下：</Typography>
          <br />
          {/* <Bjz/> */}
          <BasicBoundaryDataTable />
        </div>
      );
    case "2":
      return (
        <div>
          <br />
          <Typography style={{ fontWeight: "bold" }}>等价类测试</Typography>
          <Typography>设计的等价类测试用例如下：</Typography>
          <EquivalenceTable />
        </div>
      );
    default:
      return (
        <div>
          <br />
          <Typography>请选择测试方法</Typography>
        </div>
      );
  }
}

export default function Triangle() {
  const classes = useStyles();
  const [val, setVal] = React.useState("1");
  const [isVisible, setIsVisible] = React.useState(false);
  const [inputValue, setInputVal] = React.useState("");
  const [isTest, setIsTest] = React.useState(false);

  const code = `function triangleTest(a:number,b:number,c:number): string{

    if(a<=0||b<=0||c<=0||a>100||b>100||c>100){
        return "边长超出设定范围"
    }
    if(a+b<=c||a+c<=b||b+c<=a){
        return "不构成三角形"
    }
    if(a==b||a==c||b==c){
        if(a==b&&a==c){
            return "构成等边三角形"
        }else{
            return "构成等腰三角形"
        }
    }
    return "构成一般三角形"
}`;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVal(event.target.value as string);
    setInputVal(event.target.value as string);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    alert("测试完成！请查看测试结果");
    setIsVisible(true);
  };

  const handleSingleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsTest(true);
    const tmp=inputValue;
    setInputVal("");
    setInputVal(tmp);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper}>
            <Typography variant="h6" color="primary">
              题目描述
            </Typography>
            <br></br>
            <Typography>
              问题：判断三角形类型（用边界值分析和设计测试用例）。<br></br>
              分析：输入三个整数变量a,b,c作为三角形的三条边。<br></br>
            <br></br>
              <Typography style={{ fontWeight: "bold" }}>边界值分析</Typography>
              <Typography>
              用基本边界值分析，每个变量分别取最小值、稍大于最小值的值、中间值、稍小于最大值的值、最大值5个值，可设计共4n+1
              =13个测试用例。
              <br></br>
              用健壮性边界值分析，在上述基础上每个变量还需取稍小于最小值的值，稍大于最大值的值，共6n+1=19个测试用例。
              <Typography style={{ fontWeight: "bold" }}>等价类分析</Typography>
            </Typography>
              我们对输出格式做了规定，分别为Equilateral
              triangle(等边三角形)，Isosceles triangle(等腰三角形)，Normal
              triangle(普通三角形)和Not
              triangle(非三角形)。手动设定三条边的取值范围为(0,100)。
              可分为以下情况：
            </Typography>
            <br />
            <BasicTable />
            <br />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper}>
            <Typography variant="h6" color="primary">
              测试用例
            </Typography>
            <br />
            <InputLabel htmlFor="select"></InputLabel>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <NativeSelect
                  id="select"
                  value={val}
                  fullWidth
                  onChange={handleChange}
                >
                  <option value="1">边界值</option>
                  <option value="2">等价类</option>
                </NativeSelect>
              </Grid>
              <Grid item xs={6}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  variant="outlined"
                  color="primary"
                  href=""
                  onClick={handleClick}
                >
                  开始测试
                </Button>
              </Grid>
            </Grid>
            <UseCase value={val} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper}>
            <Typography variant="h6" color="primary">
              测试代码
            </Typography>
            <br />
            <SyntaxHighlighter language="typescript" style={solarizedlight}>
              {code}
            </SyntaxHighlighter>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper}>
            <Typography variant="h6" color="primary" >
              测试结果
            </Typography>
            {isVisible && <EchartsTest value={val} />}
            {!isVisible && (
              <Typography>
                <br />
                请先进行测试
              </Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            className={classes.Paper}
            style={{ minHeight: 300 }}
          >
            <Typography variant="h6" color="primary">
              单输入用例测试
            </Typography>
            <Typography>
              <br />
              请输入a,b,c
            </Typography>
            <input type="text" value={inputValue} onChange={handleChange} />
            <br />
            <br />
            <br />
            <Grid item xs={6}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                variant="outlined"
                color="primary"
                href=""
                onClick={handleSingleClick}
              >
                开始测试
              </Button>
              <br />
              {/* 输入值到test里面 */}
              {isTest?(
              <Typography style={{ height: "100px" }}>
                <br />
                <TriangleTest value={inputValue} />
              </Typography>
            ):null}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
