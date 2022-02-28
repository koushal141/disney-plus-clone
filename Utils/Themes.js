import styled from "styled-components";
const Themes = {
  colors: {
    blue: "#1f80e0",
    gray: "#232534",
  },
};

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: ${(props) => (props.bg ? props.bg : Themes.colors.blue)};
  color: ${(props) => (props.color ? props.color : "#FFF")};
  font-size: 1.3rem;
  text-align: center;
  padding: 0.8rem 1.75rem;
  display: flex;
  align-items: center;
  column-gap: 5px;

  cursor: pointer;
  transition: ease-in-out 0.2s all;
  &:hover {
    transform: scale(1.05);
  }
`;

export default Themes;
