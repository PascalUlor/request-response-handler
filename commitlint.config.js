module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'scope-empty': [2, 'never'],
    'type-enum': [2, 'always', [
      'feat', 'fix', 'chore', 'test', 'docs', 'ci',
    ]],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(TK-[0-9]+)\s\|\s(feat|fix|test|docs|chore|ci):\s?[^-\s](.*)$/,
      headerCorrespondence: ['scope', 'type', 'subject'],
    },
  },
};

// Sample commit format
// 'TK-08 | chore:update http constants'
