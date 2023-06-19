import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

interface EchartsTestProps {}

const EchartsTest: React.FC<EchartsTestProps> = () => {
  const [main, setMain] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (main) {
      const myChart = echarts.init(main);
      const option: echarts.EChartOption = {
        title: {
          text: '用例测试结果',
          subtext: 'ATM测试结果',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['通过用例', '失败用例'],
        },
        series: [
          {
            name: '通过用例',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 59, name: '通过用例' },
              // { value: 0, name: '邮件营销' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    }
  }, [main]);

  return <div style={{ height: '500px', width: '600px' }} id="main" ref={(ref) => setMain(ref)} />;
};

export default EchartsTest;
