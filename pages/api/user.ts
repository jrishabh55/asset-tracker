import db from '@/db';
import buildApiRoutes from '@/utils/buildApiRoutes';

export default buildApiRoutes({
  post: (req, res) => {
    return res.json(db.user.create(req.body));
  },
});
