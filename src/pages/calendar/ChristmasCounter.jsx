import { useEffect, useState } from "react";

const RecipeCounter = () => {
  const endTime = new Date("2024-12-25T00:00:00");
  const currentTime = new Date();
  const remainingTimeInSeconds =
    (endTime.getTime() - currentTime.getTime()) / 1000;

  const days = String(
    Math.floor(remainingTimeInSeconds / (3600 * 24))
  ).padStart(2, "0");

  const hours = String(
    Math.floor((remainingTimeInSeconds % (3600 * 24)) / 3600)
  ).padStart(2, "0");

  const minutes = String(
    Math.floor((remainingTimeInSeconds % 3600) / 60)
  ).padStart(2, "0");

  const seconds = String(Math.floor(remainingTimeInSeconds % 60)).padStart(
    2,
    "0"
  );

  const [timeInSeconds, setTimeInSeconds] = useState(seconds);
  const [timeInMinutes, setTimeInMinutes] = useState(minutes);
  const [timeInHours, setTimeInHours] = useState(hours);
  const [timeInDays, setTimeInDays] = useState(days);

  useEffect(() => {
    let intervalReference = setInterval(() => {
      const endTime = new Date("2024-12-25T00:00:00");
      const currentTime = new Date();
      const remainingTimeInSeconds =
        (endTime.getTime() - currentTime.getTime()) / 1000;

      const days = String(
        Math.floor(remainingTimeInSeconds / (3600 * 24))
      ).padStart(2, "0");

      const hours = String(
        Math.floor((remainingTimeInSeconds % (3600 * 24)) / 3600)
      ).padStart(2, "0");

      const minutes = String(
        Math.floor((remainingTimeInSeconds % 3600) / 60)
      ).padStart(2, "0");

      const seconds = String(Math.floor(remainingTimeInSeconds % 60)).padStart(
        2,
        "0"
      );

      setTimeInSeconds(seconds);
      setTimeInMinutes(minutes);
      setTimeInHours(hours);
      setTimeInDays(days);
    }, 1000);

    return () => {
      clearInterval(intervalReference);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <p className="mt-10 text-3xl font-dancingScript font-bold text-red-600 text-center flex items-center justify-center">
        {timeInDays} days : {timeInHours} hours : {timeInMinutes} minutes :{" "}
        {timeInSeconds} seconds left until Christmas !
      </p>
    </div>
  );
};

export default RecipeCounter;
