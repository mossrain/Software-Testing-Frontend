import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { InputLabel, NativeSelect, Typography } from '@material-ui/core';
import CaseTable from './case_table';
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
            minHeight: 'auto',
        },
        Paper2: {
            padding: theme.spacing(2),
            //   textAlign: 'center',
            color: theme.palette.text.secondary,
            minHeight: 710,
        },
    }),
);

//写一个UseCase函数组件，返回的JSX随option value变化
function UseCase(props: { value: string }) {
    switch (props.value) {
        case "1":
            return <div><br /><Typography>语句覆盖测试用例</Typography><CaseTable /></div>;
        case "2":
            return <div><br /><Typography>判断覆盖测试用例</Typography><CaseTable /></div>;
        case "3":
            return <div><br /><Typography>条件覆盖测试用例</Typography><CaseTable /></div>;
        case "4":
            return <div><br /><Typography>判断-条件覆盖测试用例</Typography><CaseTable /></div>;
        case "5":
            return <div><br /><Typography>条件组合覆盖测试用例</Typography><CaseTable /></div>;
        default:
            return <div><br /><Typography>请选择测试方法</Typography></div>;
    }
}


export default function Commission() {
    const classes = useStyles();
    const [val, setVal] = React.useState("1");

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setVal(event.target.value as string);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.Paper}>
                        <Typography variant="h6" color='primary'>题目描述</Typography>
                        <br></br>
                        <Typography >
                            一销售系统,如果销售员的年销售额大于200万RMB且请假天数不超过10天的情况下,现金到帐大于等于60%,则佣金（提成）系数为7,即佣金值为销售额除以佣金系数；
                            <br></br>现金到帐小于60%，佣金不予计算。
                            <br></br>所有其他情况且现金到帐小于等于85%，则按佣金系数均为6计算佣金，现金到账大于85%，佣金系数按5处理。
                            <br></br>
                            根据题意设计流程图并设计测试用例实现白盒测试（White Box Test）的1）语句覆盖,2）判断覆盖,3）条件覆盖,4）判断—条件覆盖,5）条件组合覆盖
                        </Typography><br />
                        <br />
                    </Paper >
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} className={classes.Paper2} >
                        <Typography variant="h6" color='primary'>测试用例</Typography>
                        <br />
                        <InputLabel htmlFor="select"></InputLabel>
                        <NativeSelect id="select" fullWidth value={val} onChange={handleChange}>
                            <option value="1">语句覆盖</option>
                            <option value="2">判断覆盖</option>
                            <option value="3">条件覆盖</option>
                            <option value="4">判断-条件覆盖</option>
                            <option value="5">条件组合覆盖</option>
                        </NativeSelect>
                        <UseCase value={val} />
                    </Paper >
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} className={classes.Paper2}>
                        <Typography variant="h6" color='primary'>测试结果</Typography>
                        <EchartsTest />
                    </Paper >
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.Paper}>
                        <Typography variant="h6" color='primary'>程序流程图</Typography>
                        <br />
                        <img src='testPic/commission.png' alt="程序流程图" style={{ maxWidth: '100%', height: 'auto' }}></img>
                    </Paper >
                </Grid>
               
            </Grid>
        </div>
    );
}
