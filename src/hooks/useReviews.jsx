import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  //   const postReviews = async (data) => {
  //     try {
  //       await axios.post("http://localhost:3000/reviews", data);
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

  const getReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/reviews?recipeId=${id}`
      );
      setReviews(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getReviews(id);
  }, [id]);

  return { reviews, getReviews };
};

export default useReviews;
