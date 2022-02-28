import data from "../../data/DisneyData.json";

export default function (req, res) {
  const { movies } = data;
  const Movies = Object.values(movies);
  const toSend = Movies.filter((fil) => fil.type == "original");
  res.json(toSend);
}
