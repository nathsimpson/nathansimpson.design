// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

type DribbbleShot = {
  description: string;
  imageUrl: string;
  link: string;
};

type Data = {
  shots: DribbbleShot[];
};

const ACCESS_TOKEN = process.env.DRIBBBLE_ACCESS_TOKEN;
const API_ENDPOINT = `https://api.dribbble.com/v2/user/shots?access_token=${ACCESS_TOKEN}`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const shots = fetch(API_ENDPOINT, { headers: { Accept: 'application/json' } })
    .then((response) => response.json())
    .then((data) =>
      data.map((shot) => ({
        description: shot.description.replace(/(<([^>]+)>)/gi, ''),
        image: shot.images.normal,
        link:
          shot.images && (shot.images.hidpi || shot.images.normal)
            ? shot.images.hidpi || shot.images.normal
            : shot.html_url
      }))
    )
    .catch((error) => ({ statusCode: 422, body: JSON.stringify(error) }));

  res.status(200).json({ shots });
}
