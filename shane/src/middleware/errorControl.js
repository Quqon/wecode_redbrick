function asyncWrap(asyncController) {
  return async (req, res, next) => {
      try {
          await asyncController(req, res)
      }
      catch(err) {
          next(err);
      }
  };
}

function errControl(err, req, res, next) {
  console.log(err);
  return res.status(err.statusCode || 500).json({ message: err.message });
}

module.exports = {
  asyncWrap,
  errControl
}
