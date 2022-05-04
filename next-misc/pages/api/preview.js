export default function handler(req, res) {
  res.setPreviewData({user: 'Root'})
  res.redirect(req.query.redirect)
  // res.end('Preview mode enabled')
}