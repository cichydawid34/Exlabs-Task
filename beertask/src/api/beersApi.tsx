import { useGetAllBeersQuery } from "../redux/beersSlice";
import BeersList from "../components/beersList";
export default function ProductsDetails() {
  const { data: beers, isLoading, error } = useGetAllBeersQuery();
  //Loading data
  if (isLoading){
    return <div>Loading</div>;
  }
  //Handling errors
  else if (error && error.status === 404) {
    return <div>Products not found</div>;
  } else if (error) {
    return <div>{error}</div>;
  }

  return <BeersList data={beers} loading={isLoading} />;
}