export default class ImagesService {

    _apiBase = "https://api.unsplash.com";

    getResource = async (query) => {
        let headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Client-ID ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
        });

        const res = await fetch(`${this._apiBase}${query}`, {
            method: "GET",
            headers: headers,
        });

        if (!res.ok) {
            throw new Error(`Couldn't not fetch, receive ${res.statusText}`)
        }

        return await res.json();
    };

    fetchImages = async () => {
        const res = await this.getResource("/photos");

        return res.map(this._transformImage)
    };

    _transformImage = (image) => {
        return {
            id: image.id,
            imageSrc: image.urls.small,
            imageFullSrc: image.urls.full,
            name: image.description,
            author: image.user.name
        }
    };
};