import { Component, Vue } from 'vue-property-decorator'

import FooterComponent from '@/components/footer/footer.vue'

@Component({
  metaInfo () {
    return {
      title: 'Chapter 1 | OOP'
    }
  },
  components: {
    'breadcrumb-footer': FooterComponent
  }
})
export default class SourcesPage extends Vue {}
