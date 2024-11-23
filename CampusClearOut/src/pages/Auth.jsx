// import React, { createContext, useContext, useState, useEffect } from "react";

// //creates global state shared between multiple components
// const AuthContext = createContext();

// // hook to access AuthContext easily
// export const useAuth = () => {
//     return useContext(AuthContext);
// }

// // component to wrap the app and provide global state
// export const AuthProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState(null);
//   const [isLoggedIn,setIsLoggedIn]=useState(false);

//   // login function to set the user and isLoggedIn status
//   const login = (user) => {
//     setAuthUser(user);
//     setIsLoggedIn(true);
//   };

//   // logout function to clear the user and isLoggedIn status
//   const logout = () => {
//     setAuthUser(null);
//     setIsLoggedIn(false);
//   };

//   // fetch current user when the app loads and check session
//   const fetchCurrentUser = async () => {
//     try {
//       const response = await fetch("/api/current-user", { credentials: "include" });
//       if (response.ok) {
//         const data = await response.json();
//         setAuthUser(data.user);
//         setIsLoggedIn(true);
//       } else {
//         setAuthUser(null);
//         setIsLoggedIn(false);
//       }
//     } catch (error) {
//       console.error("Error fetching current user:", error);
//       setAuthUser(null);
//       setIsLoggedIn(false);
//     }
//   };

//   useEffect(() => {
//     fetchCurrentUser(); // fetch current user data when app starts
//   }, []);

//   const value={
//     authUser,
//     setAuthUser,
//     isLoggedIn,
//     setIsLoggedIn,
//     login,
//     logout
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
