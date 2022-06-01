#-----------------------------------------------------------
# 初期セットアップ
#-----------------------------------------------------------
start-up:
	@make build
	@make up

#-----------------------------------------------------------
# 個々のコマンド
#-----------------------------------------------------------
build:
	docker-compose build

build-nc:
	docker-compose build --no-cache

up:
	docker-compose up -d

down:
	docker-compose down

restart:
	@make down
	@make up

bash:
	docker-compose exec node ash

ps:
	docker-compose ps

logs-c:
	docker-compose logs

logs-f:
	docker-compose logs -f

npm-install:
	@make npm-install-for-container
	@make npm-install-for-host

npm-install-for-container:
	docker-compose exec node npm install

	# Makefileでは変数展開は実行前に行われてしまうので $$(pwd) のように $$ 2個付ける
	# :/code -w /code このcodeの部分dockerのマウントさせるディクレトリを指定している
npm-install-for-host:
	docker-compose run --rm -v $$(pwd)/./react:/code -w /code node npm install
