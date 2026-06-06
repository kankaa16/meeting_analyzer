function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className="stat-card"
      style={{
        background: color,
      }}
    >
      <h2>{value}</h2>

      <p>{title}</p>
    </div>
  );
}

export default StatCard;