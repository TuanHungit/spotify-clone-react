const { axios } = require('../../../utils');
const lrcParser = require('lrc-parser');

exports.getTop100Song = (req, res, next) => {
  const [popUsId, kpopId, vpopId, BAT] = [
    'ZWZB96AB',
    'ZWZB96DC',
    'ZWZB969E',
    'ZWZAWEZB'
  ];
  let topId;
  switch (req.params.type) {
    case kpopId:
      topId = kpopId;
      break;
    case vpopId:
      topId = vpopId;
    case popUsId:
      topId = popUsId;
    default:
      topId = BAT;
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

exports.getSong = async (req, res, next) => {
  try {
    const { id, name } = req.query;
    const html = await axios.get(
      `https://mp3.zing.vn/bai-hat/${name}/${id}.html`
    );

    // get the resouce url /media/get-source?type=audio&key=....
    const regex = /media\/get-source\?type=audio&key=.{33}/;
    const match = JSON.stringify(html.data).match(regex);

    if (!match) throw new Error("Can't find the song resource URL!");

    const [matchUrl] = match;
    const resource = await axios.get(`https://mp3.zing.vn/xhr/${matchUrl}`);

    let data = resource.data.data;

    if (!data.lyric.trim()) {
      data.lyric = [];
      res.send(data);
    }
    const lrcFile = await axios.get(data.lyric);
    data.lyric = lrcParser(lrcFile.data).scripts;
    res.send(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
