/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card12 = () => (
    <CustomContestCard contestType="League Winners"
                       countdown={
                           <Countdown tag="12" period={getPeriod(12)}/>
                       }
                       prizeInKUSD={5}
                       gradientStart="#D4145A"
                       gradientEnd="#00FFEE"
                       imageUrl="6.png"/>
)

export default Card12
