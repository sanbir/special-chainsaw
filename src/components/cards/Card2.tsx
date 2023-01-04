/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card2 = () => (
    <CustomContestCard contestType="Solo Winner"
                       countdown={
                           <Countdown tag="2" period={getPeriod(5)}/>
                       }
                       prizeInKUSD={5}
                       gradientStart="#662D8C"
                       gradientEnd="#ED1E79"
                       imageUrl="2.png"/>
)

export default Card2
