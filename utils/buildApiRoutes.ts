import { NextApiRequest, NextApiResponse } from 'next';

type MethodType = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';
const methods: MethodType[] = ['get', 'post', 'put', 'patch', 'delete', 'options', 'head'];

const buildApiRoutes = (routesFun: Partial<Record<MethodType, (req: NextApiRequest, res: NextApiResponse) => void>>) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const method: MethodType = req.method?.toLowerCase() as MethodType;
    if (method && methods.includes(method)) {
      return routesFun[method](req, res);
    }
    res.status(405).end();
  };
};

export default buildApiRoutes;
