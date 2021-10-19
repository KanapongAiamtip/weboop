import { Component, Vue } from 'vue-property-decorator'

import FooterComponent from '@/components/footer/footer.vue'

@Component({
  name: 'Home',
  components: {
    'breadcrumb-footer': FooterComponent
  }
})
export default class HomePage extends Vue {
}
