// import React from "react";
import { ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

const ProductOverviewTwo = ({ movie }) => {
  return (
    <div className="flex justify-center m-3">
      <div className="flex max-w-2xl flex-col items-center rounded-md shadow-lg overflow-hidden border md:flex-row bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src={movie.imageUrl}
            alt={movie.name}
            className="h-full w-full rounded-t-md object-cover"
          />
        </div>
        <div className="bg-gray-800 md:rounded-b-md">
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {movie.name} <ArrowUpRight className="ml-2 h-4 w-4" />
            </h1>
            <p className="mt-3 text-sm">{movie.description}</p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-purple-600 px-3 py-1 text-[10px] font-semibold">
                {movie.genre}
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-green-600 px-3 py-1 text-[10px] font-semibold">
                ${movie.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductOverviewTwo.propTypes = {
  movie: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductOverviewTwo;
