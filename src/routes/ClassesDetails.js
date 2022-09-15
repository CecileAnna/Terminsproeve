import PageHeader from "../components/PageHeader";
import WrapperCenterContent from "../components/WrapperCenterContent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Heading2 from "../subcomponents/texts/Heading2";
import FiveStars from "../components/FiveStars";
import Heading5 from "../subcomponents/texts/Heading5";
import Paragraf from "../subcomponents/texts/Paragraf";
import Btn from "../components/Btn";
import Heading4 from "../subcomponents/texts/Heading4";
import TrainerCard from "../components/TrainerCard";

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

  const [classRatingData, setClassRatingData] = useState([]);

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

  const rating = classRatingData[0]?.rating && classRatingData[0].rating;

  // let testArrayRating = new Array(rating);

  // console.log(testArrayRating && testArrayRating);

  const starColors = [
    { classes: "star-yellow" },
    { classes: "star-yellow" },
    { classes: "star-yellow" },
    { classes: "star-yellow" },
    { classes: "star-yellow" },
  ];

  const [trainerData, setTrainerData] = useState({});
  const trainerId = classData?.trainer?.id && classData.trainer.id;

  useEffect(() => {
    if (trainerId) {
      fetch(`http://localhost:4000/api/v1/trainers/${trainerId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setTrainerData(data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  const trainerUrl = trainerData?.asset?.url && trainerData.asset.url;

  // console.log(trainerUrl && trainerUrl);

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
              {classRatingData && (
                <>
                  <FiveStars
                    starsColorsArray={starColors}
                    styles="class-details--stars"
                  />
                  <Heading5
                    text={`${classRatingData[0]?.rating && rating}/5`}
                    styles="yellow-color-important class-details--rating-text"
                  />
                </>
              )}
              <Btn text="Rate" styles="class-details--btn" />
            </div>
            <div className="class-details--description-wrapper">
              <Heading5
                text={`${classData.classDay} - ${classData.classTime}`}
              />
              <Paragraf
                text={classData.classDescription}
                styles="class-details--description"
              />
              <Heading4 text="Trainer" styles="class-details--trainer-title" />
              {trainerData && (
                <TrainerCard
                  url={
                    trainerData?.asset?.url ? trainerUrl : classData.asset.url
                  }
                  trainerName={classData.trainer.trainerName}
                />
              )}
              <Btn
                text="sign up"
                styles="btn-long class-details--sign-up-btn"
              />
            </div>
          </WrapperCenterContent>
        </>
      )}
    </>
  );
};

export default ClassesDetails;
