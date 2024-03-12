import "./styles/eventCards.css";
import concepts_logo from "../assets/images/concepts_logo.png";
import impetus_logo from "../assets/images/impetus_logo.png";
import pradnya_logo from "../assets/images/pradnya_logo.png";
import hackathon_logo from "../assets/images/tech_fiesta.png";
import game_jam_logo from "../assets/images/game_jam_logo.png";

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const eventData = [
  {
    id: 1,
    name: "IMPETUS",
    fees: 200,
    members: "2-5 members",
    prize: 1000,
    ct: "First ,second and third year students",
    logo: impetus_logo,
    nt: "₹ 100/- For National Entries",
    //nt: "Will be displayed Soon...",
    it: "Free for International Entries",
    contact: [
      {
        name: "Naman",
        phone: "84464 55659",
      },
      // {
      //   name: "Mrugank",
      //   phone: "7083823772"

      // },
      // {
      //   name: "Vrushali",
      //   phone: "9766176681"
      // },
      // {
      //   name: "Aarti",
      //   phone: "9405119460",
      // }
    ]
  },

  {
    id: 2,
    name: "CONCEPTS",
    fees: 300,
    members: "2-5 members",
    prize: 1000,
    ct: "Final year students only.    ",
    logo: concepts_logo,

    nt: "₹ 300/- For National Entries",
    //nt: "Will be displayed Soon...",
    it: "Free for International Entries",
    contact: [
      {
        name: "Srushti",
        phone: "99231 49170",
      },
      // {
      //   name: "Kalpesh",
      //   phone: "7769945077"

      // },
      // {
      //   name: "Yamini",
      //   phone: "7385190784"
      // },
      // {
      //   name: "Vishakha",
      //   phone: "9011628404",
      // },
    ]
  },

  {
    id: 3,
    name: "PRADNYA",
    fees: 100,
    members: "Max 2 Members",
    prize: 1000,
    ct: "First , second, third and fourth year students",
    logo: pradnya_logo,
    nt: "₹ 100/- For National Entries",
    //nt: "Will be displayed Soon...",
    it: "Free for International Entries",
    contact: [
      {
        name: "Manavi",
        phone: "7499953568",
      },
    ]
  },
  {
    id: 4,
    name: "HACKATHON",
    fees: 400,
    members: "4-6 Members",
    ct: "First, second, third and fourth year students",
    logo: hackathon_logo,
    nt: "Registrations Closed.",
    it: "Last Date for Registration was 19/02/2024",

    contact: [{
      name: "Atharva",
      phone: "82370 95572",
    },

    ],

    closed: "Registration closed."


  },
  {

    id: 5,

    name: "GAME JAM",

    fees: 200,

    members: "1-4 Members",

    ct: "First, second, third and fourth year students",

    logo: game_jam_logo,

    nt: "₹ 200/- For National Entries",

    it: "Free for International Entries",



    contact: [{

      name: "Saurav",

      phone: "9373270878",

    },

    ]

  }
];

