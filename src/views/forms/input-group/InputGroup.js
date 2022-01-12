import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import React, { Component } from 'react'

const events = [
  {
    id: 1,
    title: '',
    color: 'green',
    start: '2022-01-13T00:00:00',
    url: 'https://whereby.com/bf8e144d-9719-45dc-91aa-ca74fe62bf2f',
    end: '2022-01-13T12:00:00',
  },
  {
    id: 1,
    title: '',
    color: 'red',
    start: '2022-01-14T00:00:00',
    end: '2022-01-14T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    color: 'green',
    start: '2021-06-16T13:00:00',
    end: '2021-06-16T18:00:00',
  },
  { id: 3, title: 'event 3', start: '2021-06-17', end: '2021-06-20' },
]

function InputGroup() {
  return (
    <div className="App">
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        events={events}
        eventColor={events.color}
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event)}
      />
    </div>
  )
}
export default InputGroup
