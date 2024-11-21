import React, { useCallback, useEffect, useState } from "react";
import { requestBackEnd } from "../../../../utils/request";
import { Link } from "react-router-dom";

import ProductFilter from "../../../../components/ProductFilter";
import "./styles.css";
import ProductCrudCard from "../ProductCrudCard";

function ProductsAdmin() {
  const [page, setPage] = useState(null);
  const [controlComponentsData, setControlComponentsData] = useState({
    activePage: 0,
    filterData: { name: "", category: null },
  });

  const handlePageChange = (pageNumber) => {
    setControlComponentsData({
      ...controlComponentsData,
      activePage: pageNumber,
    });
  };

  const handleSubmitFilter = (data) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  const getProducts = useCallback(() => {
    const config = {
      method: "GET",
      url: "/products",
      params: {
        page: controlComponentsData.activePage,
        size: 3,
        name: controlComponentsData.filterData.name,
        categoryId: controlComponentsData.filterData.category?.id,
      },
    };

    requestBackEnd(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <Link to="/admin/products/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <ProductFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map((product) => (
          <div className="col-sm-6 col-md-12" key={product.id}>
            <ProductCrudCard product={product} onDelete={getProducts} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsAdmin;
