import Calendar from "../calendar";
import Computer from "../computer";
import Atm from "../atm";
import Telecom from "../telecom";
import Test from "../test";
import Program from "../program";
import Triangle from "../triangle";
import HomePage from "../homepage";
// import { Typography } from "@material-ui/core";

interface CommonProps {
    type: string;
}

export default function Common(props:CommonProps) {
   
    if (props.type === "万年历问题") 
        return <Calendar/>
    else if (props.type === "电脑销售系统")
        return <Computer/>
    else if (props.type === "ATM机")
        return <Atm/>
    else if (props.type === "电信收费问题")
        return <Telecom/>
    else if (props.type === "销售系统白盒测试")
        return <Test/>
    else if (props.type === "程序图")
        return <Program/>
    else if (props.type === "三角形问题")
        return <Triangle/>
    else
        return <HomePage/>
        
}