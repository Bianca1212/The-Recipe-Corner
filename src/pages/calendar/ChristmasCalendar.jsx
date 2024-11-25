import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import ChristmasCounter from "./ChristmasCounter";

const ChristmasCalendar = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().getFullYear(), 11, 1)
  ); // 11 este decembrie (luna 12 - 1)
  const [daysInMonth, setDaysInMonth] = useState([]);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Crează calendarul pentru luna curentă
  const createCalendar = () => {
    if (currentDate instanceof Date && !isNaN(currentDate)) {
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();

      const firstDay = new Date(currentYear, currentMonth, 1);
      const firstDayIndex = firstDay.getDay();
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
      const numberOfDays = lastDay.getDate();

      const days = [];
      for (let i = 0; i < firstDayIndex; i++) {
        days.push(null); // Sloturi goale înainte de prima zi a lunii
      }

      for (let i = 1; i <= numberOfDays; i++) {
        days.push(i); // Adaugă fiecare zi a lunii
      }

      setDaysInMonth(days); // Actualizează state-ul cu zilele
    }
  };

  // Actualizează calendarul când data curentă se schimbă
  useEffect(() => {
    createCalendar();
  }, [currentDate]);

  // Mergi în luna anterioară
  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  // Mergi în luna următoare
  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  // Formatează data curentă ca "Luna An"
  const formatDate = () => {
    if (currentDate instanceof Date && !isNaN(currentDate)) {
      return currentDate.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });
    }
    return ""; // Returnează un string gol dacă data curentă nu este validă
  };

  const handleDayClick = (day) => {
    const currentMonth = currentDate.getMonth();
    if (currentMonth === 11 && day) {
      navigate(`/christmasRecipe/${day}`);
    }
  };

  return (
    <NavigationLayout>
      <div className="bg-[url('/images/calendar-bg.jpg')] bg-repeat bg-cover bg-center min-h-screen bg-fixed flex flex-col justify-center p-1">
        <ChristmasCounter />
        <div className="rounded-md w-full max-w-4xl md:w-9/12 mx-auto">
          <div className="flex justify-between items-center p-5">
            <button
              className="text-2xl p-2 cursor-pointer font-semibold"
              onClick={handlePreviousMonth}
            >
              ◀
            </button>
            <div className="flex items-center">
              <p className="text-gray-800 font-extrabold font-dancingScript text-3xl sm:text-4xl">
                {formatDate()}
              </p>
            </div>
            <button
              className="text-2xl p-2 cursor-pointer font-semibold"
              onClick={handleNextMonth}
            >
              ▶
            </button>
          </div>
          {/* Header cu zilele săptămânii */}
          <div className="grid grid-cols-7 text-center text-sm font-semibold rounded-lg p-4">
            {daysOfWeek.map((day, index) => {
              return (
                <div
                  key={index}
                  className="font-dancingScript font-bold text-lg sm:text-2xl py-2 px-2 bg-green-300"
                >
                  {day}
                </div>
              );
            })}
          </div>
          {/* Zilele calendarului */}
          <div className="grid grid-cols-7 gap-4 sm:gap-6 p-4">
            {daysInMonth.map((day, index) => {
              return (
                <div
                  key={index}
                  className="p-4 sm:p-6 bg-cadmiumRed hover:bg-green-300 hover:text-black hover:scale-110 cursor-pointer text-white text-center font-extrabold font-dancingScript text-xl sm:text-2xl rounded-lg"
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
};

export default ChristmasCalendar;
