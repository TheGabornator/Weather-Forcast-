import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function Average(data){
    return _.round(_.sum(data)/data.length)
}




export default (props) => {
    return (
<div>
          <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
          <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
         </Sparklines>
         <div>{Average(props.data)} {props.units}</div>
</div>
    );
}