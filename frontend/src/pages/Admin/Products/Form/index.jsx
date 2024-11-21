import { useForm, Controller } from "react-hook-form";
import "./styles.css";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestBackEnd } from "../../../../utils/request";
import CurrencyInput from "react-currency-input-field";
import { toast } from "react-toastify";

const Form = () => {
  const [selectCategories, setSelectCategories] = useState([]);

  const { productId } = useParams();
  const isEditing = productId !== "create";
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  useEffect(() => {
    requestBackEnd({ url: "/categories" }).then((response) => {
      setSelectCategories(response.data.content);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      requestBackEnd({ url: `/products/${productId}` }).then((response) => {
        const product = response.data;
        setValue("name", product.name);
        setValue("price", product.price);
        setValue("description", product.description);
        setValue("imgUrL", product.imgUrL);
        setValue("categories", product.categories);
      });
    }
  }, [isEditing, productId, setValue]);

  const onSubmit = (formData) => {
    const data = {
      ...formData,
      price: String(formData.price).replace(",", "."),
    };
    const config = {
      method: isEditing ? "PUT" : "POST",
      url: isEditing ? `/products/${productId}` : `/productsx`,
      data: data,
      withCredentials: true,
      //NAO TEM DATA PORQUE GET NAO PRECISA DE CORPO
    };
    requestBackEnd(config)
      .then((response) => {
        toast.info("Producto cadastrado com sucesso");
        history("/admin/products");
      })
      .catch(() => {
        toast.error("Erro ao cadastrar produto");
      });
  };

  const handleCancel = () => {
    history("/admin/products");
  };
  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DO PRODUTO</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="product-bottom-30">
                <input
                  {...register("name", {
                    required: "Campo obrigatorio",
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Nome do Produto"
                  name="name"
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
                </div>
              </div>

              <div className="product-bottom-30">
                <Controller
                  name="categories"
                  rules={{
                    required: true,
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={selectCategories}
                      classNamePrefix="product-crud-select"
                      isMulti
                      getOptionLabel={(categorie) => categorie.name}
                      getOptionValue={(categorie) => String(categorie.id)}
                    />
                  )}
                />
                {errors.categories && (
                  <div className="invalid-feedback d-block">
                    Campo Obrigatorio
                  </div>
                )}
              </div>

              <div className="product-bottom-30">
                <Controller
                  name="price"
                  rules={{ required: "Campo obrigatorio" }}
                  control={control}
                  render={({ field }) => (
                    <CurrencyInput
                      placeholder="Preço"
                      className={`form-control base-input ${
                        errors.price ? "is-invalid" : ""
                      }`}
                      disableGroupSeparators={true}
                      value={field.value}
                      onValueChange={field.onChange}
                    />
                  )}
                />
                <div className="invalid-feedback d-block">
                  {errors.price?.message}
                </div>
              </div>

              <div className="product-bottom-30">
                <input
                  {...register("imgUrL", {
                    required: "Campo obrigatorio",
                    pattern: {
                      value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                      message: "Deve ser uma url valida",
                    },
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.imgUrL ? "is-invalid" : ""
                  }`}
                  placeholder="URL da imagem do produto"
                  name="imgUrL"
                />
                <div className="invalid-feedback d-block">
                  {errors.imgUrL?.message}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div>
                <textarea
                  {...register("description", {
                    required: "Campo obrigatorio",
                  })}
                  className={`form-control base-input h-auto ${
                    errors.description ? "is-invalid" : ""
                  }`}
                  placeholder="Descriçao"
                  name="description"
                  rows={10}
                />
                <div className="invalid-feedback d-block">
                  {errors.description?.message}
                </div>
              </div>
            </div>
          </div>
          <div className="product-crud-buttons-container">
            <button
              className="btn btn-outline-danger product-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary product-crud-button">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
