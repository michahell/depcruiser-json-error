export default {
  'src/**/*.ts': [
    'ng-lint-staged lint:tour --',
    'depcruise --config .dependency-cruiser.cjs src --ignore-known',
  ],
  'src/**/*.html': 'ng-lint-staged lint:tour --',
  'projects/my-lib/**/*.ts': [
    'ng-lint-staged lint:lib --',
    'depcruise --config .dependency-cruiser.cjs projects/my-lib --ignore-known',
  ],
  'projects/my-lib/**/*.html': 'ng-lint-staged lint:lib --',
};
