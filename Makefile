migrate-latest:
	npx knex migrate:latest --esm

migrate-down:
	npx knex migrate:down --esm

seed:
	npx knex seed:run --specific=seed_users.cjs  --esm
	npx knex seed:run --specific=seed_coordinates.cjs --esm

db-start:
	docker-compose up

db-stop:
	docker-compose down

dev:
	npm run dev


