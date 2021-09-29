USE `lovelace-2147602-maria-benning`;

SET SQL_SAFE_UPDATES = 0;


-- a.  ALTER TABLE Actor DROP COLUMN salary;
-- remove a coluna salario da tabela ator

-- b. ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- muda o genero da tabela ator 

-- c. ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- alterar o tipo do gente para um varchar de 255 caracteres


-- d. Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
 ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
 
 
 
 -- Exercício 2
 -- a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
 
 UPDATE Actor
 SET 
 name = "Moacyr Franco",
 birth_date = "2020-02-10"
 WHERE id = "003";
 
 -- b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. 
 -- Então, escreva outra query para voltar ao nome anterior.
 
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";




-- c. Escreva uma query que atualize todas as informações do ator com o id 005

UPDATE Actor
 SET 
 name = "Moacyr Franco",
 salary = "800000",  
 birth_date = "1980-02-15",
 gender = "male"
 WHERE id = "005";
 


-- d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). 
-- Teste, anote e explique o resultado. 
UPDATE Actor
 SET 
 name = "Moacyr Franco",
 birth_date = "2020-02-10"
 WHERE id = "007";

--  0 linha (s) afetada (s) Linhas correspondentes: 0 Alterado:
-- não foi feita nenhuma alteração.


-- Exercício 3
-- a. Escreva uma query que apague a atriz com o nome Fernanda Montenegro
DELETE FROM Actor WHERE name = "Fernanda Montenegro";


-- b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
DELETE FROM Actor 
where 
gender = "male" AND
salary  > 1000000 ;



-- Exercício 4
-- a. Escreva uma query que pegue o maior salário de todos os atores e atrizes


SELECT MAX(salary) FROM Actor;



-- b. Escreva uma query que pegue o menor salário das atrizes*
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- c. Escreva uma query que pegue a quantidade de atrizes*


SELECT COUNT(*) FROM Actor WHERE gender = "female";


-- d. Escreva uma query que pegue a soma de todos os salários*

SELECT AVG(salary) FROM Actor;


-- a. Releia a última query. Teste-a. Explique o resultado com as suas palavras*

-- b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
SELECT id, name FROM Actor
ORDER BY name DESC;

-- c. Faça uma query que retorne todos os atores ordenados pelo salário*
SELECT * FROM Actor
ORDER BY salary;




-- d. Faça uma query que retorne os atores com os três maiores salarios*
 SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;


-- e. Faça uma query que retorne a média de salário por gênero*
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

-- Exercício 7
-- a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` 
-- que indique a data limite em que o filme será passado no cinema.* 

ALTER TABLE Movie ADD playing_limit_date DATE;

-- b. Altere a tabela de `Movie` para que o parâmetro `rating` 
-- possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*

ALTER TABLE Movie CHANGE avaliação avaliação FLOAT;


-- c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";



-- d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar 
-- a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*
DELETE FROM Movie WHERE id = "001";

 
-- *a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?*
SELECT COUNT(*) FROM Movie WHERE avaliação > 7.5;

-- *b. Qual a média das avaliações dos filmes?*
SELECT AVG(avaliação) FROM Movie;

-- *c. Qual a quantidade de filmes em cartaz?*
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
-- *d. Qual a quantidade de filmes que ainda irão lançar?*
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();

-- *e. Qual a maior nota dos filmes?*
SELECT MAX(avaliação) FROM Movie;
-- *f. Qual a menor nota dos filmes?*
SELECT MIN(avaliação) FROM Movie;


-- Exercício 8

-- *a. Retorne todos os filmes em ordem alfabética*
SELECT * FROM Movie ORDER BY Título;
-- *b. Retorne os 5 primerios filmes em ordem descrente alfabética* 

SELECT * FROM Movie ORDER BY Título LIMIT 5;

-- *c. Retorne os 3 filmes mais recentes em cartaz

SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;


-- *d. Retorne os 3 filmes melhor avalidos*
SELECT * FROM Movie 
ORDER BY avaliação DESC 
LIMIT 3;
 