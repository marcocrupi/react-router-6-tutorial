// L'hook useParams restituisce un oggetto di coppie chiave/valore 
// dei parametri dinamici dall'URL corrente a cui corrisponde il <Route path>. 
// I percorsi figlio ereditano tutti i parametri dai percorsi padre.
import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  // È collegato al productId che fa da placeholder in App.js
  const { productId } = useParams();

  // Se mettiamo manualmente del testo nella barra degli indirizzi lo
  // vedremo stampato sulla console.
  console.log(useParams());

  // Il metodo find() restituisce il primo elemento nell'array fornito
  // che soddisfa la funzione di test fornita. Se nessun valore soddisfa
  // la funzione di test, viene restituito undefined.
  const product = products.find((product) => product.id === productId);

  const { image, name } = product;

  return (
    <section className="section product">
      <img src={image} alt="" />
      <h5>{name}</h5>
      <Link to="/products">Back to the product</Link>
    </section>
  );
};

export default SingleProduct;
