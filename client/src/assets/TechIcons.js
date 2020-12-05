import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJs,
  faNodeJs,
  faGit,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

const TechIcons = () => {
    const iconArray = [
        <FontAwesomeIcon className="techIcons htmlIcon" icon={faHtml5} />,
      <FontAwesomeIcon className="techIcons cssIcon" icon={faCss3Alt} />,
      <FontAwesomeIcon className="techIcons jsIcon" icon={faJs} />,
      <FontAwesomeIcon className="techIcons reactIcon" icon={faReact} />,
      <FontAwesomeIcon className="techIcons nodeIcon" icon={faNodeJs} />,
      <FontAwesomeIcon className="techIcons npmIcon" icon={faNpm} />,
      <FontAwesomeIcon className="techIcons gitIcon" icon={faGit} />,
    ]

    const [iconToReturn, setIconToReturn] = useState(iconArray[0])

// TODO Animate the transition between icons!!
    let index = 0
    useEffect(() => {
        console.log(typeof iconArray[0])
        setInterval(() => {
            setIconToReturn(iconArray[index])
            if(index === (iconArray.length - 1)){
                index = 0
            }
            if(index !== iconArray.length){
                index ++
            }
        }, 2000);
    }, [])
  return (
    <div className="row techIconContainer">
      {iconToReturn}
    </div>
  );
};

export default TechIcons;
