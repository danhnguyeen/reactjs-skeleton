export const updatedObject = (oldObject, updatedPropities) => {
  return {
    ...oldObject,
    ...updatedPropities
  };
};
