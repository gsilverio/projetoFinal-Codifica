/* eslint-disable react/prop-types */

import Select from "react-select";
import { useState, useEffect } from "react";

import "./styles.css";
import { requestBackEnd } from "../../utils/request";
import { Controller, useForm } from "react-hook-form";

const ProductFilter = ({ onSubmitFilter }) => {
  const [selectCategories, setSelectCategories] = useState([]);
  const { register, handleSubmit, setValue, getValues, control } = useForm();

  const onSubmit = (formData) => {
    onSubmitFilter(formData);
  };
  const handleFormClear = () => {
    setValue("name", "");
    setValue("category", null);
  };
  const handleChangeCategory = (value) => {
    setValue("category", value);
    const obj = {
      name: getValues("name"),
      category: getValues("category"),
    };
    onSubmitFilter(obj);
  };
  useEffect(() => {
    requestBackEnd({ url: "/categories" }).then((response) => {
      setSelectCategories(response.data.content);
    });
  }, []);
  return (
    <>
      <div className="base-card product-filter-container">
        <form onSubmit={handleSubmit(onSubmit)} className="product-filter-form">
          <div className="product-filter-name-container">
            <input
              {...register("name")}
              type="text"
              className={`form-control`}
              placeholder="Nome do Produto"
              name="name"
            />
            <button className="product-filter-button-search-icon"></button>
          </div>
          <div className="product-filter-bottom-container">
            <div className="product-filter-category-container">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={selectCategories}
                    isClearable
                    placeholder="Categoria"
                    classNamePrefix="product-filter-select"
                    onChange={(value) => handleChangeCategory(value)}
                    getOptionLabel={(categorie) => categorie.name}
                    getOptionValue={(categorie) => String(categorie.id)}
                  />
                )}
              />
            </div>
            <button
              onClick={handleFormClear}
              className="btn btn-outline-secondary btn-product-filter-clear"
            >
              LIMPAR <span className="btn-product-filter-word">FILTRO</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductFilter;
