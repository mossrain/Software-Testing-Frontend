import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

export default function ActionTable() {
  return (
    <TableContainer component={Paper} style={{minHeight:510}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>行为序号</TableCell>
            <TableCell>行为名称</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>0</TableCell>
            <TableCell>插入卡</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>检查卡成功</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>检查卡失败</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>密码正确</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>密码错误</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>选择交易类型</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>6</TableCell>
            <TableCell>退出</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
