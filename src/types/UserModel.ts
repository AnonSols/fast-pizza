export type positionType = {
  longitude: string;
  latitude: string;
};
export interface InitalStateProp {
  userName: string;
  status: string;
  position: positionType;
  address: string;
  error: string | undefined;
}
export interface positionGeo {
  coords: {
    latitude: string;
    longitude: string;
  };
}
