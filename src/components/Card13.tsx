/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card13 = () => (
    <CustomContestCard contestType="League Winners"
                       countdown="8d"
                       prizeInKUSD={10}
                       gradientStart="#662D8C"
                       gradientEnd="#FCEE21"
                       imageUrl="1.png"/>
)

export default Card13
