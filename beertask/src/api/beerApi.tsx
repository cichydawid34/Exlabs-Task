import { useGetBeerQuery } from "../redux/beersSlice";
import BeersList from "../components/beersList";
import { Key } from "react";

import BeerDetailsComponent from "@/components/beerDetailsComponent";

type Props = {
  beerID: number;
};

export default function ProductsDetails(props: Props) {
  // Data fetch
  const { data: beer, isLoading, error } = useGetBeerQuery(props.beerID);
  console.log(beer);
  //Handling errors
  if (error && error.status === 404) {
    return <div>Products not found</div>;
  } else if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  } else if (beer == undefined) {
    return <BeerDetailsComponent loading={isLoading} />;
  } else {
    return <BeerDetailsComponent data={beer[0]} loading={isLoading} />;
  }
}
