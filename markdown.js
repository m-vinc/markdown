import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'
import { HTML } from 'meteor/htmljs'

import marked from 'marked'

Blaze.Template.registerHelper('markdown', new Template('markdown', function () {
  let content = ''
  if (this.templateContentBlock) content = Blaze._toText(this.templateContentBlock, HTML.TEXTMODE.STRING)
  return HTML.Raw(marked(content))
}))
