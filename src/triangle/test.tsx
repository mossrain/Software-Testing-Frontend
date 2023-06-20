import React, { useEffect, useState } from 'react';
import {Typography} from "@material-ui/core";
  
interface TriangleTestProps {
  value: string;
}

function triangleTest(a:number,b:number,c:number): string{

    if(a<=0||b<=0||c<=0||a>100||b>100||c>100){
        return "边长超出设定范围"
    }
    if(a+b<=c||a+c<=b||b+c<=a){
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

const TriangleTest: React.FC<TriangleTestProps> = (props) => {
  const [main, setMain] = useState<HTMLDivElement | null>(null);
  const [text, setText] = useState<string>('');
  const [inputValues, setInputValues] = useState<string>('');

  useEffect(() => {
    if (main) {
        const values = props.value.split(' ');
        const a = parseInt(values[0]);
        const b = parseInt(values[1]);
        const c = parseInt(values[2]);
        if(Number.isNaN(a)||Number.isNaN(b)||Number.isNaN(c)){
            setText("")
        }else{
            const result = triangleTest(a, b, c);
            setText(result);
        }
    }
}, [main, inputValues]);

return (
    <div id="main" ref={(ref) => setMain(ref)}>
      <br />
      <Typography>{text}</Typography>
    </div>
  );
};

export default TriangleTest;
