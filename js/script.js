let seatCount = 0;
let totalPriceSum = 0;

const seatList = document.getElementsByClassName('seat-number');
for (let seat of seatList) {
    seat.addEventListener('click', function (event) {

        // ------- Seat left count
        const seatLeft = document.getElementById('seat-left').innerText;

        const seatLeftValue = parseInt(seatLeft);
        const seatAvailable = seatLeftValue - 1;
        setElementById('seat-left', seatAvailable);

        // ----- set the background color 
        event.target.classList.add('bg-green');
        event.target.classList.add('disabled');

        // -------- Ticket purches count
        const ticketPurches = document.getElementById('seat-purches-count').innerText;

        const ticketPurchesValue = parseInt(ticketPurches);
        const ticketPurchesCount = ticketPurchesValue + 1;
        setElementById('seat-purches-count', ticketPurchesCount);

        // --------- if four ticket purches then alert
        if (ticketPurches < 4) {
            addPurchesTicket(event);
        } else {
            alert("You have already four ticket Purches");

        }

        // ------ ticket limit
        if (ticketPurchesCount > 4) {
            event.target.classList.remove('bg-green');
        }

        // ------ there are no seat avaliable 
        if (seatAvailable < 0) {
            alert("No seat available Now!!");
        }
    });
}


// ----- set inner text value function
function setElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


// ------ use coupon code function
const btn = document.getElementById('apply-btn');
const couponBox = document.getElementById('coupon-box');
btn.addEventListener("click", function () {

    // get the value from input element
    const couponCode = document.getElementById("input-field").value;
    if (couponCode === 'New15') {
        const grandTotalElement = document.getElementById('grand-total');
        const grandTotalPrice = totalPriceSum;
        const discountPrice = totalPriceSum * 0.15;
        const grandTotal = grandTotalPrice - discountPrice;

        grandTotalElement.innerText = grandTotal;
        couponBox.style.visibility = "hidden";

    } else if (couponCode === 'Couple 20') {
        const grandTotalElement = document.getElementById('grand-total');
        const grandTotalPrice = totalPriceSum;
        const discountPrice = totalPriceSum * 0.2;
        const grandTotal = grandTotalPrice - discountPrice;

        grandTotalElement.innerText = grandTotal;
        couponBox.style.display = "none";
    }
    else {
        alert("Invalid Coupon");
    }
});
// apply button show if you use correct coupon code
document.getElementById('input-field').addEventListener('keyup', function (event) {
    const value = event.target.value;

    const applyButton = document.getElementById('apply-btn');
    if (value === 'New15' || value === 'Couple 20') {
        applyButton.removeAttribute('disabled');
    } else {
        applyButton.setAttribute('disabled', true)
    }
});


// ------ model popup
document.getElementById('btn-next').addEventListener('click', function () {
    const element = document.getElementById("success-model");
    element.classList.remove('hidden');
});

document.getElementById('continue-btn').addEventListener('click', function () {
    const element = document.getElementById("success-model");
    element.classList.add('hidden');
});


document.getElementById('number-field').addEventListener('keyup', function (event) {
    const value = event.target.value;
    const intValue = parseInt(value);

    const nextButton = document.getElementById('btn-next');
    if (Number.isInteger(intValue) && value.length >= 8) {
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.setAttribute('disabled', true)
    }
});


// add Ticket purches function;
function addPurchesTicket(event) {
    let seatName = event.target.innerText;

    const priceCard = document.querySelector('.ticket-purchase-card')

    // create Element
    const cardDiv = document.createElement('div');
    const seat = document.createElement('p');
    const price = document.createElement('p');
    const economy = document.createElement('p');

    // adding class name
    cardDiv.className = 'card';
    seat.className = 'heading';
    economy.className = 'economy';
    price.className = 'price';

    // set the innertext value
    seat.innerText = seatName;
    economy.innerText = "Economy";
    price.innerText = '550'

    priceCard.appendChild(cardDiv);
    cardDiv.appendChild(seat);
    cardDiv.appendChild(economy);
    cardDiv.appendChild(price);

    const totalPrice = parseInt(price.innerText);
    totalPriceSum += totalPrice;

    setElementById('total-price', totalPriceSum);
    setElementById('grand-total', totalPriceSum);
}





