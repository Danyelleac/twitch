module.exports = {
  testEnvironment: 'jsdom', //ambiente de teste
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //ignorar essas pastas
  collectCoverage: true, //coletar cobertura de testes
  collectCoverageFrom: [
    'src/**/*.ts(x)?', //a pasta onde ele vai procurar os testes
    '!src/app/**', // ignorar configurações do next, apenas testalas no teste E2E
    '!src/lib/registry.tsx' //ignorar as configurações da lib , pois não faz sentido testar
  ], //coletar cobertura de testes-lugar onde estão
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], //configuração do jest antes de tudo
  modulePaths: ['<rootDir>/src/'], //configuração de caminhos- colocar arquivos dentro de src
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  } //transformar arquivos
}
