import BeersApi from "@/api/beersApi";
import BeersList from "@/components/beersList";
import Header from "@/components/headerComponent";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <BeersApi />
      </div>
    </>
  );
}
