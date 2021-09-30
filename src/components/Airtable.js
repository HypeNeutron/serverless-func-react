import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import Loading from './Loading';
const callAirTable = '/api/airtable';

function Airtable() {
  const { products, loading, errorMsg } = useFetch(callAirTable);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className='section section-center'>
      <div className='title'>
        <h2>Airtable</h2>
        <div className='title-underline'></div>
      </div>
      <div className='products'>
        {errorMsg.status ? (
          <h4>{errorMsg.msg}</h4>
        ) : (
          products.map((product) => {
            const { id, url, name, price } = product;
            return (
              <Link to={`/${id}`} className='product' key={id}>
                <img src={url} alt={name} />

                <div className='info'>
                  <h5>{name}</h5>
                  <h5 className='price'>${price}</h5>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </section>
  );
}

export default Airtable;
