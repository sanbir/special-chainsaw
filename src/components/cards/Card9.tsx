/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card9 = () => (
    <CustomContestCard contestType="Multiple Winners"
                       countdown={
                           <Countdown tag="9" period={getPeriod(5)}/>
                       }
                       prizeInKUSD={5}
                       gradientStart="#00FFEE"
                       gradientEnd="#FBB03B"
                       imageUrl="2.png"/>
)

export default Card9
