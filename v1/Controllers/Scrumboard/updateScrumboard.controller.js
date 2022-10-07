import { error, success } from '../../Utils/responseAPI.util'
import { Board } from '../../Models/Scrumboard/Board.model'

module.exports = {
  reorderLists: async (req, res) => {
    const { boardId } = req.params
    const { lists } = req.body
    console.log(
      '🚀 ~ file: updateScrumboard.controller.js ~ line 8 ~ lists: ',
      lists
    )
    try {
      Board.findByIdAndUpdate(boardId, { lists }).then((response) => {
        console.log(
          '🚀 ~ file: updateScrumboard.controller.js ~ line 10 ~ board: ',
          response
        )
      })

      res
        .status(201)
        .send(success('Successfully PUT board', res.statusCode, board))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong updating a board', res.statusCode, {
          error: e,
        })
      )
    }
  },
}
