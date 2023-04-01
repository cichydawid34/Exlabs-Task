import IBeer from "@/interfaces/Ibeer";
import BeersListSkeleton from "./skeletons/beersListSkeleton";

type IProps = {
  data: any;
  loading: boolean;
};

export default function BeersList(Props: IProps) {
  console.log(Props.data);
  return (
    <>
      <div className=" m-14 mx-8 grid grid-cols-1 gap-14 md:grid-cols-2 lg:mx-36 xl:grid-cols-3 2xl:mx-64">
        {Props.loading ? (
          <BeersListSkeleton />
        ) : (
          Props.data.map((beer: IBeer) => (
            <div
              key={beer.id}
              className="group flex flex-col items-center p-5 pt-2 text-black shadow-lg  transition-all hover:scale-105"
            >
              {beer.image_url ? (
                <img
                  src={beer.image_url}
                  className="h-48 transition-all group-hover:rotate-3 group-hover:scale-110 "
                />
              ) : (
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6ampr39/fHx8fOzs7j4+P8/Pyvr6/d3d3FxcX29va6urqYmJjs7OzU1NSlpaW1tbWtra3n5+e/v78TS0zBAAACkUlEQVR4nO3b63KCMBCGYUwUUVEO6v3fagWVY4LYZMbZnff51xaZ5jON7CZNEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQb5tvI8qzX4/nH84XG5Upfj2ir2V2E5fZ/XpIX9saMnhkYLIkiyRJjdgMoiEDMmiQgfwM8rSu77ew2wnPoLTmwdZBs0J2BuXrYckcQm4nOoP+WcmWAbcTnUHZPy9eA24nOoN7n0HI54ToDM5k8PjluwyqgNuJzqDoaugPg8gWZ4noDAYLwuIg75fLeeHHsjNIzrZJwWwW+0DNsmEWPjiEZ5AcD8ZUu8VZ8HyQMifvBdIz+PS33i8adu+7Qn4Gn1Tdupl7rlCfQb9seosK7RkcBy1o30iVZ5CPOtDW3WhQnsF13IV3v0p3BqfJRoSpXVepzmA/24+yqeMyzRm4tqOs44lSUwa3yfgOri25av5CPRnklR33VlPnrqSZV09qMsiqSWV082xOz1uPajJ49pTM/f115k6guWa6JGjJ4N1lt8fXN2rv/vysjFaSQdFXBc/KKF04ptFPliclGVR9Bu27XCyeVOkmy5OODAZN9rYyyip/AIPJ8qIig+PoXbf7YdPdncFoSdCQQT4ZceV+MhiFMBy0hgyu0yGvOLI17KwpyGBaHK5jtt0N5GcwLw7XZdB31sRn8O+ziqYro8Vn4CwOV+k6a9Iz+PwRsKC7h+gMfMXhKu/OmuwM/MXhKq8yWnYG/uJw5Uxoy2jRGZTBZ/jboxuSM1guDtdNhKazJjiDbNMe0AxzKUVnkO+jEJxBxNtJzWCTxlNLzSB8KehJ/H+mJGYAjaDjzj9SnHZRuXZiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECXP1XDHv7U4SNFAAAAAElFTkSuQmCC"
                  className="h-48 transition-all group-hover:rotate-3 group-hover:scale-110 "
                />
              )}
              <h3 className="group-hover: mt-4 w-[80%] overflow-hidden text-ellipsis  whitespace-nowrap text-center text-lg font-bold">
                {beer.name} {beer.first_brewed}
              </h3>
              <div className="mt-4 h-[1px] w-[80%] bg-zinc-400" />
              <div className=" font mt-2 w-[80%] text-center">
                {beer.tagline}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}