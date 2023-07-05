import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { GiTerror } from "react-icons/gi";
import { IResults } from "../Interfaces/Interface";
import { useGlobalContext } from "../Context/Context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

function Gallery() {
  const [imageState, setImageState] = useState("");
  const queryClient = useQueryClient();
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const res = await axios(`${url}&query=${searchTerm}`);
      return res.data;
    },
  });

  const imgItem = response.data?.results.filter(
    (item: IResults) => item.id === imageState
  );

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading....</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an Error</h4>
      </section>
    );
  }

  const results = response.data.results;
  // console.log(results[1]);

  if (results?.length < 1) {
    return (
      <section className="image-container">
        <GiTerror
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
          }}
        />
        <h4 style={{ margin: "auto", fontSize: "2rem" }}>No Results Found</h4>
      </section>
    );
  }

  return (
    <>
      <section className="image-container">
        {results.map((item: IResults) => {
          const url = item?.urls?.regular;
          return (
            <div key={item.id}>
              <img
                src={url}
                alt={item.alt_description}
                className="img"
                onClick={() => {
                  setImageState(item.id);
                }}
              />
            </div>
          );
        })}
      </section>
      {/* Will be Done soon */}
      {/* <div className="image-modal">
        {imageState ? <img src={imgItem?.[0].urls.regular} /> : null}
      </div> */}
    </>
  );
}

export default Gallery;
