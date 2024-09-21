import { Link } from "react-router-dom";
import image1 from "../../assets/image/image1.jpg";
import image2 from "../../assets/image/image2.avif";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useRef, useState } from "react";


const Data = [
    { id: 1, name: "Priya", image: image1 },
    { id: 2, name: "Tina", image: image2 },
    { id: 3, name: "Naina", image: image2 },
    { id: 4, name: "Kriti", image: image2 },
    { id: 5, name: "Priti", image: image2 },
    { id: 6, name: "Astha", image: image2 },
    { id: 7, name: "Sneha", image: image2 },
    { id: 8, name: "Diya", image: image2 },
    { id: 9, name: "Era", image: image2 },
    { id: 10, name: "Krishna", image: image2 },
    { id: 11, name: "Tia", image: image2 },
    { id: 12, name: "Pia", image: image2 },
    { id: 13, name: "Mia", image: image2 },
    { id: 14, name: "Lia", image: image2 },
    { id: 15, name: "Zia", image: image2 },
];

const Storie = () => {
    const storyRef=useRef(null)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(true)

    const onScroll=(()=>{
        if(storyRef.current.scrollLeft>0){
            setShowLeft(true)
        } else {
            setShowLeft(false)
        }
    })

  return (
    <div className="relative w-max">
      <div onScroll={onScroll} ref={storyRef} className="lg:max-w-[41vw] md:max-w-[70vw] sm:max-w-full w-full h-auto flex  gap-x-3 overflow-x-scroll max-w-xl scroll-smooth">
        {Data.map((story) => (
          <Link key={story.id} to="" className="flex  justify-center flex-col flex-shrink-0">
            <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-tr from-yellow-500 to-red-600 ">
              <img src={story.image} alt={story.name} className="rounded-full w-full h-full object-cover p-[1px]" />
            </div>
            <span className="text-center  text-[15px]">{story.name}</span>
          </Link>
        ))}
      </div>
      <div className="absolute top-0 flex justify-between items-center w-full h-full p-4 z-10 ">
        <button onClick={()=>{
            storyRef.current.scrollLeft= storyRef.current.scrollLeft-=50
        }}>
            <BiChevronLeft size={28} color="black" className={`rounded-full bg-white ${showLeft?"visible":"invisible"}` }/>
        </button>
        <button  onClick={()=>{
            storyRef.current.scrollLeft= storyRef.current.scrollLeft+=50
        }}>
            <BiChevronRight size={28} color="black" className={`rounded-full bg-white ${showRight?"visible":"invisible"}` }/>
        </button>
      </div>
    </div>
  );
}

export default Storie;
