import { rest } from 'msw';
import { db } from '../db';
import { authenticateRequest } from '../helpers';

const sanitizeUser = user => {
  const { password, ...rest } = user;
  return rest;
};

export const auth = [
  rest.post('/login', (req, res, ctx) => {
    const user = db.user.findFirst({
      where: {
        email: {
          equals: req.body.email,
        },
      },
    });
    if (user.password === req.body.password) {
      const token = btoa(user.email);
      localStorage.setItem('__be_token__', token);
      return res(ctx.status(200), ctx.json({ ...sanitizeUser(user), token }));
    }
    return res(
      ctx.status(403),
      ctx.json({
        error: 'Invalid user data',
      })
    );
  }),
  rest.get('/me', (req, res, ctx) => {
    if (authenticateRequest(req)) {
      const user = db.user.getAll();
      return res(ctx.status(200), ctx.json({ ...sanitizeUser(user) }));
    }
    return res(ctx.status(401));
  }),
];
