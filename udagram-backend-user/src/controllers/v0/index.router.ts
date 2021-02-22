import {Router, Request, Response} from 'express';
import {UserRouter} from './users/routes/user.router';
import {FeedRouter} from './feed/routes/feed.router';

const router: Router = Router();

router.use('/feed', FeedRouter);
router.use('/users', UserRouter);


router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
