function getRandomQuip() {
    var quips = [
        "Part-time gamer boy",
        "Part-time only fans creator",
        "Part-time only fans supporter",
        "Part-time Android baby",
        "Full-time gamer boy who is looking for a gamer girl",
        "Full-time streamer that never streams",
        "Full-time iToddler",
        "Full-time Professional regret master",
        "Full-time fake plant watering service"
    ]
    var quip_random = quips[Math.floor(Math.random() * quips.length)];
    document.getElementById("random").innerHTML = quip_random;
}