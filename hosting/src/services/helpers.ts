import { Page, PageComponent } from '@/types'

/**
 * A function to get first depth of the Page Array.
 *
 * @param pageArray an array of page
 * @returns an array of page component, which is the first depth of the Page array.
 */
export function getFirstLevelPage (pageArray: Array<Page>): Array<PageComponent> {
  return pageArray.map(page => { return { name: page.name, path: page.path } })
}
