export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'add',
        'chore',
        'ci',
        'code review',
        'docs',
        'feat',
        'fix',
        'refactor',
        'style',
        'test',
      ],
    ],
  },
};
