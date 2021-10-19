/**
 * Repersents each nested pages for the documentation sidebar.
 */
export interface PageComponent {
  name: string
  path: string
}

/**
 * Represents first level heading for the documentation sidebar.
 */
export interface Page extends PageComponent {
  components: Array<PageComponent>
}
