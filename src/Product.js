import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { productID } = useParams();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/products?id=${productID}`);
      setProduct(data);
    } catch (error) {
      <h4> `link API DATA not Available info:${error}`</h4>;
    }
    setLoading(false);
  }, [productID]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <section className="section section-center">
        <h2>Loading...</h2>
      </section>
    );
  }

  const { fields } = product;
  const {
    name, desc, price, image,
  } = fields;

  return (
    <section className="section section-center">
      <Link to="/" className="link">
        Back Home
      </Link>
      <div className="title">
        <h2>{name}</h2>
        <div className="title-underline"></div>
      </div>

      <article className="single-product">
        <img className="single-product-img" src={image[0].url} alt={name} />
        <div>
          <h5>{name}</h5>
          <h5 className="price">${price}</h5>
          <p>{desc}</p>
        </div>
      </article>
    </section>
  );
};
export default Product;
