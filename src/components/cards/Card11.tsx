/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card11 = () => (
    <CustomContestCard contestType="League Winners"
                       countdown={
                           <Countdown tag="11" period={getPeriod(2)}/>
                       }
                       prizeInKUSD={10}
                       gradientStart="#D4145A"
                       gradientEnd="#FBB03B"
                       imageUrl="5.png"/>
)

export default Card11
