import { FormController } from "./components/Form/FormController.js";
import { LetterController } from "./components/Letter/LetterController.js"
import { Publisher } from "./helper/Publisher.js";

const publisher = new Publisher();
const form = new FormController(publisher.methods);
const letter = new LetterController(publisher.methods);