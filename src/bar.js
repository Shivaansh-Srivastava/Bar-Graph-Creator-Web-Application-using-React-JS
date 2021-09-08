import React from "react";
import data from "./db";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Information from "./information";

class Bar extends React.Component{
    render(){
        const list = data.map(item => <Information info={item} />)
        return(
            <div>
                <Paper>
                    <Chart data={data}>
                        <ArgumentAxis />
                        <ValueAxis />
                        <BarSeries valueField="value" argumentField="argument" />
                    </Chart>
                </Paper>
                <h2>Indices to help understand the Graph:</h2>
                {list}
            </div>
        )
    }
}

export default Bar