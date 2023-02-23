import React, { useState } from 'react'
import DatePiker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import './DatePikerStyles.css'

const Calendar = ({className}) => {

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState()

    function onChangeDateHandler(value) {
        setStartDate(value[0])
        setEndDate(value[1])

    }
    return (
        <DatePiker
            className={className}
            showIcon
            width={'100%'}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={onChangeDateHandler}
            minDate={new Date()}
            showDisabledMonthNavigation
            placeholderText='Fecha'
        />
    );
};

export default Calendar
