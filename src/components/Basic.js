import React from 'react';
import Loading from './Loading';
import useFetch from '../hook/useFetch';
const basicApi = '/api/basic-api';

function Basic() {
  const { products, loading, errorMsg } = useFetch(basicApi);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className='section section-center'>
      <div className='title'>
        <h2>basic setup</h2>
        <div className='title-underline'></div>
        <div className={`${errorMsg.status ? 'products--error' : 'products'}`}>
          {errorMsg.status ? (
            <h4>{errorMsg.msg}</h4>
          ) : (
            products.map((product) => {
              const {
                id,
                image: { url },
                price,
                name,
              } = product;
              return (
                <article className='product' key={id}>
                  <img src={url} alt={name} />
                  <h5>{name}</h5>
                  <h5 className='price'>${price}</h5>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Basic;
