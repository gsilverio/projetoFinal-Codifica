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
INSERT INTO tb_address(rua, cidade, estado, numero, complemento) VALUES('Rua TESTE', 'São Paulo', 'São Paulo', '12345', '');
INSERT INTO tb_address(rua, cidade, estado, numero, complemento) VALUES('Rua TESTE1', 'São Paulo1', 'São Paulo', '12345', '');

INSERT INTO tb_user(first_name, last_name, email, password, endereco_id) VALUES ('Guilherme', 'Silverio', 'gg@gmail.com','$2a$10$5z1i.tAWluen9N2NTAEQXeGA3n4Q8jzzcfaFsEaxzLXAOMuR2aQ1K',1);
INSERT INTO tb_user(first_name, last_name, email, password, endereco_id) VALUES ('Malenia', 'BladeOfMiquella', 'malenia@gmail.com','$2a$10$5z1i.tAWluen9N2NTAEQXeGA3n4Q8jzzcfaFsEaxzLXAOMuR2aQ1K',2);
INSERT INTO tb_role(authority) VALUES ('ROLE_ADMIN'), ('ROLE_OPERATOR');


INSERT INTO user_roles(id_user, id_roles) VALUES (1,1);
INSERT INTO user_roles(id_user, id_roles) VALUES (1,2);
INSERT INTO user_roles(id_user, id_roles) VALUES (2,2);




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
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Monitor 4K', 'Monitor Ultra HD de 27" para alta definição', 1899.00,'https://www.fujiokadistribuidor.com.br/arquivos/monitor-gamer-elite-curve-2.png?v=638469636616270000');

