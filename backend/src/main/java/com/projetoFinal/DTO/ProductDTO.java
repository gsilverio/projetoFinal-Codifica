package com.projetoFinal.DTO;

import com.projetoFinal.entities.Category;
import com.projetoFinal.entities.Product;

import java.io.Serial;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


public class ProductDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;

    private String name;

    private String description;

    private Double price;

    private String imgUrL;

    Set<CommentsDTO> comments = new HashSet<>();

    Set<CategoryDTO> categories = new HashSet<>();

    public ProductDTO(){}

    public ProductDTO(Long id, String name, String description, Double price, String imgUrL) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrL = imgUrL;
    }

    public ProductDTO(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.imgUrL = product.getImgUrL();
    }

    public ProductDTO(Product entity, Set<Category> categories) {
        this(entity);
        categories.forEach(cat->this.categories.add(new CategoryDTO(cat)));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImgUrL() {
        return imgUrL;
    }

    public void setImgUrL(String imgUrL) {
        this.imgUrL = imgUrL;
    }

    public Set<CommentsDTO> getComments() {
        return comments;
    }

    public void setComments(Set<CommentsDTO> comments) {
        this.comments = comments;
    }

    public Set<CategoryDTO> getCategories() {
        return categories;
    }

    public void setCategories(Set<CategoryDTO> categories) {
        this.categories = categories;
    }
}
