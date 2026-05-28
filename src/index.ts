async function sleep(ms: number) {
    await new Promise(res => setTimeout(res, ms))
}

async function main() {
    let README_el = document.querySelector("*.markdown-body.entry-content.container-lg");

    let tries = 0;

    while (!README_el && tries++ < 10) {
        README_el = document.querySelector("*.markdown-body.entry-content.container-lg");
        await sleep(500);
    };

    if (!(tries > 9)) {
        console.log(README_el)
        throw "FUCK"
    }

    const route = document.URL.split("/").length - 3;
    const username = document.URL.split("/")[3];

    let css_el = document.createElement("style");
    css_el.id = "custom-readme-style-css";

    console.log(route);
    if (route == 1) {
        css_el.textContent = await (await fetch(`https://github.com/${username}/${username}/raw/HEAD/README.css`)).text();
        console.log("balls 1")
    } else if (route == 2 || route == 3 || route == 4) {
        const reponame = document.URL.split("/")[4];
        css_el.textContent = await (await fetch(`https://github.com/${username}/${reponame}/raw/HEAD/README.css`)).text();
        console.log("balls 2")
    } else if (route >= 5) {
        const reponame = document.URL.split("/")[4];
        const path = document.URL.split("/").splice(7).join("/");
        css_el.textContent = await (await fetch(`https://github.com/${username}/${reponame}/raw/HEAD/${path}/README.css`)).text();
        console.log("balls 3")
    }

    document.querySelector("#custom-readme-style-css")?.remove();
    document.head.appendChild(css_el);

    console.log("fuck this")
}

main();

window.addEventListener("hashchange", main);
window.addEventListener("popstate", main);