import express from 'express'
import { scrumboardRoute } from '../Controllers/Scrumboard/scrumboardIndex.controller'

module.exports = () => {
  const router = express.Router()

  // @route    POST /v1/scrumboard/members
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.post(
    '/members',
    async (req, res) => await scrumboardRoute.post.member(req, res)
  )

  // @route    POST /v1/scrumboard/boards
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.post(
    '/boards',
    async (req, res) => await scrumboardRoute.post.board(req, res)
  )

  // @route    POST /v1/scrumboard/boards/:boardId/lists
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.post(
    '/boards/:boardId/lists',
    async (req, res) => await scrumboardRoute.post.list(req, res)
  )

  // @route    POST /v1/scrumboard/label/:boardId
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.post(
    '/boards/:boardId/labels',
    async (req, res) => await scrumboardRoute.post.label(req, res)
  )

  // @route    POST /v1/scrumboard/card/:boardId
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.post(
    '/boards/:boardId/lists/:listId/cards',
    async (req, res) => await scrumboardRoute.post.card(req, res)
  )

  // @route    GET /v1/scrumboard/boards
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.get(
    '/boards',
    async (req, res) => await scrumboardRoute.get.boards(req, res)
  )

  // @route    GET /v1/scrumboard/boards
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.get(
    '/boards/:boardId',
    async (req, res) => await scrumboardRoute.get.board(req, res)
  )

  // @route    GET /v1/scrumboard/members
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.get(
    '/members',
    async (req, res) => await scrumboardRoute.get.members(req, res)
  )

  // @route    GET /v1/scrumboard/boards/:boardId/lists
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.get(
    '/boards/:boardId/lists',
    async (req, res) => await scrumboardRoute.get.lists(req, res)
  )

  // @route    GET /v1/scrumboard/boards/:boardId/cards
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.get(
    '/boards/:boardId/cards',
    async (req, res) => await scrumboardRoute.get.cards(req, res)
  )

  // @route    GET /v1/scrumboard/boards/:boardId/labels
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.get(
    '/boards/:boardId/labels',
    async (req, res) => await scrumboardRoute.get.labels(req, res)
  )

  // @route    GET /v1/scrumboard/boards/:boardId/labels
  // @desc     Route will delete specific file in database
  // @access   PRIVATE
  router.put(
    '/boards/:boardId',
    async (req, res) => await scrumboardRoute.update.reorderLists(req, res)
  )

  return router
}
