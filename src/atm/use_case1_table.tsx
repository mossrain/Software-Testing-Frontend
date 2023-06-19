import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

export default function UseCaseTable1() {
  return (
    <TableContainer component={Paper}  style={{minHeight:500}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>用例编号</TableCell>
            <TableCell>ATM_TC_1</TableCell>
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
            <TableCell>ATM机插卡功能：空闲→插卡</TableCell>
            <TableCell></TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>前置条件</TableCell>
            <TableCell>无</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>用例序号</TableCell>
            <TableCell>输入</TableCell>
            <TableCell>预期结果</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>用户插入正确的卡</TableCell>
            <TableCell>检查卡成功，进入输入密码界面</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>用户插入错误的卡</TableCell>
            <TableCell>检查卡失败，退卡，进入空闲状态</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
