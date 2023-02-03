// Função onde definimos os props que serão preenchidos com as informações do banco de dado
function CardContent({data: {name, size, price, img}}) {
    return (
      <div>
        <p className="card-text">{name}</p>
        <img className="img-sizer" src={img}/>
        <h2 className="card-text">{size}</h2>
        <p className="card-text">{price}</p>
      </div>
    );
  }
 
  export default CardContent;