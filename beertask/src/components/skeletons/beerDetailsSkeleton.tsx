import Header from "@/components/headerComponent";
import IBeer from "@/interfaces/Ibeer";
import { useEffect } from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BeerDetailsSkeleton() {
  return (
    <>
      <SkeletonTheme baseColor="#F0F0F0" highlightColor="#787878">
        <div className="flex flex-col gap-8 p-24 pt-12 md:grid md:grid-cols-12 lg:ml-48">
          {/* Column 1 */}
          <>
            <div className="col-span-4 mt-7 items-center justify-center lg:col-span-5">
              <Skeleton height={400} width={400} />
            </div>
            {/* Column 2 */}
            <div className="col-span-8 flex flex-col gap-2 rounded-xl p-8 lg:col-span-5 ">
              <h2 className="text-3xl font-bold">
                <Skeleton height={30} width={200} />
              </h2>
              <p className="text-sm text-zinc-500">
                <Skeleton height={20} width={200} />
              </p>
              <div className="mx-2 my-1 flex  w-[80%] flex-row justify-between">
                <p className="text-lg">
                  ABV:{" "}
                  <span className="font-bold">
                    <Skeleton height={20} width={100} />
                  </span>
                </p>
                <p className="text-lg">
                  IBU:{" "}
                  <span className="font-bold">
                    <Skeleton height={20} width={100} />
                  </span>
                </p>
              </div>

              <div>
                <p className="text-zinc-800">
                  <Skeleton height={200} width={400} />
                </p>
              </div>

              <button className="text-md mt-8  w-[100%] bg-zinc-800 p-2 font-bold text-white hover:bg-gray-600 ">
                Add to cart
              </button>
            </div>
          </>
          <div className="col-span-12 items-center justify-center align-middle ">
            <div className="h-[1.4px] w-[90%] bg-slate-200" />
            <h2 className=" my-auto mb-2 mt-4 flex  justify-center text-3xl font-bold italic">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6615/6615918.png"
                className="h-8"
              />
              Ingriedients
            </h2>
            <h3 className=" mb-1 flex text-lg font-bold">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3377/3377085.png"
                className="h-6"
              />
              Hops
            </h3>
            <ul>
              {Array.from({ length: 5 }).map((_, index) => (
                <>
                  <li key={`skeletonhop-${index}`} className="list-disc">
                    <Skeleton height={20} width={200} />
                  </li>
                </>
              ))}
            </ul>
            <h3 className="mb-1 mt-2 flex text-lg font-bold">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3252/3252397.png"
                className="h-6"
              />
              Malt
            </h3>
            <ul>
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={`skeletonmalt+${index}`} className="list-disc">
                  <Skeleton height={20} width={200} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}
