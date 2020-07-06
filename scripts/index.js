// Immediately invoked on load
// See: https://en.wikipedia.org/wiki/Immediately_invoked_function_expression
;(function() {
  // Use const instead of var for safety and proper scoping
  const quips = [
    'Part-time gamer boy',
    'Part-time only fans creator',
    'Part-time only fans supporter',
    'Part-time Android baby',
    'Full-time gamer boy who is looking for a gamer girl',
    'Full-time streamer that never streams',
    'Full-time iToddler',
    'Full-time fake plant watering service',
    'I will mail you swedish candy'
  ]

  const randomQuip = quips[Math.floor(Math.random() * quips.length)]

  document.getElementById('random').innerText = randomQuip
})()
