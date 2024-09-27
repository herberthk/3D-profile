import { regions, Regions } from "./regions";

export * from "./utils";

export const getLocation = (): string => {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return regions[zone as keyof Regions];
};
