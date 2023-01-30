// Função onde definimos os props que serão preenchidos com as informações do banco de dado
function CardContent({data: {name, size, price}}) {
    return (
      <div>
        <h2>{name}</h2>
        <h2>{size}</h2>
        <h2>{price}</h2>
      </div>
    );
  }
 
  export default CardContent;