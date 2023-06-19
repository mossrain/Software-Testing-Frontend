import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper  from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, InputLabel, NativeSelect, Typography } from '@material-ui/core';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import StateTable from './state_table';
import ActionTable from './action_table';
import UseCaseTable1 from './use_case1_table';
import UseCaseTable2 from './use_case2_table';
import UseCaseTable3 from './use_case3_table';
import EchartsTest from './echarts_test';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    Paper: {
      padding: theme.spacing(2),
    //   textAlign: 'center',
      color: theme.palette.text.secondary,
    //   minHeight: 710,
    },
  }),
);


export default function Telecom() {
  const classes = useStyles();
  const [val, setVal] = React.useState("1");

  const code = `function insertCard(card: Card): string {
    if (card.isValid()) {
      return "进入输入密码界面";
    } else {
      return "退卡，进入空闲状态";
    }
  }
  
  function checkPassword(password: string, remainingAttempts: number): string {
    if (password === "correct password") {
      return "进入选择交易类型状态";
    } else {
      if (remainingAttempts > 0) {
        return "重新输入密码";
      } else {
        return "直接退卡";
      }
    }
  }
  
  function performTransaction(transactionType: string): string {
    switch (transactionType) {
      case "查询":
        return "进入选择查询界面";
      case "取款":
        return "进入选择取款界面";
      case "存款":
        return "进入选择存款界面";
      case "退出":
        return "退卡，回到空闲状态";
      default:
        return "无效的交易类型";
    }
  }
  `

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVal(event.target.value as string);
    };
    const [isVisible, setIsVisible] = React.useState(false);

    const handleClick = () => {
        alert("测试完成！请查看测试结果");
        setIsVisible(true);
    };

  return (
    <div className={classes.root}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Paper elevation={3} className={classes.Paper }>
                <Typography  variant="h6" color='primary'>题目描述</Typography>
                <br></br>
                <Typography >构建ATM系统的statetransition diagram, 利⽤state transition testing⽅法将其转换成transition tree，⽽
后基于transition tree的路径设计测试⽤例，要考虑robustness。</Typography><br/>
            </Paper>

        </Grid>

        </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper }>
            <Typography  variant="h6" color='primary'>ATM机的状态</Typography>
            <br/>
          <StateTable/>
           </Paper >
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper } >
            
            <Typography  variant="h6" color='primary'>ATM机的行为</Typography>
          <br/>
           <ActionTable></ActionTable>
          </Paper >
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper } style={{minHeight:770}}>
            <Typography  variant="h6" color='primary'>状态图</Typography>
            <br/>
            <img src='testPic/state.jpg' alt="atm状态图" style={{ maxWidth: '100%', height: 'auto' }}></img>
                   
          </Paper >
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper } >
            <Typography  variant="h6" color='primary'>状态树</Typography>
            <br/>
            <Typography>
1. 状态树的节点描述状态图的状态，状态树的枝⼲描述状态图的事件。<br/>
2. 转换树的根节点为状态图的初始状态，转换树的终节点为叶节点。<br/>
3. 转换树的每个节点，在状态图中如有直接后续状态，则添加⼀个枝⼲和节点（不同的事件应有不同的
枝⼲和节点），直到出现从根节点到新添加的节点的路径上已经出现过相同状态的情况，可将此节点作为叶节点</Typography>
            <img src='testPic/tree.jpg' alt="atm状态树" style={{ maxWidth: '100%', height: 'auto' }}></img>
          </Paper >
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.Paper } >
            <Typography  variant="h6" color='primary'>测试用例</Typography>
            <br/>
            <Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
            <UseCaseTable1/>
            <br/>
            <Button variant="outlined" color="primary" onClick={handleClick}>
              开始测试
            </Button>
            </Grid>
            <Grid item xs={4}>
            <UseCaseTable2/></Grid>
            <Grid item xs={4}>
              <UseCaseTable3/>
              </Grid>
            </Grid>
          </Typography>
          </Paper >
          </Grid>
          <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper }  >
            <Typography  variant="h6" color='primary'>测试代码</Typography>
            <SyntaxHighlighter language="typescript" style={solarizedlight}>
                                {code}
                            </SyntaxHighlighter>
          </Paper >
          </Grid>

          <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper }  style={{minHeight:700}}>
            <Typography  variant="h6" color='primary'>测试结果</Typography>
            <br/>
            <Typography>
              {isVisible&&<EchartsTest value={val}/>}
              {!isVisible&&<Typography><br/><br/>请先进行测试</Typography>}
          </Typography>
          </Paper >
          </Grid>
      </Grid>
    </div>
  );
}
