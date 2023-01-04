/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card10 = () => (
    <CustomContestCard contestType="League Winners"
                       countdown={
                           <Countdown tag="10" period={getPeriod(5)}/>
                       }
                       prizeInKUSD={2}
                       gradientStart="#009245"
                       gradientEnd="#D585FF"
                       imageUrl="4.png"/>
)

export default Card10
