import styled from "styled-components";

export const TableTitle = styled.h2`
  padding: 20px 10px;
`;

export const Table = styled.div`
  min-width: 100%;
  width: auto;
  padding: 5px;
  margin-bottom: 30px;
  border: 1px solid #f8f6ff;
  border-radius: 3px;
  display: grid;
  grid-template-columns:
    minmax(100px, 1fr)
    minmax(150px, 3fr);
`;

export const Data = styled.div`
  padding: 5px;
  &:first-child {
    font-weight: bold;
  }
`;

export const Row = styled.div`
  display: contents;

  &:nth-child(even) ${Data} {
    background: #f8f6ff;
  }
`;


