import { useState, useEffect } from "react";
import { SortTasksContext } from "./sortTasksContext";
import { SearchTaskContext } from "./searchTaskContext";

export const JsonServerContextProvider = ({
  sortFlag,
  searchTask,
  sortTask,
  children,
}) => {
  return (
    <>
      <SearchTaskContext.Provider value={searchTask}>
        <SortTasksContext.Provider value={{ sortTask, sortFlag }}>
          {children}
        </SortTasksContext.Provider>
      </SearchTaskContext.Provider>
    </>
  );
};
