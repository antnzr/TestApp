export default class ImagesService {

    _apiBase = "https://api.unsplash.com";
    _client_id = "cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0";

    getResource = async (query) => {
        let headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Client-ID ${this._client_id}`
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

    fetchImageById = async (id) => {
        const res = await this.getResource(`/photos/${id}`);

        return this._transformImageFullInfo(res);
    };

    _transformImageFullInfo = (image) => {
        return {
            id: image.id,
            imageFullSrc: image.urls.full
        }
    };

    _transformImage = (image) => {
        return {
            id: image.id,
            imageSrc: image.urls.small,
            name: image.description,
            author: image.user.name
        }
    };
};