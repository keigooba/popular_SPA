#npm パラメータ
NPMCMD=npm i
# GOBUILD=$(GOCMD) build
# GOCLEAN=$(GOCMD) clean
# GOTEST=$(GOCMD) test
# GOGET=$(GOCMD) get
# GOMOD=$(GOCMD) mod
# BINARY_NAME={popular}

all: deps
# build:
# 	# $(GOBUILD) -o $(BINARY_NAME) -v
# test:
# 	$(GOTEST) -v ./...
# clean:
# 	$(GOCLEAN)
# 	rm -f $(BINARY_NAME)
# 	$(GOMOD) tidy -v
# run:
	$(NPMCMD) run build
deps:
	$(NPMCMD) react-router-dom @types/react-router-dom
	$(NPMCMD) axios
	$(NPMCMD) @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
	$(NPMCMD) styled-components
	$(NPMCMD) react-icons
	$(NPMCMD) firebase
	$(NPMCMD) react-hook-form
