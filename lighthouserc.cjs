module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      isSinglePageApplication: true,
      url: [
        'http://localhost/index.html',
        'http://localhost/services',
        'http://localhost/about',
        'http://localhost/blog',
        'http://localhost/contact',
      ],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './.lighthouseci',
    },
  },
}
