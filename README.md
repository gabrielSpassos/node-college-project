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
**Usuários** 
_Htpp methods: [GET]; [POST]; [PUT]_
>
http://http://localhost:3300/usuarios
>
http://localhost:3300/usuarios/id

**Treinos**
_Htpp methods: [GET]; [POST]; [PUT]_
>
http://localhost:3300/treinos
>
http://localhost:3300/treinos/id

**Exercicios**
_Htpp methods: [PUT]_
>
http://localhost:3300/exercicios/id

### Initial Models 

_User Model_
```javascript
{
  "nome": "Gabriel",
  "peso": 85,
  "altura": 1.83,
  "imc": 24.78,
  "matricula" : "123456789",
  "plano":{
    "modalidade": "semestral",
    "mensalidade": 110.90
  },
  "treinos":[
    {
      "nomeTreino":"Treino de Peitoral",
      "exercicios":[
        {
          "nomeExercicio":"supino reto",
          "peso": 25,
          "repeticoes": 12,
          "series" : 3,
          "descanco" : "60s"
        },
        {
          "nomeExercicio":"voador",
          "peso": 50,
          "repeticoes": 10,
          "series" : 4,
          "descanco" : "30s"
        }
      ]
    },
    {
      "nomeTreino":"Treino de Costas",
      "exercicios":[
        {
          "nomeExercicio":"Barra Supinada",
          "peso": 0,
          "repeticoes": 12,
          "series" : 3,
          "descanco" : "90s"
        },
        {
          "nomeExercicio":"remada",
          "peso": 50,
          "repeticoes": 10,
          "series" : 4,
          "descanco" : "45s"
        }
      ]
    }
  ]
}
```

_Treinos Model_

```javascript
{
  "treinos":[
    {
      "nomeTreino":"Treino de Peitoral",
      "exercicios":[
        {
          "nomeExercicio":"supino reto",
          "peso": 25,
          "repeticoes": 12,
          "series" : 3,
          "descanco" : "60s"
        },
        {
          "nomeExercicio":"voador",
          "peso": 50,
          "repeticoes": 10,
          "series" : 4,
          "descanco" : "30s"
        }
      ]
    },
    {
      "nomeTreino":"Treino de Costas",
      "exercicios":[
        {
          "nomeExercicio":"Barra Supinada",
          "peso": 0,
          "repeticoes": 12,
          "series" : 3,
          "descanco" : "90s"
        },
        {
          "nomeExercicio":"remada",
          "peso": 50,
          "repeticoes": 10,
          "series" : 4,
          "descanco" : "45s"
        }
      ]
    }
  ]
}
```
