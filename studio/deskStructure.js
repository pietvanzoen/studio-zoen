import S from '@sanity/desk-tool/structure-builder'
import {MdDashboard, MdSettings, MdFormatPaint} from 'react-icons/md'

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('site-config')
            .documentId('global-config')
        ),
      S.listItem()
        .title('Pages')
        .icon(MdDashboard)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Projects')
        .icon(MdFormatPaint)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects'))
    ])
