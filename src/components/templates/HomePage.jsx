import { useEffect, useState } from "react";

import { getCoinsList } from "../../services/cryptoAPI";

import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart.jsx"

function HomePage() {
   const [coins, setCoins] = useState([]);
   const [isLoading, setIsLaoding] = useState(true);
   const [page, setPage] = useState(1);
   const [currency, setCurrency] = useState("usd");
   const [chart, setChart] = useState(null);

   useEffect(() => {
      setIsLaoding(true);
      try {
         const getData = async () => {
            const res = await fetch(getCoinsList(page, currency));
            const json = await res.json();
            setCoins(json);
            setIsLaoding(false);
         };
         getData();
      } catch (error) {
         console.log(error);
      }

   }, [page, currency]);

   return (
      <>
         <Search currency={currency} setCurrency={setCurrency} />
         <TableCoin coins={coins} isLoading={isLoading} setChart={setChart} />
         <Pagination page={page} setPage={setPage} />
         {!!chart && <Chart chart={chart} setChart={setChart} />}
      </>

   );
}

export default HomePage;
