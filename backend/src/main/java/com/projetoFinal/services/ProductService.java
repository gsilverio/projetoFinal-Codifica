package com.projetoFinal.services;

import com.projetoFinal.DTO.CategoryDTO;
import com.projetoFinal.DTO.CommentsDTO;
import com.projetoFinal.DTO.ProductDTO;
import com.projetoFinal.entities.Category;
import com.projetoFinal.entities.Comments;
import com.projetoFinal.entities.Product;
import com.projetoFinal.repositories.CategoryRepository;
import com.projetoFinal.repositories.CommetsRepository;
import com.projetoFinal.repositories.ProductRepository;
import com.projetoFinal.services.exceptions.DatabaseException;
import com.projetoFinal.services.exceptions.ResourceNotFoundException;
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
