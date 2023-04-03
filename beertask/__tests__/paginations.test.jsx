import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));
import Pagination from '../src/components/paginationComponent';
describe('Pagination component', () => {
  it('Page lower than 1', () => {
    const setPageNumber = jest.fn();
   const pageNumber = 1;

   const { getByAltText } = render(
     <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
   );

   const previousPageButton = getByAltText('Previous Page' );

    fireEvent.click(previousPageButton);
    
    expect(setPageNumber).not.toHaveBeenCalled();
  });
    
  test('check if renders current passed page', () => {

    const setPageNumber = jest.fn();
     const pageNumber = 5;

     const { getByText } = render(
       <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
     );
    expect(true).toBe(true);
    const currentPageNumber = getByText(`${pageNumber}`);
    expect(currentPageNumber).toBeInTheDocument();
  });
  test('Next page handling', () => {
    const setPageNumber = jest.fn();
   const pageNumber = 2;

   const { getByAltText } = render(
     <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
   );

   const previousPageButton = getByAltText('Next Page' );

    fireEvent.click(previousPageButton);  
     expect(setPageNumber).toHaveBeenCalledWith(pageNumber + 1);

  });
  test('Previous page handling', () => {
    const setPageNumber = jest.fn();
   const pageNumber = 2;

   const { getByAltText } = render(
     <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
   );

   const previousPageButton = getByAltText('Previous Page' );

    fireEvent.click(previousPageButton);

     expect(setPageNumber).toHaveBeenCalledWith(pageNumber - 1);
  });



 

 

});