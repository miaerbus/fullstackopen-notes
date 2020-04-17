const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({})
  response.json(notes.map((note) => note.toJSON()))
})

notesRouter.get('/:id', async (request, response) => {
  if (request.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const note = await Note.findById(request.params.id)
    if (note) {
      response.json(note.toJSON())
    } else {
      response.status(404).end()
    }
  }
  response.status(400).end()
})

notesRouter.delete('/:id', async (request, response) => {
  await Note.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

notesRouter.post('/', async (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important === undefined ? false : body.important,
    date: new Date(),
  })

  const savedNote = await note.save()
  response.json(savedNote.toJSON())
})

notesRouter.put('/:id', async (request, response) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  const updatedNote = await Note.findByIdAndUpdate(request.params.id, note, {
    new: true,
  })
  response.json(updatedNote.toJSON())
})

module.exports = notesRouter
