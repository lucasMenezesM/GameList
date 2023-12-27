export default function GameDetails({ developer, platform }) {
  return (
    <div className="game-details">
      <p>Developer: {developer}</p>
      <p>Platform: {platform}</p>
    </div>
  );
}
