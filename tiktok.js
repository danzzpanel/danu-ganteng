export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: "URL tidak ditemukan" });
    }

    try {
        const response = await fetch(
            `https://tiktok-video-downloader-api.p.rapidapi.com/media?videoUrl=${encodeURIComponent(url)}`,
            {
                headers: {
                    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
                    "x-rapidapi-host": "tiktok-video-downloader-api.p.rapidapi.com"
                }
            }
        );

        const data = await response.json();
        return res.status(200).json(data);

    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}