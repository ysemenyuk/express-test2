simple api server

#### запуск

для запуска базы данных нужен Docker

1. `make install` - установит зависимости
2. `make db-start` - запустит PostgreSQL в Docker контейнере
3. `make db-stop` - остановка Docker контейнера
4. `make migrate-latest` - создаcт необходимые таблицы в базе данных
5. `make seed` - тестовые данные для базы данных
6. `make dev` - запуск приложения PORT 4000
7. `make test` - запуск тестов


#### api

```POST /users``` - создание пользователя

Входные данные json объект 

```json
{ 
  "name": "Миша" 
 }
```

`GET /users` - получение всех пользователей

```json
[
  { 
    "id": 1,
    "name": "Миша" 
  }
]
```

`POST /users/userId/coordinates` - создание точки для пользователя

Входные данные json объект 
```json
{
  "userId": "1",
  "time": "2010-04-30T16:53:00Z",
  "location": {
    "latitude": "45.51633",
    "longitude": "12.63622"
   }
}
```
`GET /users/userId/coordinates?startTime=2010-01-01T00:00:00Z&endTime=2011-01-01T00:00:00Z`

получение координат для пользователя в промежутке времени, параметры startTime, endTime не обязательные

```
[
    {
        "id": 4,
        "latitude": 47.51633,
        "longitude": 14.63622,
        "userId": 1,
        "time": "2010-04-30T16:53:00.000Z"
    },
    {
        "id": 5,
        "latitude": 47.51633,
        "longitude": 14.63622,
        "userId": 1,
        "time": "2010-04-30T16:53:00.000Z"
    },
    {
        "id": 6,
        "latitude": 47.51633,
        "longitude": 14.63622,
        "userId": 1,
        "time": "2010-04-30T16:53:00.000Z"
    },
]
```



#### ветка main (express knex postgreSQL)

https://github.com/ysemenyuk/express-test2

две таблицы в базе данных Users, Coordinates

https://github.com/ysemenyuk/express-test2/tree/main/migrations



#### ветка objection (express knex objection postgreSQL)

https://github.com/ysemenyuk/express-test2/tree/objection

три таблицы в базе данных users, coordinates, users_coordinates

https://github.com/ysemenyuk/express-test2/tree/objection/migrations
