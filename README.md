# Gym_service

_College project_

## Group 
 - [Gabriel Santos dos Passos](https://github.com/gabrielSpassos) 
 - [Lucas Reis](https://github.com/lucasship)
 - [Eduardo Amroginski](https://github.com/CrazyAMK)
 
## Professor

 - [Giovane Barcelos](https://github.com/giovanebarcelos)

## Objectives

* Create CRUD of users
* Use MySQL as database
* Create back-end with node
* Create front 
* User can create their own trainings

### Endpoints 

```
[Get] /usuarios/id/exercicios?idDia
```

>
http://localhost:4200/usuarios/01010101010/exercicios?idDia=2
<hr>

```
[Put] /usuarios/id/exercicios
```
>
http://localhost:4200/usuarios/01010101010/exercicios

_Body_
```javascript
{
    "idTreinoUsuarioExercicio": "2",
    "peso":"1000",
    "repeticoes":"60",
    "series":"8",
    "descanso":"2000s"
}
```
<hr>

```
[Post] /usuarios/id/exercicios
```

>
http://localhost:4200/usuarios/01010101010/exercicios

_Body_
```javascript
{
    "idDia": "5",
    "idTreinoExercicio": "30",
    "peso":"30",
    "repeticoes":"10",
    "series":"8",
    "descanso":"60s"
}
```

<hr>

```
[Get] /perfil/id
```

>
http://localhost:4200/perfil/01010101010

<hr>

```
[Put] /perfil/id
```

>
http://localhost:4200/perfil/01010101010

_Body_
```javascript
{
    "nomecompleto": "Eduardo Da SilvaSauro",
    "telefone":"6666-0000",
    "peso":86.0,
    "altura":1.87,
    "modalidade":"2",
    "senha":"252525"
}
```

<hr>

```
[Get] /exercicos
```

>
http://localhost:4200/exercicios

<hr>

```
[Get] /exercicios/id
```

>
http://localhost:4200/exercicios/5

<hr>

```
[Get] /treinos
```

>
http://localhost:4200/treinos

<hr>

```
[Get] /treinos/idTreino
```

>
http://localhost:4200/treinos/2

<hr>

```
[Post] /treinos
```

>
http://localhost:4200/treinos

_Body_
```javascript
{
    "nomeTreino": "TreinoTest"
}
```

<hr>

```
[Put] /treinos/idTreino
```

>
http://localhost:4200/treinos/8

_Body_
```javascript
{
    "nomeTreino": "VirouTest2"
}
```

<hr>

```
[Get] /
```

>
http://localhost:4200/

<hr>
