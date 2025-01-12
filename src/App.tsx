
import mock from "../__mocks__/mock_data.json"
import {DocumentInterface} from "../utils/types/types.ts";
import renderFile from "./renderFiles.tsx";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Autocomplete,
    Box,
    TextField,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import extractNames from "./utils/extractNames.ts";
import {useEffect, useState} from "react";

function App() {
    const data = mock as DocumentInterface
    const [selectedOption, setSelectedOption] = useState('')
    const [filteredData, setFilteredData] = useState(data);
    const extractedNames = extractNames(data)

    // useEffect(() => {
    //     data.filter()
    // },[selectedOption])

    return (
        <>
            <Autocomplete options={extractedNames} sx={{ width: 300}} renderInput={(params) => <TextField {...params} label={"File name"}  onChange={(event, newValue) => setSelectedOption(newValue || '')}/>} />
            {data.map((entry) => {
                if ("files" in entry) {
                    return (
                        <Accordion data-testid={"folder-accordion"}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                data-testid={"folder-accordion-summary"}
                            >
                                <Typography component="span">{entry.name}</Typography>
                            </AccordionSummary>
                        <AccordionDetails>
                            {entry.files.map((file) => (
                                renderFile(file)
                            ))}
                        </AccordionDetails>
                        </Accordion>
                    );
                } else {
                    return (
                        <Box sx={{
                            padding: '16px'
                        }}>
                            {renderFile(entry)}
                        </Box>
                    )
                }
            })}
        </>
    );
}

export default App
