import React, {  useState } from "react";
import {data} from './Data'
export const userContext = React.createContext();

export const ContextController = ({ children }) => {

  const enrolledCourses = data.filter(data => data.enrolled && data  )
  const initialState = {
    playCourse:enrolledCourses
  };

  const [state, setState] = useState(initialState);

  

  return (
    <userContext.Provider value={[state, setState]}>
      {children}
    </userContext.Provider>
  );
};
