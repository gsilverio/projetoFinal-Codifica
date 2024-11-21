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
    const obj = {
      name: formData.name || "", // Garante que o nome seja enviado
      category: formData.category || null, // Categoria pode ser null
    };
    onSubmitFilter(obj);
  };

  const handleChangeName = (event) => {
    const value = event.target.value;
    setValue("name", value); // Atualiza o valor do campo nome
    const obj = {
      name: value, // Nome atualizado
      category: getValues("category"), // Categoria atual
    };
    onSubmitFilter(obj); // Envia o filtro atualizado
  };

  const handleChangeCategory = (value) => {
    setValue("category", value);
    const obj = {
      name: getValues("name"), // Nome atual
      category: value, // Categoria atualizada
    };
    onSubmitFilter(obj); // Envia o filtro atualizado
  };

  const handleFormClear = () => {
    setValue("name", ""); // Limpa o campo nome
    setValue("category", null); // Limpa o campo categoria
    onSubmitFilter({ name: "", category: null }); // Envia o filtro vazio
  };

  useEffect(() => {
    requestBackEnd({ url: "/categories" }).then((response) => {
      setSelectCategories(response.data.content);
    });
  }, []);

  return (
    <div className="base-card product-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="product-filter-form">
        <div className="product-filter-name-container">
          <input
            {...register("name")}
            type="text"
            className="form-control"
            placeholder="Nome do Produto"
            name="name"
            onChange={handleChangeName} // Captura mudanças no campo nome
          />
          <button
            type="submit"
            className="product-filter-button-search-icon"
          ></button>
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
                  onChange={handleChangeCategory} // Captura mudanças na categoria
                  getOptionLabel={(category) => category.name}
                  getOptionValue={(category) => String(category.id)}
                />
              )}
            />
          </div>
          <button
            type="button"
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-product-filter-clear"
          >
            LIMPAR <span className="btn-product-filter-word">FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
