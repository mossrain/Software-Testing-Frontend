import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

export default function UseCaseTable3() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>用例编号</TableCell>
            <TableCell>ATM_TC_3</TableCell>
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
            <TableCell>ATM机交易功能：空闲→插卡→输入密码</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>前置条件</TableCell>
            <TableCell>用户插入正确的密码</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>用例序号</TableCell>
            <TableCell>输入</TableCell>
            <TableCell>预期结果</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>用户选择查询功能</TableCell>
            <TableCell>用户进入选择查询界面</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>用户选择取款功能</TableCell>
            <TableCell>用户进入选择取款界面</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>用户选择存款功能</TableCell>
            <TableCell>用户进入选择存款界面</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>用户选择退出</TableCell>
            <TableCell>退卡，回到空闲状态</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
