import styled from "@emotion/styled";

const Text = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-family: "Inconsolata", monospace;
`;
const Error = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Error;
