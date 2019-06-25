Package.describe({
  name: 'mvinc:markdown',
  version: '0.0.4',
  summary: 'A markdown contentBlock',
  git: 'https://github.com/m-vinc/markdown',
  documentation: null
})

Npm.depends({
  marked: '0.6.2'
})

Package.onUse(function (api) {
  api.versionsFrom('1.8')
  api.use(['ecmascript', 'templating@1.3.2', 'blaze@2.3.3', 'htmljs@1.0.11'], 'client')
  api.mainModule('markdown.js', 'client')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('markdown')
  api.mainModule('markdown-tests.js')
})
