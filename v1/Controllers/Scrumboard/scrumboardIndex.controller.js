import get from './getScrumboard.controller'
import post from './postScrumboard.controller'
import update from './updateScrumboard.controller'
import remove from './deleteScrumboard.controller'

export const scrumboardRoute = {
  get,
  post,
  update,
  remove,
}
