import { Key } from "react";

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
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
}
