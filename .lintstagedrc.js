module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write'],
  '*.{js,jsx,ts,tsx,css,scss}': ['git add'],
  '*.{json,md,html,css,scss,yml,yaml}': ['prettier --write', 'git add']
}
