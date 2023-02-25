function subitAtClick(num) {
    // var ident = document.getElementById("showSubit");
    // console.log(ident);
    // console.log(ident.childNodes[num * 6 - 3]);
    // console.log(document.getElementById("subit-" + num).textContent);

    // this gets the text content
    var content = document.getElementById("subit-" + num).textContent;

    // content gets split by "."
    var arrContent = content.split("+");
    const tagContent = arrContent;

    function brAppend(item, i, arr) {
        arr[i] = item + "<br>";
    }

    arrContent.forEach(brAppend);

    var rawContent = arrContent.toString();
    var commaOut = rawContent.replaceAll(",", "");

    // console.log(content);
    // console.log(arrContent);
    // console.log(rawContent);
    // console.log(commaOut);

    // show the text content in a div
    document.getElementById("showContent").innerHTML = commaOut;

    // let s = document.querySelector("p");
    // console.log(s);
    // s.innerHTML(content);

    // descAtHover(tagContent);
    return tagContent;
}

function showDescAtHover(tag) {
    // this function now executes ON CLICK
    const desc = tag;
    console.log("hello");

    var identTag = document.getElementById("showContent").getElementsByTagName("a");
    // console.log(identTag);

    const aTagArr = [identTag.length];
    for (let i = 0; i < identTag.length; i++) {
        aTagArr[i] = identTag[i].childNodes[0].textContent.replaceAll("\n", "").replaceAll(" ", ""); // add replace single apostrophe if it causes issues
        if (aTagArr[i].toString().includes(desc)) {
            document.getElementById("showDesc").innerHTML = modDesc.get(desc);
        }
    }

    console.log(identTag);
    console.log(aTagArr);
    console.log(desc);
}

function stayinAlive(num) {
    const nBtn = []; // there are only 12 individual mod menus
    for (let i = 0; i < 12; i++) {
        nBtn[i] = i + 1;
    }
    // console.log(nBtn); // 1, 2, 3, ..., 12

    // var identTag = document.getElementById("showContent").getElementsByTagName("a");

    for (let i = 0; i < nBtn.length; i++) {
        document.getElementById("mod-list-btn-" + nBtn[i]).getElementsByTagName("button")[0].dataset.active = "false";
        if (nBtn[i] == num) {
            document.getElementById("mod-list-btn-" + num).getElementsByTagName("button")[0].dataset.active = "true";
        }
    }

    // console.log(ident);
    // console.log(ident.dataset.active); // = false (String)
    // console.log(ident.dataset.active);

    // console.log(ident.dataset.active);
    // if (ident.dataset.active == "false") {
    //     ident.dataset.active = "true";
    // } else {
    //     ident.dataset.active = "false";
    // }
}

function show(num) {
    const nTog = [];
    for (let i = 0; i < 10; i++) {
        // increase upper limit later after preliminal testing
        nTog[i] = i + 1;
    }

    if (document.getElementById("content-" + num).hidden == true) {
        for (let i = 0; i < nTog.length; i++) {
            document.getElementById("toggle-" + nTog[i]).innerHTML = "Expand";
            document.getElementById("content-" + nTog[i]).hidden = true;
            if (nTog[i] == num) {
                document.getElementById("content-" + num).hidden = false;
                document.getElementById("toggle-" + num).innerHTML = "Collapse";
            }
        }
        return;
    }
    if (document.getElementById("content-" + num).hidden == false) {
        document.getElementById("content-" + num).hidden = true;
        document.getElementById("toggle-" + num).innerHTML = "Expand";
        return;
    }

    // console.log(document.getElementById("toggle-" + num).dataset.collapsed);
    // console.log(document.getElementById("content-" + num).hidden);
    // if (document.getElementById("toggle-" + num).dataset.collapsed == "true") {
    //     for (let i = 0; i < nTog.length; i++) {
    //         document.getElementById("toggle-" + nTog[i]).dataset.collapsed = "true";
    //         document.getElementById("toggle-" + nTog[i]).innerHTML = "Expand";
    //         document.getElementById("content-" + nTog[i]).hidden = true;
    //         if (nTog[i] == num) {
    //             document.getElementById("toggle-" + num).dataset.collapsed = "false";
    //             document.getElementById("content-" + num).hidden = false;
    //             document.getElementById("toggle-" + num).innerHTML = "Collapse";
    //             console.log(document.getElementById("content-" + num).hidden);
    //         }
    //     }
    //     return;
    // }
    // if (document.getElementById("toggle-" + num).dataset.collapsed == "false") {
    //     document.getElementById("content-" + num).innerHTML = "";
    //     document.getElementById("toggle-" + num).dataset.collapsed = "true";
    //     document.getElementById("toggle-" + num).innerHTML = "Expand";
    //     return;
    // }
}

