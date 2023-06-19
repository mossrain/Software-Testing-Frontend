import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

export default function StateTable() {
  return (
    <TableContainer component={Paper} style={{maxHeight: 510}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>状态序号</TableCell>
            <TableCell>状态名称</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>0</TableCell>
            <TableCell>初始状态</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>空闲状态</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>检查卡状态</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>第一次输入密码</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>第二次输入密码</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>第三次输入密码</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>6</TableCell>
            <TableCell>选择交易类型</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7</TableCell>
            <TableCell>查询状态</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>8</TableCell>
            <TableCell>取款状态</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>9</TableCell>
            <TableCell>存款状态</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10</TableCell>
            <TableCell>退卡状态</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
