import PageHeader from "../components/PageHeader";
import ScheduleCard from "../components/ScheduleCard";
import { useLogin } from "../contexts/LoginContext";
import { useState, useEffect } from "react";

const Schedule = () => {
  const userAuthData = useLogin().userAuthData;
  const token = userAuthData.token;
  const userId = userAuthData.userId;

  const [scheduleData, setScheduleData] = useState();

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("unauthorized");
          }
        })
        .then((data) => {
          {
            data && setScheduleData(data);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);

  return (
    <>
      {scheduleData && (
        <>
          <PageHeader text="My Schedule" />
          {scheduleData.classes.map((schedule, index) => (
            <ScheduleCard
              textTitle={schedule.className}
              textTime={`${schedule.classDay} - ${schedule.classTime}`}
              key={index}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Schedule;
