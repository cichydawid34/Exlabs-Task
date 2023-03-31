import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BeersListSkeleton() {
  return (
    <>
      <SkeletonTheme baseColor="#F0F0F0" highlightColor="#787878">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            className="flex flex-col items-center p-5 pt-2 text-black shadow-lg  transition-all hover:scale-105"
            key={index}
          >
            <Skeleton count={1} width={220} height={200} />
            <h3 className="mt-4 w-[80%] overflow-hidden text-ellipsis whitespace-nowrap  text-center text-lg font-bold">
              <Skeleton count={1} width={200} height={27} />
            </h3>
            <div className="mt-4 h-[1px] w-[80%] bg-zinc-400" />
            <div className=" font mt-2 w-[80%] text-center">
              <Skeleton count={1} width={200} height={22} />
              <Skeleton count={1} width={200} height={22} />
            </div>
          </div>
        ))}
      </SkeletonTheme>
    </>
  );
}
