function getRandomQuip() {
    var quips = [
        "Part-time only fans creator",
        "Part-time only fans supporter",
        "Full-time fake plant watering service",
        "I will mail you swedish candy",
    ]
    var quip_random = quips[Math.floor(Math.random() * quips.length)];
    document.getElementById("random").innerHTML = quip_random;
}
