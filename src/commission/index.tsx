import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { InputLabel, NativeSelect, Typography } from '@material-ui/core';
import CaseTable1 from './case_table_1';
import CaseTable2 from './case_table_2';
import CaseTable3 from './case_table_3';
import CaseTable4 from './case_table_4';
import CaseTable5 from './case_table_5';
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
            return <div><br /><Typography>语句覆盖测试用例:<br></br>
                语句覆盖的要求是使程序的每一个可执行语句至少执行一次。测试用例设计如下</Typography><br></br>
                <br></br>
                <CaseTable1 /></div>;
        case "2":
            return <div><br /><Typography>判断覆盖测试用例:<br></br>
                判断覆盖要求，每一个判断的真分支和假分支至少经历一次，，即判断的真假值均被满
                足。根据流程图中给出的判断条件，测试用例设计如下：
            </Typography><br></br>
                <CaseTable2 /></div>;
        case "3":
            return (
                <div>
                    <br />
                    <Typography>
                        条件覆盖测试用例:
                        <br />
                        条件覆盖的要求是使每个判断中的每个条件的可能值都至少满足一次。在本题中，应该考虑到如下条件:
                        <br />
                        · 年销售额&gt;200W,取真值,记为 T1;
                        <br />
                        · 年销售额&gt;200W,取假值,即年销售额&lt;=200W,记为 F1;
                        <br />
                        · 请假天数&lt;=10,取真值,记为 T2;
                        <br />
                        · 请假天数&lt;=10,取假值,即请假天数&gt;10,记为 F2;
                        <br />
                        · 现金到账达标，取真值，记为 T3;
                        <br />
                        · 现金到账达标，取假值，记为 F3
                    </Typography>
                    <br />
                    <CaseTable3 />
                </div>
            );

        case "4":
            return <div><br /><Typography>判断-条件覆盖测试用例<br></br>
                在本题中判定-条件覆盖与条件覆盖基本一致。测试用例设计如下<br></br>
            </Typography>
                <br></br>
                <CaseTable4 /></div>;
        case "5":
            return <div><br /><Typography>条件组合覆盖测试用例<br></br>
                条件组合覆盖要求每个判断的所有可能的条件的取值组合都至少执行一次。本题中两个
                判断分别包含 2 个和 1 个条件，因此有八种组合，测试用例设计如下：<br></br>
            </Typography>
                <br></br><CaseTable5 /></div>;
        default:
            return <div><br /><Typography>请选择测试方法</Typography></div>;
    }
}


export default function Commission() {
    const classes = useStyles();
    const [val, setVal] = React.useState("1");

    // 定义 parameterMapping 对象的类型
    type ParameterMapping = {
        [key: string]: { caseType: string; passed: number; failed: number };
    };

    // 映射表
    const parameterMapping: ParameterMapping = {
        "1": { caseType: '语句覆盖测试结果', passed: 4, failed: 0 },
        "2": { caseType: '判断覆盖测试结果', passed: 4, failed: 0 },
        "3": { caseType: '条件覆盖测试结果', passed: 8, failed: 0 },
        "4": { caseType: '判断-条件覆盖测试结果', passed: 8, failed: 0 },
        "5": { caseType: '条件组合覆盖测试结果', passed: 8, failed: 0 },
    };

    // 根据 val 查找对应的参数
    const mappedParameters = parameterMapping[val];

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
                        <EchartsTest caseType={mappedParameters?.caseType} passedCases={mappedParameters?.passed} failedCases={mappedParameters?.failed} />
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
