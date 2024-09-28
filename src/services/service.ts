const coinsService = {
  listUsers: "https://api.github.com/search/users?q=",
};

export const getSearchUser = async (name: string) => {
  return fetch(coinsService.listUsers + name).then((data) => data.json());
};
