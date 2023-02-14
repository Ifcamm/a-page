const API =
  "https://youtube138.p.rapidapi.com/channel/videos/?id=UCg1c09_sFOd-TVPCNgHw8qg&hl=en&gl=US";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "954028ce62msh3c819182106a364p1c49bajsn6afbab071c6a",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

// fetch(API, options)
//   .then((response) => response.json())
//   .then((response) => console.log(response.contents[0].video.title))
//   .catch((err) => console.error(err));

async function fetchData(urlApi) {
  const response = await fetch(API, options);
  const data = await response.json();
  return data;
}

(async () => {
  const videos = await fetchData(API);
  try {
    let view = `
  ${videos.contents
    .map(
      (video) => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.video.thumbnails[3].url}" alt="${video.video.title}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.video.title}
            </h3>
          </div>
        </div>
  `
    )
    .slice(0, 4)
    .join("")}
  
  `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
    alert("error");
  }
})();
