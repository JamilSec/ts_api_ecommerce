/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true, // Para generar reportes de cobertura
  coverageDirectory: "coverage",
  modulePaths: ["<rootDir>/src"], // 🔥 Esto hace que Jest entienda rutas relativas en `src/`
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
};