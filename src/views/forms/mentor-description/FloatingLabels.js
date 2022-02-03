import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import React, { Component, useState } from 'react'
import stub from './stub'
import FlowCartByDate from './FlowCart'

const events = stub

function FloatingLabels(response) {
  const [data, setData] = useState({
    visible: false,
    id: false,
  })

  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          center: 'timeGridWeek,timeGridDay',
        }}
        events={events}
        eventColor="green"
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) =>
          setData({
            visible: true,
            id: e.event.id,
          })
        }
      />
      <FlowCartByDate data={data} />
    </div>
  )
}
export default FloatingLabels
