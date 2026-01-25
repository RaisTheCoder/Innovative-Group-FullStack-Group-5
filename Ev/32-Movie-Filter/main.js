let currency = "AZN";
let cooldown = 1.2;

const movies = [
  {
    id: 0,
    name: "Titanic",
    year: 1997,
    imdbScore: 7.9,
    price: 25,
  },
  {
    id: 1,
    name: "Friday The 13th",
    year: 1980,
    imdbScore: 6.4,
    price: 10,
  },
  {
    id: 2,
    name: "Mr. Robot",
    year: 2015,
    imdbScore: 8.5,
    price: 60,
  },
  {
    id: 3,
    name: "Harry Potter",
    year: 2001,
    imdbScore: 7.7,
    price: 1,
  },
];

const template = document.getElementById("movieTemplate");
const movieList = document.getElementById("movie-list");

const filterBtn = document.getElementById("filter-btn");
let ogFilterText = filterBtn.innerText;
const filterForm = document.getElementById("filter-form");
const filterSubmit = document.getElementById("filter-movies");
const errPlaceholder = document.getElementById("error");
const resetFilter = document.getElementById("reset");

let isFiltered = false;
let timeOutTimer = cooldown * 1000;

function listMovies(movies) {
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".movie-name").textContent = movie.name;
    clone.querySelector(".mov-release-date").textContent = movie.year;
    clone.querySelector(".mov-imdb").textContent = movie.imdbScore + "/10";
    clone.querySelector(".mov-price").textContent = movie.price + " AZN";

    movieList.appendChild(clone);
  });
}

function showError(message) {
  filterSubmit.disabled = true;
  filterSubmit.style.cursor = "not-allowed";
  errPlaceholder.style.display = "block";
  errPlaceholder.innerText = message;
  setTimeout(() => {
    filterSubmit.disabled = false;
    filterSubmit.style.cursor = "pointer";
    errPlaceholder.style.display = "none";
    errPlaceholder.innerText = "";
  }, timeOutTimer);
}

function filterMovies(minPrice, maxPrice, _name, surName, movies) {
  const filteredMovies = [];
  if (_name.trim() === "" || surName.trim() === "") {
    showError("Please Enter Your Name or Your Surname");
  } else if (+minPrice > +maxPrice) {
    showError("Minimum Price Cannot Be Higher Than Maximum Price.");
  } else {
    isFiltered = true;
    movieList.style.display = "flex";
    filterForm.style.display = "none";

    for (let i = 0; i < movies.length; i++) {
      if (movies[i].price >= +minPrice && movies[i].price <= +maxPrice) {
        filteredMovies.push(movies[i]);
      }
    }

    if (filteredMovies.length === 0) {
      showError("Couldn't Find Anything Matching This Criteria");
    } else {
      listMovies(filteredMovies);
    }
  }
}

filterBtn.addEventListener("click", () => {
  if (movieList.style.display === "none") {
    movieList.style.display = "flex";
    filterForm.style.display = "none";
    filterBtn.innerText = ogFilterText;
  } else {
    movieList.style.display = "none";
    filterForm.style.display = "flex";
    filterBtn.innerText = "Close";

    if (isFiltered) {
      resetFilter.style.display = "block";
    }
  }
});

filterSubmit.addEventListener("click", () => {
  let minPrice = document.getElementById("minPrice").value;
  let maxPrice = document.getElementById("maxPrice").value;
  let _name = document.getElementById("name").value;
  let surName = document.getElementById("surname").value;

  filterMovies(minPrice, maxPrice, _name, surName, movies);
});

resetFilter.addEventListener("click", () => {
  isFiltered = false;
  resetFilter.style.display = "none";
  movieList.style.display = "flex";
  filterForm.style.display = "none";
  listMovies(movies);
});

listMovies(movies);
