const url = "https://test.spaceflightnewsapi.net/api/v2/articles";

// Fetch

/* async function getData(url){
  let req = await fetch(url);
  if(req.ok){
      let res = await req.json();
      console.log(req.headers);
      console.log(res);
  } else {
      console.error('Ошибка ! ! !');
  }
}

getData(url) */

// Axious
async function getData(url) {
  let req = await axios.get(url);
  let res = await req.data;
  console.log(res);
}

getData(url);
