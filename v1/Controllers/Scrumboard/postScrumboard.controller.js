import { error, success } from '../../Utils/responseAPI.util'
import { Member } from '../../Models/Scrumboard/Member.model'
import { Board } from '../../Models/Scrumboard/Board.model'
import { List } from '../../Models/Scrumboard/List.model'
import { Label } from '../../Models/Scrumboard/Label.model'
import { Card } from '../../Models/Scrumboard/Card.model'

module.exports = {
  member: async (req, res) => {
    const { name } = req.body
    try {
      const member = await new Member({ name })

      await member.save()
      res
        .status(201)
        .send(success('Successfully created a member', res.statusCode, member))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong creating a member', res.statusCode, {
          error: e,
        })
      )
    }
  },
  board: async (req, res) => {
    try {
      const board = await new Board()

      await board.save()

      res
        .status(201)
        .send(success('Successfully created a board', res.statusCode, board))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong creating a board', res.statusCode, {
          error: e,
        })
      )
    }
  },
  list: async (req, res) => {
    const { boardId } = req.params
    const { title } = req.body
    try {
      const list = await new List({ boardId, title })

      await list.save()

      const board = await Board.findById(boardId)

      board.lists.push({ id: list.id.toString() })

      board.save()

      res
        .status(201)
        .send(success('Successfully created a list', res.statusCode, list))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong creating a board', res.statusCode, {
          error: e,
        })
      )
    }
  },
  label: async (req, res) => {
    const { boardId } = req.params
    const { title } = req.body
    try {
      const label = await new Label({ boardId, title })

      await label.save()

      res
        .status(201)
        .send(success('Successfully created a label', res.statusCode, label))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong creating a label', res.statusCode, {
          error: e,
        })
      )
    }
  },
  card: async (req, res) => {
    const { boardId, listId } = req.params
    const { title } = req.body

    try {
      const card = await new Card({ title, boardId, listId })
      await card.save()

      const board = await Board.findById({ _id: boardId })

      await board.lists.find((listItem) => {
        if (listItem.id.toString() === listId) {
          listItem.cards.push(card.id)
          return true
        }
        return false
      })

      await board.save()

      res
        .status(201)
        .send(success('Successfully created a card', res.statusCode, card))
    } catch (e) {
      res.status(500).send(
        error('Something went wrong creating a card', res.statusCode, {
          error: e,
        })
      )
    }
  },
}
