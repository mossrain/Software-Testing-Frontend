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
import BasicBoundaryDataTable from "./basic_table";
import StrongBoundaryDataTable from "./strong_table";
import EchartsTest from "./echart_test";
import EquiDesTable from "./equi_des_table";
import EquivalenceTable from "./equivalence_table";
import DecisionDes from "./decisiondes";
import DecisionTable from "./decision_table";

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

function UseCase(props: { value: string }) {
  switch (props.value) {
    case "1":
      return (
        <div>
          <br />
          <Typography style={{ fontWeight: "bold" }}>基本边界值测试</Typography>
          <Typography>
            年份（y）和月份（m）两个变量分别取最小值、稍大于最小值的值、中间值、稍小于最大值的值、最大值5个值，有4n+1 =
            9个测试用例。而日期（d）的最大值有四个，有8个测试用例。一共8+9=17个测试用例。设计的基本边界值和我们补充覆盖的测试用例如下：
          </Typography>
          <br />
          {/* <Bjz/> */}
          <BasicBoundaryDataTable />
        </div>
      );
    case "2":
      return (
        <div>
          <br />
          <Typography style={{ fontWeight: "bold" }}>健壮边界值测试</Typography>
          <Typography>
            在基本边界类用例基础上，每个变量取值加上一个比最小值稍小的值，比最大值稍大的值。共6*2+1+10=23个
            测试用例，增加的6个测试用例如下：
          </Typography>
          <StrongBoundaryDataTable />
        </div>
      );
      case "3":
        return (
          <div>
            <br />
            <Typography style={{ fontWeight: "bold" }}>等价类测试</Typography>
            <Typography>
            设计等价类：
            </Typography>
            <EquiDesTable/>
            <Typography>
            设计如下测试用例覆盖所有的等价类：
            </Typography>
            <EquivalenceTable />
          </div>
        );
        case "4":
          return (
            <div>
              <br />
              <Typography style={{ fontWeight: "bold" }}>决策类测试</Typography>
              <Typography>
              决策表由四部分组成：条件桩--列出问题的所有条件、条件项--针对条件桩给出的条件列出所有可能的取值、
              动作桩--列出问题所规定的可能采取的操作、动作项--指出在条件项的各组取值情况下应采取的动作
              <br />
              year： y1：year%400==0，y2:year%4==0 && year%100!=0，y3 ：平年 
              <br />
              month: m1 : [1,3,5,7,8,10] m2 : [2] m3 : [4,6,9,11] m4 : [12] 
              <br />
              day根据月份的天数可以划分为:d1:[1~27]、d2:[28]、d3:[29]、d4:[30]、d5:[31]
              <br />
              采用扩展条目决策表设计测试用例
              </Typography>
              <div style={{ maxHeight: '400px', overflow: 'auto' }}>
              <DecisionDes/>
              <Typography >测试用例：</Typography>
              <DecisionTable/>
              </div>
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
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVal(event.target.value as string);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    alert("测试完成！请查看测试结果");
    setIsVisible(true);
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
              问题：万年历问题（用边界值方法分别分析和设计测试用例）。<br></br>
              <br></br>
              <br></br>
              万年历中，包括年、月、日三个输入变量，假设我们要求输入日期是否存在。
              <br></br>
              <br></br>
              年份取[1900,2100]内所有整数。
              <br></br>
              <br></br>
              month取[1,12]的全部整数。
              <br></br>
              <br></br>
              day可取[1,31]的全部整数。
              <br></br>
              <br></br>
              由于大月小月以及平闰年导致day这个变量比较特殊，这里day的边界值取1,28,29,30,31。
              <br></br>
              <br></br>
            </Typography>
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
                  <option value="1">基本边界值</option>
                  <option value="2">健壮边界值</option>
                  <option value="3">等价类</option>
                  <option value="4">决策表</option>
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
      </Grid>
    </div>
  );
}
