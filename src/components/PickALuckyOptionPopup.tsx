/** @jsx jsx */
import { jsx } from "theme-ui"
import { Card, Flex, Radio, Label, Slider, Button, Box } from 'theme-ui'
import {useState} from "react";
import Popup from "reactjs-popup";
import {ConfirmPopup} from "./ConfirmPopup";

export const PickALuckyOptionPopup = ({prizeInKUSD, choices}:{
    prizeInKUSD: number
    choices: string[]
}) => {
    const [totalEntries, setTotalEntries] = useState(1);
    const [choiceSelected, setChoiceSelected] = useState(choices[0])

    return (
        <div sx={{
            width: `100%`,
            boxShadow: `lg`,
            position: `relative`,
            textDecoration: `none`,
            borderRadius: `lg`,
            px: 4,
            py: [4, 5],
            color: `white`,
            background: `linear-gradient(to right, #a0aec0 0%, #000000 100%)`,
            transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
            "&:hover": {
                color: `white !important`,
                transform: `translateY(-5px)`,
                boxShadow: `xl`,
            },
        }}>

            <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
                <Flex sx={{flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                    <div>Pick a lucky option</div>
                    <Flex sx={{gap:'1rem'}}>
                        {choices.map(ch => (
                            <Label>
                                <Radio
                                    name='lucky-option'
                                    value={ch}
                                    checked={choiceSelected === ch}
                                    onClick={() => setChoiceSelected(ch)}
                                />
                                {ch}
                            </Label>
                        ))
                        }
                    </Flex>
                    <Flex>
                        <Box sx={{whiteSpace: 'nowrap', width: '300px'}}>
                            Total contest entries
                        </Box>
                        <Flex sx={{flexDirection: 'column', width: '100%'}}>
                            <Slider sx={{appearance: 'auto'}}
                                    value={totalEntries}
                                    onChange={e => setTotalEntries(Number(e.target.value))}
                                    min={1}
                                    max={10}
                                    step={1} />
                            <Flex sx={{justifyContent: 'space-between'}}>
                                <Label>1</Label>
                                <Label sx={{width: 'fit-content'}}>10</Label>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Popup trigger={
                                <Button sx={{width: 'fit-content'}}>
                                    Confirm
                                </Button>
                            }
                           position="right center">

                        <ConfirmPopup choiceSelected={choiceSelected}
                                      totalEntries={totalEntries}
                                      totalCredit={prizeToCredit(prizeInKUSD) * totalEntries}/>
                    </Popup>
                </Flex>
            </div>
        </div>
    )
}

function prizeToCredit(prizeInKUSD: number) {
    switch (prizeInKUSD) {
        case 1:
            return 2;
        case 2:
            return 5;
        case 5:
            return 10;
        case 10:
            return 10;
        default:
            return 1;
    }
}
