import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Details = styled.div`
  width: 23%;
`;

export const QuantityDisplay = styled(Details)`
  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }
`;

export const RemoveButton = styled.button`
  padding-left: 12px;
  cursor: pointer;
`;
