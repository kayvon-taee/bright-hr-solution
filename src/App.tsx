
import mock from "../__mocks__/mock_data.json"
import {DocumentInterface} from "../utils/types/types.ts";
import renderFile from "./renderFiles.tsx";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
    const data = mock as DocumentInterface
    return (
        <>
            {data.map((entry) => {
                if ("files" in entry) {
                    return (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
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
