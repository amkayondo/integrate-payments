import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
  if (req.method === "POST") {
    const eventData = req.body;
    // Process the webhook event data
    console.log("Event data:", eventData);
    res.status(200).json({message: "am working"})
  } else {
    res.status(405).end();
  }
}
