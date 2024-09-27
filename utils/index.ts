import { regions } from "./regions";

export const getLocation = (): string => {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  //@ts-ignore
  return regions[zone];
};
