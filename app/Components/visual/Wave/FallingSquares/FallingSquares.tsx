import "./style.css"
export default function FallingSquares() {
  return (
    <div className="falling-container">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="square"></div>
      ))}
    </div>
  );
}
//Chat
//IO