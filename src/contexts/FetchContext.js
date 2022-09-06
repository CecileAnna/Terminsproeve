// import { createContext, useState, useContext, useEffect } from "react";

// const FetchContext = createContext();
// const FetchUpdateContext = createContext();

// export function useFetch() {
//   return useContext(FetchContext);
// }
// export function useFetchData() {
//   return useContext(FetchDataContext);
// }

// export function FetchProvider({ children }) {
//   const [fetchData, setFetchData] = useState([]);

//   const handleFetch = (url) => {
//     useEffect(() => {
//       return fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           setFetchData((fetchData) => [...fetchData, data]);
//         });
//     }, []);

//     return { fetchData };
//   };

//   return (
//     <FetchContext.Provider value={fetchData}>
//       <FetchUpdateContext.Provider value={handleFetch}>
//         {children}
//       </FetchUpdateContext.Provider>
//     </FetchContext.Provider>
//   );
// }
