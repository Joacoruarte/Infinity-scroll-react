import { useEffect } from "react";
import { useScreen } from "./useScreen";
import { useDataProvider, LOADING } from "./useDataProvider";

const mergeData = (currentData, newData) => {
  if (newData) {
    const elementsToAdd = newData.filter((newItem) => {
      return !currentData.some((item) => item.id === newItem.id);
    });
    return [...currentData, ...elementsToAdd];
  }
  return currentData;
};
export const useInfiniteScrollCharacters = (
  elementToObserveRef,
  charactersRef
) => {
  const [isShowing] = useScreen(elementToObserveRef, "0px");
  const [state, loading] = useDataProvider("https://rickandmortyapi.com/api/character/");
  
  const { 
    statusData,
    data 
    } = state;
  const { results, info } = data ? data : {};

  charactersRef.current = mergeData(charactersRef.current, results);
  useEffect(() => { 
    if (isShowing && statusData != LOADING) {
      if(info.next) loading(info.next);
    }
  }, [isShowing]);
  return [state];
};
