module.exports = {
  testEnvironment: 'jsdom', //ambiente de teste
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //ignorar essas pastas
  collectCoverage: true, //coletar cobertura de testes
  collectCoverageFrom: ['src/**/*.ts(x)?'], //coletar cobertura de testes-lugar onde estão
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], //configuração do jest antes de tudo
  modulePaths: ['<rootDir>/src/'], //configuração de caminhos- colocar arquivos dentro de src
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  } //transformar arquivos
}
