import React, { useEffect, useState } from "react";
import * as echarts from "echarts";

interface EchartsTestProps {
  value: string;
}

function computerTest(
  host_num: number,
  display_num: number,
  peripheral_num: number
): string {
  // 当销售额小于等于1000（包括1000）按照10%提佣金，当销售额在1000-1800之间（包括1800）的时候按照15%提佣金，
  // 当销售额大于1800时按照20%提佣金。

  var sale_amount = 0; //销售额
  var commission = 0; //佣金

  if (host_num == -1) return "自动统计本月销售总额";
  if (host_num * display_num * peripheral_num == 0) return "未卖出一台完整机器";
  if (host_num < 1 || host_num > 70) return "主机数量超出限制";
  if (display_num < 1 || display_num > 80) return "显示器数量超出限制";
  if (peripheral_num < 1 || peripheral_num > 90) return "外设数量超出限制";

  sale_amount = 25 * host_num + display_num * 30 + 45 * peripheral_num;

  if (sale_amount <= 1000) commission = 0.1 * sale_amount;
  if (sale_amount <= 1800 && sale_amount > 1000)
    commission = 0.15 * sale_amount;
  if (sale_amount >= 1800) commission = 0.2 * sale_amount;

  return commission.toString();
}

const EchartsTest: React.FC<EchartsTestProps> = (props) => {
  const [main, setMain] = useState<HTMLDivElement | null>(null);
  const [text, setText] = useState<string>("");
  const [num, setNum] = useState<number>(0);

  if (props.value === "1" && text === "") {
    setText("边界值测试");
    setNum(35);
  } else if (props.value === "2" && text === "") {
    setText("等价类测试");
    setNum(49);
  } else if (props.value === "3" && text === "") {
    setText("决策表测试");
    setNum(10);
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
