simple api server

##### запуск

для запуска базы данных нужен Docker

1. make install - установит зависимости
2. make db-start - запустит PostgreSQL в Docker контейнере
3. make migrate-latest - создат необходимые таблицы в базе данных
4. make seed - тестовые данные для базы данных

##### api

POST /users - создание пользователя
Входные данные json объект { name: 'Миша' }

GET /users - получение всех пользователей

POST /users/userId/coordinates - создание точки для пользователя
Входные данные json объект {
"userId": "1",
"time": "2010-04-30T16:53:00Z",
"location": {
"latitude": "45.51633",
"longitude": "12.63622"
}
}

GET /users/userId/coordinates?startTime=2010-01-01T00:00:00Z&endTime=2010-01-01T00:00:00Z
получение координат для пользователя в промежутке времени
параметры startTime, endTime не обязательные

##### ветка main

https://github.com/ysemenyuk/express-test2

express knex postgeSQL
две таблицы в базе данных Users, Coordinates
https://github.com/ysemenyuk/express-test2/tree/main/migrations

##### ветка objection

https://github.com/ysemenyuk/express-test2/tree/objection

express knex objection postgeSQL
три таблицы в базе данных users, coordinates, users_coordinates
https://github.com/ysemenyuk/express-test2/tree/objection/migrations
