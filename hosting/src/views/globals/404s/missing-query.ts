import { Component, Vue } from 'vue-property-decorator'

@Component({
  metaInfo () {
    return {
      title: 'Where is your querystring? | OOP'
    }
  }
})
export default class MissingQueryInAnswerPage extends Vue {
  puns: Array<string> = [
    'You shall not pass!',
    'Looks like you ain\'t got a ticket',
    'Look mom, no ticket!',
    'Construction zone ahead.',
    'The road is closed today sadly.',
    'Not today brother.'
  ]
}
