import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

interface EchartsTestProps {
  value: string;
}

function triangleTest(a:number,b:number,c:number): string{

    if(a<=0||b<=0||c<=0||a>100||b>100||c>100){
        return "边长超出设定范围"
    }
    if(a+b>=c||a+c>=b||b+c>=a){
        return "不构成三角形"
    }
    if(a==b||a==c||b==c){
        if(a==b&&a==c){
            return "构成等边三角形"
        }else{
            return "构成等腰三角形"
        }
    }
    return "构成一般三角形"
}

const EchartsTest: React.FC<EchartsTestProps> = (props) => {
  const [main, setMain] = useState<HTMLDivElement | null>(null);

  const [text, setText] = useState<string>("");
  const [num, setNum] = useState<number>(0);

  if (props.value === "1" && text === "") {
    setText("边界值测试");
    setNum(32);
  } else if(props.value === "2" && text === "") {
    setText("等价类测试");
    setNum(13);
  }


  useEffect(() => {
    if (main) {
      const myChart = echarts.init(main);
      const option: echarts.EChartOption = {
        title: {
          text: '用例测试结果',
          subtext: text+'测试结果',
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
              { value: num, name: '通过用例' },
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
