
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

function App() {
    const data = mock as DocumentInterface
    return (
        <>
            <Autocomplete options={data} sx={{ width: 300}} renderInput={(params) => <TextField {...params} label={"File name"} />} />
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
