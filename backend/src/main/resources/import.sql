-- create table users(username varchar_ignorecase(50) not null primary key,password varchar_ignorecase(500) not null,enabled boolean not null);
-- create table authorities (username varchar_ignorecase(50) not null,authority varchar_ignorecase(50) not null,constraint fk_authorities_users foreign key(username) references users(username));
-- create unique index ix_auth_username on authorities (username,authority);
--
--
-- INSERT IGNORE INTO `users` VALUES ('user', '{noop}UseR_@12345', '1');
-- INSERT IGNORE INTO `authorities` VALUES ('user', 'read');
--
-- INSERT IGNORE INTO `users` VALUES ('admin', '{bcrypt}$2a$12$kIWBj1W6Y/8G0b30Y4sW7ONP6oNZLeI77dcVeBfVYfBoAqoVN6Hb6', '1');
-- INSERT IGNORE INTO `authorities` VALUES ('admin', 'admin');

INSERT INTO tb_category(name) VALUES ('Acessórios');
INSERT INTO tb_category(name) VALUES ('Armazenamento');
INSERT INTO tb_category(name) VALUES ('Computadores');
INSERT INTO tb_category(name) VALUES ('Dispositivos');
INSERT INTO tb_category(name) VALUES ('Hardware');
INSERT INTO tb_category(name) VALUES ('Impressoras');
INSERT INTO tb_category(name) VALUES ('Monitores');
INSERT INTO tb_category(name) VALUES ('Periféricos');
INSERT INTO tb_category(name) VALUES ('Redes');
INSERT INTO tb_category(name) VALUES ('Segurança');


INSERT INTO tb_product(name, description, price, img_url) VALUES ('Placa de Vídeo GTX', 'Placa de vídeo com 6GB GDDR6 para alto desempenho.', 1499.90, 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/346629/Placa-de-V-deo-Gigabyte-NVIDIA-GeForce-GTX-1660-TI-D6-6GB-GDDR6-GV-N166TD6-6GD_1702906759_g.jpg');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Teclado Mecânico RGB', 'Teclado com switches mecânicos e iluminação RGB.', 299.90, 'https://vivensis.vtexassets.com/arquivos/ids/155437-1000-1000/Teclado-Mamba-Product-Image02.png?v=638055295894930000');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Mouse Gamer', 'Mouse com alta precisão e customização de DPI.', 199.90,'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-320m-mouse/assets/mouse-alienware-aw320m-black-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1127&qlt=100,1&resMode=sharp2&size=1127,804&chrss=full');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Monitor 4K', 'Monitor Ultra HD de 27" para alta definição', 1899.00   ,'https://www.fujiokadistribuidor.com.br/arquivos/monitor-gamer-elite-curve-2.png?v=638469636616270000');




INSERT INTO tb_product_category(product_id, category_id) VALUES (1,5);
INSERT INTO tb_product_category(product_id, category_id) VALUES (2,8);
INSERT INTO tb_product_category(product_id, category_id) VALUES (3,8);
INSERT INTO tb_product_category(product_id, category_id) VALUES (4,7);


