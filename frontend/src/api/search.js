// pages/api/search.js
export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Query is required' });
  }


}
