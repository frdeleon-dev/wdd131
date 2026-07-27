document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;


const mainNav = document.querySelector("nav");
const hamburgerButton = document.querySelector("#menu");


if (hamburgerButton) {
    hamburgerButton.textContent = "☰";


    hamburgerButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");
        hamburgerButton.classList.toggle("open");


        if (hamburgerButton.classList.contains("open")) {
            hamburgerButton.textContent = "❌";
        } else {
            hamburgerButton.textContent = "☰";
        }
    });
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Guatemala City Guatemala",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14",
        area: 11610,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-68580-thumb.jpg"
    },
    {
        templeName: "Huehuetenango Guatemala",
        location: "Huehuetenango Guatemala",
        dedicated: "2026, March, 14",
        area: 10787,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/huehuetenango-guatemala-temple/huehuetenango-guatemala-temple-48801-main.jpg"
    },
    {
        templeName: "Cobán, Guatemala",
        location: "Cobán, Guatemala",
        dedicated: "2024, June, 09",
        area: 8772,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-47554-thumb.jpg"
    }
];

const home = document.querySelector("#home");
const large = document.querySelector("#large");
const small = document.querySelector("#small");
const old = document.querySelector("#old");
const newTemplesButton = document.querySelector("#new");


function createTempleCard(templeList) {
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";

    templeList.forEach(temple => {
        const card = document.createElement("figure");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");
        const caption = document.createElement("figcaption");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        caption.appendChild(name);
        caption.appendChild(location);
        caption.appendChild(dedication);
        caption.appendChild(area);

        card.appendChild(img);
        card.appendChild(caption);
        grid.appendChild(card);

    })
    
}

createTempleCard(temples);

home.addEventListener("click", () => {
    createTempleCard(temples);
});

large.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
});

small.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
});

old.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
    const year = Number(temple.dedicated.split(",")[0]);

    return year < 1900;
    
    });
    createTempleCard(oldTemples);

});
newTemplesButton.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year > 2000;
        
    });
    createTempleCard(newTemples);
});