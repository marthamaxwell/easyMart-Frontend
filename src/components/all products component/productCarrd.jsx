import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ image, price, title, rating, _id }) => {
  //function that would render stars based on the rating

  const ratingStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="text-sm text-orange-500" />);
    }
    return stars;
  };

  return (
    <div class="  ">
      <Link to={`singleProduct/${_id}`}>
        <div class="bg-card rounded-lg w-[220px] h-[350px] p-3 relative mt-4 hover:translate-y-2 hover:drop-shadow-lg">
          <img src={image} className=" mx-auto rounded-md h-52 mb-4" />
          <div className="">
            <p className="absolute top-4 bg-sm w-[80px] text-center rounded-2xl text-pri font-normal text-base p-[0.5px] ml-1">
              New{" "}
            </p>
            <span className="">
              <FontAwesomeIcon
                icon={faHeart}
                className="h-4 absolute right-[7%] top-6 font-bold text-pri"
              />
            </span>

            <h4 className="">{title} </h4>
            <p className="text-pri font-semibold">
              {/* <FontAwesomeIcon className="b" icon={faNairaSign} /> */}
              {price.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })}{" "}
            </p>
            <p className="flex items-center">
              {rating}
              {ratingStars()}
            </p>
            <div class="float-right">
              <FontAwesomeIcon className="block ml-8" icon={faCartShopping} />
              Add to cart
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
//bg-neutral-800 rounded-2xl w-[100%] h-[70%] ml-auto mr-auto
