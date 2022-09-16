import PageHeader from "../components/PageHeader";
import WrapperCenterContent from "../components/WrapperCenterContent";
import SearchIcon from "../subcomponents/icons/SearchIcon";
import ClassesCards from "../components/ClassesCard";
import { useState, useEffect } from "react";
import Heading4 from "../subcomponents/texts/Heading4";
import TrainerCard from "../components/TrainerCard";

import { Link } from "react-router-dom";

const Search = () => {
  const [searchData, setSearchData] = useState({
    searchText: ``,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSearchData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

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

  const [trainerData, setTrainerData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/trainers`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("failed to fetch response");
        }
      })
      .then((data) => {
        if (data) {
          return setTrainerData(data);
        } else {
          throw new Error("failed to set trainerData");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // console.log(classesData);

  return (
    <>
      {/* {trainerData && classesData && ( */}
      <>
        <PageHeader text="Search" />
        <WrapperCenterContent styles="search--content-wrapper">
          <div className="search--input-icon-wrapper">
            <input
              onChange={handleChange}
              value={searchData.searchText}
              type="text"
              name="searchText"
              id="search"
              className="search--input btn-long"
              placeholder="Search Classes"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Search Classes")}
              autoComplete="current-search"
            />

            <SearchIcon styles="search--icon" />
          </div>

          <Heading4 text="Popular Classes" styles="Search--title" />

          <div className="search--classes-cards-container">
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

          <Heading4 text="Popular Trainers" styles="Search--title" />
          <div className="search--trainers-cards-container">
            {trainerData[0]?.asset && (
              <>
                {trainerData.map((trainer, index) => (
                  <TrainerCard
                    url={
                      trainer?.asset?.url
                        ? trainer.asset.url
                        : classesData.asset.url
                    }
                    trainerName={trainer.trainerName}
                    key={index}
                    styles="search--trainer-card"
                  />
                ))}
              </>
            )}
          </div>
        </WrapperCenterContent>
      </>
      {/* )} */}
    </>
  );
};

export default Search;
