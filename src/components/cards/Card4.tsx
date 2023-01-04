/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card4 = () => (
    <CustomContestCard contestType="Ranked Winners"
                       countdown={
                           <Countdown tag="4" period={getPeriod(7)}/>
                       }
                       prizeInKUSD={2}
                       gradientStart="#D585FF"
                       gradientEnd="#00FFEE"
                       imageUrl="4.png"/>
)

export default Card4
