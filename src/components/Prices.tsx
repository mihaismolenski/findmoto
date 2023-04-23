export const Prices = ({
  make,
  model,
  year,
}: {
  make: string;
  model: string;
  year: string;
}) => {
  return (
    <div className="prices">
      <div className="moto-details-spec">
        <img src="../images/olx.png" width="24px" height="24px" alt="engine" />
        <a
          href={`https://www.olx.ro/auto-masini-moto-ambarcatiuni/motociclete-scutere-atv/motociclete/q-${make}-${model}-${year}/`}
          target="blank"
        >
          Check on Olx.ro
        </a>
      </div>
      <div className="moto-details-spec">
        <img src="../images/mobilede.png" width="24px" height="24px" alt="engine" />
        <a
          href={`https://suchen.mobile.de/motorrad/${make}-${model}-${year}.html?lang=en`}
          target="blank"
        >
          Check on Mobile.de
        </a>
      </div>
      <div className="moto-details-spec">
        <img src="../images/cycletrader.png" width="24px" height="24px" alt="engine" />
        <a
          href={`https://www.cycletrader.com/motorcycles-for-sale?make=${make}&model=${model}&year=${year}`}
          target="blank"
        >
          Check on Cycletrader.com
        </a>
      </div>
    </div>
  );
};

export default Prices;
