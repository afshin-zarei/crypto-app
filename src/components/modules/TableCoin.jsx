import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";
import styles from "./TableCoins.module.css";

function TableCoin({ coins, isLoading, setChart }) {
  console.log(coins);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="3" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} setChart={setChart} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    id,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  }
  ,setChart
}) => {
  const showHandler = ()=>{
    setChart(true)
  }
  return (
    <tr key={id}>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{current_price.toLocaleString()}</td>

      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}$
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};


