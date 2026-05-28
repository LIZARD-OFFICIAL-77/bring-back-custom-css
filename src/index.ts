import axios from "axios";

if (document.querySelector("*.markdown-body.entry-content.container-lg")) {
    console.log(await axios.get(`${document.URL}/raw/HEAD/README.md`))
}