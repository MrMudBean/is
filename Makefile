test-pub:
	pnpm build
	cd ./dist  && npm publish --dry-run