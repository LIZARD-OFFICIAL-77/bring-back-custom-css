.PHONY: release

VERSION = 0.0.14

release:
	@mkdir -p build
	@rm -rf build/*
	@echo "// ==UserScript==" >> build/release-$(VERSION).user.js
	@echo "// @name         Bring back readme css" >> build/release-$(VERSION).user.js
	@echo "// @namespace    http://tampermonkey.net/" >> build/release-$(VERSION).user.js
	@echo "// @version      $(VERSION)" >> build/release-$(VERSION).user.js
	@echo "// @author       LIZARD-OFFICIAL-77" >> build/release-$(VERSION).user.js
	@echo "// @match        https://github.com/*" >> build/release-$(VERSION).user.js
	@echo "// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com" >> build/release-$(VERSION).user.js
	@echo "// @grant        none" >> build/release-$(VERSION).user.js
	@echo "// ==/UserScript==" >> build/release-$(VERSION).user.js
	@pnpm build > /dev/null 2>&1
	@cat dist/bundle.js >> build/release-$(VERSION).user.js
	@sed -i -e "s/release-.*\.js/release-$(VERSION).user.js/g" README.md