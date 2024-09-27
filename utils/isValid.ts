/**
 * Returns the global CSS classes to apply to the form element based on associated validity.
 */
export const getValidStyle = (isValid?: boolean): string => {
  if (isValid === undefined) {
    return "";
  }

  if (isValid) {
    return "border-green-300";
  }

  return "border-red-400";
};
