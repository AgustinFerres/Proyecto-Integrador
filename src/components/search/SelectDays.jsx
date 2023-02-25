import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { primaryColor } from "../common/commonStyles";
import Calendar from "./Calendar";
import { SelectDate, SelectDaysContainer } from "./SearchStyles";

const SelectDays = () => {

    const [selectedRange, setSelectedRange] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const handleSelect = (day) => {
        if (selectedRange.length === 0) {
            setSelectedRange([day]);
        } else if (selectedRange.length === 1) {
            const [start] = selectedRange;
            const end = day;
            setSelectedRange([start, end].sort((a,b)=> b.getTime() - a.getTime()));
        } else {
            setSelectedRange([day]);
        }
    };

    const calendarProps = {
        selectedRange, handleSelect, setExpanded
    }
    return (
        <SelectDaysContainer>
            <SelectDate onClick={() => setExpanded(prev => !prev)}>
                <FontAwesomeIcon fontSize={'20px'} color={primaryColor} icon={'fa-solid fa-calendar-day'}/>
                <p>{`${selectedRange[0]?.toLocaleDateString() === undefined ? 'Retiro' : selectedRange[1]?.toLocaleDateString()} - ${selectedRange[1]?.toLocaleDateString() === undefined ? 'Devolucion' : selectedRange[0]?.toLocaleDateString()}`}</p>
            </SelectDate>
            {
                expanded && <Calendar {...calendarProps} />
            }
        </SelectDaysContainer>
    )
}

export default SelectDays
