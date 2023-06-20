import React, { useEffect, useState } from "react";
import * as echarts from "echarts";

interface EchartsTestProps {
  value: string;
}

function calendarTest(y: number, m: number, d: number): string {
  var flag = false;
  if (y < 1900 || y > 2100) return "年份超出范围";
  if (m < 1 || y > 12) return "月份超出范围";
  if (d < 1 || d > 31) return "日期超出范围";
  // // 判断闰年
  if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) flag = true;
  else flag = false;
  // 对二月单独判断
  if (flag == true) {
    if (m == 2) {
      if (d > 29) return "输入日期不存在";
    }
  } else {
    if (m == 2) {
      if (d > 28) return "输入日期不存在";
    }
  }
  if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
    if (d > 31) return "输入日期不存在";
  }
  if (m == 4 || m == 6 || m == 9 || m == 11) {
    if (d > 30) return "输入日期不存在";
  }
  return "输入日期存在";
}

const EchartsTest: React.FC<EchartsTestProps> = (props) => {
  const [main, setMain] = useState<HTMLDivElement | null>(null);
  const [text, setText] = useState<string>("");
  const [num, setNum] = useState<number>(0);

  if (props.value === "1" && text === "") {
    setText("基本边界值测试");
    setNum(29);
  } else if (props.value === "2" && text === "") {
    setText("健壮边界值测试");
    setNum(6);
  } else if (props.value === "3" && text === "") {
    setText("等价类测试");
    setNum(13);
  }else if (props.value === "4" && text === "") {
    setText("决策表测试");
    setNum(30);
  }

  useEffect(() => {
    if (main) {
      const myChart = echarts.init(main);
      const option: echarts.EChartOption = {
        title: {
          text: "用例测试结果",
          subtext: text + "测试结果",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["通过用例", "失败用例"],
        },
        series: [
          {
            name: "通过用例",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: num, name: "通过用例" },
              // { value: 0, name: '邮件营销' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    }
  }, [main]);

  return (
    <div
      style={{ height: "500px", width: "600px" }}
      id="main"
      ref={(ref) => setMain(ref)}
    />
  );
};

export default EchartsTest;
