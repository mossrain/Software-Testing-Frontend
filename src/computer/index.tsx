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
import BoundaryDataTable from "./boundary_table";
import BasicBoundaryVarTable from "./boundary_table_var";
import EchartsTest from "./echart_test";
import StrongBasicBoundaryDataTable from "./strong_table";

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
        <div style={{ maxHeight: '600px', overflow: 'auto' }}>
          <br />
          <Typography style={{ fontWeight: "bold" }}>考虑销售总额</Typography>
          <br />
          <BoundaryDataTable />
          <br />
          <Typography style={{ fontWeight: "bold" }}>考虑输入变量边界</Typography>
          <br />
          <BasicBoundaryVarTable />
          <br />
          <Typography style={{ fontWeight: "bold" }}>考虑健壮性</Typography>
          <br />
          < StrongBasicBoundaryDataTable/>
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
              问题描述：电脑销售系统，其中：
              <br></br>
              <br></br>
              主机（25￥单位价格，每月最多销售的数量为70），
              <br></br>
              <br></br>
              显示器（30￥单位价格，每月最多销售数量为80），
              <br></br>
              <br></br>
              外设（45￥单位价格，每月最多销售的数量为90）；
              <br></br>
              <br></br>
              每个销售员每月至少销售一台完整的机器，当系统的主机变量接受到-1值的时候，系统自动统计该销售员本月的销售总额。
              <br></br>
              <br></br>
              当销售额小于等于1000（包括1000）按照10%提佣金，当销售额在1000-1800之间（包括1800）的时候按照15%提佣金，
              当销售额大于1800时按照20%提佣金。（用边界值方法分析和设计测试用例）
              <br></br>
              <br></br>
              <Typography style={{ fontWeight: "bold" }}>分析</Typography>
              在本题中，测试用例的输入变量有主机销售数量x范围为[1,70]、显示器销售数量y范围为[1,80]、外设销售数量z范围为[1,90]，测试输出有员工佣金、员工本月销售总额。
              <br></br>
              不同的销售额所提佣金的百分比不同，因此我们将销售总额（即输出结果）的边界值加入到讨论中。
可算得销售额上限为2570+3080+45*90 = 8200。
<br></br>
我们考虑销售总额的边界、只考虑输入变量边界、考虑健壮性

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