function Card(props) {
  const redirectEvents = useNavigate()

  return (
    <Link to={`/event-details/${props.name.toLowerCase()}`} rel="noopener noreferrer">

      {/* my card*/}
      <div className="py-10 mx-5 md:mx-0 ">
        <div className="md:h-[600px]  shadow-md shadow-light_blue/20 hover:bg-light_blue hover:scale-105 transition ease-in-out  bg-light_blue/30 rounded-xl  border-light_blue items-center p-4 md:p-8 border md:mx-5  mt-10">
          <div className='flex items-center justify-evenly'>
            <div className='my-4'>
              <img src={props.logo}
                alt=""
                className="w-10" />
            </div>
            <div className="my-auto text-xl mr-10 md:text-3xl font-poppins group text-gold font-bold tracking-wider decoration-1 decoration-light_blue uppercase">{props.name}</div>

          </div>

          <div className="px-6">
            <hr className="mt-2 text-light_blue" />

            {/* <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni dolorem libero pariatur nisi fugit voluptate perferendis, harum sapiente sit eius excepturi, similique repellendus explicabo dicta a ipsa iure temporibus dolorum, accusantium consequatur sequi possimus! Quas non veniam aliquid et?</p> */}
            <p className="my-4  text-lg md:text-xl border-l-2 border-gold md:font-light md:leading-6  pl-2 ">
              {" "}
              <div className="flex"><span className="font-bold "> TEAM</span>
                <div className="border-dotted border-l-2 border-light_blue/20 ml-9 pl-2">{props.team}</div> </div>

            </p>
            <p className="my-4 text-lg md:text-xl border-l-2 border-gold md:font-light md:leading-6  pl-2">
              {" "}
              <div className="flex"><span className="font-bold "> CRITERIA</span>
                <div className="border-dotted border-l-2 border-light_blue/20 ml-1 pl-2">{props.ct}</div> </div>

            </p>


            {/* <div className="flex gap-3 my-10 ">
              <p className="my-4 text-lg md:text-xl flex items-baseline  border-l-2 border-gold md:font-light md:-leading-6   pl-2">
                {" "}
                <span className="font-bold -rotate-90  w-20   "> CRITERIA  </span>
              </p>
              <div className="border-dotted border-l-2 border-light_blue/20 ">
                <p className="my-4 text-lg md:text-xl   md:font-light md:leading-6  pl-2">
                  {props.ct}
                </p>
              </div>
            </div> */}
            <div className="flex gap-3 my-5 ">
              <p className="my-4 text-lg md:text-xl flex items-baseline  border-l-2 border-gold md:font-light md:-leading-6   pl-2">
                {" "}
                <span className="font-bold -rotate-90  w-20   "> FEES  </span>
              </p>
              <div className="border-dotted border-l-2 border-light_blue/20 ">
                <p className="my-4 text-lg md:text-xl   md:font-light md:leading-6  pl-2">
                  {props.ie}
                </p>
              </div>
            </div>

            <br />
            <div className=" flex gap-3  ">
              <p className=" my-1 text-lg md:text-xl flex place-items-center   border-l-2 border-gold md:font-light md:-leading-6   pl-2">
                {" "}
                <span className="font-bold -rotate-90 w-20 "> CONTACT </span>
              </p>
              <div className="border-dotted border-l-2  border-light_blue/20 ">
                <ul>
                  {
                    props.contact.map((item) => {
                      return (
                        <li className="my-1 pl-2" >
                          <p className="text-lg md:text-xl font-medium">{item.name} : {item.phone}</p >
                        </li>
                      )
                    })
                  }
                  {/* <li className="my-1 px-4" >
                    <strong>Apoorvaraj : </strong>8530191073
                  </li>
                  <li className="my-1 px-4" >
                    <strong>Mrugank : </strong>7083823772
                  </li>

                  <li className="my-1 px-4" >
                    <strong>Vrushali : </strong>9766176681
                  </li>
                  <li className="my-1 px-4" >
                    <strong>Aarti : </strong>9405119460
                  </li> */

                  }
                </ul>
              </div>
            </div>
            <br /><br />
            <div className="flex justify-center text-[#ff0000] font-bold text-2xl">
              {props.closed ? <h1>{props.closed}</h1> : <></>}
            </div>
            <br />
            {/* <button className="bg-transparent text-white hover:text-blue-300 font-semibold hover:text-green-300 px-2">View More</button> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

function EventCards() {

  return (
    <div id="events" className="eventCards my-10 ">
      <h1 className="mt-10 mb-2 text-center capitalize text-4xl font-bold text-white">
        Events
      </h1>
      <hr className="w-1/5 mx-auto mb-5 " />
      <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
        {eventData.slice(0, -2).map((eva) => {
          return (
            <Card
              name={eva.name}
              logo={eva.logo}
              team={eva.members}
              ne={eva.nt}
              ie={eva.it}
              contact={eva.contact}
              ct={eva.ct}
            />
          );
        })}

      </div>
      <div className="flex flex-col lg:flex-row md:w-[68%] md:m-auto">
        {eventData.slice(-2).map((eva) => {
          return (
            <Card
              name={eva.name}
              logo={eva.logo}
              team={eva.members}
              ne={eva.nt}
              ie={eva.it}
              contact={eva.contact}
              ct={eva.ct}
              closed={eva.closed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default EventCards;
