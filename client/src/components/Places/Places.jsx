import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat_2.jpg";
import Img2 from "../../assets/places/sigiriya_2.jpg";
import Img3 from "../../assets/places/kandy.jpg";
import Img4 from "../../assets/places/nuwaraeliya.jpg";
import Img5 from "../../assets/places/unawatuna.jpg";
import Img6 from "../../assets/places/dambulla.jpg";
import Img7 from "../../assets/places/hikkaduawa.jpg";
import Img8 from "../../assets/places/ella.jpg";
import Img9 from "../../assets/places/mirissa.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Madu River Boat Safari",
    location: "Balapitiya",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 3000,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Sigiriya Roack",
    location: "Sigiriya",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 3000,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "The Temple of the Sacred Tooth Relic",
    location: "Kandy",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 3000,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "World's End Nuwara Eliya",
    location: "Nuwara Eliya",
    description: "Ella is popular for its lush greenery and the cool and collected environment amongst the people. Ella Rock is a popular hiking and camping destination and it is a delight to witness spectacular views with haze and clouds surrounding the area.",
    price: 3000,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Unawatuna beach",
    location: "Galle",
    description:
      "Relax your senses in the sparkling waters well complemented with a lazy sandy idyll in Unawatuna beach. It was once named the world's best beach by Discovery Channel. One and a half hour drive from Colombo makes.",
    price: 3000,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Dambulla Cave Temple",
    location: "Dambulla",
    description:
      "Dambulla Cave temple is also known as the Golden Rock temple is also one of the world heritage city declared by UNESCO. The cave temple is made with a massive granite outcrop.",
    price: 3000,
    type: "Cultural Relax",
  },
  {
    img: Img7,
    title: "Hikkaduawa",
    location: "Hikkaduawa",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 3000,
    type: "Cultural Relax",
  },
  {
    img: Img8,
    title: "Ella Rock",
    location: "Badulla",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 3000,
    type: "Cultural Relax",
  },
  {
    img: Img9,
    title: "Mirissa Beach",
    location: "Matara",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 3000,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit in Sri Lanka
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
