import { Grid } from "@theme-ui/components"
// @ts-ignore
import React from "react";
import {Game} from "../domain/Game";
import CustomContestCard from "./CustomContestCard";
import Countdown from "./Countdown";
import {getPeriod} from "../utils/getPeriod";

const colors: string[] = [
    "#D4145A",
    "#FBB03B",
    "#662D8C",
    "#ED1E79",
    "#009245",
    "#FCEE21",
    "#D585FF",
    "#00FFEE"
]

const games: Game[] = [
    {contestType: "Solo Winner", choices: ['Day', 'Night'], days: 2, prizeInKUSD: 1},
    {contestType: "Solo Winner", choices: ['Mon', 'Wed', 'Fri'], days: 5, prizeInKUSD: 5},
    {contestType: "Solo Winner", choices: ['3', '5', '9', '13'], days: 10, prizeInKUSD: 10},
    {contestType: "Ranked Winners", choices: ['black', 'white'], days: 7, prizeInKUSD: 2},
    {contestType: "Ranked Winners", choices: ['apple', 'orange', 'banana'], days: 10, prizeInKUSD: 10},

    {contestType: "Ranked Winners", choices: ['cat', 'dog', 'lion', 'horse'], days: 4, prizeInKUSD: 5},
    {contestType: "Multiple Winners", choices: ['head', 'tail'], days: 1, prizeInKUSD: 1},
    {contestType: "Multiple Winners", choices: ['red', 'blue', 'yellow'], days: 3, prizeInKUSD: 2},
    {contestType: "Multiple Winners", choices: ['Mon', 'Wed', 'Fri', 'Sun'], days: 5, prizeInKUSD: 5},
    {contestType: "League Winners", choices: ['Alex', 'Tom'], days: 5, prizeInKUSD: 2},

    {contestType: "League Winners", choices: ['Max', 'Tom', 'Jack'], days: 2, prizeInKUSD: 10},
    {contestType: "League Winners", choices: ['Sam', 'Alex', 'Tom', 'Bob'], days: 12, prizeInKUSD: 5},
    {contestType: "League Winners", choices: ['Alex', 'Tom', 'Jason', 'Jim', 'Rob'], days: 8, prizeInKUSD: 10},
]

export const TopLevelGrid = () => (
    <Grid sx={{gap: '4rem', gridTemplateColumns: '1fr', gridColumn: '1 / span 2', marginBottom: '-1500px'}}>
        {games.map((g, index) => (
            <CustomContestCard contestType={g.contestType}
                               choices={g.choices}
                               countdown={
                                   <Countdown tag={index.toString()}
                                              period={getPeriod(g.days)}/>
                               }
                               prizeInKUSD={g.prizeInKUSD}
                               gradientStart={colors[index % 8]}
                               gradientEnd={colors[index % 7 + 1]}
                               imageUrl={`${index % 6 + 1}.png`}/>
        ))
        }
    </Grid>
)
