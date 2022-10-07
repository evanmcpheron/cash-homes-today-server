import { error, success } from '../../Utils/responseAPI.util'
import { Board } from '../../Models/Scrumboard/Board.model'
import { List } from '../../Models/Scrumboard/List.model'
import { Member } from '../../Models/Scrumboard/Member.model'
import { Card } from '../../Models/Scrumboard/Card.model'
import { Label } from '../../Models/Scrumboard/Label.model'

module.exports = {
  boards: async (req, res) => {
    try {
      const boards = await Board.find()

      res
        .status(201)
        .send(success('Successfully GET boards', res.statusCode, boards))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong getting a board', res.statusCode, {
          error: e,
        })
      )
    }
  },
  board: async (req, res) => {
    const { boardId } = req.params
    try {
      const board = await Board.findById(boardId)

      res
        .status(201)
        .send(success('Successfully GET board', res.statusCode, board))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong getting a board', res.statusCode, {
          error: e,
        })
      )
    }
  },
  lists: async (req, res) => {
    const { boardId } = req.params
    try {
      const lists = await List.find({ boardId })

      res
        .status(201)
        .send(success('Successfully GET lists', res.statusCode, lists))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong getting a lists', res.statusCode, {
          error: e,
        })
      )
    }
  },
  cards: async (req, res) => {
    const { boardId } = req.params
    try {
      const cards = await Card.find({ boardId })

      res
        .status(201)
        .send(success('Successfully GET cards', res.statusCode, cards))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong getting a cards', res.statusCode, {
          error: e,
        })
      )
    }
  },
  members: async (req, res) => {
    const { boardId } = req.params
    try {
      const members = await Member.find({ boardId })

      res
        .status(201)
        .send(success('Successfully GET members', res.statusCode, members))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong getting a members', res.statusCode, {
          error: e,
        })
      )
    }
  },
  labels: async (req, res) => {
    const { boardId } = req.params
    try {
      const labels = await Label.find({ boardId })

      res
        .status(201)
        .send(success('Successfully GET labels', res.statusCode, labels))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong getting a labels', res.statusCode, {
          error: e,
        })
      )
    }
  },
}
