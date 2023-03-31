import IBeer from "@/interfaces/Ibeer";

type IProps = {
  data: any;
  loading: boolean;
};

export default function BeersList(Props: IProps) {
  console.log(Props.data);
  return (
    <>
      <div className=" m-14 mx-8 grid grid-cols-1 gap-14 md:grid-cols-2 lg:mx-36 xl:grid-cols-3 2xl:mx-64">
        {Props.data.map((beer: IBeer) => (
          <div
            key={beer.id}
            className="flex flex-col items-center p-5 pt-2 text-black shadow-lg  transition-all hover:scale-105"
          >
            <img src={beer.image_url} className="h-48 " />
            <h3 className="mt-4 w-[80%] overflow-hidden text-ellipsis whitespace-nowrap  text-center text-lg font-bold">
              {beer.name} {beer.first_brewed}
            </h3>
            <div className="mt-4 h-[1px] w-[80%] bg-zinc-400" />
            <div className=" font mt-2 w-[80%] text-center">{beer.tagline}</div>
          </div>
        ))}
      </div>
    </>
  );
}
