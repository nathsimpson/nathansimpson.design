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

const getDribbbleShots = async (): Promise<DribbbleShot[]> => {
  const dribbbleShots = fetch(API_ENDPOINT, {
    headers: { Accept: 'application/json' }
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    })
    .then((data) => {
      return (data as DribbbleApiShot[])
        .map((shot) => ({
          description: shot.description.replace(/(<([^>]+)>)/gi, ''),
          imageUrl: shot.images.normal,
          link:
            shot.images && (shot.images.hidpi || shot.images.normal)
              ? shot.images.hidpi || shot.images.normal
              : shot.html_url
        }))
        .filter((shot) => !shot.imageUrl.includes('.gif'));
    });

  return dribbbleShots;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  try {
    const shots = await getDribbbleShots();
    res.status(200).json({ shots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch Dribbble shots.' });
  }
}
