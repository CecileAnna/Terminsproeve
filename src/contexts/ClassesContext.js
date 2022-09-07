// import { createContext, useState, useContext, useEffect } from "react";

// const ClassesContext = createContext();
// const ClassesUpdateContext = createContext();

// export function useClasses() {
//   return useContext(ClassesContext);
// }
// export function useClassesUpdate() {
//   return useContext(ClassesUpdateContext);
// }

// export function ClassesProvider({ children }) {
//   const [classesData, setClassesData] = useState([]);

//   useEffect(() => {
//     fetchClasses();

//     const fetchClasses = async () => {
//       const fetchData = await fetch("http://localhost:4000/api/v1/classes", {
//         method: "GET",
//       });

//       const data = await fetchData.json();

//       setClassesData(data);
//     };
//   }, []);

//   const handleClasses = () => {
//     setClassesData(classesData);
//   };

//   return (
//     <ClassesContext.Provider value={classesData}>
//       <ClassesUpdateContext.Provider value={handleClasses}>
//         {children}
//       </ClassesUpdateContext.Provider>
//     </ClassesContext.Provider>
//   );
// }
