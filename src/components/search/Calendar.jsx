import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { FilledButton } from '../common/commonStyles';
import { CalendarContainer, CalendarDisplay, CalendarHeader, CalendarWeekDays, Day } from './SearchStyles';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Calendar({selectedRange, handleSelect, setExpanded, className}) {

    const [width, setWidth] = useState(window.innerWidth);
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());


    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = () => {
        setMonth(month => month - 1);
        if (month === 0) {
            setYear(year => year - 1);
            setMonth(11);
        }
    };

    const handleNextMonth = () => {
        setMonth(month => month + 1);
        if (month === 11) {
            setYear(year => year + 1);
            setMonth(0);
        }
    };


    const renderWeekdays = () => {
        const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
        return (
            <>
                {weekdays.map((day, i) => (
                    <CalendarWeekDays key={day + i}>{day}</CalendarWeekDays>
                ))}
            </>
        );
    };

    const renderDays = (m) => {
        const numDays = daysInMonth(m, year);
        const firstDay = firstDayOfMonth(m, year);
        let days = [];

        for (let i = 1; i <= firstDay; i++) {
            days.push(<Day key={`empty${i}`}></Day>);
        }

        for (let i = 1; i <= numDays; i++) {
            const date = new Date(year, m, i);
            const disabled = date < new Date();
            const selected = selectedRange.length === 2 && date.getTime() >= selectedRange[1]?.getTime() && date <= selectedRange[0]?.getTime();
            const startORend = date.getTime() == selectedRange[0]?.getTime() || date.getTime() == selectedRange[1]?.getTime();
            days.push(<Day key={i} disabled={disabled} startORend={startORend} selectedRange={selected} onClick={disabled ? () => {} :() => handleSelect(date)}>{i}</Day>);
        }

        return (
            <>
                {days.map(day => day)}
            </>
        );
    };

    const resize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", resize)
    }, [])

    return (
        <CalendarContainer className={className}>  
            {
                width < 930 ? (
                    <div>
                        <CalendarHeader>
                            <FontAwesomeIcon icon={'fa-solid fa-chevron-left'} onClick={handlePrevMonth}/>
                            <p>{capitalizeFirstLetter(`${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`)}</p>
                            <FontAwesomeIcon icon={'fa-solid fa-chevron-right'} onClick={handleNextMonth}/>
                        </CalendarHeader>
                        <CalendarDisplay>
                            {renderWeekdays()}
                            {renderDays(month)}
                        </CalendarDisplay>
                    </div>
                    )
                    : 
                    (
                    <div>
                        <div>
                            <CalendarHeader>
                                <FontAwesomeIcon icon={'fa-solid fa-chevron-left'} onClick={handlePrevMonth}/>
                                <p>{capitalizeFirstLetter(`${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`)}</p>
                            </CalendarHeader>
                            <CalendarDisplay>
                                {renderWeekdays()}
                                {renderDays(month)}
                            </CalendarDisplay>
                        </div>
                        <hr />
                        <div>
                            <CalendarHeader>
                                <p>{capitalizeFirstLetter(`${new Date(year, month + 1).toLocaleString('default', { month: 'long' })} ${year}`)}</p>
                                <FontAwesomeIcon icon={'fa-solid fa-chevron-right'} onClick={handleNextMonth}/>
                            </CalendarHeader>
                            <CalendarDisplay>
                                {renderWeekdays()}
                                {renderDays(month + 1)}
                            </CalendarDisplay>
                        </div>
                    </div>
                    )
                
            }
            <FilledButton onClick={() => setExpanded(false)}>
                Aplicar
            </FilledButton>
        </CalendarContainer>
    );
}

export default Calendar;