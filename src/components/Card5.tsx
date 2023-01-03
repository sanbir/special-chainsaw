/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card5 = () => (
    <CustomContestCard contestType="Ranked Winners"
                       countdown="10d"
                       prizeInKUSD={10}
                       gradientStart="#ED1E79"
                       gradientEnd="#FBB03B"
                       imageUrl="5.png"/>
)

export default Card5
