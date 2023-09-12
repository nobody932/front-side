import React, { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("/api/articles")
      .then((response) => {
        // console.log(response.data["hydra:member"]);
        setArticles(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("bien joué");
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 mx-5 space-x-3 ">
        {articles.map((article) => {
          return (
            <div key={article.id} className="bg-purple-500  border lg">
              <img src={article.image} alt="" />
              <h1 className="text-white italic font-bold">Titre : {article.title}</h1>
              <br />
              description: {article.description}
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Articles;