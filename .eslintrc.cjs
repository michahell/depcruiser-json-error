module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
      },
      plugins: ['rxjs'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:rxjs/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        'rxjs/no-cyclic-action': 'error',
        'rxjs/no-subclass': 'error',
        'rxjs/no-subject-value': 'error',
        'rxjs/no-exposed-subjects': 'error',
        'rxjs/no-unsafe-first': 'error',
        'rxjs/suffix-subjects': 'error',
        'rxjs/throw-error': 'error',
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
  ],
};
