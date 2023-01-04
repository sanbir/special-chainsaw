/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card8 = () => (
    <CustomContestCard contestType="Multiple Winners"
                       countdown={
                           <Countdown tag="8" period={getPeriod(3)}/>
                       }
                       prizeInKUSD={2}
                       gradientStart="#FCEE21"
                       gradientEnd="#D585FF"
                       imageUrl="1.png"/>
)

export default Card8
