import { useEffect, useRef, useState } from "react";

const RecipeCounter = () => {
  const savingTime = JSON.parse(localStorage.getItem("featuredTime"));
  const startTime = new Date(savingTime);
  // console.log(startTime);
  const endTime = new Date(startTime.getTime() + 86400000);
  // console.log(endTime);
  const timeRef = useRef(null);
  const [remainingTime, setRemainingTime] = useState({
    hours: "00",
    minutes: "00",
    second: "00",
  });

  const calculateRemainingTime = () => {
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

    setRemainingTime({ hours, minutes, seconds });
  };

  useEffect(() => {
    timeRef.current = setInterval(calculateRemainingTime, 1000);

    return () => {
      clearInterval(timeRef);
    };
  }, []);

  // console.log(remainingTime);

  return (
    <>
      <div>
        <div className="mt-10 text-3xl font-dancingScript font-bold text-red-600">
          New daily recipe available in {remainingTime.hours} :{" "}
          {remainingTime.minutes} : {remainingTime.seconds}
        </div>
      </div>
    </>
  );
};

export default RecipeCounter;
