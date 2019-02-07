import RepositoryBase from "server/repository/RepositoryBase";

class PostRepository extends RepositoryBase {
  constructor() {
    super('post');
  }
}

export default PostRepository;