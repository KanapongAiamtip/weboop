const jokes = [
  '\'Siri, why am I still single?!\' *Siri activates front camera.*',
  'I don’t have a carbon footprint. I just drive everywhere.',
  'What did the asteroid that killed the dinosaurs say? \'T. rex, I\'m coming for my hug!\'',
  'What does my dad have in common with Nemo? They both can’t be found.',
  'Tombstone engraving: I TOLD you I was sick.',
  `It's important to have a good vocabulary. If I had known the difference between the
  words 'antidote' and “anecdote,” one of my best friends would still be alive.`,
  'My husband is mad that I have no sense of direction. So I packed up my stuff and right.',
  'You know you’re not liked when you get handed the camera every time they take a group photo.',
  'My parents raised me as an only child, which really pissed off my brother.',
  'I have a stepladder because my real ladder left when I was just a kid.',
  'The most corrupt CEOs are those of the pretzel companies. They\'re always so twisted.'
]

const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]

console.log(`
  ${randomJoke}
             __
            /(\`o
      ,-,  //  \\\\
     (,,,) ||   V
    (,,,,)\\//
    (,,, /w)-'
    \\,, /w)
     \`V/uu
       / |
       | |
       o o
       \\ |
   \\,/ ,\\|,. \\,/
`)
