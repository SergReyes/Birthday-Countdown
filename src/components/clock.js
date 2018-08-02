import React, { Component } from 'react';

class Clock extends Component {
    render(){
        const time = this.props.timeRemaining;
        return(
            <div className="Clock">
                <div className="Clock__days Clock__box">  
                    <label className="Clock__title">DAYS</label>
                    <label className="Clock__amount">{time.days}</label>
                </div>
                <div className="Clock__hours Clock__box">  
                    <label className="Clock__title">HRS</label>
                    <label className="Clock__amount">{time.hours}</label>
                </div>
                <div className="Clock__min Clock__box">  
                    <label className="Clock__title">MINS</label>
                    <label className="Clock__amount">{time.minutes}</label>
                </div>
                <div className="Clock__seconds Clock__box">  
                    <label className="Clock__title">SECS</label>
                    <label className="Clock__amount">{time.seconds}</label>
                </div>
            </div>
        )
    }
}

export default Clock;