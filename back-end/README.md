### OBS: irá dar erro com conexão do banco por ele ainda não estar na nuvem 

> ## Como usar a api 🤔
> #### Passo a passo de como consumir a api

<br>

> ## Método POST ✉️
> ### Rotas com o método POST


#### Para inserir um livro use ```https://biblion-intec.herokuapp.com/cataloguin/insertbook```
``` 
{
    "title": titulo,
    "edition": edição/volume,
    "isbn": número,
    "year": anoLançamento,
    "category": categoria,
    "cdd": númeroCdd,
    "idiom": idioma
}
```

<br>

> ## Método GET 👋
> ### Rotas com o método GET

#### Todos os livros cadastrados ```https://biblion-intec.herokuapp.com/cataloguin/getallbooks```

#### Quantidade de livros cadastrados ```https://biblion-intec.herokuapp.com/cataloguin/getcountbooks```
