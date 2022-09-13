import PageHeader from "../components/PageHeader";
import WrapperCenterContent from "../components/WrapperCenterContent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Heading2 from "../subcomponents/texts/Heading2";
import FiveStars from "../components/FiveStars";

const ClassesDetails = () => {
  let { id } = useParams();

  const [classData, setClassData] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/classes/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setClassData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(classData);

  const [classRatingData, setClassRatingData] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/classes/${id}/ratings`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setClassRatingData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // console.log(classRatingData ? classRatingData[0].rating : "no good");

  // let rating = classRatingData && classRatingData[0].rating;

  // let testArrayRating = new Array(rating);

  // console.log(testArrayRating);

  const starColors = [
    { classes: " " },
    { classes: " " },
    { classes: " " },
    { classes: " " },
    { classes: " " },
  ];

  return (
    <>
      {classData && (
        <>
          <PageHeader arrowColorWhite={true} barsColorWhite={true} />

          <WrapperCenterContent>
            <div
              className="class-details--hero-top"
              style={{
                backgroundImage: `url(${classData.asset.url})`,
              }}
            >
              <Heading2
                text={`${classData.className}`}
                styles="class-details--title"
              />
              <FiveStars starsColorsArray={starColors} />
            </div>
          </WrapperCenterContent>
        </>
      )}
    </>
  );
};

export default ClassesDetails;
