import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface PaginationProps {
  setPage: Dispatch<SetStateAction<number>>;
  actualPage: number;
  pageSize: number;
  totalRecords: number
}

export const Pagination: React.FC<PaginationProps> = ({ setPage, actualPage = 0, pageSize = 0, totalRecords = 0 }) => {
  const pageCount = Math.ceil((totalRecords) / pageSize)
  const pages = Array.from({length: pageCount}, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    setPage && setPage(page);
  };

  return (
    <PaginationWrapper>
      {pages.map(pageNumber => (
        <PaginationButton 
          key={pageNumber} 
          onClick={() => handlePageChange(pageNumber)}
          disabled={pageNumber === actualPage}
        >
          {pageNumber}
        </PaginationButton>
      ))}
    </PaginationWrapper>
  );
};


const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;