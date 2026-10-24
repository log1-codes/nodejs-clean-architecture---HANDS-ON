start_db:
	docker compose up -d

stop_db:
	docker compose down
	
migrate:
	yarn db-migrate up -e dev

migrate-down:
	yarn db-migrate down

create_migration:
	yarn db-migrate create $(n) --sql-file
server:
	yarn run dev

.PHONEY: start_db stop_db server migrate migrate-down create_migration