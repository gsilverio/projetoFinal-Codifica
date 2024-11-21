package com.projetoFinal.controllers;

import com.projetoFinal.entities.Comments;
import com.projetoFinal.services.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products/{productId}/comments")
public class CommentsController {

    @Autowired
    private CommentsService commentsService;

    @GetMapping
    public ResponseEntity<List<Comments>> getAllCommentsByProduct(@PathVariable Long productId) {
        List<Comments> comments = commentsService.findAllCommentsByProduct(productId);
        return ResponseEntity.ok(comments);
    }

    @PostMapping
    public ResponseEntity<Comments> createComment(@PathVariable Long productId, @RequestBody Comments comment) {
        Comments createdComment = commentsService.createComment(productId, comment);
        return ResponseEntity.ok(createdComment);
    }

    @PutMapping("/{commentId}")
    public ResponseEntity<Comments> updateComment(
            @PathVariable Long commentId,
            @RequestBody String updatedCommentText) {
        Comments comment = commentsService.updateComment(commentId, updatedCommentText);
        return ResponseEntity.ok(comment);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long commentId) {
        commentsService.deleteComment(commentId);
        return ResponseEntity.noContent().build();
    }
}
