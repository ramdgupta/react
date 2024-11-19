import "./BannerCard.css";

export default function BannerCard({className, src, title, alt }) {
  return (
    <div className={className}>
      <img src={src} alt={alt} className="card-img" />
      <span className="card-title">{title}</span>
      <a href="#" className="card-link">Explore</a>
    </div>
  );
}
