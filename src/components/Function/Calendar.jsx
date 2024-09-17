import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
import '../Style/Dashboard.css'; // Your custom styles
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const eventName = prompt("Enter event name: ");
    if (eventName) {
      const newEvent = {
        id: new Date().getTime().toString(), //generate a unique ID
        title: eventName,
        start: info.dateStr
    };
      setEvents([...events, newEvent]);
      alert(`Event ${eventName} added on ${info.dateStr}`);
    }
  };

  const handleEventclick = (info) => {
    if (window.confirm(`Are u sure you want to delete the evenet: ${info.event.title}?`))
        setEvents(events.filter(event => event.id !== info.event.id));
        info.event.remove(); //remove the event from calendar
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <Header />
      </div>
      <div className="calendar-sidebar">
        <Sidebar />
      </div>
      <div className="calendar-container">
        <FullCalendar 
        className='calendar-view'
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventclick}
        height={"95vh"}
        showNonCurrentDates={false}
        headerToolbar={{
            start: "today prev,next", 
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        />
      </div>
    </div>
  );
}

export default Calendar;
