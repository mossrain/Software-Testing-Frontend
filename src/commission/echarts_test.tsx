import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

interface EchartsTestProps {
  caseType: string;
  passedCases: number;
  failedCases: number;
}

const EchartsTest: React.FC<EchartsTestProps> = ({ caseType, passedCases, failedCases }) =>  {
  const [main, setMain] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (main) {
      const myChart = echarts.init(main);
      const option: echarts.EChartOption = {
        title: {
          text: '用例测试结果',
          subtext: caseType,
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['用例通过', '用例不通过'],
        },
        series: [
          {
            name: '测试结果',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: passedCases, name: '通过用例' },
              { value: failedCases, name: '不通过用例' },
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
  }, [main, caseType, passedCases, failedCases]);

  return <div style={{ height: '500px', width: '600px' }} id="main" ref={(ref) => setMain(ref)} />;
};

export default EchartsTest;
