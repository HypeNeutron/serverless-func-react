import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import Loading from '../components/Loading';

function SingleProductATB() {
  const { productID } = useParams();
  const urlParams = `/api/airtable?id=${productID}`;
  const { products, loading, errorMsg } = useFetch(urlParams);

  if (loading) {
    return <Loading />;
  }

  const { fields } = products;
  const { name, desc, price, image } = fields;

  return (
    <section className="section section-center">
      <Link to="/" className="link">
        Back Home
      </Link>
      {errorMsg.status ? (
        <h4>{errorMsg.msg}</h4>
      ) : (
        <>
          <div className="title">
            <h2>{name}</h2>
            <div className="title-underline" />
          </div>
          <article className="single-product">
            <img className="single-product-img" src={image[0].url} alt={name} />
            <div>
              <h5>{name}</h5>
              <h5 className="price">${price}</h5>
              <p>{desc}</p>
            </div>
          </article>
        </>
      )}
    </section>
  );
}
export default SingleProductATB;
