import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
  if (req.method === "POST") {
    const PaymentData = req.body;

    console.log("PaymentData", PaymentData);

    res.status(200).json({ message: "Payment callback saved", data: PaymentData });
  } else {
    res.status(405).end();
  }
}
