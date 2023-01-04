/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card7 = () => (
    <CustomContestCard contestType="Multiple Winners"
                       countdown={
                           <Countdown tag="7" period={getPeriod(1)}/>
                       }
                       prizeInKUSD={1}
                       gradientStart="#D4145A"
                       gradientEnd="#FBB03B"
                       imageUrl="1.png"/>
)

export default Card7
