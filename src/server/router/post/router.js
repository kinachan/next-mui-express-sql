import express from 'express';
import PostRepository from 'repository/PostRepository';
const router = express.Router();

const repository = new PostRepository();
router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const data = await repository.selectAllById('id', id);

  res.json(data);
});

router.route('/').post(async (req, res) => {
  const body = req.params.body;
  repository.insert(body);
});

export default router;