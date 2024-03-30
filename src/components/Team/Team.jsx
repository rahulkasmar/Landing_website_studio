import React from "react";
import team1 from "../images/team/team1.jpg";
import team2 from "../images/team/team2.jpg";
import team3 from "../images/team/team3.jpg";

const Team = () => {
  const teams = [team1, team2, team3];
  return (
    <section
      className="lg:h-[650px] py-6 lg:py-0 2xl:h-[800px] bg-teamBg bg-cover bg-no-repeat
        lg:mt-[5rem]">
      <div className="w-[90%] lg:w-[85%] mx-auto grid grid-cols-team gap-5">
        {teams.map((team, i) => (
          <div key={i} className="lg:mt-[-7rem] !z-30 w-full">
            <img
              className="w-full h-[23rem] 2xl:h-[30rem] object-cover"
              src={team}
              alt="teamImg"
            />
          </div>
        ))}
      </div>

      <div
        className="w-[90%] lg:w-[60%] mx-auto bg-blue-950/60 text-white mt-[3rem] p-4
        text-center flex flex-col gap-5 rounded-lg">
        <h1 className="text-2xl lg:text-5xl capitalize">our Studio location</h1>
        <p className="2xl:text-lg font-bold text-lg">
          Near Maa Tara Petrol Pump , Gandhajore Main Road Chira Chas.
          Email Adress: multimediapari01@gmail.com
        </p>
        <p className="text-sm 2xl:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio rerum
          nesciunt magnam nobis atque? Error nulla sapiente, ut voluptatum ipsa
          assumenda ea consequatur eaque voluptatem dolores sed enim repellendus
          possimus suscipit quia quasi magni placeat, provident ab id? Cumque,
          blanditiis.
        </p>
      </div>
    </section>
  );
};

export default Team;
