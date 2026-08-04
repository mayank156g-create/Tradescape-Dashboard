import StatusBadge from "./StatusBadge";

function Header({ status }) {
  return (
    <header className="dashboard__header">
      <div className="dashboard__header-left">
        <h1 className="dashboard__title">Trader Risk Dashboard</h1>
        <p className="dashboard__subtitle">
          Monitor your trading performance and account risk.
        </p>
      </div>

      <div className="dashboard__header-right">
        <span className="account-badge">
          <span className="account-badge__dot" />
          <span className="mono">FTMO Challenge · $100K</span>
        </span>
        <span className="live-pill">
          <span className="live-pill__dot" />
          Live
        </span>
        {status && <StatusBadge status={status} pulse />}
      </div>
    </header>
  );
}

export default Header;
