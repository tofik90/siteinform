import styled from "styled-components";

export const StyledRequestString = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  position:relative;
`;

export const InputString = styled.input`
  display: inline-block;
  width: auto;
  padding: 5px;
  border: 1px solid #ebeef0;
`;

export const Menu = styled.menu`
  border: 1px solid #6d757d;
  display: ${(props) => (props.isMenuDroped ? "block" : "none")};
  position: absolute;
  top: 27px;
  left: 4px;
  background: #fff;
`;

export const MenuItem = styled.li`
  display: block;
  width: 100%;
  padding: 5px;
  text-align: left;
  background: #fff;
  :hover {
    background: #6d757d;
    color: #ffffff;
  }
`;

export const MenuButton = styled.div`
  display: inline-block;
  padding: 2px 10px;
  border: 1px solid #81878f;
  color: #6d757d;
  background: #ffffff;
  border-radius: 5px 0 0 5px;
  position:position: relative;
  :active {
    background: #6d757d;
    color: #ffffff;
    border: 2px solid #b4b8bc;
  }
`;
