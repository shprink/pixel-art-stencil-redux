exports.config = {
  outputTargets: [
    {
      type: 'www',
      dir: 'docs',
      baseUrl: '/pixel-art-stencil-redux'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
