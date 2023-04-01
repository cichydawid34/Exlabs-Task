import BeersApi from "@/api/beersApi";
import BeersList from "@/components/beersList";
import Header from "@/components/headerComponent";
import Pagination from "@/components/paginationComponent";
import { useState } from "react";

export default function Home() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  return (
    <>
      <div>
        <Header />
        <BeersApi page={pageNumber} />
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  );
}
