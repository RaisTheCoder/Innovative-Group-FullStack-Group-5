let currency = "AZN";
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

let minPrice = document.getElementById("minPrice").value;
let maxPrice = document.getElementById("maxPrice").value;
let _name = document.getElementById("name").value;
let surName = document.getElementById("surname").value;

let isFiltered = false;

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
      resetFilter.addEventListener("click", () => {
        isFiltered = false;
        resetFilter.style.display = "none";
        movieList.style.display = "flex";
        filterForm.style.display = "none";
        listMovies(movies);
      });
    }
  }
});

filterSubmit.addEventListener("click", () => {
  minPrice = document.getElementById("minPrice").value;
  maxPrice = document.getElementById("maxPrice").value;
  _name = document.getElementById("name").value;
  surName = document.getElementById("surname").value;

  if (_name.trim() === "" || surName.trim() === "") {
    errPlaceholder.innerText = "Please Enter Your Name or Your Surname";
    setTimeout(() => {
      errPlaceholder.innerText = "";
    }, 1500);
  } else if (+minPrice > +maxPrice) {
    errPlaceholder.innerText =
      "Minimum Price Cannot Be Higher Than Maximum Price.";
    setTimeout(() => {
      errPlaceholder.innerText = "";
    }, 1500);
  } else {
    isFiltered = true;
    movieList.style.display = "flex";
    filterForm.style.display = "none";
    const filteredMovies = movies.filter(
      (m) => m.price >= minPrice && m.price <= maxPrice,
    );
    movieList.innerHTML = "";
    listMovies(filteredMovies);
  }
});

listMovies(movies);
