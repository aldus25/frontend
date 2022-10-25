import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams, Link } from 'react-router-dom';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import './Page.css';

function Page() {
  const { catId } = useParams();
  const categories = useOutletContext();
  const baseCatReferences = categories.filter((x) => x._id === catId);
  const selectedCategory = baseCatReferences[0]?.options;

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/items')
      .then((res) => res.json())
      .then(setItems);
  }, []);

  const filterItems = items.filter(
    ({ _id }) => catId && selectedCategory.some(({ _ref }) => _ref === _id)
  );

  return (
    <>
      <ul className="layout-grid">
        {catId &&
          filterItems.map((item, i) => (
            <li key={i}>
              <Card item={item} />
            </li>
          ))}
        {!catId &&
          categories.map((item, i) => (
            <li key={i}>
              <Link to={item._id}>
                <Card item={item} />
              </Link>
            </li>
          ))}
      </ul>
      <Footer />
    </>
  );
}

export default Page;
