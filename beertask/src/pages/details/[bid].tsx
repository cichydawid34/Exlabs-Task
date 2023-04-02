import BeerApi from "@/api/beerApi";
import Header from "@/components/headerComponent";
import IBeer from "@/interfaces/Ibeer";
import { useRouter } from "next/router";
import { Key } from "react";

export default function BeerDetailsPage() {
  const router = useRouter();
  const { bid } = router.query;
  return (
    <>
      <Header />
      <BeerApi beerID={Number(bid)} />
    </>
  );
}
