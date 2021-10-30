import styled, { css } from "styled-components";

const ButtonStyles = css`
  text-align: center;
  ${"" /* padding: 10px; */}
  cursor: pointer;
  background: none;
  display: inline-block;
  font-size: inherit;
  text-align: center;
  border: none;
  outline: none;

  &:hover {
    opacity: 0.7;
    color: orange;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  /* width: 100%; */
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    ${ButtonStyles}
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  ${ButtonStyles};
`;
