import { defineStore } from "pinia";
import { ref } from "vue";

export const useMoviesStore = defineStore("moviesStore", () => {
  const movies = ref([
    {
      id: 1,
      title: "lord of the rings",
      released: 2022,
      movieImg: "/src/assets/images/rectangle.svg",
      director: "Nick cassavetes",
      genres: ["drama", "romance"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima quibusdam eveniet repellendus cupiditate alias ullam incidunt voluptas ipsum impedit nisi doloribus unde dicta magni inventore maxime corporis repudiandae rerum, quas esse modi consectetur? Molestias rem odit quo rerum distinctio?",
      quotes: [
        {
          id: 1,
          movieId: 1,
          user: "john doe",
          comments: [
            {
              author: "jane doe",
              userImg: "/src/assets/images/person.svg",
              content: "loremloremloremloremloremloremloremloremloremlorem",
            },
          ],
          likes: 10,
          userImg: "/src/assets/images/person.svg",
          quoteImg: "/src/assets/images/rectangle.svg",
          title: "Lorem ipsum, dolor sit amet consec",
        },
      ],
    },
    {
      id: 2,
      title: "seven psychopaths",
      released: 2022,
      movieImg: "/src/assets/images/rectangle.svg",
      director: "Nick cassavetes",
      genres: ["drama", "romance"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima quibusdam eveniet repellendus cupiditate alias ullam incidunt voluptas ipsum impedit nisi doloribus unde dicta magni inventore maxime corporis repudiandae rerum, quas esse modi consectetur? Molestias rem odit quo rerum distinctio?",
      quotes: [
        {
          id: 2,
          movieId: 2,
          user: "john doe",
          comments: [
            {
              author: "jane doe",
              userImg: "/src/assets/images/person.svg",
              content: "loremloremloremloremloremloremloremloremloremlorem",
            },
          ],
          likes: 10,
          userImg: "/src/assets/images/rectangle.svg",
          quoteImg: "/src/assets/images/rectangle.svg",
          title: "Lorem ipsum, dolor sit amet c",
        },
      ],
    },
    {
      id: 3,
      title: "book of ili",
      released: 2022,
      movieImg: "/src/assets/images/rectangle.svg",
      director: "Nick cassavetes",
      genres: ["drama", "romance"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima quibusdam eveniet repellendus cupiditate alias ullam incidunt voluptas ipsum impedit nisi doloribus unde dicta magni inventore maxime corporis repudiandae rerum, quas esse modi consectetur? Molestias rem odit quo rerum distinctio?",
      quotes: [
        {
          id: 3,
          movieId: 3,
          user: "john doe",
          comments: [
            {
              author: "jane doe",
              userImg: "/src/assets/images/person.svg",
              content: "loremloremloremloremloremloremloremloremloremlorem",
            },
          ],
          likes: 10,
          userImg: "/src/assets/images/rectangle.svg",
          quoteImg: "/src/assets/images/rectangle.svg",
          title: "Lorem ipsum, dolor sit amet c",
        },
      ],
    },
    {
      id: 4,
      title: "lord of the rings",
      released: 2022,
      movieImg: "/src/assets/images/rectangle.svg",
      director: "Nick cassavetes",
      genres: ["drama", "romance"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima quibusdam eveniet repellendus cupiditate alias ullam incidunt voluptas ipsum impedit nisi doloribus unde dicta magni inventore maxime corporis repudiandae rerum, quas esse modi consectetur? Molestias rem odit quo rerum distinctio?",
      quotes: [
        {
          id: 4,
          movieId: 4,
          user: "john doe",
          comments: [
            {
              author: "jane doe",
              userImg: "/src/assets/images/person.svg",
              content: "loremloremloremloremloremloremloremloremloremlorem",
            },
          ],
          likes: 10,
          userImg: "/src/assets/images/rectangle.svg",
          quoteImg: "/src/assets/images/rectangle.svg",
          title: "Lorem ipsum, dolor sit amet !",
        },
      ],
    },
  ]);

  function $reset() {
    movies.value = [];
  }

  return { movies, $reset };
});
