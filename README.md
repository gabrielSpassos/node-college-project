# Gym_service

_College project_

## Objectives

* Create CRUD of users
* Use MongoDb as database
* Create back-end with node
* Create front 
* User can create their own trainings

### Initial Model 

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
  "treino":[
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
}
```
