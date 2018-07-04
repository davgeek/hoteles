users - autenticacion
{
  "users": [
    {
      "id": "44W4fs",
      "username": "admin",
      "name": "David",
      "password": "3dsfds34sf",
      "email": "davgeek@outlook.com",
      "type": "admin"
    }  
  ]
}

GET /customers CRUD
{
  "customers": [
    {
      "id": "Et3Fg3A",
      "name": "David Lizarraga",
      "email": "davgeek@outlook.com",
      "phone": "+526442442200"
    },
    {
      "id": "Et3Fg3A",
      "name": "Jesus Lizarraga",
      "email": "davgeek@outlook.com",
      "phone": "+526442442200"
    }
  ]
}

GET /rooms CRUD
{
  "rooms": [
    {
      "id": "Et3Fg3A",
      "number": 501,
      "price": 99.9,
      "type": "Suite"
    },
    {
      "id": "Et3Fg11",
      "number": 502,
      "price": 65.9,
      "type": "Familiar"
    }
  ]
}

GET /reservations CRUD
{
  "reservations": [
    {
      "id": "Et3Fg3A",
      "room": "Et3Fg3A",
      "customer": "Et3Fg3A",
      "from": "10/11/2018",
      "to": "13/11/2018",
      "amount": 299.9
    },
    {
      "id": "Et3Fg3A",
      "room": "Et3Fg3A",
      "customer": "Et3Fg3A",
      "from": "10/11/2018",
      "to": "13/11/2018",
      "amount": 299.9
    }
  ]
}

POST /rooms/availables : regresa las habitaciones que no estan ocupadas de acuerdo a "reservations" con las fechas

input
{
  "room": "Et3Fg3A",
  "from": "10/11/2018",
  "to": "13/11/2018"
}

output
{
  "rooms": [
    {
      "id": "Et3Fg3A",
      "number": 501,
      "price": 99.9,
      "type": "Suite"
    },
    {
      "id": "Et3Fg11",
      "number": 502,
      "price": 65.9,
      "type": "Familiar"
    }
  ]
}