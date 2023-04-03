import { useRouter } from "next/router";
import { useEffect, useState } from "react";
type Props = {
  setPageNumber:(newPageNumber: number) => void,
  pageNumber:number
};

export default function Pagination(props: Props) {
  const router = useRouter();

  const changePage = (number: number) => {
    const newPageNumber = props.pageNumber + number;

    if (newPageNumber >= 1 && newPageNumber <= 29) {
      props.setPageNumber(newPageNumber);

      // Update URL parameter
      router.push(`/?page=${newPageNumber}`);
    }
  };

  useEffect(() => {
    // Update page number based on URL parameter
    const page = parseInt(router.query.page as string);
    if (!isNaN(page)) {
      props.setPageNumber(page);
    }
  }, [router.query]);

  return (
    <>
      <div className="mb-4 flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/10125/10125333.png"
          className="h-9 select-none transition-all hover:scale-105"
          onClick={() => changePage(-1)}
        />

        <div className="mx-2 mt-[1px] flex h-8 w-8 select-none justify-center rounded border bg-orange-500 text-xl font-bold text-white">
          {props.pageNumber}
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/10125/10125292.png"
          className="h-9 select-none transition-all hover:scale-105 "
          onClick={() => changePage(+1)}
        />
      </div>
    </>
  );
}
