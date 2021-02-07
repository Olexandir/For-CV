let THEFIRSTURL = "https://api.scryfall.com";

async function getData(url) {
  let req = await axios.get(url);
  let res = await req.data;
  console.log(res);
}

getData(THEFIRSTURL);
