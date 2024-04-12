// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import React, { createContext, useContext, useEffect, useReducer } from "react";
// import { auth } from "../firebase";
// import { ACTION_CHECK } from "../helpers/const";

// const authContext = createContext();
// export const useAuthContext = () => useContext(authContext);

// const INIT_STATE = {
//   user: null,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTION_CHECK.CHECK_USER:
//       return { ...state, user:action.payload };

//     default:
//       return state;
//   }
// };

// const AuthContext = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);
//   function checkUser() {
//     return onAuthStateChanged(auth, (user) => {
//       dispatch({
//         type: ACTION_CHECK.CHECK_USER,
//         payload: user,
//       });
//     });
//   }
//   useEffect(() => {
//     checkUser();
//   }, []);

//   const googleProvider = new GoogleAuthProvider();
//   async function signInWithGoogle() {
//     try {
//       await signInWithPopup(auth, googleProvider);
//     } catch (error) {
//       console.log("error");
//     }
//   }
//   function register(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   async function logOut() {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function login(email, password){
//     return signInWithEmailAndPassword(email,password)
//   }

//   const values = {
//     signInWithGoogle,
//     register,
//     user: state.user,
//     logOut,
//     login,
//   };

//   return <authContext.Provider value={values}>{children}</authContext.Provider>;
// };

// export default AuthContext;
