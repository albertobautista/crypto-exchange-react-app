import styled from "@emotion/styled";
const Container = styled.div`
  color: #fff;
  font-family: "Inconsolata", monospace;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;
const Image = styled.img`
  display: block;
  width: 120px;
`;
const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Image Crypto" />
      <div>
        <Price>
          EL precio es de:<span>{PRICE}</span>
        </Price>
        <Text>
          EL precio más alto del día :<span>{HIGHDAY}</span>
        </Text>
        <Text>
          EL precio más bajo del día :<span>{LOWDAY}</span>
        </Text>
        <Text>
          Variación úlimas 24 horas:<span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Última actualización:<span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
};

export default Result;
