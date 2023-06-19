import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

export default function UseCaseTable2() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>用例编号</TableCell>
            <TableCell>ATM_TC_2</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>优先级</TableCell>
            <TableCell>高</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>测试覆盖的系统功能</TableCell>
            <TableCell>ATM机检验密码：空闲→插卡</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>前置条件</TableCell>
            <TableCell>用户插入卡且检查卡成功</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>用例序号</TableCell>
            <TableCell>输入</TableCell>
            <TableCell>预期结果</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>用户插入正确的密码</TableCell>
            <TableCell>用户进入选择交易类型状态</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>用户插入错误的密码</TableCell>
            <TableCell>
              若用户输入错误次数小于三次，则用户重新输入密码；若用户第三次输入错误，则直接退卡。
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
