import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "Leanne Graham",
    isOnline: true,
    match: "78",
    description:
      "says, Hi, ive got a 20% off in HORROR QUEST, its so cool,\n but i dont have friends enough, wanna join?\n IT WILL COST FOR YOU 20$",
    message:
      "HI, so wanna join?",
    image: IMAGE_01,
    activity: IMAGE_10
  },
  {
    id: 2,
    name: "Clementine Bauch",
    match: "93",
    description:
      "says, Cool game but its TOO EXPENSIVE, i need partner to play.\n IT WILL COST 30$",
    isOnline: false,
    message: "",
    image: IMAGE_02,
    activity: IMAGE_09
  },
 
];

export default data;
