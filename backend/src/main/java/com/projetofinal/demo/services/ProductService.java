package com.projetofinal.demo.services;

import com.projetofinal.demo.DTO.CategoryDTO;
import com.projetofinal.demo.DTO.CommentsDTO;
import com.projetofinal.demo.DTO.ProductDTO;
import com.projetofinal.demo.entities.Category;
import com.projetofinal.demo.entities.Comments;
import com.projetofinal.demo.entities.Product;
import com.projetofinal.demo.repositories.CategoryRepository;
import com.projetofinal.demo.repositories.CommetsRepository;
import com.projetofinal.demo.repositories.ProductRepository;
import com.projetofinal.demo.services.exceptions.DatabaseException;
import com.projetofinal.demo.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CommetsRepository commetsRepository;


    @Transactional(readOnly=true)
    public Page<ProductDTO> findAllPaged(Pageable pageable) {
        Page<Product> entityList = productRepository.findAll(pageable);
        return entityList.map(x -> new ProductDTO(x));
    }

    @Transactional(readOnly = true)
    public ProductDTO findById(Long id) {
        Optional<Product> obj = productRepository.findById(id);
        Product entity = obj.orElseThrow(()-> new ResourceNotFoundException("Entity not found"));

        return new ProductDTO(entity, entity.getCategories());
    }
    @Transactional
    public ProductDTO insert(ProductDTO dto) {
        Product entity = new Product();
        copyDtoToEntity(dto, entity);

        entity = productRepository.save(entity);
        return new ProductDTO(entity, entity.getCategories());

    }
    @Transactional
    public ProductDTO update(Long id, ProductDTO dto) {
        try {
            Product entity = productRepository.getReferenceById(id);
            copyDtoToEntity(dto, entity);
            entity = productRepository.save(entity);
            return new ProductDTO(entity);
        } catch (EntityNotFoundException e){
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }
    @Transactional(propagation = Propagation.SUPPORTS)
    public void delete(Long id) {
        if(!(productRepository.existsById(id)))
        {
            throw new ResourceNotFoundException("Resource not found " + id);
        }
        try {
            productRepository.deleteById(id);
        } catch (DataIntegrityViolationException e){
            throw new DatabaseException("Falha de integridade referencial");
        }
    }

    private void copyDtoToEntity(ProductDTO dto, Product entity) {

        entity.setName(dto.getName());
        entity.setDescription(dto.getDescription());
        entity.setImgUrL(dto.getImgUrL());
        entity.setPrice(dto.getPrice());

        entity.getCategories().clear();
        for(CategoryDTO catDto: dto.getCategories()){
            Category category = categoryRepository.getReferenceById(catDto.getId());
            entity.getCategories().add(category);
        }
        for(CommentsDTO commentsDTO: dto.getComments()){
            Comments comments = commetsRepository.getReferenceById(commentsDTO.getId());
            entity.getComments().add(comments);
        }
    }



}
