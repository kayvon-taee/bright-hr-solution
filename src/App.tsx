import './App.css'
import mock from "../__mocks__/mock_data.json"
import {DocumentInterface} from "../utils/types/types.ts";
import PairedDisplay from "./components/pairedDisplay.tsx";
import {Typography} from "@mui/material";
function App() {
    const data = mock as DocumentInterface
    return (
        <>
            {data.map(entry => {
                if (entry.type === "folder" && "files" in entry) {
                    entry.files.map(file => (
                        <PairedDisplay label={file.name} key={file.name}>
                            <>
                                <Typography data-testid="paired-display-date">{file.added}</Typography>
                                <Typography data-testid="paired-display-date">{file.size} KB</Typography>
                            </>
                        </PairedDisplay>
                    ))
                }
            })}
        </>
    )
}

export default App
