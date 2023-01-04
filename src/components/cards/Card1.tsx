/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card1 = () => (
    <CustomContestCard contestType="Solo Winner"
                       countdown={
                           <Countdown tag="1" period={getPeriod(2)}/>
                       }
                       prizeInKUSD={1}
                       gradientStart="#D4145A"
                       gradientEnd="#FBB03B"
                       imageUrl="1.png"/>
)

export default Card1
