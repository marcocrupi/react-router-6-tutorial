// L'hook useParams restituisce un oggetto di coppie chiave/valore 
// dei parametri dinamici dall'URL corrente a cui corrisponde il <Route path>. 
// I percorsi figlio ereditano tutti i parametri dai percorsi padre.
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
  // Se mettiamo manualmente del testo nella barra degli indirizzi lo
  // vedremo stampato sulla console.
  console.log(useParams());
  const { productId } = useParams();
  return (
    <section className='section product'>
      <h4>{productId}</h4>
      <Link to="/products">Back to the product</Link>
    </section>
  );
};

export default SingleProduct;
