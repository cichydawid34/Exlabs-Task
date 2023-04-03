import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import BeersList from "../src/components/beersList";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("BeersList", () => {
  it("renders skeleton when loading prop is true", () => {
  
    const { container } = render(<BeersList loading={true} />);
    const skeletonElements = container.querySelectorAll('.react-loading-skeleton');
    expect(skeletonElements.length).toBeGreaterThan(0);
  });

  it("renders beer cards when loading prop is false", () => {
    const beer = {
      id: 1,
      name: "Beer Name",
      first_brewed: "01/2021",
      image_url: "",
    };
    const props = {
      data: [beer],
      loading: false,
    };
    const { getByText } = render(<BeersList {...props} />);
    const beerName = getByText("Beer Name 01/2021");
    expect(beerName).toBeInTheDocument();
  });

  it("renders an image when image_url is not null", async () => {
    const mockData = [
        {
          id: 1,
          name: "Beer 1",
          image_url: "https://example.com/beer1.jpg",
        },
        {
          id: 2,
          name: "Beer 2",
          image_url: null,
        },
      ];
      

    render(<BeersList data={mockData} loading={false} />);
    const imageElement = screen.getByAltText("Beer 1");
    await waitFor(() => expect(imageElement).toHaveAttribute("src", "https://example.com/beer1.jpg"));
  });
  it("renders a placeholder image when image_url is null", async () => {
    const mockData = [
        {
          id: 1,
          name: "Beer 1",
          image_url: null,
        },
        {
            id: 1,
            name:"Beer 2",
            image_url: null,
          },
      
      ];
    render(<BeersList data={mockData} loading={false} />);
    const imageElement = screen.getByAltText("Beer 1");
    await waitFor(() => expect(imageElement).toHaveAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6ampr39/fHx8fOzs7j4+P8/Pyvr6/d3d3FxcX29va6urqYmJjs7OzU1NSlpaW1tbWtra3n5+e/v78TS0zBAAACkUlEQVR4nO3b63KCMBCGYUwUUVEO6v3fagWVY4LYZMbZnff51xaZ5jON7CZNEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQb5tvI8qzX4/nH84XG5Upfj2ir2V2E5fZ/XpIX9saMnhkYLIkiyRJjdgMoiEDMmiQgfwM8rSu77ew2wnPoLTmwdZBs0J2BuXrYckcQm4nOoP+WcmWAbcTnUHZPy9eA24nOoN7n0HI54ToDM5k8PjluwyqgNuJzqDoaugPg8gWZ4noDAYLwuIg75fLeeHHsjNIzrZJwWwW+0DNsmEWPjiEZ5AcD8ZUu8VZ8HyQMifvBdIz+PS33i8adu+7Qn4Gn1Tdupl7rlCfQb9seosK7RkcBy1o30iVZ5CPOtDW3WhQnsF13IV3v0p3BqfJRoSpXVepzmA/24+yqeMyzRm4tqOs44lSUwa3yfgOri25av5CPRnklR33VlPnrqSZV09qMsiqSWV082xOz1uPajJ49pTM/f115k6guWa6JGjJ4N1lt8fXN2rv/vysjFaSQdFXBc/KKF04ptFPliclGVR9Bu27XCyeVOkmy5OODAZN9rYyyip/AIPJ8qIig+PoXbf7YdPdncFoSdCQQT4ZceV+MhiFMBy0hgyu0yGvOLI17KwpyGBaHK5jtt0N5GcwLw7XZdB31sRn8O+ziqYro8Vn4CwOV+k6a9Iz+PwRsKC7h+gMfMXhKu/OmuwM/MXhKq8yWnYG/uJw5Uxoy2jRGZTBZ/jboxuSM1guDtdNhKazJjiDbNMe0AxzKUVnkO+jEJxBxNtJzWCTxlNLzSB8KehJ/H+mJGYAjaDjzj9SnHZRuXZiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECXP1XDHv7U4SNFAAAAAElFTkSuQmCC"))
  });
  
});