module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store')
  res.json({
    hello: 'world',
  })
}