INSERT INTO tb_product(name, description, price, img_url) VALUES ('Headset Surround', 'Headset com som surround 7.1 para jogos', 399.00,'https://www.logitechstore.com.br/media/catalog/product/cache/105e6f420716e0751863c4b81f527d17/0/1/0124.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('SSD NVMe 1TB', 'SSD com leitura ultrarrápida para armazenamento', 499.99,'https://shopinfo.vteximg.com.br/arquivos/ids/1649947-1000-1000/1.png?v=638639278622630000');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Processador i7', 'Processador Intel Core i7 de 10ª geração', 1799.99,'https://img.terabyteshop.com.br/archive/164573092/processador-intel-core-i7-10gen-03.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Memória RAM 16GB DDR4', 'Memória RAM de alta performance para PCs', 299.90,'https://img.terabyteshop.com.br/produto/g/memoria-ddr4-geil-orion-rgb-edicao-amd-16gb-3000mhz-gray-gaosg416gb3000c16asc_115375.png');

INSERT INTO tb_product(name, description, price, img_url) VALUES ('Gabinete RGB', 'Gabinete com painel de vidro e luzes RGB', 499.99,'https://img.terabyteshop.com.br/produto/g/gabinete-aerocool-gamer-cylon-rgb-led-preto-mid-tower-sfonte_47105.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Placa-mãe ATX', 'Placa-mãe compatível com Intel de última geração', 699.90,'https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b760-gaming-x-ax-chipset-b760-intel-lga-1700-atx-ddr5_167947.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Câmera de Segurança Wi-Fi', 'Câmera de vigilância com visão noturna e Wi-Fi', 259.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdIZ9krEf9voLhMdyTwjCoDSN3Jzt7dAeMg&s');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Hub USB 3.0', 'Hub com 4 portas USB 3.0 para conexões rápidas', 89.90,'https://images.tcdn.com.br/img/img_prod/1062466/hub_usb_3_0_4_portas_comtac_9396_24129396_1_09c08ba30086fa8e1994ae1a79d61301.png');

INSERT INTO tb_product(name, description, price, img_url) VALUES ('Fonte 600W Modular', 'Fonte de alimentação modular para PCs gamer', 349.90,'https://shopinfo.vteximg.com.br/arquivos/ids/1645760-1000-1000/1.png?v=638627082977900000');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Adaptador Bluetooth USB', 'Adaptador para conexão Bluetooth em PC', 49.90,'https://images.tcdn.com.br/img/img_prod/735504/adaptador_usb_bluetooth_5_0_shinka_3357_1_c672b8641d8ff33689726a311573176f.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Mousepad XXL', 'Mousepad grande com superfície otimizada para jogos', 59.90,'https://shopinfo.vteximg.com.br/arquivos/ids/1604943-1000-1000/1.png?v=638572160400700000');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Webcam HD', 'Webcam com resolução HD para videochamadas', 129.90,'https://sixpel.com.br/wp-content/uploads/2024/06/513035.png');

INSERT INTO tb_product(name, description, price, img_url) VALUES ('SSD SATA 500GB', 'SSD de 500GB com interface SATA', 349.90,'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-blue-sa510-sata-2-5-ssd/gallery/wd-blue-sa510-sata-2-5-ssd-500GB-left.png.thumb.1280.1280.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Carregador USB-C Rápido', 'Carregador USB-C com carregamento rápido', 99.90,'https://intelbras.vtexassets.com/arquivos/ids/167369-800-auto?v=638138930291000000&width=800&height=auto&aspect=true');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Adaptador HDMI para VGA', 'Adaptador para conectar HDMI em monitores VGA', 34.90,'https://www.bright.com.br/media/djcatalog2/images/item/2/conversor-vga-para-hdmi_f.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Extensor Wi-Fi', 'Extensor de sinal Wi-Fi para maior alcance', 159.90,'https://backend.intelbras.com/sites/default/files/2024-07/roteador-extensor-wi-fi-6-mesh-ex-1500.png');

INSERT INTO tb_product(name, description, price, img_url) VALUES ('Fone de Ouvido Bluetooth', 'Fone de ouvido sem fio com Bluetooth 5.0', 189.90,'https://waaw.com.br/cdn/shop/products/SENSE-300HBNC-01.png?v=1660920638&width=2048');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Tablet 10"', 'Tablet com tela de 10 polegadas e Android', 999.90,'https://p1-ofp.static.pub//fes/cms/2024/05/24/l00v181zmokewobpvy9j8uw8pw9wnl135377.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Impressora Multifuncional', 'Impressora com scanner e copiadora integrada', 699.90,'https://d1x5sfejm3zc3e.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/4/Z/4ZB82A-1_T1680774456.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Cabo HDMI 2m', 'Cabo HDMI de alta velocidade com 2 metros', 49.90,'https://d229kd5ey79jzj.cloudfront.net/701/images/701_1_H.png');

INSERT INTO tb_product(name, description, price, img_url) VALUES ('Cooler para CPU', 'Cooler de alta performance para processador', 149.90,'https://shopinfo.vtexassets.com/arquivos/ids/1512805/1.png?v=638318560758230000');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Pendrive 64GB', 'Pendrive com capacidade de 64GB', 79.90,'https://www.westerndigital.com/content/dam/store/en-us/assets/products/usb-flash-drives/cruzer-blade-usb-2-0/gallery/cruzer-blade-usb-2-0-angle.png.thumb.1280.1280.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Switch Gigabit 5 Portas', 'Switch de rede com 5 portas gigabit', 159.90,'https://images.tcdn.com.br/img/img_prod/245284/switch_gigabit_ethernet_de_5_portas_s1005g_skd_intelbras_10016947_1_5b71546183dcfd46ec60bbffdd845e0d.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Notebook Gamer 15.6"', 'Notebook com alta performance para jogos', 4499.90,'https://www.lenovo.com/medias/ideapad-gaming3i-photo1-1-.png?context=bWFzdGVyfHJvb3R8MTM4NTExM3xpbWFnZS9wbmd8aDk2L2g2Mi8xNDk0MTgyNzMzNDE3NC5wbmd8NzY4MDMyMzJlYzViMjkyMTQ0NjUxNDcyYTQ4ZDc4ZWE3ZWZiNGNlYWZjMzZlZDBlNDgzMDBkOTNlNDI4NzMwNg');

INSERT INTO tb_product(name, description, price, img_url) VALUES ('Leitor de Cartões USB', 'Leitor de cartões de memória USB 3.0', 59.90,'https://www.westerndigital.com/content/dam/store/en-us/assets/products/readers/uhs-i-usb-3-0-sd-card-reader/gallery/uhs-i-usb-3-0-sd-card-reader-up.png.thumb.1280.1280.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Teclado Gamer Membrana', 'Teclado gamer com iluminação LED', 149.90,'https://b2bleonorashop.vtexassets.com/arquivos/ids/160958/teclado-gamer-player-vermelho-menbrana-multimidia-ergonomico-letron-74398--1.png?v=637999905649400000');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Carregador Portátil 10000mAh', 'Power bank de 10000mAh com 2 saídas USB', 149.90,'https://www.vxcase.com.br/cdn/shop/files/Bateria-Externa-VX-Case-Soft-Touch-10000mAh---001_1.png?v=1721161140&width=1000');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Projetor Portátil', 'Projetor portátil com resolução HD', 999.90,'https://cdn.leroymerlin.com.br/products/mini_projetor_4k_1080p_portatil_wifi_bluetooth_full_hd_hy300_1572122254_e37f_600x600.png');

INSERT INTO tb_product(name, description, price, img_url) VALUES ('Roteador Wi-Fi 6', 'Roteador com tecnologia Wi-Fi 6 para maior velocidade', 399.90,'https://www.dlink.com.br/wp-content/uploads/2019/11/DIRX6060Front.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('SSD Externo 1TB', 'SSD externo com 1TB de armazenamento', 799.90,'https://img.terabyteshop.com.br/produto/g/ssd-externo-hikvision-t300s-1tb-25-sata-iii-6gbs-leitura-560mbs-e-gravacao-500mbs-hs-essd-t300s-1t_178015.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Microfone Condensador USB', 'Microfone com qualidade de estúdio para gravação', 249.90,'https://images.kabum.com.br/produtos/fotos/sync_mirakl/209714/Microfone-Condensador-Blue-Yeti-X-Usb-Preto-988-000105_1729391132_gg.jpg');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Placa de Captura HDMI', 'Placa para captura de vídeo HDMI', 299.90,'https://neoid.com.br/wp-content/uploads/2023/08/4K-HDMI-01.png');

INSERT INTO tb_product(name, description, price, img_url) VALUES ('Carregador de Bateria AA/AAA', 'Carregador para pilhas AA e AAA recarregáveis', 99.90,'https://www.duracell.com.br/upload/sites/21/2020/09/1013491_rechargeable_chargers_CEF14_1_primary.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('HD Externo 2TB', 'HD externo com 2TB de capacidade', 599.90,'https://images.tcdn.com.br/img/img_prod/448593/hd_externo_2tb_3_0_stjl2000400_seagate_16539_4_5276f9167411bc8a5f53d6e236fdc3e2.png');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Cabo USB-C para USB-A 1m', 'Cabo de 1 metro para conectar USB-C a USB-A', 29.90,'https://brmotorolanew.vtexassets.com/arquivos/ids/159065/Carregador-usb-C-1-foto-1--3-.png?v=637606482770170000');
INSERT INTO tb_product(name, description, price, img_url) VALUES ('Estabilizador 300VA', 'Estabilizador para proteção de equipamentos eletrônicos', 189.90,'https://mirandacomputacao.jetassets.com.br/produto/multifotos/prd_178629_p_25219_prd_178629_p_25219.png.png');

-- --

INSERT INTO tb_product_category(product_id, category_id) VALUES (1,5);
INSERT INTO tb_product_category(product_id, category_id) VALUES (2,8);
INSERT INTO tb_product_category(product_id, category_id) VALUES (3,8);
INSERT INTO tb_product_category(product_id, category_id) VALUES (4,7); 
 
INSERT INTO tb_product_category(product_id, category_id) VALUES (5,8);
INSERT INTO tb_product_category(product_id, category_id) VALUES (6,2);
INSERT INTO tb_product_category(product_id, category_id) VALUES (7,5);
INSERT INTO tb_product_category(product_id, category_id) VALUES (8,5);

INSERT INTO tb_product_category(product_id, category_id) VALUES (9,5);
INSERT INTO tb_product_category(product_id, category_id) VALUES (10,5);
INSERT INTO tb_product_category(product_id, category_id) VALUES (11,10);
INSERT INTO tb_product_category(product_id, category_id) VALUES (12,1);

INSERT INTO tb_product_category(product_id, category_id) VALUES (13,5);
INSERT INTO tb_product_category(product_id, category_id) VALUES (14,1);
INSERT INTO tb_product_category(product_id, category_id) VALUES (15,8);
INSERT INTO tb_product_category(product_id, category_id) VALUES (16,8);

INSERT INTO tb_product_category(product_id, category_id) VALUES (17,2);
INSERT INTO tb_product_category(product_id, category_id) VALUES (18,1);
INSERT INTO tb_product_category(product_id, category_id) VALUES (19,1);
INSERT INTO tb_product_category(product_id, category_id) VALUES (20,9);

INSERT INTO tb_product_category(product_id, category_id) VALUES (21,8);
INSERT INTO tb_product_category(product_id, category_id) VALUES (22,4);
INSERT INTO tb_product_category(product_id, category_id) VALUES (23,6);
INSERT INTO tb_product_category(product_id, category_id) VALUES (24,1);

INSERT INTO tb_product_category(product_id, category_id) VALUES (25,5);
INSERT INTO tb_product_category(product_id, category_id) VALUES (26,2);
INSERT INTO tb_product_category(product_id, category_id) VALUES (27,9);
INSERT INTO tb_product_category(product_id, category_id) VALUES (28,3);

INSERT INTO tb_product_category(product_id, category_id) VALUES (29,1);
INSERT INTO tb_product_category(product_id, category_id) VALUES (30,8);
INSERT INTO tb_product_category(product_id, category_id) VALUES (31,1);
INSERT INTO tb_product_category(product_id, category_id) VALUES (32,4);

INSERT INTO tb_product_category(product_id, category_id) VALUES (33,9);
INSERT INTO tb_product_category(product_id, category_id) VALUES (34,2);
INSERT INTO tb_product_category(product_id, category_id) VALUES (35,8);
INSERT INTO tb_product_category(product_id, category_id) VALUES (36,1);

INSERT INTO tb_product_category(product_id, category_id) VALUES (37,1);
INSERT INTO tb_product_category(product_id, category_id) VALUES (38,2);
INSERT INTO tb_product_category(product_id, category_id) VALUES (39,1);
INSERT INTO tb_product_category(product_id, category_id) VALUES (40,10);
