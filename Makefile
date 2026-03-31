# Make Make a little more ... not like Make
SHELL := bash
.ONESHELL:
# Bash strict mode
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

# Colors
ANSI_RESET := $(shell echo -e '\033[0m')
ANSI_BOLD := $(shell echo -e '\033[1m')
ANSI_BLUE := $(shell echo -e '\033[34m')
ANSI_CYAN := $(shell echo -e '\033[36m')
ANSI_MAGENTA := $(shell echo -e '\033[35m')

COLOR_VARIABLE := $(ANSI_BLUE)
COLOR_VALUE := $(ANSI_MAGENTA)
COLOR_TARGET := $(ANSI_CYAN)

FIGLET := figlet
ANNOUNCE := @$(FIGLET)
SAY := @echo -e


.PHONY: help ## This message
help:
	@$(ANNOUNCE) "Innovation Hub"
	@$(SAY)
	@$(SAY) Usage:
	@$(SAY) "  make $(COLOR_TARGET)<target>$(ANSI_RESET)"
	@$(SAY)
	@awk 'BEGIN {FS = ":.*##"}
		/^[[:alnum:]].+:.*?##/ {
			printf "  $(COLOR_TARGET)%-15s$(ANSI_RESET) %s\n", $$1, $$2
		}
		/^##@/ {
			printf "\n$(ANSI_BOLD)%s$(ANSI_RESET)\n", substr($$0, 5)
		} ' \
			$(MAKEFILE_LIST)


##@ Dependencies

.PHONY: deps
deps: Gemfile  ## Install dependencies
	@$(SAY) + $@
	bundle install


##@ Development

.PHONY: dev
dev: deps  ## Run a local development server
	@$(SAY) + $@
	bundle exec jekyll serve
