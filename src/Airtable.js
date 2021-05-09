import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const urlProducts = '/api/products';

const Airtable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(urlProducts);
      setProducts(data);
    } catch (error) {
      <h4> `link API DATA not Available info:${error}`</h4>;
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section section-center">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="section section-center">
      <div className="title">
        <h2>Airtable</h2>
        <div className="title-underline"></div>
      </div>
      <div className="products">
        {products.map((product) => {
          const {
            id, url, name, price,
          } = product;
          return (
            <Link to={`/${id}`} className="product" key={id}>
              <img src={url} alt={name} />
              <div className="info">
                <h5>{name}</h5>
                <h5 className="price">${price}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Airtable;
