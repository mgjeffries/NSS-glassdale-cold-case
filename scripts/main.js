import { listCriminals } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from "./notes/NoteForm.js";
import './notes/NoteList.js';
import { ViewNotesButton } from './notes/viewNotes.js';
import './criminals/ListAssociates.js'

listCriminals()
ConvictionSelect()
OfficerSelect()
NoteForm()
ViewNotesButton()
