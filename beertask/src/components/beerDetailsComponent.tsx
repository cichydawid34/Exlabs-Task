import Header from "@/components/headerComponent";
import IBeer from "@/interfaces/Ibeer";

import BeerDetailsSkeleton from "./skeletons/beerDetailsSkeleton";

type Props = {
  data?: IBeer;
  loading: boolean;
};

export default function BeerDetailComponent(props: Props) {
  return (
    <>
      {!props.loading && props.data != undefined ? (
        <div>
          <div className="flex flex-col gap-8 p-24 pt-12 md:grid md:grid-cols-12 lg:ml-48">
            <>
              <div className="col-span-4 mt-7 items-center justify-center lg:col-span-5">
                <img
                  src={props.data.image_url}
                  className="m-auto max-h-96 self-center rounded-lg"
                />
              </div>
              {/* Column 2 */}
              <div className="col-span-8 flex flex-col gap-2 rounded-xl p-8 lg:col-span-5 ">
                <h2 className="text-3xl font-bold">{props.data.name}</h2>
                <p className="text-sm text-zinc-500">{props.data.tagline}</p>
                <div className="mx-2 my-1 flex  w-[80%] flex-row justify-between">
                  <p className="text-lg">
                    ABV: <span className="font-bold">{props.data.abv}</span>
                  </p>
                  <p className="text-lg">
                    IBU: <span className="font-bold">{props.data.ibu}</span>
                  </p>
                </div>

                <div>
                  <p className="text-zinc-800">{props.data.description}</p>
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
                {props.data.ingredients.hops.map(
                  (ingredient: any, index: number) => (
                    <>
                      <li key={index} className="list-disc">
                        {ingredient.name}
                        {" - "}
                        <span className="font-bold">
                          {ingredient.amount.value} {ingredient.amount.unit}{" "}
                        </span>
                      </li>
                    </>
                  )
                )}
              </ul>
              <h3 className="mb-1 mt-2 flex text-lg font-bold">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3252/3252397.png"
                  className="h-6"
                />
                Malts
              </h3>
              <ul>
                {props.data.ingredients.malt.map(
                  (ingredient: any, index: number) => (
                    <li key={index} className="list-disc">
                      {ingredient.name}
                      {" - "}
                      <span className="font-bold">
                        {ingredient.amount.value} {ingredient.amount.unit}{" "}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <BeerDetailsSkeleton />
      )}
    </>
  );
}
