import { Router } from 'express'
import * as postCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 
router.get('/', postCtrl.index)
router.get('/:id', postCtrl.show)

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, postCtrl.create)
router.put('/:id', checkAuth, postCtrl.update)
router.delete('/:id', checkAuth, postCtrl.delete)
router.post('/:id/comments', checkAuth, postCtrl.createComment)
router.put('/:postId/comments/:commentId', checkAuth, postCtrl.markCommentAsSolution)

export {
  router
}