.DEFAULT_GOAL := help

help:
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: ## Configure the project for the first time
	@echo "⚙️ Initialling project..."
	@npm i
	@echo "✅ Done!"

start: ## Execute project on local environment
	@echo "🏃‍♀️ Running project..."
	@npm run dev

test: ## Execute tests
	@echo "🏃‍♀️ Running tests..."
	@npm run test

test-watch: ## Execute tests in watch mode
	@echo "🏃‍♀️ Running tests..."
	@npm run test-watch
