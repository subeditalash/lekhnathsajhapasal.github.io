import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { listCategory, listCategoryDetails } from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";

const cat = {
  backgroundColor: "#fac569",
  margine: "20px",
  padding: "10px",
  borderRadius: "25px",
  borderColor: "#e95420",
  borderWidth: "3px",
};
function Category() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  const categoryList = useSelector((state) => {
    return state.categoryList;
  });
  const { error, loading, products } = categoryList;
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  useEffect(() => {
    submitHandler();
  }, [keyword]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          {products &&
            products.map((category) => (
              <div key={category._id}>
                <button
                  onClick={(e) => {
                    setKeyword(category.name);
                  }}
                  style={cat}
                >
                  {category.name}
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Category;
