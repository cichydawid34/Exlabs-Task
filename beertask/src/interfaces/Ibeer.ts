import { Key } from "react";
import IHoop from "./Ihop";
import IMalt from "./Ihop";

export default interface IBeer {
  id: Key;
  abv: number;
  attenuation_level: number;
  description: string;
  ebc: number;
  first_brewed: string;
  ibu: number;
  image_url: string;
  name: string;
  ph: number;
  ingredients: {
    hops: IHoop[];
    malt: IMalt[];
    yeast: string;
  };
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
}
