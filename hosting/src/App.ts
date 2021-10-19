import { Component, Vue } from 'vue-property-decorator'

import FooterComponent from '@/components/footer/footer.vue'
import { miscellaneousPages, secondSemesterPages } from '@/constants'
import { getFirstLevelPage } from '@/services'
import { PageComponent } from '@/types'

@Component({
  metaInfo () {
    return {
      title: 'Learn Object Oriented Programming | OOP'
    }
  },
  components: {
    'breadcrumb-footer': FooterComponent
  }
})
export default class App extends Vue {
  get secondSemesterNavbarMenu (): Array<PageComponent> {
    return getFirstLevelPage(secondSemesterPages)
  }

  get miscellaneousNavbarMenu (): Array<PageComponent> {
    return getFirstLevelPage(miscellaneousPages)
  }
}
