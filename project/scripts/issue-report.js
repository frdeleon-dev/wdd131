const form = document.querySelector("#issue-form");
const formMessage = document.querySelector("#form-message");
const issueType = document.querySelector("#issue-type");
const reportsContainer = document.querySelector("#reports-container");


const issueTypes = [
    {
        value: "water",
        name: "Water Supply"
    },
    {
        value: "security",
        name: "Security"
    },
    {
        value: "maintenance",
        name: "Maintenance"
    },
    {
        value: "cleaning",
        name: "Cleaning"
    },
    {
        value: "other",
        name: "Other"
    }
];


let reports = JSON.parse(
    localStorage.getItem("neighborhoodReports")
) || [];


function createIssueOptions() {

    issueTypes.forEach((issue) => {

        const option = document.createElement("option");

        option.value = issue.value;
        option.textContent = issue.name;

        issueType.appendChild(option);
    });
}

function handleSubmit(event) {

    event.preventDefault();

    const name = document.querySelector("#full-name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const selectedIssue = issueType.value;
    const location = document.querySelector("#location").value.trim();
    const description = document.querySelector("#description").value.trim();



    if (!name || !email || !selectedIssue || !location || !description) {

        formMessage.innerHTML = `
            <p class="error-message">Please complete all required fields.</p>
        `;

        return;
    }


    const report = {
        id: Date.now(),
        name: name,
        email: email,
        issueType: selectedIssue,
        location: location,
        description: description,
        date: new Date().toLocaleDateString(),
        status: "Received"
    };

    reports.push(report);

    localStorage.setItem(
        "neighborhoodReports",
        JSON.stringify(reports)
    );

    showConfirmation(report);

    displayReports();

    form.reset();
}

function showConfirmation(report) {

    const issue = issueTypes.find(
        (item) => item.value === report.issueType
    );

    formMessage.innerHTML = `
        <div class="success-message">
            <h3>Report Submitted Successfully!</h3>
            <p>Thank you, ${report.name}.</p>
            <p>Your report about<strong>${issue.name}</strong>has been received.</p>
        </div>
    `;
}


function displayReports() {

    if (reports.length === 0) {

        reportsContainer.innerHTML = `
            <p>
                You have not submitted any reports yet.
            </p>
        `;

        return;
    }


    reportsContainer.innerHTML = reports.map((report) => {

        const issue = issueTypes.find(
            (item) => item.value === report.issueType
        );

        return `
            <article class="report-item">

                <h4>${issue.name}</h4>
                <p><strong>Location:</strong>${report.location}</p>
                <p><strong>Date:</strong>${report.date}</p>
                <p><strong>Status:</strong>${report.status}</p>
                <hr>
            </article>
        `;

    }).join("");
}

form.addEventListener("submit", handleSubmit);

createIssueOptions();
displayReports();