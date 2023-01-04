/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card13 = () => (
    <CustomContestCard contestType="League Winners"
                       countdown={
                           <Countdown tag="13" period={getPeriod(8)}/>
                       }
                       prizeInKUSD={10}
                       gradientStart="#662D8C"
                       gradientEnd="#FCEE21"
                       imageUrl="1.png"/>
)

export default Card13
