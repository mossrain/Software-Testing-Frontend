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
import EchartsTest from "./echart_test";

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
          <Typography style={{ fontWeight: "bold" }}>边界值测试用例</Typography>
          <br />
          <BoundaryDataTable />
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

  const code = `function computerTest(host_num: number, display_num: number, peripheral_num: number): string {
    // 当销售额小于等于1000（包括1000）按照10%提佣金，当销售额在1000-1800之间（包括1800）的时候按照15%提佣金， 
    // 当销售额大于1800时按照20%提佣金。
  
    var sale_amount=0   //销售额
    var commission=0    //佣金
  
    if(host_num==-1)return "自动统计本月销售总额"  
    if(host_num*display_num*peripheral_num==0)return "未卖出一台完整机器"
    if(host_num<1||host_num>70) return "主机数量超出限制"
    if(display_num<1||display_num>80) return "显示器数量超出限制"
    if(peripheral_num<1||peripheral_num>90) return "外设数量超出限制"
  
    sale_amount=25*host_num+display_num*30+45*peripheral_num
  
    if(sale_amount<=1000)commission=0.1*sale_amount
    if(sale_amount<=1800&&sale_amount>1000)commission=0.15*sale_amount
    if(sale_amount>=1800)commission=0.2*sale_amount
    
    return commission.toString()
  }`;

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
              如果采用边界值分析，对x、y、z分别取min，min+，normal，max-，max。得到三个取值集合：
              <br></br>
              <br></br>
              x:[1,2,40,69,70], y:[1,2,40,79,80], z:[1,2,40,89,90]
              <br></br>
              <br></br>
              再增加健壮性分析：每个集合再分别增加min-,max+可得：
              <br></br>
              x:[0,1,2,40,69,70,71], y:[0,1,2,40,79,80,81], z:[0,1,2,40,89,90,91]
              <br></br>
              共有6*3+1=19个测试用例,再加上当x=-1时输出员工当月销售总额，所以共有20个测试用例。
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
