import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./styles.css";

// the css must be imported for each plugin separately
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

class MyCalendar extends React.Component {

  state = {
    weekends: true,
    events: [
      // default event
      { title: "Default event", start: new Date() }
    ]
  };

  render() {
    return (
      <div className="page">
        <div className="page-top">
          <button onClick={this.toggleWeekends}>Toggle weekends</button>&nbsp;
        </div>
        <div className="calendar">
        <h1 align="center" style={{color: "red"}}>Click on a date to add an event</h1>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            weekends={this.state.weekends}
            events={this.state.events}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      weekends: !this.state.weekends
    });
  };


  handleDateClick = arg => {
    if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
      this.setState({
        // add new event data
        events: this.state.events.concat({
          // creates a new array
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        })
      });
    }
  };
}
export default MyCalendar;