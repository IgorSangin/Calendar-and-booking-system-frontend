import React from "react";
import { Col, Row } from "antd";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

import "./styles.css";

// the css must be imported for each plugin separately
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

class MyCalendar extends React.Component {

  state = {
    activities: [
      { title: "Go shopping", id: "1" },
      { title: "Play games", id: "2" },
      { title: "Walk the dog", id: "3" },
      { title: "Do cleaning", id: "4" },
    ]
  };

  // Making the activities draggable
  componentDidMount() {
    let element = document.getElementById("activities-box");
    new Draggable(element, {
      itemSelector: ".fc-event",
      eventData: function(activityEl) {
        let title = activityEl.getAttribute("title");
        let id = activityEl.getAttribute("data");
        return {
          title: title,
          id: id
        };
      }
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-top">
        <Row>
          <Col lg={3} sm={3} md={3}>
            <div
              id="activities-box"
              style={{
                padding: "10px",
                width: "80%",
                height: "auto",
                maxHeight: "-webkit-fill-available"
              }}
            >
              <p align="center">
                <strong>Activities</strong>
              </p>
              {this.state.activities.map(activity => (
                <div
                  className="fc-event"
                  title={activity.title}
                  data={activity.id}
                  key={activity.id}
                >
                  {activity.title}
                </div>
              ))}
            </div>
          </Col>
        </Row>
        </div>
        <div className="calendar">
        <h1 align="center" style={{color: "red"}}>Click on a date to add an activity</h1>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            activities={this.state.activities}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }


  handleDateClick = arg => {
    if (window.confirm("Would you like to add an activity to " + arg.dateStr + " ?")) {
      this.setState({
        // add new activity data
        activities: this.state.activities.concat({
          // creates a new array
          title: "My activity",
          start: arg.date,
          allDay: arg.allDay
        })
      });
    }
  };
}
export default MyCalendar;