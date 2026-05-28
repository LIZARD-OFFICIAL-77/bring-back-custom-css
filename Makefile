.PHONY: release

release:
	@echo "// ==UserScript==" >> build/release.user.js
	@echo "// @name         Bring back readme css" >> build/release.user.js
	@echo "// @namespace    http://tampermonkey.net/" >> build/release.user.js
	@echo "// @version      2026-05-28" >> build/release.user.js
	@echo "// @author       LIZARD-OFFICIAL-77" >> build/release.user.js
	@echo "// @match        https://github.com/*" >> build/release.user.js
	@echo "// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com" >> build/release.user.js
	@echo "// @grant        none" >> build/release.user.js
	@echo "// ==/UserScript==" >> build/release.user.js
	@pnpm build > /dev/null 2>&1
	@cat dist/bundle.js >> build/release.user.js