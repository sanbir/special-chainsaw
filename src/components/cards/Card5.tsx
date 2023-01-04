/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "../CustomContestCard";
import Countdown from "../Countdown";
import {getPeriod} from "../../utils/getPeriod";

const Card5 = () => (
    <CustomContestCard contestType="Ranked Winners"
                       countdown={
                           <Countdown tag="5" period={getPeriod(10)}/>
                       }
                       prizeInKUSD={10}
                       gradientStart="#ED1E79"
                       gradientEnd="#FBB03B"
                       imageUrl="5.png"/>
)

export default Card5
