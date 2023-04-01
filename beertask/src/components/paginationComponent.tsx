import { Console } from "console";
import { useEffect, useState } from "react";

export default function Pagination(Props: any) {
  const changePage = (number: number) => {
    if (Props.pageNumber + number < 29 && Props.pageNumber + number > 0) {
      Props.setPageNumber(Props.pageNumber + number);
    }
  };
  useEffect(() => {
    console.log(Props.pageNumber);
  }, [Props.pageNumber]);

  return (
    <>
      <div className="mb-4 flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/10125/10125333.png"
          className="h-9 select-none transition-all hover:scale-105"
          onClick={() => changePage(-1)}
        />

        <div className="mx-2 mt-[1px] flex h-8 w-8 select-none justify-center rounded border bg-orange-500 text-xl font-bold text-white">
          {Props.pageNumber}
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
