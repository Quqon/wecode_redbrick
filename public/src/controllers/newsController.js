const newsService = require('../services/newsService');
const { catchAsync } = require('../utils/error');


const getNews = catchAsync(async (req, res) => {
    const platform = req.platform;
    if(platform != 4){
        const error = new Error("NO PERMISSION. YOU HAVE TO LOG IN WITH GITHUB");
        error.statusCode = 400;
        throw error;
    }

    const { year, category } = req.params;

    const newsInfo = await newsService.getNews(category, year);

    return res.status(200).json({ data :  newsInfo });
  
})


module.exports = {
    getNews
}