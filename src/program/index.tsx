import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
            minHeight: 710,
            height: '100%',
        },
        paperContainer: {
            display: 'flex',
            alignItems: 'stretch',
        },
    })
);



export default function Program() {
    const classes = useStyles();

    const codeString = `void ModuleX(int x, int y, int Wid, char *Str)
{
    unsigned Zcode, Bcode;
    int i, j, k, Rec, Color;
    long Len;
    char Buf[72];
    while (*Str)
    {
        if ((*Str & 0x80) && (*(Str + 1) & 0x80))
        {
            Zcode = (*Str - 0xa1) & 0x07f;
            Bcode = (*(Str + 1) - 0xa1) & 0x07f;
            Rec = Zcode * 94 + Bcode;
            Len = Rec * 72L;
            fseek(fp, Len, SEEK_SET);
            fread(Buf, 1, 72, fp);
            for (i = 0; i < 24; i++)
                for (j = 0; j < 3; j++)
                    for (k = 0; k < 8; k++)
                        if (Buf[i * 3 + j] >> (7 - k) & 1)
                        {
                            Color = y + j * 8 + k - 46;
                            PutPoint(x + i, y + j * 8 + k, Color);
                        }
            x = x + 24 + Wid;
            Str += 2;
        }
    }
    return;
}`;


    return (
        <div className={classes.root}>
            <Grid container spacing={1} className={classes.paperContainer}>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h5" color='primary'>题目描述</Typography>
                        <br></br>
                        <Typography>
                            按照下列C语言程序前的编号，构建起程序图（control flow graph or program diagram）
                            <br />
                            <br />
                            不需要理解具体的代码实现内容，只要理解其逻辑即可。
                            <br />
                            <br />
                            代码内容如下
                            <br />
                        </Typography>
                        <br />
                        <Typography>
                            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                                {codeString}
                            </SyntaxHighlighter>
                        </Typography><br />
                        <br />
                    </Paper >
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} className={classes.paper} >
                        <Typography variant="h5" color='primary'>program diagram</Typography>
                        <br />
                        <img src='testPic/program.png' alt="程序流程图" style={{ maxWidth: '100%', height: 'auto' }}></img>
                    </Paper >
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} className={classes.paper} >
                        <Typography variant="h5" color='primary'>control flow graph</Typography>
                        <br />
                        <img src='testPic/control.png' alt="控制流程图" style={{ maxWidth: '100%', height: 'auto' }}></img>
                    </Paper >
                </Grid>
            </Grid>
        </div>
    );
}
