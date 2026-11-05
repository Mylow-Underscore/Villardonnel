module.exports = {
  extends: ['@typecast/config/conventional-changelog'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'test', 'refactor', 'perf', 'style', 'ci', 'build']],
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-empty': [2, 'never'],
    'subject-modifying-body': [2, 'never'],
    'subject-body-separation': [2, 'always'],
    'subject-minimum-length': [2, 'min', 5],
    'subject-maximum-length': [2, 'max', 72],
    'subject-punctuation': [2, 'never'],
  },
};
