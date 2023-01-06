/** @jsx jsx */
import { jsx } from "theme-ui"
import { Card, Flex, Radio, Label, Slider, Button, Box } from 'theme-ui'

export const PickALuckyOptionPopup = () => {
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
                    <Flex>
                        <Label>
                            <Radio
                                name='lucky-option'
                                value='true'
                                defaultChecked={true}
                            />
                            Day
                        </Label>
                        <Label>
                            <Radio
                                name='lucky-option'
                                value='false'
                            />
                            Night
                        </Label>
                    </Flex>
                    <Flex>
                        <Box sx={{whiteSpace: 'nowrap', width: '300px'}}>Total contest entries</Box>
                        <Slider sx={{appearance: 'auto'}} defaultValue={10} />
                    </Flex>
                    <Button sx={{width: 'fit-content'}}>
                        Confirm
                    </Button>
                </Flex>
            </div>
        </div>
    )
}
