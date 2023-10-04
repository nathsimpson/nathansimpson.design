// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

type DribbbleShot = {
  description: string;
  imageUrl: string;
  link: string;
};

type ResponseData = {
  shots: DribbbleShot[];
};

type ResponseError = {
  error: string;
};

// Return type from Dribbble API
type DribbbleApiShot = {
  description: string;
  images: {
    hidpi: string;
    normal: string;
  };
  html_url: string;
};

const ACCESS_TOKEN = process.env.DRIBBBLE_ACCESS_TOKEN;
const API_ENDPOINT = `https://api.dribbble.com/v2/user/shots?access_token=${ACCESS_TOKEN}`;

const formatShots = (shots: DribbbleApiShot[]): DribbbleShot[] => {
  return shots
    .map((shot) => ({
      description: shot.description.replace(/(<([^>]+)>)/gi, ''),
      imageUrl: shot.images.normal,
      link:
        shot.images && (shot.images.hidpi || shot.images.normal)
          ? shot.images.hidpi || shot.images.normal
          : shot.html_url
    }))
    .filter((shot) => !shot.imageUrl.includes('.gif'));
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  await fetch(API_ENDPOINT, {
    headers: { Accept: 'application/json' }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unsuccessful response from Dribbble's API");
      }

      return response.json().then((data) => {
        const formatted = formatShots(data as DribbbleApiShot[]);
        return res.status(200).json({ shots: formatted });
      });
    })
    .catch((error) => res.status(422).json({ error }));
}