function unshowAch() {
    document.getElementById("hooray").classList.remove("translate-x-0");
    document.getElementById("hooray").classList.add("translate-x-full");
}

function showAch() {
    // console.log(document.getElementById("hooray").classList);
    document.getElementById("hooray").classList.remove("translate-x-full");
    document.getElementById("hooray").classList.add("translate-x-0");

    setTimeout(unshowAch, 5000);
}

// STATIC desc map
const modDesc = new Map();

modDesc.set("Comforts", "urmom");
modDesc.set("End", "urmom");
modDesc.set("Immersive", "urmom");
modDesc.set("Lootr", "urmom");
modDesc.set("Paraglider", "urmom");

modDesc.set("Second", "urmom");
modDesc.set("Signpost", "urmom");
modDesc.set("Lost", "urmom");
modDesc.set("Waystones", "urmom");
modDesc.set("Arise", "urmom");

modDesc.set("Yung", "urmom");
modDesc.set("Atmospheric", "urmom");
modDesc.set("Autumnity", "urmom");
modDesc.set("Plenty", "urmom");
modDesc.set("Ecologics", "urmom");

modDesc.set("Mushrooms", "urmom");
modDesc.set("Aquatic", "urmom");
modDesc.set("Cooking", "urmom");
modDesc.set("Foodstuffs", "urmom");
modDesc.set("Farmer", "urmom");

modDesc.set("Incubation", "urmom");
modDesc.set("Harvestcraft", "urmom");
modDesc.set("Architect", "urmom");
modDesc.set("Deco", "urmom");
modDesc.set("Decorative", "urmom");

modDesc.set("FramedBlocks", "urmom");
modDesc.set("Macaw", "urmom");
modDesc.set("Furniture", "urmom");
modDesc.set("Sweet", "urmom");
modDesc.set("Create", "urmom");

modDesc.set("Hostile", "urmom");
modDesc.set("Mekanism", "urmom");
modDesc.set("Grinding", "urmom");
modDesc.set("Thermal", "urmom");
modDesc.set("Tinkers", "urmom");

modDesc.set("Tombstone", "urmom");
modDesc.set("Forbidden", "urmom");
modDesc.set("Magick", "urmom");
modDesc.set("Applied", "urmom");
modDesc.set("Ender", "urmom");

modDesc.set("Sophisticated", "urmom");
modDesc.set("Storage", "urmom");
modDesc.set("Traveller", "urmom");
modDesc.set("Woodcutter", "urmom");
modDesc.set("Cosmetic", "urmom");

modDesc.set("Ding", "urmom");
modDesc.set("Sound", "urmom");
modDesc.set("FastLeafDecay", "urmom");
modDesc.set("GoProne", "urmom");
modDesc.set("Interoperability", "urmom");

modDesc.set("Polymorph", "urmom");
modDesc.set("Quark", "urmom");
modDesc.set("Screenshot", "urmom");
modDesc.set("Supplementaries", "urmom");
modDesc.set("WindowLogging", "urmom");

modDesc.set("Easter", "urmom");
modDesc.set("Berry", "urmom");
modDesc.set("Buzzier", "urmom");
modDesc.set("Beacon", "urmom");
modDesc.set("Spark", "urmom");

modDesc.set("Torchmaster", "urmom");
modDesc.set("AppleSkin", "urmom");
modDesc.set("Controlling", "urmom");
modDesc.set("Just", "urmom");
modDesc.set("Light", "urmom");

modDesc.set("Mouse", "urmom");
modDesc.set("Neat", "urmom");
modDesc.set("Hell", "urmom");
modDesc.set("Xaero", "urmom");
modDesc.set("Better", "urmom");

modDesc.set("Dynamic", "urmom");
modDesc.set("Minor", "urmom");
modDesc.set("Oculus", "urmom");
modDesc.set("Unity", "urmom");
modDesc.set("Alternate", "urmom");

modDesc.set("Canary", "urmom");
modDesc.set("Clumps", "urmom");
modDesc.set("Get", "urmom");
modDesc.set("Pluton", "urmom");
modDesc.set("Radon", "urmom");

modDesc.set("Rubidium", "urmom");
modDesc.set("Saturn", "urmom");
