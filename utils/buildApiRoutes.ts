import { NextApiRequest, NextApiResponse } from 'next';

const methods = ['get', 'post', 'put', 'patch', 'delete', 'options', 'head'] as const;

type MethodType = typeof methods[number];

const buildApiRoutes = (routesFun: Partial<Record<MethodType, (req: NextApiRequest, res: NextApiResponse) => void>>) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const method: MethodType = req.method?.toLowerCase() as MethodType;
    if (typeof routesFun[method] !== 'function') {
      return res.status(405).end();
    }

    return routesFun[method](req, res);
  };
};

export default buildApiRoutes;
