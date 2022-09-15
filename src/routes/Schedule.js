import PageHeader from "../components/PageHeader";
import ScheduleCard from "../components/ScheduleCard";
import { useLogin } from "../contexts/LoginContext";
import { useState, useEffect } from "react";

const Schedule = () => {
  const userAuthData = useLogin().userAuthData;
  const token = userAuthData.token;
  const userId = userAuthData.userId;
  // console.log(userId && userId);
  // console.log(token && token);

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
            if(response.ok) {
              return response.json()
            } else {
              throw new Error("unauthorized")
            }})
        .then((data) => {
          setScheduleData(data);
          console.log(scheduleData);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <>
      <PageHeader text="My Schedule" />
      <h1>testing schedule card</h1>
      <ScheduleCard textTitle="Yoga Flow Workout" textTime={`Monday - 19.30`} />
    </>
  );
};

export default Schedule;
