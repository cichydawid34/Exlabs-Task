import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import BeersDetail from "../src/components/beerDetailsComponent";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("BeerDetail", () => {
  it("renders skeleton when loading prop is true", () => {
  
    const { container } = render(<BeersDetail loading={true} />);
    const skeletonElements = container.querySelectorAll('.react-loading-skeleton');
    expect(skeletonElements.length).toBeGreaterThan(0);
  })}
)
 