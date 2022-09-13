import PageHeader from "../components/PageHeader";
import WrapperCenterContent from "../components/WrapperCenterContent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Heading2 from "../subcomponents/texts/Heading2";
import FiveStars from "../components/FiveStars";
import Heading3 from "../subcomponents/texts/Heading3";

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

  // console.log(classData);

  // const [classRatingData, setClassRatingData] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:4000/api/v1/classes/${id}/ratings`, {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setClassRatingData(data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // console.log(classRatingData ? classRatingData : "no good");

  // let rating = classRatingData[0].rating && classRatingData[0].rating;

  // let testArrayRating = new Array(rating);

  // console.log(testArrayRating && testArrayRating);

  const starColors = [
    { classes: "star-yellow" },
    { classes: "star-yellow" },
    { classes: "star-yellow" },
    { classes: "star-yellow" },
    { classes: "star-yellow" },
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
                <FiveStars
                  starsColorsArray={starColors}
                  styles="class-details--stars"
                />
                {/* <Heading3 text={`${rating && rating}/5`} styles="yellow-color-important" /> */}
              </div>
            </WrapperCenterContent>
          </>
        )}
    </>
  );
};

export default ClassesDetails;
