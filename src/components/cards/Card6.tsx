/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card6 = () => (
    <CustomContestCard contestType="Ranked Winners"
                       countdown={
                           <Countdown tag="6" period={getPeriod(4)}/>
                       }
                       prizeInKUSD={5}
                       gradientStart="#D4145A"
                       gradientEnd="#009245"
                       imageUrl="6.png"/>
)

export default Card6
