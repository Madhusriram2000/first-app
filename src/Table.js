 import React from 'react'
import Spline from './Chart1'
import Linechart from './Chart2'
import Pie from './Chart3'
import Bar from './Chart4'
import Circlechart from './Chart7'
import Radar from './Charts5'
import NEWchart from './Charts6'
import './Table.css'


 function Table() { 
   return (
     <div><table className="table1">
        <tr id="bgcolor"><th>PRODUCTION</th>
        <th>WATER USAGE</th>
        <th>ENERGY USED</th>
        <th>ON TIME</th>
        <th>OFF TIME</th></tr>
        <tr id="row2">
            <td>1500<span className="span">Picese</span></td>
            <td>10<span className="span">liters</span></td>
            <td>15.23<span className="span">Kw/h</span></td>
            <td>7<span className="span">Hrs</span></td>
            <td>12<span className="span">Hrs</span></td>
        </tr>
        <tr>
            <td colSpan={3}>
                <Spline/>
            </td>
            <td colSpan={2}><Linechart/></td>
            
        </tr>
        <tr>
            <td colSpan={5}><Bar/></td>
        </tr>
        <tr>
            <td><Pie/></td>
            <td><Radar/></td>
            <td><h1>This was done by MADHU SRIRAM</h1></td>
            <td><NEWchart/></td>
            <td><Circlechart/></td>
            
            </tr>
        </table></div>
   )
 }
 
 export default Table