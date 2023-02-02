import { AiFillSafetyCertificate } from "react-icons/ai";

function Card() {
  return (
    <div className="card">
      <img src="" alt="" />
      <h2 className="card__title">Nom</h2>
      <p className="card__desc">Description</p>
      <p className="card__weight">Height</p>
      <AiFillSafetyCertificate />
    </div>
  );
}

export default Card;
