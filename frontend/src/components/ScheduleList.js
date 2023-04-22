import React, { useEffect, useState } from "react";
import { API } from "../service/Service";
import "bootstrap/dist/css/bootstrap.min.css";

function ScheduleList() {
  const [schedules, setSchedule] = useState([]);
  useEffect(() => {
    API.getSchedules().then((res) => setSchedule(res));
  }, []);
  console.log(schedules);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Schedule ID</th>
            <th>Available Days</th>
            <th>Departure Time</th>
            <th>Travel Duration</th>
            <th>Flight ID</th>
            <th>Route ID</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((sch) => {
            return (
              <tr key={sch.scheduleID}>
                <td>{sch.scheduleID}</td>
                <td>{sch.availableDays}</td>
                <td>{sch.departureTime}</td>
                <td>{sch.travelDuration}</td>
                <td>{sch.flightBean.flightID}</td>
                <td>{sch.routeBean.routeID}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleList;
