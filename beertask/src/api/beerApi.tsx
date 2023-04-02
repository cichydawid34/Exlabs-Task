import { useGetBeerQuery } from "../redux/beersSlice";
import BeersList from "../components/beersList";
import { Key } from "react";

import BeerDetailsComponent from "@/components/beerDetailsComponent";

type Props = {
  beerID: any;
};

export default function ProductsDetails(Props: Props) {
  const { data: beer, isLoading, error } = useGetBeerQuery(Props.beerID);
  console.log(`Number id = ${Props.beerID}`);

  if (isLoading) {
    return <div>Loading</div>;
  }

  //Handling errors
  if (error && error.status === 404) {
    return <div>Products not found</div>;
  } else if (error) {
    return <div>{error}</div>;
  }

  return <BeerDetailsComponent data={beer} loading={isLoading} />;
}
