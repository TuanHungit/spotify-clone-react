const { axios } = require('../../../utils');

exports.getTop100Song = (req, res, next) => {
  const [popUsId, kpopId, vpopId] = ['ZWZB96AB', 'ZWZB96DC', 'ZWZB969E'];
  let topId;
  switch (req.params.type) {
    case kpopId:
      topId = kpopId;
      break;
    case vpopId:
      topId = vpopId;
    default:
      topId = popUsId;
  }
  const pageNumber = req.query.page;
  const start = pageNumber ? (pageNumber - 1) * 20 : 0;
  const url = `https://mp3.zing.vn/xhr/media/get-list?op=top100&start=${start}&length=20&id=${topId}`;
  axios
    .get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => next(err));
};
