class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }
  //함수는 두 가지 정도가 나올 것임! (search와 mostPopular video)
  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        q: query,
        type: "video",
      },
    });

    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
