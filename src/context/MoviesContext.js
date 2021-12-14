import React, { useState } from "react";

const Context = React.createContext({});

export function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [mute, setMute] = useState(true);

  return <Context.Provider value={{ movies, setMovies, mute, setMute }}>{children}</Context.Provider>;
}

export default Context;
