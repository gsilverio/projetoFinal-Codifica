package com.projetofinal.demo.DTO;

import com.projetofinal.demo.entities.Product;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;


public class CommentsDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;

    private String comment;

    private Product product;

    public CommentsDTO(){}

    public CommentsDTO(Long id, String comment) {
        this.id = id;
        this.comment = comment;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CommentsDTO comments = (CommentsDTO) o;
        return Objects.equals(id, comments.id) && Objects.equals(comment, comments.comment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, comment);
    }
}
