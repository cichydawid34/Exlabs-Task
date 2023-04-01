import { useGetPageBeersQuery } from "../redux/beersSlice";
import BeersList from "../components/beersList";
export default function ProductsDetails(Props: any) {
  const { data: beers, isLoading, error } = useGetPageBeersQuery(Props.page);

  //Handling errors
  if (error && error.status === 404) {
    return <div>Products not found</div>;
  } else if (error) {
    return <div>{error}</div>;
  }

  return <BeersList data={beers} loading={isLoading} />;
}
