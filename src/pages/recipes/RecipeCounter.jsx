import { useEffect, useState } from "react";

const RecipeCounter = () => {
  const savingTime = JSON.parse(localStorage.getItem("featuredTime"));
  const endTime = new Date(savingTime + 86400000);
  const currentTime = new Date();
  const remainingTimeInSeconds =
    (endTime.getTime() - currentTime.getTime()) / 1000;
  const hours = String(Math.floor(remainingTimeInSeconds / 3600)).padStart(
    2,
    "0"
  );
  const minutes = String(
    Math.floor((remainingTimeInSeconds % 3600) / 60)
  ).padStart(2, "0");

  const seconds = String(
    Math.floor((remainingTimeInSeconds % 3600) % 60)
  ).padStart(2, "0");

  const [timeInSeconds, setTimeInSeconds] = useState(seconds);
  const [timeInMinutes, setTimeInMinutes] = useState(minutes);
  const [timeInHours, setTimeInHours] = useState(hours);

  useEffect(() => {
    let intervalReferrence = null;
    0;
    intervalReferrence = setInterval(() => {
      const savingTime = JSON.parse(localStorage.getItem("featuredTime"));
      const endTime = new Date(savingTime + 86400000);
      const currentTime = new Date();
      const remainingTimeInSeconds =
        (endTime.getTime() - currentTime.getTime()) / 1000;

      const hours = String(Math.floor(remainingTimeInSeconds / 3600)).padStart(
        2,
        "0"
      );
      const minutes = String(
        Math.floor((remainingTimeInSeconds % 3600) / 60)
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((remainingTimeInSeconds % 3600) % 60)
      ).padStart(2, "0");

      setTimeInSeconds(seconds);
      setTimeInMinutes(minutes);
      setTimeInHours(hours);
    }, 1000);

    return () => {
      clearInterval(intervalReferrence);
    };
  }, [timeInSeconds]);

  return (
    <>
      <div>
        <div className="mt-10 text-3xl font-dancingScript font-bold text-red-600">
          New daily recipe available in {timeInHours} : {timeInMinutes} :{" "}
          {timeInSeconds}
        </div>
      </div>
    </>
  );
};

export default RecipeCounter;
