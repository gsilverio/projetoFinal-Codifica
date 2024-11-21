package com.projetoFinal.services;

import com.projetoFinal.DTO.CommentsDTO;
import com.projetoFinal.entities.Comments;
import com.projetoFinal.entities.Product;
import com.projetoFinal.repositories.CommentsRepository;
import com.projetoFinal.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsService {

    @Autowired
    private CommentsRepository commentsRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<Comments> findAllCommentsByProduct(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with ID: " + productId));
        return product.getComments().stream().toList();
    }

    public CommentsDTO createComment(Long productId, Comments comment) {
        Product product = productRepository.getReferenceById(productId);
        CommentsDTO commentsDTO = new CommentsDTO(comment.getId(), comment.getComment());

        Comments entity = new Comments();
        entity.setComment(comment.getComment());
        entity.setProduct(product);

        entity = commentsRepository.save(entity);
        return new CommentsDTO(entity.getId(), entity.getComment());
    }


    public Comments updateComment(Long commentId, String updatedCommentText) {
        Comments comment = commentsRepository.findById(commentId)
                .orElseThrow(() -> new RuntimeException("Comment not found with ID: " + commentId));
        comment.setComment(updatedCommentText);
        return commentsRepository.save(comment);
    }

    public void deleteComment(Long commentId) {
        if (!commentsRepository.existsById(commentId)) {
            throw new RuntimeException("Comment not found with ID: " + commentId);
        }
        commentsRepository.deleteById(commentId);
    }
}
