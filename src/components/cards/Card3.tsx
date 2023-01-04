/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card3 = () => (
    <CustomContestCard contestType="Solo Winner"
                       countdown={
                           <Countdown tag="3" period={getPeriod(10)}/>
                       }
                       prizeInKUSD={10}
                       gradientStart="#009245"
                       gradientEnd="#FCEE21"
                       imageUrl="3.png"/>
)

export default Card3
