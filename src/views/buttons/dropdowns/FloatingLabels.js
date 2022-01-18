import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import React, { Component } from 'react'
import stub from './stub'

const events1 = [
  {
    id: 1,
    title: '',
    start: '2022-01-14T06:00:00',
    end: '2022-01-14T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    url: 'https://whereby.com/bf8e144d-9719-45dc-91aa-ca74fe62bf2f',
    start: '2021-06-16T13:00:00',
    end: '2021-06-16T18:00:00',
  },
  { id: 3, title: 'event 3', start: '2021-06-17', end: '2021-06-20' },
]

const events = stub

function FloatingLabels() {
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        customButtons={{
          new: {
            text: 'new',
            click: () => console.log('new event'),
          },
        }}
        events={events}
        eventColor="green"
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
    </div>
  )
}
export default FloatingLabels
