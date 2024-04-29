import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinsList } from "../../services/cryptoAPI";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLaoding] = useState(true) 
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinsList());
      const json = await res.json();
      setCoins(json);
      setIsLaoding(false)
    };
    getData();
  }, []);
  return <TableCoin coins={coins} isLoading={isLoading} />;
}

export default HomePage;
