/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card8 = () => (
    <CustomContestCard contestType="Multiple Winners"
                       countdown="3d"
                       prizeInKUSD={2}
                       gradientStart="#FCEE21"
                       gradientEnd="#D585FF"
                       imageUrl="1.png"/>
)

export default Card8
