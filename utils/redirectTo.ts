import { ServerResponse } from 'http';

export default (res: ServerResponse, Location: string) => {
  res.writeHead(302, {
    Location,
  });
  res.end();
};
