const About = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-white">
        <div className="w-[50%] h-full flex absolute z-120">
          <div className="w-[50%] h-full flex flex-col">
            <div className="h-[33.33%] shadow-lg rounded-lg overflow-hidden">
              <img
                src="\images\Untitled.png"
                className="w-full h-full object-cover shadow-2xl"
                alt="About Image"
              />
            </div>
            <div className="h-[66.66%] bg-darkred ">
              <h1 className="text-3xl text-center text-beige mt-5 font-dancingScript">
                Candied Sweet Potatoes
              </h1>
              <div className="flex flex-row gap-7 justify-between items-start">
                <div className="ml-1 flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="text-beige"
                  >
                    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7m5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
                  </svg>
                  <p className="py-5 px-8 text-beige font-dancingScript">
                    2 servings
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="2em"
                    width="2em"
                    className="text-beige"
                  >
                    <path d="M8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 108 0a8 8 0 000 16zm7-8A7 7 0 111 8a7 7 0 0114 0z" />
                  </svg>
                  <p className="py-5 px-8 text-beige font-dancingScript">
                    15 minutes
                  </p>
                </div>
              </div>
              <p className="text-2xl font-bold text-beige px-3 mt-5 font-dancingScript">
                Ingredients:
              </p>
              <ul className="mt-10 space-y-2 px-3 text-beige font-dancingScript text-xl">
                <li>3 pounds thinly sliced potatoes</li>
                <li>½ thinly sliced onion</li>
                <li>9 tablespoons all-purpose flour, divided</li>
                <li>6 tablespoons diced-divided butter</li>
                <li>salt and ground black pepper to taste</li>
                <li>3 cups whole milk(or as needed)</li>
              </ul>
            </div>
          </div>

          <div className="w-[50%] h-full bg-ivory shadow-lg">
            <ul className="py-12 px-4 space-y-4 overflow-wrap word-break font-ptSansNarrow text-sm">
              <li>
                Gather all ingredients. Preheat the oven to 400 degrees F (200
                degrees C). Grease a 9x13-inch baking dish.
              </li>
              <li>
                Bring a large pot of water to a boil. Add potatoes and boil
                until slightly underdone, about 15 minutes; drain and peel when
                cool enough to handle.
              </li>
              <li>
                While potatoes are cooling, combine 2 cups marshmallows, butter,
                brown sugar, cinnamon, and nutmeg in a large saucepan over
                medium heat; cook, stirring occasionally, until marshmallows are
                melted.
              </li>
              <li>
                Stir potatoes into marshmallow sauce, mashing about half of the
                potatoes and breaking the other half into bite-sized chunks.
                Transfer into the prepared baking dish.
              </li>
              <li>Bake in the preheated oven for 15 minutes.</li>
              <li>
                Sprinkle remaining 1 cup marshmallows evenly over top and
                continue to bake until marshmallows are slightly toasted and
                golden brown, about 5 minutes.
              </li>
            </ul>
            <p className="text-center text-lg font-dancingScript font-bold">
              Nutrition Facts
            </p>
            <ul className="text-center font-dancingScript space-y-1">
              <li>396 Calories</li>
              <li>16g Fat</li>
              <li>55g Carbs</li>
              <li>10g Protein</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
