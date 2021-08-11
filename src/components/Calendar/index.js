import React from 'react'
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";


//GUARDAR A KEY DA API COMO ENV.VAR

const API_KEY = "AIzaSyBsk1sCAGkSkFneV52lCZsnd9XlRTNHKnw";
const calendars = [
    { calendarId: "5ir318tc7g3hd8bdm57mi1p8vo@group.calendar.google.com" }
];

const styles = {
    calendar: {
        borderWidth: "3px",
    },
    today: css`
    border: 1px solid red;
  `
}

// CALENDÁRIO NÃO ESTÁ A ATUALIZAR COM NOVOS EVENTOS - A AVERIGUAR POSTERIORMENTE
const CalendarBase = () => {
    return (
        <div>
            <Calendar
                apiKey={API_KEY}
                calendars={calendars}
                styles={styles}
            />
        </div>
    )
}

export default CalendarBase
