export default async function handler(req, res) {
  if (req.method === "POST") {
    const PaymentData = req.body;

    console.log("PaymentData", PaymentData);

    res.status(200).json({ message: "Payment callback saved" });
  } else {
    res.status(405).end();
  }
}
