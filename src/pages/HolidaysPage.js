import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';


export default class Holidays extends React.Component {

  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}
       events={[
    { title: 'event 1', date: '2019-07-31' },
    { title: 'event 2', date: '2019-04-02' }
  ]} />
    )
  }

}