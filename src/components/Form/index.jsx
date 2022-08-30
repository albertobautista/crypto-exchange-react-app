import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { currencies } from "../../data/currencies";
import useSelectCurrencies from "../../hooks/useSelectCurrencies";
import Error from "../Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Form = ({ setCurrencies }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [currency, SelectCurrencies] = useSelectCurrencies(
    "Selecciona tu moneda",
    currencies
  );
  const [crypto, SelectCryptos] = useSelectCurrencies(
    "Selecciona tu Criptomoneda",
    cryptos
  );
  useEffect(() => {
    const getCryptos = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

      const response = await fetch(url);
      const result = await response.json();

      const arrayCryptos = result.Data.map((crypto) => ({
        id: crypto.CoinInfo.Name,
        name: crypto.CoinInfo.FullName,
      }));
      setCryptos(arrayCryptos);
    };

    getCryptos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([currency, crypto].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setCurrencies({
      currency,
      crypto,
    });
  };
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCurrencies />
        <SelectCryptos />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Form;
