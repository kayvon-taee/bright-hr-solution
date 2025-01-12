
import mock from "../__mocks__/mock_data.json"
import {DocumentInterface} from "../utils/types/types.ts";
import renderFile from "./renderFiles.tsx";
import PairedDisplay from "./components/pairedDisplay.tsx";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
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
                                <PairedDisplay key={file.name} label={file.name}>
                                    <>
                                        <Typography data-testid="paired-display-date">{file.added}</Typography>
                                        <Typography data-testid="paired-display-date">{file.size} KB</Typography>
                                    </>
                                </PairedDisplay>
                            ))}
                        </AccordionDetails>
                        </Accordion>
                    );
                } else {
                    return renderFile(entry);
                }
            })}
        </>
    );
}

export default App
