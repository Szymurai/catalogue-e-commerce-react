import React from "react";
import "./Result.css";
const Result = (props) => {
  const buttonTxt = "Zamów";
  const {
    name,
    err,
    link,
    manufacturer,
    partNumber,
    priceBrutto,
    priceNetto,
    quantity,
    sku,
    value,
    img,
  } = props.data;

  let content = null;

  if (!err && sku) {
    content = (
      <>
        <h1>Nazwa części:</h1>
        <p style={{ fontStyle: "italic" }}>{name}</p>
        <div className="image">
          <img src={img} alt="Logo AutomotivExpert" className="partImg" />
        </div>
        <h2>Informacje uzupełniające:</h2>
        <div>
          SKU: <strong>{sku}</strong>
        </div>
        <div>
          Numer katalogowy: <strong>{partNumber}</strong>
        </div>
        <div>
          Producent: <strong>{manufacturer}</strong>
        </div>
        <div>
          Cena (netto): <strong>{priceNetto}</strong> zł
        </div>
        <div>
          Cena (brutto): <strong>{parseFloat(priceBrutto).toFixed(2)}</strong>{" "}
          zł
        </div>
        <div>
          Stan magazynowy: <strong>{quantity}</strong> sztuk
        </div>
        <a href={link} className="button">
          <strong>{buttonTxt.toUpperCase()}</strong>
        </a>{" "}
      </>
    );
  }

  return (
    <div className="result">
      {err ? (
        <h1>{`Nie mamy w bazie części o numerze SKU: ${sku}`}</h1>
      ) : (
        content
      )}
    </div>
  );
};

export default Result;

{
  /* <h1>Nazwa części:</h1>
<p style={{ fontStyle: "italic" }}>{name}</p>
<h2>Informacje uzupełniające:</h2>
<div>
  SKU: <strong>{sku}</strong>
</div>
<div>
  Numer katalogowy: <strong>{partNumber}</strong>
</div>
<div>
  Producent: <strong>{manufacturer}</strong>
</div>
<div>
  Cena (netto): <strong>{priceNetto}</strong> zł
</div>
<div>
  Cena (brutto): <strong>{parseFloat(priceBrutto).toFixed(2)}</strong> zł
</div>
<div>
  Stan magazynowy: <strong>{quantity}</strong> sztuk
</div>
<a href={link} className="button">
  <strong>{buttonTxt.toUpperCase()}</strong>
</a> */
}
