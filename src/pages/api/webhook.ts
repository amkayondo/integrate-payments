// pages/api/flutterwave-webhook.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const eventData = req.body;
    // Process the webhook event data
    console.log("Event data:", eventData);
  } else {
    res.status(405).end();
  }
}
