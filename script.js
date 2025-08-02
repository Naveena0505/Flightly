// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Fake Booking Confirmation & Modal
    const flightBookingForm = document.getElementById('flight-booking-form');
    if (flightBookingForm) {
        flightBookingForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            const departure = document.getElementById('departure').selectedOptions[0].textContent; // Get full text
            const arrival = document.getElementById('arrival').selectedOptions[0].textContent; // Get full text
            const flightClass = document.getElementById('class').selectedOptions[0].textContent;
            const airlineBrand = document.getElementById('airline-brand').selectedOptions[0].textContent;

            const confirmationMessage = `
                <h2>🎉 Flight Confirmed! (In Your Head) 🎉</h2>
                <p>You've successfully booked an imaginary flight from:</p>
                <p><strong>${departure}</strong> <br>&darr; to <br> <strong>${arrival}</strong></p>
                <p>Class: <strong>${flightClass}</strong></p>
                <p>Airline: <strong>${airlineBrand}</strong></p>
                <p>Departure: TBD (Time-Based Delusion)</p>
                <p>Arrival: Also TBD (Might be never. Probably never.)</p>
                <p>Baggage Allowance: Still **0g**! (Your emotional baggage has been silently judged).</p>
                <p>Prepare for an adventure that exists only in your wildest dreams!</p>
                <p class="note">"This confirmation does not guarantee actual flight or existence. Your imagination is your only pilot. Don't look for us at the airport."</p>
            `;

            showFakeModal(confirmationMessage);
        });
    }

    function showFakeModal(content) {
        let modal = document.querySelector('.fake-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.classList.add('fake-modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <div id="modal-body"></div>
                </div>
            `;
            document.body.appendChild(modal);

            modal.querySelector('.close-button').addEventListener('click', () => {
                modal.style.display = 'none';
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }

        document.getElementById('modal-body').innerHTML = content;
        modal.style.display = 'flex'; // Use flex to center
    }


    // 2. Random Airline Brand Generator
    const airlineBrands = [
        "Paper India", "Foldmal Airlines", "Crumplenix", "JetMolam",
        "RollAir", "Skypaste Airlines", "TuckGo", "PaprikaFly", "GlueLines", "Soarjee",
        "AeroGum", "Staple Airways", "InkJet Fly", "Cardboard Connect"
    ];
    const airlineBrandSelect = document.getElementById('airline-brand');

    if (airlineBrandSelect) {
        // Populate dropdown with initial options
        airlineBrands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand.toLowerCase().replace(/ /g, '-');
            option.textContent = brand;
            airlineBrandSelect.appendChild(option);
        });

        // Add an "Easter Egg" option to re-randomize
        const randomOption = document.createElement('option');
        randomOption.value = 'random';
        randomOption.textContent = '🎲 Surprise Me! (Random Airline)';
        airlineBrandSelect.appendChild(randomOption);

        airlineBrandSelect.addEventListener('change', () => {
            if (airlineBrandSelect.value === 'random') {
                const randomIndex = Math.floor(Math.random() * airlineBrands.length);
                const randomBrand = airlineBrands[randomIndex];
                // Set the value and text content of the select element
                airlineBrandSelect.value = randomBrand.toLowerCase().replace(/ /g, '-');
                // You might need to directly change the selected option for it to display correctly
                Array.from(airlineBrandSelect.options).forEach(opt => {
                    if (opt.value === airlineBrandSelect.value) {
                        opt.selected = true;
                    } else {
                        opt.selected = false;
                    }
                });
                alert(`Your flight will be with: ${randomBrand}! Prepare for maximum absurdity.`);
            }
        });
    }

    // 3. Generate PDF Boarding Pass (Fake)
    const generateBoardingPassBtn = document.getElementById('generate-boarding-pass');
    const boardingPassPreview = document.getElementById('boarding-pass-preview');

    if (generateBoardingPassBtn && boardingPassPreview) {
        generateBoardingPassBtn.addEventListener('click', () => {
            const passengerName = "Imaginary Traveler M.C."; // Hardcoded for this fake site
            const flightNumber = `LP-${Math.floor(100 + Math.random() * 900)}`; // Random flight number
            const gate = `Gate ${Math.floor(Math.random() * 100) + 1} &frac34;`; // Random gate with humor
            const seat = `Seat ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 50) + 1}`;
            const departureTime = "Somewhen (or Never-Thirty)";
            const boardingGroup = "Group ∞ (Infinite Delay Potential)";
            const classType = document.getElementById('class').selectedOptions[0].textContent; // Use selected class

            const boardingPassHtml = `
                <h3>&#9992; LAUNCHPAD AIRLINES &#9992;</h3>
                <p><strong>BOARDING PASS: ADMIT ONE IMAGINATION</strong></p>
                <p>Passenger: <strong>${passengerName.toUpperCase()}</strong></p>
                <p>Flight: <strong>${flightNumber}</strong></p>
                <p>From: <strong>${document.getElementById('departure').selectedOptions[0].textContent.split('(')[0].trim()}</strong> &rarr; To: <strong>${document.getElementById('arrival').selectedOptions[0].textContent.split('(')[0].trim()}</strong></p>
                <p>Gate: <strong>${gate}</strong></p>
                <p>Seat: <strong>${seat}</strong></p>
                <p>Departure Time: <strong>${departureTime}</strong></p>
                <p>Boarding Group: <strong>${boardingGroup}</strong></p>
                <p>Class: <strong>${classType}</strong></p>
                <p class="note">"Note: This ticket does not cover emotional baggage, physical reality, or any form of common sense. Enjoy your flight into oblivion!"</p>
            `;

            boardingPassPreview.innerHTML = boardingPassHtml;
            boardingPassPreview.style.display = 'block'; // Show the preview

            // Simulate PDF download feedback
            setTimeout(() => {
                alert('Your highly anticipated, completely fake boarding pass has been generated! (No actual PDF download, sorry to disappoint your printer).');
            }, 500);
        });
    }

    // 4. Flight Insurance Add-on (Fake)
    const addInsuranceBtn = document.querySelector('.btn-add-on');
    if (addInsuranceBtn) {
        addInsuranceBtn.addEventListener('click', () => {
            alert('Excellent choice! You\'ve invested in our completely useless Flight Insurance. Your peace of mind is now guaranteed to be fictional. No refunds for common sense!');
        });
    }
});