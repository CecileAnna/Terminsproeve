import { Link } from "react-router-dom";
import ClassesCards from "../components/ClassesCard";
import PageHeader from "../components/PageHeader";
import WrapperCenterContent from "../components/WrapperCenterContent";
import Heading4 from "../subcomponents/texts/Heading4";
import HeaderPwa from "../components/HeaderPwa";
import { useState, useEffect } from "react";

const Classes = () => {
  useEffect(() => {
    fetchClasses();
  }, []);

  const [classesData, setClassesData] = useState([]);

  const fetchClasses = async () => {
    const fetchData = await fetch("http://localhost:4000/api/v1/classes", {
      method: "GET",
    });

    const data = await fetchData.json();

    setClassesData(data);
  };

  const starColorsSmall = [
    { classes: "star-smaller", id: 1 },
    { classes: "star-smaller", id: 2 },
    { classes: "star-smaller", id: 3 },
    { classes: "star-smaller", id: 4 },
    { classes: "star-smaller", id: 5 },
  ];

  const starColors = [
    { classes: " ", id: 1 },
    { classes: " ", id: 2 },
    { classes: " ", id: 3 },
    { classes: " ", id: 4 },
    { classes: " ", id: 5 },
  ];

  let randomIndex = Math.floor(Math.random() * classesData.length);

  return (
    <>
      {classesData[0] && (
        <>
          <PageHeader text="Popular classes" />

          <WrapperCenterContent>
            <Link
              to={`/Classes/${classesData[randomIndex].id}`}
              style={{ textDecoration: "none" }}
            >
              <ClassesCards
                cornerBoxText={`${classesData[randomIndex].className}`}
                starsColorsArray={starColors}
                bgUrl={`${classesData[randomIndex].asset.url}`}
              />
            </Link>

            <div className="classes--bottom-wrapper">
              <Heading4 text="Classes for you" />

              <div className="classes--small-cards-container">
                {classesData.map((classData) => (
                  <Link
                    to={`/Classes/${classData.id}`}
                    style={{ textDecoration: "none" }}
                    key={classData.id}
                  >
                    <ClassesCards
                      cornerBoxText={`${classData.className}`}
                      starsColorsArray={starColorsSmall}
                      smallCardTrue={true}
                      bgUrl={`${classData.asset.url}`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </WrapperCenterContent>

          <HeaderPwa />
        </>
      )}
    </>
  );
};

export default Classes;
