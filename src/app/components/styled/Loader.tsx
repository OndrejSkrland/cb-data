import React from 'react';
import styled from 'styled-components';

export function Loader() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Spinner/>
        </div>
    );
}

const Spinner = styled.div`
  border: 8px solid #b9b9f7;
  border-top: 8px #6666ff solid;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;