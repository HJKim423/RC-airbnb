import { ReactComponent as Right } from '../svg/right.svg';
import { ReactComponent as Left } from '../svg/left.svg';

import {useState, useEffect} from 'react';
import moment from 'moment';

function Calender(){
    // 왼쪽 달력
    const [getMoment, setMoment]=useState(moment());
    const today = getMoment;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    const calendarArr=()=>{
        let result = [];
        let week = firstWeek;
    
        for ( week; week <= lastWeek; week++) {
            result = result.concat(
            <tr key={week}>
                {
                Array(7).fill(0).map((data, index) => {
                  let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
                  if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){ //오늘
                    return(
                        <td key={index}>
                            <span>{days.format('D')}</span>
                        </td>
                    );
                  }else if(days.format('MM') !== today.format('MM')){ //저번달,다음달 -안보여야하는 날들
                    return(
                        <td key={index} className="lastMonth">
                            <span>{days.format('D')}</span>
                        </td>
                    );
                }else if(moment().format('YYYYMMDD') > days.format('YYYYMMDD')){
                    return(//이번달 오늘 이전
                        <td key={index} className="lastDays"> 
                            <span>{days.format('D')}</span>
                        </td>
                    );
                }
                else{
                    return(//이번달 오늘 이후
                    <td key={index} > 
                        <span>{days.format('D')}</span>
                    </td>
                );
                }
                })
            }
            </tr>
        );
        }
        return result;
    }

    // 오른쪽 달력
    const next = getMoment.clone().add(1, 'month');
    const firstWeeknext = next.clone().startOf('month').week();
    const lastWeeknext = next.clone().endOf('month').week() === 1 ? 53 : next.clone().endOf('month').week();

    const calendarArrNext=()=>{
        let result = [];
        let week = firstWeeknext;
    
        for ( week; week <= lastWeeknext; week++) {
            result = result.concat(
            <tr key={week}>
                {
                Array(7).fill(0).map((data, index) => {
                  let days = next.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
                  if(days.format('MM') !== next.format('MM')){ //저번달,다음달 -안보여야하는 날들
                    return(
                        <td key={index} className="lastMonth">
                            <span>{days.format('D')}</span>
                        </td>
                    );
                }
                else if(moment().format('YYYYMMDD') > days.format('YYYYMMDD')){
                    return(//이번달 오늘 이전(회색)
                        <td key={index} className="lastDays"> 
                            <span>{days.format('D')}</span>
                        </td>
                    );
                }
                else{
                    return(//다음달(오늘 이후)
                    <td key={index} > 
                        <span>{days.format('D')}</span>
                    </td>
                );
                }
                })
            }
            </tr>
        );
        }
        return result;
    }


    return (
    <div className="stay__calender">
        
        <div className='calender__left'>
            <div className="calender__left__head">
                <button className="calender__left__btn" onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}>
                    <Left />
                </button>
                <div className="calender__month">{today.format('YYYY 년 MM 월')}</div>
            </div>
            <table>
                <tbody>
                {calendarArr()}
                </tbody>
            </table> 
        </div>
        <div className='calender__right'>
        <div className="calender__right__head">
                <button className="calender__right__btn" onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}>
                    <Right />
                </button>
                <div className="calender__month">{next.format('YYYY 년 MM 월')}</div>
            </div>
            <table>
                <tbody>
                {calendarArrNext()}
                </tbody>
            </table>
        </div>
    </div>
    );
}



export default Calender;