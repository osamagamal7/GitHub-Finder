class Github {
  constructor() {
    this.client_id = "7be94afb0b65fe0e1037";
    this.client_secret = "0bd9a048f5c32fd22856f26ca9e939eb03c0b448";
    this.numRepos = 4;
    this.sortRepos = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.numRepos}&sort=${this.sortRepos}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
