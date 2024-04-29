import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinsList } from "../../services/cryptoAPI";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLaoding] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setIsLaoding(true);
    const getData = async () => {
      const res = await fetch(getCoinsList(page));
      const json = await res.json();
      setCoins(json);
      setIsLaoding(false);
    };
    getData();
  }, [page]);
  return (
    <>
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default HomePage;
