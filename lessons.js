/* Lesson content for Learn, copied from the client POC (lumo-three-separate_5.html).
   COURSES[subject][i] is one course section: a slide and its questions for each level.
   Question types: mcq and tf (options, correct index), blank (sentence with a ___ gap, accepted answers)
   and order (items in the right order). */
const COURSES = {
  history: [
    {
      title: "The Gift of the Nile",
      slide: {"title":"The Gift of the Nile","text":"Egypt is mostly hot desert — yet one of history’s greatest civilisations grew here. The secret was the River Nile. Each summer it flooded and left a layer of rich black silt along its banks, creating narrow strips of fertile farmland. The Greek writer Herodotus called Egypt “the gift of the Nile.”","fact":"Egyptians split their world into the “Black Land” (fertile Nile soil) and the “Red Land” (the surrounding desert)."},
      q: {
        beginner: [
          {"type":"mcq","text":"What is the big river in Egypt called?","options":["The Nile","The sea","A lake","A pond"],"correct":0,"explanation":"The Nile is the big river. Its water helped plants and food grow."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Egypt is full of hot, sandy ___.","answers":["desert","sand"],"explanation":"Most of Egypt is desert — the Nile is the green strip through it."}
        ],
        elementary: [
          {"type":"mcq","text":"Which Greek writer called Egypt “the gift of the Nile”?","options":["Herodotus","Homer","Plato","Aristotle"],"correct":0,"explanation":"Herodotus gave Egypt that name because the Nile made farming possible in a desert."},
          {"type":"tf","text":"Egyptians called their fertile soil the “Black Land.”","options":["True","False"],"correct":0,"explanation":"True — Black Land for the dark fertile silt, Red Land for the desert."}
        ],
        middle: [
          {"type":"mcq","text":"Why was the Nile’s yearly flood — usually a disaster elsewhere — good news in Egypt?","options":["It left rich black silt that made the soil fertile","It cooled the air","It scared away enemies","It filled the pyramids"],"correct":0,"explanation":"The flood deposited fertile silt each summer, turning desert banks into farmland."},
          {"type":"tf","text":"“Black Land” and “Red Land” described Egypt’s fertile soil and its desert.","options":["True","False"],"correct":0,"explanation":"True — a simple, powerful way Egyptians divided their world."}
        ],
        advanced: [
          {"type":"mcq","text":"Calling Egypt “the gift of the Nile” is a useful summary, but what does it risk overlooking?","options":["The human engineering of irrigation and administration","That the Nile existed at all","The role of the desert","The Greek language"],"correct":0,"explanation":"The phrase can understate the organised human labour — irrigation, record-keeping, the state — that turned flood into food."},
          {"type":"blank","text":"Fill in the missing name","sentence":"The historian who coined “the gift of the Nile” was ___.","answers":["Herodotus","herodotus"],"explanation":"Herodotus, writing in the 5th century BC, though modern historians read him critically."}
        ]
      }
    },
    {
      title: "The Two Lands",
      slide: {"title":"The Two Lands & Their Crowns","text":"For its earliest history Egypt was two separate kingdoms. Upper Egypt in the south wore the tall White Crown (the Hedjet); Lower Egypt in the north wore the Red Crown (the Deshret). It seems backwards until you realise the Nile flows north — so “upper” means upstream.","fact":"When the two lands were united, the pharaoh wore both crowns together as the double crown, the Pschent."},
      q: {
        beginner: [
          {"type":"mcq","text":"Long ago, how many lands was Egypt?","options":["Two","Ten","A hundred","Five"],"correct":0,"explanation":"Egypt was once TWO lands — a top part and a bottom part."},
          {"type":"tf","text":"The two crowns were white and red.","options":["True","False"],"correct":0,"explanation":"True! One crown was white, the other red. United, the king wore both."}
        ],
        elementary: [
          {"type":"mcq","text":"The tall White Crown (Hedjet) belonged to which part of Egypt?","options":["Upper Egypt (south)","Lower Egypt (north)","The desert","Nubia"],"correct":0,"explanation":"Upper Egypt wore the White Crown; Lower Egypt wore the Red Crown."},
          {"type":"blank","text":"Fill in the missing word","sentence":"United, the king wore the double crown called the ___.","answers":["Pschent","pschent"],"explanation":"The Pschent combined the White and Red crowns."}
        ],
        middle: [
          {"type":"mcq","text":"Why was the southern kingdom called “Upper” Egypt?","options":["The Nile flows north, so the south is upstream","It was on a mountain","It was hotter","It was larger"],"correct":0,"explanation":"“Upper” means upstream, and the Nile flows northward."},
          {"type":"blank","text":"Fill in the missing name","sentence":"The White Crown of the south was called the ___.","answers":["Hedjet","hedjet"],"explanation":"Hedjet = White Crown (Upper); Deshret = Red Crown (Lower)."}
        ],
        advanced: [
          {"type":"mcq","text":"The “two lands” idea outlived any real division. What does that suggest?","options":["Unification was a lasting ideological symbol, not just geography","Egypt was always at war","The crowns were meaningless","The Nile changed direction"],"correct":0,"explanation":"Pharaohs kept styling themselves lord of the Two Lands for millennia — duality was central to Egyptian kingship."},
          {"type":"tf","text":"“Upper Egypt” lay to the south because the Nile flows northward.","options":["True","False"],"correct":0,"explanation":"True — orientation follows the river’s flow, not the compass as we’d assume."}
        ]
      }
    },
    {
      title: "Narmer Unites Egypt",
      slide: {"title":"Narmer Unites Egypt","text":"Around 3100 BC a king named Narmer joined the two lands into one, becoming Egypt’s first pharaoh. We know him from a carved stone slab, the Narmer Palette, which shows him wearing both crowns and defeating his enemies.","fact":"“Pharaoh” became the word for Egypt’s king. Narmer’s unification began nearly 3,000 years of dynasties."},
      q: {
        beginner: [
          {"type":"mcq","text":"Who was Egypt’s very first pharaoh?","options":["Narmer","Tutankhamun","Cleopatra","Ramesses"],"correct":0,"explanation":"Narmer joined the two lands, so he became the first pharaoh."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Another word for an Egyptian king is ___.","answers":["pharaoh"],"explanation":"Pharaoh means king. Narmer was the first!"}
        ],
        elementary: [
          {"type":"mcq","text":"What does the Narmer Palette show?","options":["Narmer wearing both crowns","A shopping list","A map of Giza","A star chart"],"correct":0,"explanation":"The carved palette shows Narmer wearing both crowns — a record of uniting Egypt."},
          {"type":"tf","text":"Narmer joined the two lands into one kingdom.","options":["True","False"],"correct":0,"explanation":"True — around 3100 BC, beginning the dynastic age."}
        ],
        middle: [
          {"type":"mcq","text":"Roughly when did Narmer unite Upper and Lower Egypt?","options":["~3100 BC","~500 BC","~1500 AD","~10,000 BC"],"correct":0,"explanation":"Around 3100 BC — the start of the dynastic period."},
          {"type":"order","text":"Put these in order, earliest first","items":["Predynastic villages","Narmer unites Egypt","The pyramids are built","The New Kingdom empire"],"explanation":"Villages → unification (~3100 BC) → Old Kingdom pyramids → New Kingdom."}
        ],
        advanced: [
          {"type":"mcq","text":"Historians debate the Narmer Palette. Which reading is most cautious?","options":["A propaganda object symbolising unity, not a literal battle record","A photograph of one exact event","A child’s drawing","A modern forgery"],"correct":0,"explanation":"Many scholars read it as royal propaganda for unification rather than a snapshot of a single battle."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The Palette can be read as a record OR as royal ___.","answers":["propaganda"],"explanation":"Its purpose — documentation vs. political messaging — is genuinely contested."}
        ]
      }
    },
    {
      title: "The Age of Pyramids",
      slide: {"title":"The Age of Pyramids","text":"In the Old Kingdom, pharaohs built the great stone pyramids as tombs. The largest is the Great Pyramid at Giza, built for pharaoh Khufu around 2550 BC. It was the tallest structure on Earth for 3,800 years, raised by about 20,000 paid workers.","fact":"Archaeologists found the workers’ village near Giza — with bakeries and a clinic — proving they were paid labourers, not slaves."},
      q: {
        beginner: [
          {"type":"mcq","text":"What big stone buildings did the pharaohs make?","options":["Pyramids","Castles","Igloos","Treehouses"],"correct":0,"explanation":"They built giant pyramids from stone. The biggest is at Giza."},
          {"type":"tf","text":"The Great Pyramid is at Giza.","options":["True","False"],"correct":0,"explanation":"True! The biggest pyramid stands at Giza."}
        ],
        elementary: [
          {"type":"mcq","text":"Which pharaoh had the Great Pyramid built?","options":["Khufu","Narmer","Cleopatra","Ahmose"],"correct":0,"explanation":"Pharaoh Khufu, around 2550 BC."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Pyramids were built as ___ for the pharaohs.","answers":["tombs","tomb"],"explanation":"They were grand tombs to protect the pharaoh for the afterlife."}
        ],
        middle: [
          {"type":"mcq","text":"The Great Pyramid held the record for tallest structure on Earth for roughly how long?","options":["3,800 years","200 years","50 years","10,000 years"],"correct":0,"explanation":"About 3,800 years — until medieval cathedrals finally surpassed it."},
          {"type":"tf","text":"Evidence shows the pyramid workers were paid labourers, not slaves.","options":["True","False"],"correct":0,"explanation":"True — their village with bakeries and a clinic proves it."}
        ],
        advanced: [
          {"type":"mcq","text":"The “slaves built the pyramids” myth persisted largely because of what?","options":["Later classical and popular sources, not Egyptian evidence","Egyptian tomb records","The Rosetta Stone","Modern engineering studies"],"correct":0,"explanation":"Archaeology (the workers’ town) overturned a myth carried by later writers and popular culture."},
          {"type":"order","text":"Order these by date, earliest first","items":["Narmer unites Egypt","Great Pyramid built","New Kingdom empire","Cleopatra & Rome"],"explanation":"~3100 BC → ~2550 BC → New Kingdom → ~30 BC."}
        ]
      }
    },
    {
      title: "The Hyksos",
      slide: {"title":"The Hyksos & the Chariot","text":"For a time, people from another land — the Hyksos — ruled part of Egypt. They introduced the horse-drawn chariot and the composite bow. Eventually the Egyptian pharaoh Ahmose drove them out, and this victory began the New Kingdom, Egypt’s age of empire.","fact":"The Egyptians adopted the very chariots the Hyksos brought — and used them to build the largest empire Egypt ever had."},
      q: {
        beginner: [
          {"type":"mcq","text":"What new animal did the Hyksos bring to Egypt?","options":["Horses","Penguins","Elephants","Kangaroos"],"correct":0,"explanation":"They brought horses, which pulled chariots."},
          {"type":"tf","text":"A pharaoh named Ahmose chased the Hyksos away.","options":["True","False"],"correct":0,"explanation":"True! Ahmose drove them out and began the New Kingdom."}
        ],
        elementary: [
          {"type":"mcq","text":"The Hyksos are remembered for introducing what?","options":["Horse-drawn chariots","Paper money","Pottery wheels","Iron ships"],"correct":0,"explanation":"Chariots and the composite bow — later used by Egypt itself."},
          {"type":"blank","text":"Fill in the missing name","sentence":"The pharaoh who expelled the Hyksos was ___.","answers":["Ahmose","ahmose"],"explanation":"Ahmose’s victory began the New Kingdom."}
        ],
        middle: [
          {"type":"mcq","text":"Expelling the Hyksos led directly to which era?","options":["The New Kingdom (age of empire)","The Old Kingdom","The Stone Age","The Roman Empire"],"correct":0,"explanation":"Ahmose’s victory launched the New Kingdom, Egypt’s imperial peak."},
          {"type":"tf","text":"Egypt adopted the chariot technology the Hyksos had introduced.","options":["True","False"],"correct":0,"explanation":"True — and used it to expand its own empire."}
        ],
        advanced: [
          {"type":"mcq","text":"The Hyksos episode complicates a simple story of Egyptian isolation. Why?","options":["It shows Egypt absorbing foreign technology and people","It proves Egypt never traded","It shows chariots were Egyptian","It disproves the New Kingdom"],"correct":0,"explanation":"Cultural exchange — even via conquest — drove Egyptian innovation, challenging “pure” isolation narratives."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Ahmose’s expulsion of the Hyksos began the ___ Kingdom.","answers":["New","new"],"explanation":"The New Kingdom — Egypt’s age of empire and its most famous pharaohs."}
        ]
      }
    },
    {
      title: "Reading Hieroglyphs",
      slide: {"title":"Reading Hieroglyphs","text":"The Egyptians wrote with over 700 picture-symbols called hieroglyphs — an owl, an eye, water, a bird. For centuries no one could read them; the knowledge was lost. Then in 1822, using the Rosetta Stone (the same text in three scripts), scholars finally decoded them.","fact":"The Rosetta Stone carried the same decree in hieroglyphs, everyday Egyptian, and Greek — the Greek was the key that unlocked the rest."},
      q: {
        beginner: [
          {"type":"mcq","text":"Egyptian picture-writing is called ___.","options":["Hieroglyphs","Emojis","Numbers","Doodles"],"correct":0,"explanation":"Hieroglyphs are made of little pictures that together make words."},
          {"type":"tf","text":"A hieroglyph might be a picture of an owl or an eye.","options":["True","False"],"correct":0,"explanation":"True! Owls, eyes, birds and water were all symbols."}
        ],
        elementary: [
          {"type":"mcq","text":"What stone helped people finally read hieroglyphs?","options":["The Rosetta Stone","A pebble","The Moon","A ruby"],"correct":0,"explanation":"The Rosetta Stone had the same words in three scripts."},
          {"type":"blank","text":"Fill in the missing number","sentence":"The Rosetta Stone had the same words written ___ ways.","answers":["three","3"],"explanation":"Hieroglyphs, everyday Egyptian, and Greek."}
        ],
        middle: [
          {"type":"mcq","text":"Which script on the Rosetta Stone was the key to decoding the rest?","options":["Greek","Latin","Arabic","Chinese"],"correct":0,"explanation":"Scholars could already read Greek, so it unlocked the hieroglyphs."},
          {"type":"tf","text":"Hieroglyphs were decoded in 1822.","options":["True","False"],"correct":0,"explanation":"True — Champollion cracked the code that year."}
        ],
        advanced: [
          {"type":"blank","text":"Fill in the missing name","sentence":"Hieroglyphs were deciphered in 1822 by Jean-François ___.","answers":["Champollion","champollion"],"explanation":"Champollion used the Rosetta Stone’s Greek text to unlock the script."},
          {"type":"mcq","text":"Why did decipherment matter so much for studying Egypt?","options":["It let Egyptians’ own words be read, not just outsiders’ accounts","It proved Egypt was Greek","It dated the pyramids","It found Tutankhamun"],"correct":0,"explanation":"Reading primary Egyptian sources reduced reliance on later, often biased, foreign writers."}
        ]
      }
    }
  ],
  science: [
    {
      title: "States of Matter",
      slide: {"title":"Solid, Liquid, Gas","text":"Everything around you is made of matter, and matter comes in three everyday states: solid, liquid and gas. A solid holds its shape (a rock, an ice cube). A liquid flows and takes the shape of its container (water, juice). A gas spreads out to fill any space (the air, steam). Adding or removing heat can change one state into another.","fact":"Water is the only everyday substance you can easily see as all three states: ice (solid), water (liquid) and steam (gas)."},
      q: {
        beginner: [
          {"type":"mcq","text":"Which one is a solid?","options":["A rock","Water","Air","Steam"],"correct":0,"explanation":"A rock keeps its shape, so it is a solid."},
          {"type":"mcq","text":"Which one is a liquid?","options":["Milk","A brick","A balloon of air","A spoon"],"correct":0,"explanation":"Milk flows and pours, so it is a liquid."},
          {"type":"mcq","text":"Which one is a gas?","options":["The air","A rock","A book","An apple"],"correct":0,"explanation":"Air is a gas that spreads all around us."},
          {"type":"tf","text":"Water is a liquid.","options":["True","False"],"correct":0,"explanation":"True! Water flows and takes the shape of its cup."},
          {"type":"tf","text":"A rock is a solid.","options":["True","False"],"correct":0,"explanation":"True! A rock holds its shape."},
          {"type":"tf","text":"You can pour a solid brick like water.","options":["True","False"],"correct":1,"explanation":"False — a solid keeps its shape and cannot be poured."},
          {"type":"blank","text":"Fill in the missing word","sentence":"When water gets very cold it freezes into ___.","answers":["ice"],"explanation":"Cold turns liquid water into solid ice."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The three states of matter are solid, liquid and ___.","answers":["gas"],"explanation":"Solid, liquid and gas are the three everyday states."},
          {"type":"mcq","text":"Ice is water that is…","options":["Frozen solid","Boiling","A gas","On fire"],"correct":0,"explanation":"Ice is frozen, solid water."},
          {"type":"mcq","text":"Which can you pour into a cup?","options":["Juice","A rock","A pencil","A shoe"],"correct":0,"explanation":"Juice is a liquid, so you can pour it."},
          {"type":"tf","text":"Steam that rises from a hot drink is a gas.","options":["True","False"],"correct":0,"explanation":"True! Steam is water as a gas."},
          {"type":"mcq","text":"A solid…","options":["Keeps its shape","Always pours","Floats away","Disappears"],"correct":0,"explanation":"Solids keep their shape."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A ___ takes the shape of the cup you pour it into.","answers":["liquid"],"explanation":"Liquids take the shape of their container."},
          {"type":"mcq","text":"Which is NOT a liquid?","options":["A stone","Water","Juice","Milk"],"correct":0,"explanation":"A stone is a solid, not a liquid."},
          {"type":"tf","text":"Air fills up a balloon.","options":["True","False"],"correct":0,"explanation":"True — the gas (air) spreads to fill the balloon."},
          {"type":"mcq","text":"What makes ice melt into water?","options":["Getting warm","Getting colder","Music","The dark"],"correct":0,"explanation":"Warmth (heat) melts ice into water."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Warm heat can turn solid ice into ___ water.","answers":["liquid"],"explanation":"Melting turns solid ice into liquid water."},
          {"type":"tf","text":"A gas spreads out to fill the room.","options":["True","False"],"correct":0,"explanation":"True — gases spread out everywhere."},
          {"type":"mcq","text":"Which of these is a gas you breathe?","options":["Air","Water","Sand","Wood"],"correct":0,"explanation":"You breathe air, which is a gas."},
          {"type":"mcq","text":"A puddle dries up in the sun because the water…","options":["Turns into a gas","Turns to stone","Falls asleep","Gets bigger"],"correct":0,"explanation":"The Sun turns puddle water into a gas (vapour)."}
        ],
        elementary: [
          {"type":"mcq","text":"What do we call the state of matter that spreads to fill any space?","options":["A gas","A solid","A liquid","A metal"],"correct":0,"explanation":"A gas, like air, fills whatever container it is in."},
          {"type":"mcq","text":"What happens when you heat a solid enough?","options":["It can melt into a liquid","It turns to stone","It gets colder","Nothing happens"],"correct":0,"explanation":"Enough heat melts a solid into a liquid."},
          {"type":"blank","text":"Fill in the missing word","sentence":"When ice melts it turns from a solid into a ___.","answers":["liquid"],"explanation":"Melting: solid → liquid."},
          {"type":"mcq","text":"What is it called when a liquid turns into a gas?","options":["Evaporation","Freezing","Melting","Condensation"],"correct":0,"explanation":"Evaporation (or boiling) turns liquid into gas."},
          {"type":"tf","text":"Steam is water in its gas state.","options":["True","False"],"correct":0,"explanation":"True — boiling water produces steam, a gas."},
          {"type":"mcq","text":"What is it called when a liquid turns into a solid?","options":["Freezing","Melting","Boiling","Evaporation"],"correct":0,"explanation":"Freezing: liquid → solid."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A liquid keeps the same volume but takes the ___ of its container.","answers":["shape"],"explanation":"Liquids have fixed volume, changing shape."},
          {"type":"mcq","text":"Which list is in order of a substance getting warmer?","options":["Solid → liquid → gas","Gas → liquid → solid","Liquid → solid → gas","Gas → solid → liquid"],"correct":0,"explanation":"Adding heat: solid melts, then liquid boils to gas."},
          {"type":"tf","text":"Freezing and melting happen at the same temperature for a given substance.","options":["True","False"],"correct":0,"explanation":"True — water’s freezing/melting point is 0°C."},
          {"type":"mcq","text":"At what temperature does water freeze?","options":["0°C","50°C","100°C","−10°C only"],"correct":0,"explanation":"Water freezes at 0°C."},
          {"type":"mcq","text":"At what temperature does water boil (at sea level)?","options":["100°C","0°C","50°C","200°C"],"correct":0,"explanation":"Water boils at 100°C at sea level."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Water vapour cooling into liquid droplets is called ___.","answers":["condensation"],"explanation":"Condensation: gas → liquid."},
          {"type":"tf","text":"A gas can be squashed into a smaller space more easily than a solid.","options":["True","False"],"correct":0,"explanation":"True — gases are easily compressed; solids barely at all."},
          {"type":"mcq","text":"Why does a liquid take the shape of its container?","options":["Its particles can move past each other","It is magnetic","It is alive","It has no particles"],"correct":0,"explanation":"Liquid particles flow around one another."},
          {"type":"mcq","text":"Which is an example of condensation?","options":["Dew forming on grass","Ice melting","A candle burning","A rock breaking"],"correct":0,"explanation":"Dew is water vapour condensing into liquid."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Heating a liquid until it rapidly becomes gas is called ___.","answers":["boiling"],"explanation":"Boiling is rapid evaporation throughout a liquid."},
          {"type":"tf","text":"When water freezes it takes up slightly more space (expands).","options":["True","False"],"correct":0,"explanation":"True — this is why ice floats and pipes can burst."},
          {"type":"mcq","text":"Which state has a fixed shape AND a fixed volume?","options":["Solid","Liquid","Gas","None"],"correct":0,"explanation":"Only solids keep both fixed shape and volume."},
          {"type":"mcq","text":"Which state has a fixed volume but no fixed shape?","options":["Liquid","Solid","Gas","Plasma"],"correct":0,"explanation":"Liquids keep volume but flow to any shape."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A gas has neither a fixed shape nor a fixed ___.","answers":["volume"],"explanation":"Gases expand to fill any space."}
        ],
        middle: [
          {"type":"mcq","text":"What is the main thing you change to turn a liquid into a gas?","options":["Add heat energy","Remove all light","Add colour","Make it heavier"],"correct":0,"explanation":"Heat gives particles energy to escape as gas."},
          {"type":"mcq","text":"Turning a gas back into a liquid is called what?","options":["Condensation","Melting","Freezing","Sublimation"],"correct":0,"explanation":"Cooling a gas condenses it to liquid."},
          {"type":"tf","text":"Particles in a solid still vibrate, even though they stay in fixed places.","options":["True","False"],"correct":0,"explanation":"True — they vibrate around fixed positions."},
          {"type":"mcq","text":"How are particles arranged in a solid?","options":["Packed closely in a regular pattern","Far apart and fast","Randomly spread out","They don’t exist"],"correct":0,"explanation":"Solid particles are tightly packed and orderly."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Turning a solid straight into a gas (like dry ice) is called ___.","answers":["sublimation"],"explanation":"Sublimation skips the liquid stage."},
          {"type":"mcq","text":"Why can gases be compressed but liquids barely can?","options":["Gas particles have large gaps between them","Gas is heavier","Liquids have no particles","Gases are colder"],"correct":0,"explanation":"Big gaps in a gas allow compression."},
          {"type":"tf","text":"During melting, temperature stays constant while the solid becomes liquid.","options":["True","False"],"correct":0,"explanation":"True — energy goes into breaking bonds, not raising temperature."},
          {"type":"mcq","text":"What happens to particle movement as you heat a substance?","options":["They move faster","They stop","They shrink","They vanish"],"correct":0,"explanation":"Heat increases particle kinetic energy and motion."},
          {"type":"order","text":"Order these as a substance gains more and more heat","items":["Solid","Liquid","Gas"],"explanation":"Adding heat: solid → liquid → gas."},
          {"type":"mcq","text":"Evaporation differs from boiling because evaporation…","options":["Happens only at the surface, at any temperature","Happens throughout, only when boiling","Needs no heat at all","Turns gas to solid"],"correct":0,"explanation":"Evaporation is surface-only and can occur below boiling point."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The energy that breaks bonds during a state change is called latent ___.","answers":["heat"],"explanation":"Latent heat changes state without changing temperature."},
          {"type":"tf","text":"Gas particles move in random directions at high speed.","options":["True","False"],"correct":0,"explanation":"True — rapid, random motion defines a gas."},
          {"type":"mcq","text":"Why does a smell spread across a room?","options":["Gas particles diffuse and mix with the air","The smell is magnetic","Liquids evaporate instantly","Solids melt"],"correct":0,"explanation":"Diffusion spreads gas particles through the air."},
          {"type":"mcq","text":"Which change releases energy to the surroundings?","options":["Freezing","Melting","Boiling","Evaporation"],"correct":0,"explanation":"Freezing releases energy as particles lock into place."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The regular, repeating arrangement of particles in many solids is called a ___.","answers":["lattice"],"explanation":"A lattice is an ordered particle structure."},
          {"type":"tf","text":"Water is unusual because its solid form is less dense than its liquid form.","options":["True","False"],"correct":0,"explanation":"True — ice floats because it is less dense than water."},
          {"type":"mcq","text":"What holds particles together in a solid?","options":["Forces of attraction between particles","Gravity alone","Nothing","Magnetism only"],"correct":0,"explanation":"Strong attractions hold solid particles in place."},
          {"type":"mcq","text":"When steam condenses on a cold window it…","options":["Turns from gas to liquid","Turns from liquid to gas","Freezes instantly","Sublimes"],"correct":0,"explanation":"Condensation: gas → liquid on the cold surface."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The model that explains states using moving particles is the ___ particle theory.","answers":["kinetic"],"explanation":"Kinetic particle theory links energy and motion to state."},
          {"type":"tf","text":"A substance keeps the same particles when it changes state — only their arrangement and energy change.","options":["True","False"],"correct":0,"explanation":"True — melting ice is still water, just rearranged."}
        ],
        advanced: [
          {"type":"mcq","text":"At the particle level, how does a gas differ from a solid?","options":["Its particles are far apart and move freely","Its particles are heavier","It has no particles","Its particles are locked in place"],"correct":0,"explanation":"Gas particles are widely spaced and move freely; solids vibrate in fixed positions."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Beyond the three everyday states, superheated ionised gas is called ___.","answers":["plasma"],"explanation":"Plasma — in stars and lightning — is a fourth state of matter."},
          {"type":"mcq","text":"Why does temperature stay constant during a change of state despite continued heating?","options":["Energy goes into breaking intermolecular bonds, not raising kinetic energy","The thermometer breaks","Heat stops flowing","Particles disappear"],"correct":0,"explanation":"Latent heat is absorbed to overcome forces between particles."},
          {"type":"mcq","text":"Which correctly describes sublimation and its reverse?","options":["Solid↔gas directly, skipping liquid (reverse is deposition)","Liquid↔gas","Solid↔liquid","Gas↔plasma"],"correct":0,"explanation":"Sublimation is solid→gas; deposition is gas→solid."},
          {"type":"tf","text":"Boiling point depends on the surrounding pressure.","options":["True","False"],"correct":0,"explanation":"True — lower pressure (e.g. high altitude) lowers boiling point."},
          {"type":"mcq","text":"Water boils below 100°C on a high mountain because…","options":["Atmospheric pressure is lower there","It is colder","There is less water","Gravity is stronger"],"correct":0,"explanation":"Lower pressure lets particles escape at a lower temperature."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The energy needed to turn a liquid to gas without a temperature rise is the latent heat of ___.","answers":["vaporisation","vaporization"],"explanation":"Latent heat of vaporisation breaks the remaining bonds."},
          {"type":"mcq","text":"Why is ice less dense than liquid water?","options":["Hydrogen bonds hold molecules in an open lattice","Ice has fewer molecules","Ice is warmer","Ice contains air only"],"correct":0,"explanation":"The open hydrogen-bonded lattice spaces molecules further apart."},
          {"type":"tf","text":"A common misconception is that particles themselves expand when heated; in fact they move faster and spread apart.","options":["True","False"],"correct":0,"explanation":"True — particles gain energy and separate; they don’t grow."},
          {"type":"mcq","text":"Which state change is exothermic (releases energy)?","options":["Condensation","Melting","Boiling","Sublimation"],"correct":0,"explanation":"Condensation releases energy as gas becomes liquid."},
          {"type":"mcq","text":"The kinetic theory explains gas pressure as…","options":["Particle collisions with the container walls","The weight of the gas","Magnetism","Light from particles"],"correct":0,"explanation":"Frequent collisions exert pressure on the walls."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The temperature at which a gas can no longer be told from a liquid is the ___ point (critical).","answers":["critical"],"explanation":"Beyond the critical point, distinct liquid/gas phases vanish."},
          {"type":"tf","text":"At constant temperature, reducing a gas’s volume increases its pressure.","options":["True","False"],"correct":0,"explanation":"True — Boyle’s law: pressure and volume are inversely related."},
          {"type":"mcq","text":"Why do gases diffuse faster than liquids?","options":["Gas particles move faster and have more space","Gases are heavier","Liquids have no particles","Gases are colder"],"correct":0,"explanation":"High speed and large gaps speed gas diffusion."},
          {"type":"mcq","text":"Which best explains why solids have fixed shape?","options":["Strong forces hold particles in fixed positions","Particles are glued","They are cold","They contain no energy"],"correct":0,"explanation":"Strong interparticle forces fix the structure."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Amorphous solids like glass lack the long-range order of a ___.","answers":["crystal","lattice"],"explanation":"Crystalline solids have ordered lattices; glass does not."},
          {"type":"tf","text":"Plasma conducts electricity because it contains free charged particles.","options":["True","False"],"correct":0,"explanation":"True — ionisation frees electrons and ions."},
          {"type":"mcq","text":"Adding heat to melting ice at 0°C first does what?","options":["Melts more ice at constant temperature","Instantly boils it","Raises temperature above 0°C immediately","Freezes it harder"],"correct":0,"explanation":"Energy converts ice to water before the temperature rises."},
          {"type":"mcq","text":"Which is the correct energy order (lowest to highest particle energy)?","options":["Solid < liquid < gas","Gas < liquid < solid","Liquid < solid < gas","All equal"],"correct":0,"explanation":"Particle energy increases from solid to liquid to gas."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A substance keeps its chemical identity through a change of state; the change is a ___ change, not chemical.","answers":["physical"],"explanation":"State changes are physical and reversible."}
        ]
      }
    },
    {
      title: "The Water Cycle",
      slide: {"title":"The Water Cycle","text":"Water is always on the move. The Sun heats oceans and lakes, turning water into vapour that rises into the sky — evaporation. High up it cools and forms clouds — condensation. When the droplets grow heavy they fall as rain or snow — precipitation. The water flows back to rivers and seas, and the cycle begins again.","fact":"The water you drank today may once have been drunk by a dinosaur — Earth recycles the same water over and over."},
      q: {
        beginner: [
          {"type":"mcq","text":"What falls from clouds when they get too heavy?","options":["Rain","Rocks","Sand","Toys"],"correct":0,"explanation":"Heavy clouds drop their water as rain (or snow)."},
          {"type":"tf","text":"The Sun helps turn water into vapour that rises up.","options":["True","False"],"correct":0,"explanation":"True! The Sun’s heat lifts water into the sky."},
          {"type":"mcq","text":"Where does rain come from?","options":["Clouds","The ground","Trees","Rocks"],"correct":0,"explanation":"Rain falls from clouds."},
          {"type":"tf","text":"The Sun helps dry puddles by turning water into vapour.","options":["True","False"],"correct":0,"explanation":"True — that’s evaporation."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Water that falls from the sky is called ___.","answers":["rain","precipitation"],"explanation":"Rain (or snow) is precipitation."},
          {"type":"mcq","text":"What makes clouds in the sky?","options":["Tiny water droplets","Cotton","Smoke","Dust only"],"correct":0,"explanation":"Clouds are made of tiny water droplets."},
          {"type":"tf","text":"Snow is a kind of precipitation.","options":["True","False"],"correct":0,"explanation":"True — snow falls from clouds like rain."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The ___ heats water so it rises into the sky.","answers":["sun"],"explanation":"The Sun’s heat drives evaporation."},
          {"type":"mcq","text":"Where does a river carry its water?","options":["To the sea","To the Moon","Up a tree","Into a rock"],"correct":0,"explanation":"Rivers carry water back to the sea."},
          {"type":"tf","text":"Water can go round and round again and again.","options":["True","False"],"correct":0,"explanation":"True — the water cycle repeats forever."}
        ],
        elementary: [
          {"type":"mcq","text":"What is it called when water vapour cools and forms clouds?","options":["Condensation","Evaporation","Precipitation","Collection"],"correct":0,"explanation":"Condensation is vapour cooling back into tiny droplets that make clouds."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The Sun turning water into vapour is called ___.","answers":["evaporation"],"explanation":"Evaporation lifts water from oceans and lakes into the air."},
          {"type":"mcq","text":"Where does most water evaporate from?","options":["Oceans and lakes","Inside caves","The Moon","Clouds only"],"correct":0,"explanation":"The Sun evaporates water from oceans and lakes."},
          {"type":"tf","text":"Clouds are made of tiny water droplets.","options":["True","False"],"correct":0,"explanation":"True — condensed vapour forms cloud droplets."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Rivers carry water back to the ___.","answers":["sea","ocean"],"explanation":"Water collects and flows back to the sea."},
          {"type":"mcq","text":"What is the water cycle powered by?","options":["The Sun","The wind only","Electricity","Batteries"],"correct":0,"explanation":"Solar energy drives evaporation and the whole cycle."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Water soaking into the soil is called ___.","answers":["infiltration"],"explanation":"Infiltration refills underground water."},
          {"type":"tf","text":"Hail is a form of precipitation.","options":["True","False"],"correct":0,"explanation":"True — rain, snow and hail are all precipitation."},
          {"type":"mcq","text":"After condensation, what usually happens next?","options":["Precipitation","Evaporation","Freezing of the sea","Nothing"],"correct":0,"explanation":"Cloud droplets grow and fall as precipitation."},
          {"type":"mcq","text":"Which stores the most water on Earth?","options":["The oceans","Rivers","Clouds","Puddles"],"correct":0,"explanation":"Oceans hold the vast majority of Earth’s water."}
        ],
        middle: [
          {"type":"order","text":"Put the water cycle in order","items":["Evaporation","Condensation","Precipitation","Collection"],"explanation":"Water evaporates, condenses into clouds, falls as precipitation, then collects and flows back."},
          {"type":"mcq","text":"Which part of the cycle forms rain and snow?","options":["Precipitation","Evaporation","Condensation","Filtration"],"correct":0,"explanation":"Precipitation is water falling from clouds as rain, snow or hail."},
          {"type":"mcq","text":"What drives the whole water cycle?","options":["Energy from the Sun","The Moon’s gravity","Wind only","Earthquakes"],"correct":0,"explanation":"Solar energy powers evaporation, starting the cycle."},
          {"type":"tf","text":"Snow and hail are forms of precipitation.","options":["True","False"],"correct":0,"explanation":"True — precipitation includes rain, snow and hail."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Water soaking into the ground to refill underground stores is called ___.","answers":["infiltration","groundwater"],"explanation":"Infiltration recharges groundwater."},
          {"type":"mcq","text":"How does water from plants enter the air?","options":["Transpiration","Condensation","Freezing","Erosion"],"correct":0,"explanation":"Plants release vapour through their leaves."},
          {"type":"tf","text":"Groundwater can slowly feed rivers and springs.","options":["True","False"],"correct":0,"explanation":"True — stored groundwater emerges over time."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Water collecting and moving over land into streams is called ___.","answers":["runoff","run-off"],"explanation":"Runoff carries water to rivers."},
          {"type":"mcq","text":"Why does the total water on Earth stay about the same?","options":["It is recycled, not created or destroyed","New water rains from space","Plants make it","The Sun adds it"],"correct":0,"explanation":"Water changes form and place but the amount is roughly constant."},
          {"type":"tf","text":"Evaporation cools the surface it leaves.","options":["True","False"],"correct":0,"explanation":"True — evaporation removes heat energy."}
        ],
        advanced: [
          {"type":"mcq","text":"Why is the water cycle described as a closed system on Earth?","options":["The total amount of water stays roughly constant, just changing form and place","Water is created by rain","Water leaves into space each night","Only oceans hold water"],"correct":0,"explanation":"Earth neither gains nor loses significant water — the same water is continually recycled."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Water released from plant leaves into the air is called ___.","answers":["transpiration"],"explanation":"Transpiration from plants adds to the vapour driving the cycle."},
          {"type":"mcq","text":"Transpiration adds water vapour to the air from where?","options":["Plant leaves","Volcanoes","Rocks","The Moon"],"correct":0,"explanation":"Plants release vapour through their leaves."},
          {"type":"tf","text":"The total amount of water on Earth stays roughly constant.","options":["True","False"],"correct":0,"explanation":"True — water changes form and place but isn’t lost."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The combined loss of water from soil and plants is called ___.","answers":["evapotranspiration"],"explanation":"Evapotranspiration = evaporation + transpiration."},
          {"type":"mcq","text":"Which process returns water to the atmosphere from both soil and plants?","options":["Evapotranspiration","Condensation","Deposition","Runoff"],"correct":0,"explanation":"Evapotranspiration combines evaporation and transpiration."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Water stored underground in permeable rock is held in an ___.","answers":["aquifer"],"explanation":"Aquifers are underground water stores."},
          {"type":"tf","text":"Warmer air can hold more water vapour.","options":["True","False"],"correct":0,"explanation":"True — saturation vapour pressure rises with temperature."},
          {"type":"mcq","text":"The water cycle redistributes what across the planet?","options":["Energy and fresh water","Only salt","Only heat","Rocks"],"correct":0,"explanation":"It moves both fresh water and latent heat energy."},
          {"type":"mcq","text":"Latent heat released during condensation helps drive what?","options":["Storms and weather systems","Earthquakes","Tides","Volcanoes"],"correct":0,"explanation":"Released latent heat powers storms."}
        ]
      }
    },
    {
      title: "Forces & Gravity",
      slide: {"title":"Pushes, Pulls & Gravity","text":"A force is simply a push or a pull. Forces make things speed up, slow down, change direction or change shape. One force acts on you every second: gravity, the pull that holds you to the ground and keeps the Moon circling Earth. Drop anything and gravity pulls it down.","fact":"Astronaut legend says Galileo showed heavy and light objects fall at the same rate — and on the airless Moon, a hammer and a feather really do land together."},
      q: {
        beginner: [
          {"type":"mcq","text":"What pulls a ball down when you drop it?","options":["Gravity","Wind","Sound","Light"],"correct":0,"explanation":"Gravity pulls things down toward the ground."},
          {"type":"tf","text":"A force can be a push or a pull.","options":["True","False"],"correct":0,"explanation":"True! Pushing and pulling are both forces."},
          {"type":"mcq","text":"Which is a push?","options":["Pushing a door open","Reading","Sleeping","Singing"],"correct":0,"explanation":"Pushing a door is a pushing force."},
          {"type":"tf","text":"Gravity keeps our feet on the ground.","options":["True","False"],"correct":0,"explanation":"True! Gravity pulls us down."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A force is a push or a ___.","answers":["pull"],"explanation":"Pushes and pulls are both forces."},
          {"type":"mcq","text":"Which is a pull?","options":["Pulling a wagon","Sleeping","Reading","Singing"],"correct":0,"explanation":"Pulling a wagon is a pulling force."},
          {"type":"tf","text":"If you drop a ball, it falls down.","options":["True","False"],"correct":0,"explanation":"True — gravity pulls it down."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Gravity pulls things ___.","answers":["down"],"explanation":"Gravity pulls objects toward the ground."},
          {"type":"mcq","text":"What slows a bike when you brake?","options":["Rubbing (friction)","Gravity up","Light","Sound"],"correct":0,"explanation":"Friction from the brakes slows the bike."},
          {"type":"tf","text":"A push can make a toy car move.","options":["True","False"],"correct":0,"explanation":"True — a push is a force that moves things."}
        ],
        elementary: [
          {"type":"mcq","text":"Which of these is NOT something a force can do?","options":["Change an object’s colour","Speed it up","Slow it down","Change its direction"],"correct":0,"explanation":"Forces change motion or shape — not colour."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The force that keeps the Moon circling the Earth is ___.","answers":["gravity"],"explanation":"Earth’s gravity holds the Moon in orbit."},
          {"type":"mcq","text":"What force slows a ball rolling on grass?","options":["Friction","Gravity up","Magnetism","Light"],"correct":0,"explanation":"Friction between ball and grass slows it."},
          {"type":"tf","text":"Heavier objects are pulled by gravity more strongly.","options":["True","False"],"correct":0,"explanation":"True — more mass means more gravitational pull (weight)."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The force that resists motion between surfaces is ___.","answers":["friction"],"explanation":"Friction opposes sliding."},
          {"type":"mcq","text":"What keeps the Moon going around the Earth?","options":["Gravity","Magnetism","Wind","String"],"correct":0,"explanation":"Earth’s gravity holds the Moon in orbit."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The force resisting motion between two surfaces is ___.","answers":["friction"],"explanation":"Friction opposes sliding."},
          {"type":"tf","text":"A parachute uses air resistance to slow a fall.","options":["True","False"],"correct":0,"explanation":"True — air resistance is a force that slows falling."},
          {"type":"mcq","text":"Forces are measured in units called…","options":["Newtons","Litres","Metres","Degrees"],"correct":0,"explanation":"Force is measured in newtons (N)."},
          {"type":"mcq","text":"Which surface gives the LEAST friction?","options":["Smooth ice","Rough carpet","Sandpaper","Gravel"],"correct":0,"explanation":"Smooth ice has very low friction."}
        ],
        middle: [
          {"type":"mcq","text":"On the airless Moon, if you drop a hammer and a feather together, what happens?","options":["They land at the same time","The hammer lands first","The feather lands first","They float away"],"correct":0,"explanation":"With no air resistance, gravity accelerates both equally — they land together."},
          {"type":"tf","text":"Air resistance is a force that slows falling objects on Earth.","options":["True","False"],"correct":0,"explanation":"True — which is why a feather flutters down slowly here but not on the Moon."},
          {"type":"mcq","text":"What is the difference between mass and weight?","options":["Mass is matter; weight is gravity’s pull on it","They are the same","Weight is matter","Mass needs gravity"],"correct":0,"explanation":"Mass stays constant; weight changes with gravity."},
          {"type":"tf","text":"On the Moon you would weigh less than on Earth.","options":["True","False"],"correct":0,"explanation":"True — the Moon’s gravity is about 1/6 of Earth’s."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A force has both a size and a ___.","answers":["direction"],"explanation":"Forces are vectors: size and direction."},
          {"type":"mcq","text":"On the Moon your weight would be…","options":["Less than on Earth","More than on Earth","Exactly the same","Zero"],"correct":0,"explanation":"The Moon’s gravity is about 1/6 of Earth’s."},
          {"type":"tf","text":"Mass stays the same wherever you are.","options":["True","False"],"correct":0,"explanation":"True — mass is constant; weight depends on gravity."},
          {"type":"blank","text":"Fill in the missing word","sentence":"When forces on an object are ___, its motion does not change.","answers":["balanced"],"explanation":"Balanced forces = no change in motion."},
          {"type":"mcq","text":"Air resistance depends partly on what?","options":["An object’s shape and speed","Its colour","The time of day","Its price"],"correct":0,"explanation":"Shape and speed affect air resistance."},
          {"type":"tf","text":"A force has both size and direction.","options":["True","False"],"correct":0,"explanation":"True — forces are vectors."}
        ],
        advanced: [
          {"type":"mcq","text":"Newton’s first law says an object keeps moving at constant velocity unless what happens?","options":["An unbalanced force acts on it","It gets tired","Time runs out","It changes colour"],"correct":0,"explanation":"Without a net (unbalanced) force, motion doesn’t change — the law of inertia."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Mass measures how much matter is in an object; ___ is the force of gravity on that mass.","answers":["weight"],"explanation":"Weight changes with gravity (less on the Moon); mass stays the same."},
          {"type":"mcq","text":"Newton’s third law states that for every action there is what?","options":["An equal and opposite reaction","A bigger reaction","No reaction","A delayed reaction"],"correct":0,"explanation":"Forces come in equal, opposite pairs."},
          {"type":"tf","text":"Balanced forces on an object mean its motion does not change.","options":["True","False"],"correct":0,"explanation":"True — no net force means constant velocity."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The tendency of an object to resist changes in motion is called ___.","answers":["inertia"],"explanation":"Inertia depends on mass (Newton’s first law)."},
          {"type":"mcq","text":"Newton’s first law is also called the law of…","options":["Inertia","Gravity","Energy","Motion pictures"],"correct":0,"explanation":"Objects resist changes in motion — inertia."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Force equals mass times ___ (Newton’s second law).","answers":["acceleration"],"explanation":"F = ma."},
          {"type":"tf","text":"Action and reaction forces act on different objects.","options":["True","False"],"correct":0,"explanation":"True — that’s why they don’t cancel out."},
          {"type":"mcq","text":"A 2 kg object accelerated at 3 m/s² needs what force?","options":["6 N","1.5 N","5 N","0.7 N"],"correct":0,"explanation":"F = ma = 2 × 3 = 6 N."},
          {"type":"mcq","text":"Terminal velocity is reached when…","options":["Air resistance balances gravity","Gravity disappears","The object stops","Friction ends"],"correct":0,"explanation":"Balanced forces mean constant (terminal) velocity."}
        ]
      }
    },
    {
      title: "The Human Body",
      slide: {"title":"Your Amazing Body","text":"Your body is a team of organs, each with a job. The heart pumps blood, the lungs take in oxygen, the brain controls everything, the stomach digests food, and the skeleton holds you up and protects you. They all work together to keep you alive and moving.","fact":"Your heart beats about 100,000 times a day, pushing blood through roughly 100,000 km of blood vessels — enough to circle the Earth twice."},
      q: {
        beginner: [
          {"type":"mcq","text":"Which body part pumps your blood?","options":["The heart","The nose","The foot","The ear"],"correct":0,"explanation":"The heart pumps blood all around your body."},
          {"type":"tf","text":"Your lungs help you breathe.","options":["True","False"],"correct":0,"explanation":"True! Lungs take in the air you breathe."},
          {"type":"mcq","text":"What do your lungs help you do?","options":["Breathe","Run fast only","See","Hear"],"correct":0,"explanation":"Lungs help you breathe air."},
          {"type":"tf","text":"Your brain is inside your head.","options":["True","False"],"correct":0,"explanation":"True! The skull protects the brain."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Your ___ pumps blood around your body.","answers":["heart"],"explanation":"The heart is a pump."},
          {"type":"mcq","text":"What do your eyes help you do?","options":["See","Hear","Taste","Smell"],"correct":0,"explanation":"Eyes let you see."},
          {"type":"tf","text":"Your heart beats to move blood.","options":["True","False"],"correct":0,"explanation":"True — the heart pumps blood."},
          {"type":"blank","text":"Fill in the missing word","sentence":"You breathe air into your ___.","answers":["lungs"],"explanation":"Lungs take in air."},
          {"type":"mcq","text":"What protects your brain?","options":["Your skull","Your foot","Your hair only","Your shoe"],"correct":0,"explanation":"The skull is hard bone protecting the brain."},
          {"type":"tf","text":"Bones help you stand up.","options":["True","False"],"correct":0,"explanation":"True — the skeleton supports you."}
        ],
        elementary: [
          {"type":"mcq","text":"Which organ controls the rest of your body?","options":["The brain","The stomach","The skin","The knee"],"correct":0,"explanation":"The brain sends signals that control everything you do."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The ___ holds you up and protects organs like the heart and brain.","answers":["skeleton","bones"],"explanation":"Your skeleton is the frame of bones supporting and protecting your body."},
          {"type":"mcq","text":"What carries blood around your body?","options":["Blood vessels","Bones","Hair","Skin only"],"correct":0,"explanation":"Blood vessels (arteries and veins) carry blood."},
          {"type":"tf","text":"Your skeleton protects organs like the heart and lungs.","options":["True","False"],"correct":0,"explanation":"True — the ribcage protects them."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The organ that digests your food is the ___.","answers":["stomach"],"explanation":"The stomach breaks down food."},
          {"type":"mcq","text":"Which organ helps you think?","options":["The brain","The stomach","The foot","The elbow"],"correct":0,"explanation":"The brain controls thinking."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Blood travels through tubes called blood ___.","answers":["vessels"],"explanation":"Arteries and veins are blood vessels."},
          {"type":"tf","text":"The lungs pass oxygen into the blood.","options":["True","False"],"correct":0,"explanation":"True — oxygen enters the blood in the lungs."},
          {"type":"mcq","text":"Where does food get broken down first after the mouth?","options":["The stomach","The brain","The lungs","The heart"],"correct":0,"explanation":"The stomach digests food."},
          {"type":"mcq","text":"Which is part of the skeleton?","options":["The ribcage","The lungs","The blood","The skin"],"correct":0,"explanation":"The ribcage is bone — part of the skeleton."}
        ],
        middle: [
          {"type":"mcq","text":"What gas do your lungs take from the air and pass into your blood?","options":["Oxygen","Helium","Nitrogen only","Carbon dioxide"],"correct":0,"explanation":"Lungs absorb oxygen and release carbon dioxide."},
          {"type":"tf","text":"The heart and lungs work together to deliver oxygen around the body.","options":["True","False"],"correct":0,"explanation":"True — lungs load blood with oxygen, the heart pumps it everywhere."},
          {"type":"mcq","text":"Which system includes the heart and blood vessels?","options":["Circulatory system","Nervous system","Skeletal system","Digestive system"],"correct":0,"explanation":"The circulatory system moves blood."},
          {"type":"tf","text":"The brain sends signals through nerves.","options":["True","False"],"correct":0,"explanation":"True — the nervous system carries signals."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Muscles pull on ___ to move your body.","answers":["bones"],"explanation":"Muscles work with the skeleton."},
          {"type":"mcq","text":"The heart, blood and vessels form which system?","options":["Circulatory","Digestive","Nervous","Skeletal"],"correct":0,"explanation":"They make up the circulatory system."},
          {"type":"tf","text":"Nerves carry signals to and from the brain.","options":["True","False"],"correct":0,"explanation":"True — the nervous system carries signals."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Muscles work in pairs to ___ and straighten joints.","answers":["bend"],"explanation":"Muscles pull to bend joints."},
          {"type":"mcq","text":"What does the digestive system do?","options":["Break food into nutrients","Pump blood","Send nerve signals","Support the body"],"correct":0,"explanation":"It breaks food down for the body to use."},
          {"type":"tf","text":"The lungs and heart work together to supply oxygen.","options":["True","False"],"correct":0,"explanation":"True — lungs load oxygen, the heart delivers it."}
        ],
        advanced: [
          {"type":"mcq","text":"Which system carries oxygen and nutrients to every cell?","options":["The circulatory system","The skeletal system","The nervous system","The digestive system"],"correct":0,"explanation":"The circulatory system (heart, blood, vessels) transports oxygen and nutrients."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Tiny air sacs in the lungs where gas exchange happens are called ___.","answers":["alveoli"],"explanation":"Alveoli give the lungs a huge surface area for swapping oxygen and CO₂."},
          {"type":"mcq","text":"Roughly how many bones are in an adult human skeleton?","options":["206","12","1,000","50"],"correct":0,"explanation":"Adults have 206 bones (babies have more, which fuse)."},
          {"type":"tf","text":"Red blood cells carry oxygen using haemoglobin.","options":["True","False"],"correct":0,"explanation":"True — haemoglobin binds oxygen."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The exchange of oxygen and CO₂ in the lungs happens in tiny sacs called ___.","answers":["alveoli"],"explanation":"Alveoli maximise surface area."},
          {"type":"mcq","text":"Roughly how many bones does an adult human have?","options":["206","12","640","98"],"correct":0,"explanation":"Adults have 206 bones."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Red blood cells carry oxygen using the protein ___.","answers":["haemoglobin","hemoglobin"],"explanation":"Haemoglobin binds oxygen."},
          {"type":"tf","text":"The left side of the heart pumps oxygen-rich blood to the body.","options":["True","False"],"correct":0,"explanation":"True — the left ventricle serves the body."},
          {"type":"mcq","text":"Gas exchange in the lungs happens in tiny sacs called…","options":["Alveoli","Neurons","Villi","Nephrons"],"correct":0,"explanation":"Alveoli maximise surface area for gas exchange."},
          {"type":"mcq","text":"Which organ filters waste from the blood to make urine?","options":["The kidney","The liver","The lung","The heart"],"correct":0,"explanation":"Kidneys filter the blood."}
        ]
      }
    },
    {
      title: "Plants & Photosynthesis",
      slide: {"title":"How Plants Make Food","text":"Plants make their own food using sunlight — a process called photosynthesis. Leaves capture light, roots drink water, and tiny holes take in carbon dioxide from the air. The plant combines these to make sugar for energy and releases oxygen — the very oxygen we breathe.","fact":"Almost all the oxygen in our air comes from plants and tiny ocean algae. Every second breath you take is thanks to the ocean."},
      q: {
        beginner: [
          {"type":"mcq","text":"What do plants need from the sky to make food?","options":["Sunlight","Snow","Music","Toys"],"correct":0,"explanation":"Plants use sunlight to make their food."},
          {"type":"tf","text":"Plants give off oxygen that we breathe.","options":["True","False"],"correct":0,"explanation":"True! Plants release the oxygen we need."},
          {"type":"mcq","text":"What do plants need to grow?","options":["Sunlight and water","Only darkness","Toys","Music"],"correct":0,"explanation":"Plants need light and water."},
          {"type":"tf","text":"Leaves catch sunlight.","options":["True","False"],"correct":0,"explanation":"True! Leaves capture light for food."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Plants make their food in their green ___.","answers":["leaves","leaf"],"explanation":"Leaves are where photosynthesis happens."},
          {"type":"mcq","text":"What colour are most leaves?","options":["Green","Blue","Purple","Black"],"correct":0,"explanation":"Leaves are green from chlorophyll."},
          {"type":"tf","text":"Plants need water to grow.","options":["True","False"],"correct":0,"explanation":"True — water is essential for plants."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Plants use light from the ___ to make food.","answers":["sun"],"explanation":"Sunlight powers photosynthesis."},
          {"type":"mcq","text":"What part of a plant is under the ground?","options":["The roots","The flower","The leaf","The fruit"],"correct":0,"explanation":"Roots grow underground."},
          {"type":"tf","text":"Plants give us oxygen to breathe.","options":["True","False"],"correct":0,"explanation":"True — photosynthesis releases oxygen."}
        ],
        elementary: [
          {"type":"mcq","text":"What is the process called when plants make food from sunlight?","options":["Photosynthesis","Digestion","Evaporation","Gravity"],"correct":0,"explanation":"Photosynthesis means “building with light.”"},
          {"type":"blank","text":"Fill in the missing word","sentence":"Plants drink water through their ___.","answers":["roots"],"explanation":"Roots absorb water and minerals from the soil."},
          {"type":"mcq","text":"What do plants release that we need to breathe?","options":["Oxygen","Smoke","Salt","Sand"],"correct":0,"explanation":"Photosynthesis releases oxygen."},
          {"type":"tf","text":"Roots take in water from the soil.","options":["True","False"],"correct":0,"explanation":"True — roots absorb water and minerals."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The green colour in leaves comes from ___.","answers":["chlorophyll"],"explanation":"Chlorophyll captures light energy."},
          {"type":"mcq","text":"What do roots take from the soil?","options":["Water and minerals","Sunlight","Oxygen only","Sound"],"correct":0,"explanation":"Roots absorb water and minerals."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The green substance that captures light is ___.","answers":["chlorophyll"],"explanation":"Chlorophyll captures light energy."},
          {"type":"tf","text":"Leaves are the main place photosynthesis happens.","options":["True","False"],"correct":0,"explanation":"True — leaves catch the most light."},
          {"type":"mcq","text":"Photosynthesis makes food in the form of…","options":["Sugar","Salt","Sand","Stone"],"correct":0,"explanation":"It produces sugar (glucose)."},
          {"type":"mcq","text":"What gas do plants take in for photosynthesis?","options":["Carbon dioxide","Helium","Neon","Nitrogen only"],"correct":0,"explanation":"Plants absorb carbon dioxide."}
        ],
        middle: [
          {"type":"mcq","text":"Which gas do plants take IN for photosynthesis?","options":["Carbon dioxide","Oxygen","Helium","Hydrogen"],"correct":0,"explanation":"Plants take in carbon dioxide and release oxygen."},
          {"type":"tf","text":"Photosynthesis produces sugar that the plant uses for energy.","options":["True","False"],"correct":0,"explanation":"True — the sugar (glucose) is the plant’s food."},
          {"type":"mcq","text":"Photosynthesis makes which sugar for the plant?","options":["Glucose","Salt","Sand","Water"],"correct":0,"explanation":"Glucose is the plant’s food/energy store."},
          {"type":"tf","text":"Plants take in carbon dioxide through tiny leaf holes.","options":["True","False"],"correct":0,"explanation":"True — these holes are called stomata."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Tiny holes in a leaf that let gases in and out are called ___.","answers":["stomata"],"explanation":"Stomata control gas exchange."},
          {"type":"mcq","text":"Tiny leaf holes that let gases in and out are called…","options":["Stomata","Pores of skin","Alveoli","Valves"],"correct":0,"explanation":"Stomata control gas exchange in leaves."},
          {"type":"tf","text":"Plants also use some oxygen to respire, especially at night.","options":["True","False"],"correct":0,"explanation":"True — plants respire like all living things."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Photosynthesis stores light energy as ___ energy in sugar.","answers":["chemical"],"explanation":"Light energy becomes chemical energy."},
          {"type":"mcq","text":"Which is a product of photosynthesis?","options":["Oxygen","Carbon dioxide","Nitrogen","Salt"],"correct":0,"explanation":"Photosynthesis releases oxygen."},
          {"type":"tf","text":"Without sunlight, a green plant cannot photosynthesise.","options":["True","False"],"correct":0,"explanation":"True — light is required."}
        ],
        advanced: [
          {"type":"mcq","text":"Which green pigment captures light energy for photosynthesis?","options":["Chlorophyll","Haemoglobin","Melanin","Keratin"],"correct":0,"explanation":"Chlorophyll in the leaves absorbs light, mainly red and blue wavelengths."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Photosynthesis takes carbon dioxide and water and produces glucose and ___.","answers":["oxygen"],"explanation":"The balanced idea: CO₂ + water + light → glucose + oxygen."},
          {"type":"mcq","text":"Which best summarises photosynthesis?","options":["CO₂ + water + light → glucose + oxygen","Water → oxygen only","Glucose → sunlight","Oxygen + soil → sugar"],"correct":0,"explanation":"Light energy converts CO₂ and water into glucose and oxygen."},
          {"type":"tf","text":"Photosynthesis stores light energy as chemical energy in glucose.","options":["True","False"],"correct":0,"explanation":"True — that’s the point of the process."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Photosynthesis takes place in cell structures called ___.","answers":["chloroplasts"],"explanation":"Chloroplasts contain chlorophyll."},
          {"type":"mcq","text":"Which word equation is correct for photosynthesis?","options":["CO₂ + water → glucose + oxygen","glucose → oxygen","water → sugar + salt","oxygen + soil → sugar"],"correct":0,"explanation":"Light drives CO₂ + water → glucose + oxygen."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Photosynthesis occurs in cell structures called ___.","answers":["chloroplasts"],"explanation":"Chloroplasts hold chlorophyll."},
          {"type":"tf","text":"Photosynthesis and respiration are roughly reverse processes.","options":["True","False"],"correct":0,"explanation":"True — one stores energy, the other releases it."},
          {"type":"mcq","text":"Which factor can limit the rate of photosynthesis?","options":["Light intensity","The plant’s name","Soil colour","Wind direction"],"correct":0,"explanation":"Light, CO₂ and temperature are limiting factors."},
          {"type":"mcq","text":"Most oxygen in Earth’s atmosphere originally came from…","options":["Photosynthesising organisms","Volcanoes only","The Sun","Rocks"],"correct":0,"explanation":"Photosynthesis built up atmospheric oxygen."}
        ]
      }
    },
    {
      title: "Electricity",
      slide: {"title":"Electricity & Circuits","text":"Electricity is a flow of tiny charged particles. To make it useful we build a circuit — a complete loop that lets current flow from a battery, through wires, to something like a bulb, and back again. Break the loop and the flow stops. A switch is just a gap you can open and close.","fact":"Lightning is a giant burst of electricity — a single bolt carries enough energy to toast about 100,000 slices of bread."},
      q: {
        beginner: [
          {"type":"mcq","text":"What can electricity make a bulb do?","options":["Light up","Melt","Sing","Grow"],"correct":0,"explanation":"Electricity makes a bulb light up."},
          {"type":"tf","text":"A switch can turn electricity on and off.","options":["True","False"],"correct":0,"explanation":"True! A switch opens or closes the loop."},
          {"type":"mcq","text":"What runs on electricity?","options":["A lamp","A rock","A pillow","A leaf"],"correct":0,"explanation":"A lamp uses electricity to light up."},
          {"type":"tf","text":"A battery stores energy.","options":["True","False"],"correct":0,"explanation":"True! Batteries store electrical energy."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A ___ can turn a light on and off.","answers":["switch"],"explanation":"A switch opens or closes the circuit."},
          {"type":"mcq","text":"Which needs electricity to work?","options":["A television","A rock","A pillow","A leaf"],"correct":0,"explanation":"A TV runs on electricity."},
          {"type":"tf","text":"A torch needs a battery.","options":["True","False"],"correct":0,"explanation":"True — batteries power a torch."},
          {"type":"blank","text":"Fill in the missing word","sentence":"You press a ___ to turn a light on.","answers":["switch","button"],"explanation":"A switch closes the circuit."},
          {"type":"mcq","text":"What can electricity make happen?","options":["A bulb lights up","A rock melts","A cloud sings","Grass grows"],"correct":0,"explanation":"Electricity lights a bulb."},
          {"type":"tf","text":"Wires carry electricity.","options":["True","False"],"correct":0,"explanation":"True — electricity flows through wires."}
        ],
        elementary: [
          {"type":"mcq","text":"What do we call the complete loop that lets electricity flow?","options":["A circuit","A triangle","A battery box","A magnet"],"correct":0,"explanation":"A circuit is the full loop current travels around."},
          {"type":"blank","text":"Fill in the missing word","sentence":"If you break the loop, the electric current will ___.","answers":["stop"],"explanation":"Current only flows in a complete, unbroken circuit."},
          {"type":"mcq","text":"What is needed for electricity to flow?","options":["A complete circuit","A broken wire","Darkness","Water only"],"correct":0,"explanation":"Current needs an unbroken loop."},
          {"type":"tf","text":"Copper wire lets electricity flow easily.","options":["True","False"],"correct":0,"explanation":"True — copper is a good conductor."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A material that stops electricity flowing is an ___.","answers":["insulator"],"explanation":"Insulators like plastic block current."},
          {"type":"mcq","text":"For electricity to flow, the circuit must be…","options":["Complete (a full loop)","Broken","Wet","Dark"],"correct":0,"explanation":"Current needs an unbroken loop."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A material that stops electricity is an ___.","answers":["insulator"],"explanation":"Insulators block current."},
          {"type":"tf","text":"Metals are usually good conductors.","options":["True","False"],"correct":0,"explanation":"True — metals conduct electricity well."},
          {"type":"mcq","text":"Which is an insulator?","options":["Plastic","Copper","Steel","Silver"],"correct":0,"explanation":"Plastic blocks current."},
          {"type":"mcq","text":"What gives a circuit its energy?","options":["The battery","The bulb","The wire","The switch"],"correct":0,"explanation":"The battery supplies energy."}
        ],
        middle: [
          {"type":"mcq","text":"What does a battery provide to a circuit?","options":["The energy that pushes the current","Extra wires","Light directly","Sound"],"correct":0,"explanation":"A battery supplies the energy (voltage) that drives the current."},
          {"type":"tf","text":"Metals like copper are good conductors of electricity.","options":["True","False"],"correct":0,"explanation":"True — which is why wires are usually made of copper."},
          {"type":"mcq","text":"What does a battery give to a circuit?","options":["Energy (voltage) to push current","Extra light","Sound","Nothing"],"correct":0,"explanation":"A battery provides the voltage."},
          {"type":"tf","text":"Adding more bulbs in a simple series circuit can make them dimmer.","options":["True","False"],"correct":0,"explanation":"True — they share the same current path."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The flow of electric charge is called electric ___.","answers":["current"],"explanation":"Current is measured in amperes."},
          {"type":"mcq","text":"What is electric current?","options":["The flow of electric charge","Stored heat","A kind of light","Sound"],"correct":0,"explanation":"Current is flowing charge."},
          {"type":"tf","text":"In a series circuit there is only one path for the current.","options":["True","False"],"correct":0,"explanation":"True — series = single loop."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Electric current is measured in units called ___.","answers":["amperes","amps"],"explanation":"Current is measured in amperes (amps)."},
          {"type":"mcq","text":"Adding a second bulb in series usually makes each bulb…","options":["Dimmer","Brighter","Explode","Colder"],"correct":0,"explanation":"They share the current, so each dims."},
          {"type":"tf","text":"A switch works by opening or closing the circuit.","options":["True","False"],"correct":0,"explanation":"True — open stops flow, closed allows it."}
        ],
        advanced: [
          {"type":"mcq","text":"What is electric current actually a flow of, in a metal wire?","options":["Electrons","Protons","Photons","Neutrons"],"correct":0,"explanation":"In metals, current is the flow of negatively charged electrons."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A material that resists current and is used for safety coating on wires is an ___.","answers":["insulator"],"explanation":"Insulators (like plastic) block current and keep us safe."},
          {"type":"mcq","text":"In a metal wire, electric current is the flow of what?","options":["Electrons","Protons","Photons","Atoms"],"correct":0,"explanation":"Free electrons drift to carry current."},
          {"type":"tf","text":"Voltage can be thought of as the “push” driving the current.","options":["True","False"],"correct":0,"explanation":"True — higher voltage pushes more current (for a given resistance)."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The opposition to current flow in a component is called ___.","answers":["resistance"],"explanation":"Resistance is measured in ohms."},
          {"type":"mcq","text":"In a metal wire, current is the flow of…","options":["Electrons","Protons","Neutrons","Atoms"],"correct":0,"explanation":"Free electrons carry current in metals."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The opposition to current flow is called ___.","answers":["resistance"],"explanation":"Resistance is measured in ohms."},
          {"type":"tf","text":"Voltage is the push that drives current around a circuit.","options":["True","False"],"correct":0,"explanation":"True — voltage is the electrical push."},
          {"type":"mcq","text":"Ohm’s law relates voltage, current and…","options":["Resistance","Mass","Colour","Time"],"correct":0,"explanation":"V = I × R."},
          {"type":"mcq","text":"In a parallel circuit, if one bulb breaks the others…","options":["Keep working","All go out","Get brighter forever","Melt"],"correct":0,"explanation":"Parallel paths keep others lit."}
        ]
      }
    },
    {
      title: "Life Cycles",
      slide: {"title":"Life Cycles","text":"Living things grow and change in stages called a life cycle. A butterfly is a perfect example: it starts as an egg, hatches into a caterpillar, wraps itself in a chrysalis, and emerges transformed as a butterfly — a dramatic change called metamorphosis. Then it lays eggs and the cycle repeats.","fact":"Inside the chrysalis, a caterpillar almost completely dissolves into a soup of cells before rebuilding itself as a butterfly."},
      q: {
        beginner: [
          {"type":"mcq","text":"What does a caterpillar turn into?","options":["A butterfly","A fish","A rock","A flower"],"correct":0,"explanation":"A caterpillar changes into a butterfly."},
          {"type":"tf","text":"A butterfly starts life as an egg.","options":["True","False"],"correct":0,"explanation":"True! Egg first, then caterpillar."},
          {"type":"mcq","text":"What comes out of a butterfly egg?","options":["A caterpillar","A fish","A bird","A frog"],"correct":0,"explanation":"A caterpillar hatches from the egg."},
          {"type":"tf","text":"A seed can grow into a plant.","options":["True","False"],"correct":0,"explanation":"True! Seeds grow into new plants."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A baby frog is called a ___.","answers":["tadpole"],"explanation":"Tadpoles grow into frogs."},
          {"type":"mcq","text":"What hatches from a chicken egg?","options":["A chick","A fish","A frog","A bee"],"correct":0,"explanation":"A chick hatches from a chicken egg."},
          {"type":"tf","text":"A caterpillar changes into a butterfly.","options":["True","False"],"correct":0,"explanation":"True — it transforms."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A young plant grows from a ___.","answers":["seed"],"explanation":"Seeds grow into plants."},
          {"type":"mcq","text":"What do frogs lay in water?","options":["Eggs","Rocks","Leaves","Shells"],"correct":0,"explanation":"Frogs lay eggs in water."},
          {"type":"tf","text":"Baby animals grow into adults.","options":["True","False"],"correct":0,"explanation":"True — that is part of a life cycle."}
        ],
        elementary: [
          {"type":"order","text":"Put the butterfly life cycle in order","items":["Egg","Caterpillar","Chrysalis","Butterfly"],"explanation":"Egg → caterpillar → chrysalis → butterfly, then it starts again."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The big change from caterpillar to butterfly is called ___.","answers":["metamorphosis"],"explanation":"Metamorphosis means a complete change of form."},
          {"type":"mcq","text":"What does a caterpillar build to transform?","options":["A chrysalis","A nest","A web","A shell"],"correct":0,"explanation":"It forms a chrysalis (pupa)."},
          {"type":"tf","text":"A life cycle repeats over and over.","options":["True","False"],"correct":0,"explanation":"True — adults produce young and it starts again."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A tadpole grows legs and becomes a ___.","answers":["frog"],"explanation":"Frogs undergo metamorphosis too."},
          {"type":"mcq","text":"What stage comes between caterpillar and butterfly?","options":["Chrysalis","Egg","Adult","Tadpole"],"correct":0,"explanation":"The chrysalis (pupa) stage."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A young frog with a tail and no legs is a ___.","answers":["tadpole"],"explanation":"Tadpoles hatch from frog eggs."},
          {"type":"tf","text":"A life cycle repeats when adults have young.","options":["True","False"],"correct":0,"explanation":"True — the cycle continues."},
          {"type":"mcq","text":"Which animal lays eggs?","options":["A bird","A cow","A dog","A cat"],"correct":0,"explanation":"Birds lay eggs."},
          {"type":"mcq","text":"A seed needs what to start growing?","options":["Water and warmth","Music","Toys","Darkness only"],"correct":0,"explanation":"Seeds germinate with water and warmth."}
        ],
        middle: [
          {"type":"mcq","text":"Which stage does a caterpillar enter to transform into a butterfly?","options":["Chrysalis","Egg","Nest","Cocoon of leaves"],"correct":0,"explanation":"It forms a chrysalis (pupa) where the transformation happens."},
          {"type":"tf","text":"Not all animals change body shape as dramatically as a butterfly.","options":["True","False"],"correct":0,"explanation":"True — humans and cats grow but keep the same basic form (no metamorphosis)."},
          {"type":"mcq","text":"Which animal goes through complete metamorphosis?","options":["A butterfly","A human","A cat","A snake"],"correct":0,"explanation":"Egg → larva → pupa → adult."},
          {"type":"tf","text":"Mammals like humans grow but keep the same basic body form.","options":["True","False"],"correct":0,"explanation":"True — no metamorphosis."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The feeding, growing stage of an insect is the ___ stage.","answers":["larva","larval"],"explanation":"The larva (e.g. caterpillar) eats and grows."},
          {"type":"mcq","text":"Complete metamorphosis has which four stages?","options":["Egg, larva, pupa, adult","Egg and adult only","Seed to flower","Birth to death"],"correct":0,"explanation":"Egg → larva → pupa → adult."},
          {"type":"tf","text":"Humans do not go through metamorphosis.","options":["True","False"],"correct":0,"explanation":"True — humans keep the same basic form."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The feeding, growing insect stage is the ___ stage.","answers":["larva","larval"],"explanation":"The larva eats and grows."},
          {"type":"mcq","text":"A frog changing from tadpole to adult is an example of…","options":["Metamorphosis","Photosynthesis","Evaporation","Digestion"],"correct":0,"explanation":"It is a body-form change: metamorphosis."},
          {"type":"tf","text":"Flowering plants reproduce using seeds.","options":["True","False"],"correct":0,"explanation":"True — seeds carry the next generation."}
        ],
        advanced: [
          {"type":"mcq","text":"“Complete metamorphosis” (egg–larva–pupa–adult) contrasts with “incomplete metamorphosis,” where an insect...","options":["Hatches as a small nymph and grows without a pupa stage","Never lays eggs","Stays an egg forever","Skips being an adult"],"correct":0,"explanation":"Insects like grasshoppers grow through nymph stages with no pupa — incomplete metamorphosis."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The scientific name for the caterpillar (feeding) stage is the ___ stage.","answers":["larva","larval"],"explanation":"Larva is the growing, feeding stage before pupation."},
          {"type":"mcq","text":"How does incomplete metamorphosis differ from complete?","options":["No pupa stage; young hatch as nymphs","No eggs","No adults","It is faster only"],"correct":0,"explanation":"Grasshoppers grow via nymph stages, no pupa."},
          {"type":"tf","text":"A pupa may appear still outside while huge changes happen inside.","options":["True","False"],"correct":0,"explanation":"True — tissues reorganise dramatically."},
          {"type":"blank","text":"Fill in the missing word","sentence":"An insect that hatches as a small version of the adult undergoes ___ metamorphosis.","answers":["incomplete"],"explanation":"Incomplete metamorphosis skips the pupa."},
          {"type":"mcq","text":"How does incomplete metamorphosis differ from complete?","options":["Young hatch as nymphs, no pupa stage","No eggs are laid","There is no adult","It has five stages"],"correct":0,"explanation":"Nymphs resemble small adults; no pupa."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A grasshopper’s immature stage that resembles the adult is a ___.","answers":["nymph"],"explanation":"Nymphs undergo incomplete metamorphosis."},
          {"type":"tf","text":"Inside a pupa, larval tissues are largely reorganised.","options":["True","False"],"correct":0,"explanation":"True — dramatic internal restructuring occurs."},
          {"type":"mcq","text":"Pollination is a key step in the life cycle of…","options":["Flowering plants","Frogs","Butterflies only","Mammals"],"correct":0,"explanation":"Pollination lets flowering plants make seeds."},
          {"type":"mcq","text":"Which reproductive strategy produces many offspring with little care?","options":["Laying many eggs","Live birth of one","No reproduction","Cloning only"],"correct":0,"explanation":"Many species lay numerous eggs with low parental care."}
        ]
      }
    },
    {
      title: "The Scientific Method",
      slide: {"title":"Thinking Like a Scientist","text":"Science isn’t just facts — it’s a way of finding them out. Scientists ask a question, make a smart guess called a hypothesis, then test it with a fair experiment. They observe what happens, record results, and decide whether the evidence supports the guess. If not, they change the idea and try again.","fact":"A “fair test” changes only one thing at a time — so you know exactly what caused the result."},
      q: {
        beginner: [
          {"type":"mcq","text":"What do scientists do to find out if an idea is true?","options":["Test it","Ignore it","Hide it","Eat it"],"correct":0,"explanation":"Scientists test their ideas with experiments."},
          {"type":"tf","text":"Scientists write down what they see.","options":["True","False"],"correct":0,"explanation":"True! Recording results is a big part of science."},
          {"type":"mcq","text":"What do scientists use to test ideas?","options":["Experiments","Guesses only","Naps","Songs"],"correct":0,"explanation":"Experiments test ideas."},
          {"type":"tf","text":"Scientists ask questions about the world.","options":["True","False"],"correct":0,"explanation":"True! Curiosity starts science."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Scientists write down what they ___.","answers":["see","observe"],"explanation":"Recording observations is key."},
          {"type":"mcq","text":"What do good scientists stay full of?","options":["Curiosity","Anger","Sleep","Noise"],"correct":0,"explanation":"Curiosity drives good science."},
          {"type":"tf","text":"Scientists ask questions.","options":["True","False"],"correct":0,"explanation":"True — questions start science."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Scientists do an ___ to test an idea.","answers":["experiment"],"explanation":"Experiments test ideas."},
          {"type":"mcq","text":"What should you do with your results?","options":["Write them down","Forget them","Hide them","Eat them"],"correct":0,"explanation":"Recording results is important."},
          {"type":"tf","text":"It is okay to try again if an experiment fails.","options":["True","False"],"correct":0,"explanation":"True — scientists learn from trying again."}
        ],
        elementary: [
          {"type":"mcq","text":"What do we call a scientist’s smart guess that they test?","options":["A hypothesis","A holiday","A password","A recipe"],"correct":0,"explanation":"A hypothesis is a testable prediction."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A fair test should change only ___ thing at a time.","answers":["one"],"explanation":"Changing one variable keeps the test fair."},
          {"type":"mcq","text":"A prediction you can test is called a what?","options":["Hypothesis","Story","Wish","Recipe"],"correct":0,"explanation":"A hypothesis is a testable prediction."},
          {"type":"tf","text":"A fair test changes only one thing at a time.","options":["True","False"],"correct":0,"explanation":"True — so you know what caused the result."},
          {"type":"blank","text":"Fill in the missing word","sentence":"After an experiment, scientists look at their ___.","answers":["results","data"],"explanation":"Results tell you if the hypothesis held."},
          {"type":"mcq","text":"A testable prediction is called a…","options":["Hypothesis","Wish","Story","Rule"],"correct":0,"explanation":"A hypothesis is a testable prediction."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A fair test changes only ___ thing at a time.","answers":["one"],"explanation":"One variable keeps a test fair."},
          {"type":"tf","text":"Scientists record data carefully.","options":["True","False"],"correct":0,"explanation":"True — accurate data matters."},
          {"type":"mcq","text":"What comes after making a hypothesis?","options":["Testing it with an experiment","Ignoring it","Publishing a book","Sleeping"],"correct":0,"explanation":"You test the hypothesis."},
          {"type":"mcq","text":"If results disagree with your idea, you should…","options":["Change the idea","Hide the results","Give up science","Shout"],"correct":0,"explanation":"Evidence guides you to revise the idea."}
        ],
        middle: [
          {"type":"order","text":"Put the scientific method in order","items":["Ask a question","Make a hypothesis","Do an experiment","Look at the results"],"explanation":"Question → hypothesis → experiment → analyse results (then repeat)."},
          {"type":"mcq","text":"Why change only one variable in an experiment?","options":["So you know what caused the result","To make it faster","To use less paper","It looks nicer"],"correct":0,"explanation":"Isolating one variable tells you exactly what caused any change."},
          {"type":"mcq","text":"Why repeat an experiment several times?","options":["To check the result is reliable","To waste time","To use more paper","To confuse others"],"correct":0,"explanation":"Repetition tests reliability."},
          {"type":"tf","text":"If evidence disagrees with a hypothesis, scientists change the idea.","options":["True","False"],"correct":0,"explanation":"True — evidence guides science."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The factor you deliberately change is the independent ___.","answers":["variable"],"explanation":"You change it and measure the effect."},
          {"type":"mcq","text":"Why repeat an experiment?","options":["To check reliability","To waste time","To use more paper","For fun only"],"correct":0,"explanation":"Repeats test whether results are reliable."},
          {"type":"tf","text":"The independent variable is the one you deliberately change.","options":["True","False"],"correct":0,"explanation":"True — you change it and measure the effect."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The factor you measure as the outcome is the ___ variable.","answers":["dependent"],"explanation":"The dependent variable responds to the change."},
          {"type":"mcq","text":"A prediction that cannot be tested is…","options":["Not scientific","The best kind","Always true","A control"],"correct":0,"explanation":"Science relies on testable ideas."},
          {"type":"tf","text":"Conclusions should be based on evidence, not opinion.","options":["True","False"],"correct":0,"explanation":"True — evidence drives conclusions."}
        ],
        advanced: [
          {"type":"mcq","text":"In an experiment, the group left unchanged for comparison is called the...","options":["Control group","Test group","Random group","Result group"],"correct":0,"explanation":"The control provides a baseline to compare the treated group against."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The single factor you deliberately change in a fair test is the independent ___.","answers":["variable"],"explanation":"You change the independent variable and measure the dependent variable."},
          {"type":"mcq","text":"What is the purpose of a control group?","options":["A baseline for comparison","To speed things up","To add variables","To skip testing"],"correct":0,"explanation":"The control shows what happens with no treatment."},
          {"type":"tf","text":"A single experiment rarely proves a theory beyond doubt.","options":["True","False"],"correct":0,"explanation":"True — science builds on repeated, converging evidence."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The factor you measure as the outcome is the dependent ___.","answers":["variable"],"explanation":"It depends on the independent variable."},
          {"type":"mcq","text":"What is the role of a control group?","options":["A baseline for comparison","To add variables","To speed things up","To skip testing"],"correct":0,"explanation":"The control shows the no-treatment outcome."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Factors kept the same to ensure a fair test are the ___ variables.","answers":["control","controlled"],"explanation":"Controlled variables are held constant."},
          {"type":"tf","text":"A single study rarely settles a scientific question by itself.","options":["True","False"],"correct":0,"explanation":"True — science builds on converging evidence."},
          {"type":"mcq","text":"Peer review mainly helps to…","options":["Check work before publication","Sell products","Speed up experiments","Replace data"],"correct":0,"explanation":"Other scientists scrutinise the work."},
          {"type":"mcq","text":"A well-supported explanation tested many times becomes a scientific…","options":["Theory","Guess","Opinion","Rumour"],"correct":0,"explanation":"A theory is robust and well-evidenced."}
        ]
      }
    }
  ],
  art: [
    {
      title: "Primary Colours",
      slide: {"title":"The Three Primary Colours","text":"Some colours are special because you cannot make them by mixing others — these are the primary colours: red, blue and yellow. From just these three you can mix almost every other colour. Red and yellow make orange, blue and yellow make green, and red and blue make purple.","fact":"Mixing all the primary colours of paint together makes a muddy brown — but mixing primary colours of light makes white!"},
      q: {
        beginner: [
          {"type":"mcq","text":"Which of these is a primary colour?","options":["Red","Orange","Green","Purple"],"correct":0,"explanation":"Red is a primary colour. Orange, green and purple are made by mixing."},
          {"type":"blank","text":"Fill in the missing colour","sentence":"Blue and yellow mixed together make ___.","answers":["green"],"explanation":"Blue + yellow = green."}
        ],
        elementary: [
          {"type":"mcq","text":"Which two primary colours make orange?","options":["Red and yellow","Blue and yellow","Red and blue","Green and red"],"correct":0,"explanation":"Red + yellow = orange."},
          {"type":"tf","text":"You can mix other colours to make a primary colour.","options":["True","False"],"correct":1,"explanation":"False — primary colours can’t be made by mixing; that’s what makes them primary."}
        ],
        middle: [
          {"type":"mcq","text":"Colours made by mixing two primaries (like green or purple) are called what?","options":["Secondary colours","Primary colours","Neutral colours","Warm colours"],"correct":0,"explanation":"Secondary colours: orange, green and purple."},
          {"type":"blank","text":"Fill in the missing colour","sentence":"Red mixed with blue makes ___.","answers":["purple","violet"],"explanation":"Red + blue = purple (violet)."}
        ],
        advanced: [
          {"type":"mcq","text":"Why do primary colours of light (RGB) mix differently from paint?","options":["Light is additive; paint is subtractive","Light has no colour","Paint is brighter","They mix the same way"],"correct":0,"explanation":"Adding light wavelengths builds toward white; mixing pigments absorbs light, darkening toward brown/black."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The three primary colours of LIGHT are red, green and ___.","answers":["blue"],"explanation":"RGB — red, green, blue — combine to make white light."}
        ]
      }
    },
    {
      title: "The Colour Wheel",
      slide: {"title":"The Colour Wheel","text":"Artists arrange colours in a circle called the colour wheel. Colours opposite each other — like blue and orange, or red and green — are complementary. Placed side by side they make each other look brighter and bolder. Colours next to each other are similar and feel calm together.","fact":"Vincent van Gogh loved putting complementary colours together — the blue and yellow in his paintings almost seem to vibrate."},
      q: {
        beginner: [
          {"type":"mcq","text":"What shape is a colour wheel?","options":["A circle","A square","A triangle","A line"],"correct":0,"explanation":"A colour wheel is a circle of colours."},
          {"type":"tf","text":"Blue and orange are opposite on the colour wheel.","options":["True","False"],"correct":0,"explanation":"True! They sit across from each other."}
        ],
        elementary: [
          {"type":"mcq","text":"Colours opposite each other on the wheel are called what?","options":["Complementary","Primary","Warm","Dull"],"correct":0,"explanation":"Complementary colours sit opposite and make each other pop."},
          {"type":"blank","text":"Fill in the missing colour","sentence":"The complementary colour of red is ___.","answers":["green"],"explanation":"Red and green are opposite on the wheel."}
        ],
        middle: [
          {"type":"mcq","text":"Why do artists place complementary colours side by side?","options":["To make each look brighter and bolder","To make them disappear","To save paint","To make grey"],"correct":0,"explanation":"Contrast makes both colours appear more vivid."},
          {"type":"tf","text":"Colours next to each other on the wheel feel calm and harmonious.","options":["True","False"],"correct":0,"explanation":"True — analogous colours blend gently."}
        ],
        advanced: [
          {"type":"mcq","text":"“Simultaneous contrast” describes what effect?","options":["A colour changes appearance depending on the colour beside it","Two colours becoming one","Paint drying faster","Colours fading in light"],"correct":0,"explanation":"Neighbouring colours influence how we perceive each — a key idea in colour theory."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Colours that sit next to each other on the wheel are called ___ colours.","answers":["analogous"],"explanation":"Analogous colours share a common hue and feel harmonious."}
        ]
      }
    },
    {
      title: "Line & Shape",
      slide: {"title":"Line & Shape","text":"Every drawing begins with line and shape — the building blocks of art. A line can be straight, curved, thick or thin, and it can show movement or feeling. Shapes are made when lines join up: circles, squares and triangles are simple shapes we see everywhere.","fact":"A single continuous line drawing — never lifting the pen — is a favourite artist’s exercise. Picasso made famous ones."},
      q: {
        beginner: [
          {"type":"mcq","text":"What do you get when lines join up?","options":["A shape","A sound","A smell","A number"],"correct":0,"explanation":"Joined lines make shapes like circles and squares."},
          {"type":"tf","text":"A line can be curved or straight.","options":["True","False"],"correct":0,"explanation":"True! Lines come in many kinds."}
        ],
        elementary: [
          {"type":"mcq","text":"Which of these is a simple shape?","options":["A triangle","A shadow","A colour","A texture"],"correct":0,"explanation":"A triangle is a basic shape made from three lines."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Line and ___ are the basic building blocks of a drawing.","answers":["shape"],"explanation":"Lines make shapes; shapes build pictures."}
        ],
        middle: [
          {"type":"mcq","text":"How can an artist use line to suggest movement?","options":["With flowing, curved or diagonal lines","With only dots","By using no lines","With straight borders only"],"correct":0,"explanation":"Curved and diagonal lines lead the eye and imply motion."},
          {"type":"tf","text":"Shapes can be geometric (like squares) or organic (like a leaf).","options":["True","False"],"correct":0,"explanation":"True — geometric shapes are regular; organic shapes are free and natural."}
        ],
        advanced: [
          {"type":"mcq","text":"What is the difference between a shape and a form in art?","options":["A shape is 2-D; a form is 3-D","A form is flat","They are identical","A shape has colour, a form doesn’t"],"correct":0,"explanation":"Shape is flat (2-D); form has volume and depth (3-D), created with shading."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Adding light and shadow turns a flat shape into a 3-D ___.","answers":["form"],"explanation":"Shading gives the illusion of three-dimensional form."}
        ]
      }
    },
    {
      title: "Famous Artists",
      slide: {"title":"Famous Artists","text":"Across history, artists have changed how we see the world. Leonardo da Vinci painted the Mona Lisa with her mysterious smile. Vincent van Gogh painted swirling, colourful skies in The Starry Night. Pablo Picasso broke objects into bold shapes in a style called Cubism.","fact":"Van Gogh sold only one painting while he was alive — today his works sell for tens of millions."},
      q: {
        beginner: [
          {"type":"mcq","text":"Who painted the Mona Lisa?","options":["Leonardo da Vinci","A robot","Your teacher","Nobody"],"correct":0,"explanation":"Leonardo da Vinci painted the famous Mona Lisa."},
          {"type":"tf","text":"Van Gogh painted a picture called The Starry Night.","options":["True","False"],"correct":0,"explanation":"True! It shows a swirling night sky."}
        ],
        elementary: [
          {"type":"mcq","text":"Which artist is famous for The Starry Night?","options":["Vincent van Gogh","Pablo Picasso","Leonardo da Vinci","Claude Monet"],"correct":0,"explanation":"Van Gogh painted The Starry Night with its swirling sky."},
          {"type":"blank","text":"Fill in the missing name","sentence":"The Mona Lisa was painted by Leonardo da ___.","answers":["Vinci","vinci"],"explanation":"Leonardo da Vinci, during the Renaissance."}
        ],
        middle: [
          {"type":"mcq","text":"Picasso helped invent which art style, breaking objects into geometric shapes?","options":["Cubism","Realism","Photography","Sculpture"],"correct":0,"explanation":"Cubism shows subjects from many angles at once using bold shapes."},
          {"type":"tf","text":"The Mona Lisa was painted during the Renaissance.","options":["True","False"],"correct":0,"explanation":"True — by Leonardo da Vinci around 1503."}
        ],
        advanced: [
          {"type":"mcq","text":"Impressionism (Monet, Renoir) is best known for what?","options":["Capturing light and a fleeting moment with loose brushwork","Perfectly smooth, photographic detail","Only black and white","Geometric abstraction"],"correct":0,"explanation":"Impressionists painted the effect of light and atmosphere with visible, quick brushstrokes."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Picasso’s style of breaking subjects into angular planes is called ___.","answers":["Cubism","cubism"],"explanation":"Cubism, developed with Georges Braque around 1907."}
        ]
      }
    },
    {
      title: "Elements of Music",
      slide: {"title":"Rhythm, Melody & Harmony","text":"Music is built from a few key ideas. Rhythm is the pattern of beats — the part you tap your foot to. Melody is the tune you can hum. Harmony is when different notes are played together to sound rich and full. Together they turn sounds into music.","fact":"Your heartbeat is a rhythm — about 60–100 beats a minute, close to the tempo of a lot of pop songs."},
      q: {
        beginner: [
          {"type":"mcq","text":"What do you tap your foot to in a song?","options":["The beat","The colour","The smell","The price"],"correct":0,"explanation":"You tap along to the beat — the rhythm."},
          {"type":"tf","text":"A melody is the tune you can hum.","options":["True","False"],"correct":0,"explanation":"True! Melody is the part you sing or hum."}
        ],
        elementary: [
          {"type":"mcq","text":"What is the pattern of beats in music called?","options":["Rhythm","Colour","Volume","Silence"],"correct":0,"explanation":"Rhythm is the arrangement of beats in time."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The tune of a song that you can hum is called the ___.","answers":["melody"],"explanation":"The melody is the memorable line of notes."}
        ],
        middle: [
          {"type":"mcq","text":"What do we call several notes played together to sound rich?","options":["Harmony","Rhythm","Tempo","Rest"],"correct":0,"explanation":"Harmony is notes sounding together, supporting the melody."},
          {"type":"tf","text":"Tempo means how fast or slow the music is.","options":["True","False"],"correct":0,"explanation":"True — tempo is the speed of the beat."}
        ],
        advanced: [
          {"type":"mcq","text":"How do rhythm, melody and harmony relate in a typical song?","options":["Melody is carried over a rhythm and supported by harmony","They are the same thing","Harmony replaces melody","Rhythm has no role"],"correct":0,"explanation":"A melody moves in time (rhythm) and is enriched by harmony beneath it."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A group of notes played together as a single unit is a ___.","answers":["chord"],"explanation":"Chords are the building blocks of harmony."}
        ]
      }
    },
    {
      title: "Instruments",
      slide: {"title":"Families of Instruments","text":"Orchestra instruments come in families. Strings (violin, cello) make sound from vibrating strings. Woodwinds (flute, clarinet) and brass (trumpet, trombone) are blown. Percussion (drums, cymbals) is struck or shaken. Each family has its own sound and role.","fact":"The violin has only four strings, but a skilled player can produce hundreds of different notes on them."},
      q: {
        beginner: [
          {"type":"mcq","text":"Which instrument do you hit to play?","options":["A drum","A violin","A flute","A trumpet"],"correct":0,"explanation":"A drum is percussion — you strike it."},
          {"type":"tf","text":"A flute is played by blowing into it.","options":["True","False"],"correct":0,"explanation":"True! The flute is a woodwind you blow."}
        ],
        elementary: [
          {"type":"mcq","text":"The violin and cello belong to which family?","options":["Strings","Brass","Percussion","Woodwind"],"correct":0,"explanation":"They make sound from vibrating strings."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Drums and cymbals belong to the ___ family.","answers":["percussion"],"explanation":"Percussion instruments are struck or shaken."}
        ],
        middle: [
          {"type":"mcq","text":"A trumpet and trombone belong to which family?","options":["Brass","Strings","Woodwind","Percussion"],"correct":0,"explanation":"Brass instruments are blown, buzzing the lips into a metal mouthpiece."},
          {"type":"tf","text":"A clarinet is a woodwind instrument.","options":["True","False"],"correct":0,"explanation":"True — it uses a reed and is blown."}
        ],
        advanced: [
          {"type":"mcq","text":"What produces the pitch difference between a violin and a double bass?","options":["String length, thickness and tension","The colour of the wood","The player’s height","The number of strings only"],"correct":0,"explanation":"Longer, thicker, looser strings vibrate slower, producing lower pitches."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Brass and woodwind players control pitch partly by changing the length of the vibrating air ___.","answers":["column"],"explanation":"The air column’s length sets the pitch — keys or valves change it."}
        ]
      }
    },
    {
      title: "Reading Music",
      slide: {"title":"Notes on the Staff","text":"Music is written on five lines called a staff. The round symbols are notes, and where a note sits tells you how high or low to play it. The shape of the note tells you how long to hold it. A whole note lasts longer than a quarter note.","fact":"The same seven letter names — A B C D E F G — repeat over and over up and down the whole range of music."},
      q: {
        beginner: [
          {"type":"mcq","text":"How many lines are in a music staff?","options":["Five","Two","Ten","One"],"correct":0,"explanation":"A staff has five lines."},
          {"type":"tf","text":"Notes are written on the staff.","options":["True","False"],"correct":0,"explanation":"True! Notes sit on the lines and spaces."}
        ],
        elementary: [
          {"type":"mcq","text":"What does the position of a note on the staff tell you?","options":["How high or low to play it","How loud to shout","What colour it is","Where you live"],"correct":0,"explanation":"Higher on the staff = higher pitch."},
          {"type":"blank","text":"Fill in the missing number","sentence":"The music alphabet uses ___ letters: A to G.","answers":["seven","7"],"explanation":"A B C D E F G, then it repeats."}
        ],
        middle: [
          {"type":"mcq","text":"What does the shape of a note tell you?","options":["How long to hold it","How expensive it is","Who wrote it","How high to jump"],"correct":0,"explanation":"Note shape shows duration — e.g. a whole note vs a quarter note."},
          {"type":"tf","text":"A whole note is held longer than a quarter note.","options":["True","False"],"correct":0,"explanation":"True — a whole note lasts four times as long as a quarter note."}
        ],
        advanced: [
          {"type":"mcq","text":"What does a time signature like 4/4 tell a musician?","options":["How many beats are in each bar","How loud to play","The name of the song","Which instrument to use"],"correct":0,"explanation":"The top number gives beats per bar; 4/4 means four beats per bar."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The symbol at the start of the staff that sets the pitch range is the ___.","answers":["clef"],"explanation":"The clef (e.g. treble or bass) fixes which lines are which notes."}
        ]
      }
    },
    {
      title: "Art Meets Music",
      slide: {"title":"When Art and Music Meet","text":"Art and music share a language of mood and pattern. Both use rhythm — a repeated shape in a painting is like a repeated beat. Both use contrast — loud and soft, bright and dark. Artists and musicians often inspire each other, and some music is even written to match a painting.","fact":"Composer Modest Mussorgsky wrote “Pictures at an Exhibition” — music describing a walk through an art gallery."},
      q: {
        beginner: [
          {"type":"mcq","text":"What can BOTH a painting and a song have?","options":["Rhythm","A phone number","A password","Wheels"],"correct":0,"explanation":"Repeated patterns give both art and music rhythm."},
          {"type":"tf","text":"Loud and soft in music is like bright and dark in art.","options":["True","False"],"correct":0,"explanation":"True — both are kinds of contrast."}
        ],
        elementary: [
          {"type":"mcq","text":"A repeated shape in a painting is most like what in music?","options":["A repeated beat","A broken string","A silent rest","A wrong note"],"correct":0,"explanation":"Repetition creates rhythm in both art forms."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Both art and music use ___ — like loud/soft or bright/dark — to create interest.","answers":["contrast"],"explanation":"Contrast draws attention and creates drama."}
        ],
        middle: [
          {"type":"mcq","text":"Why might a composer write music to match a painting?","options":["To express the same mood in sound","To copy the colours exactly","To sell the painting","Because they must"],"correct":0,"explanation":"Music can echo a painting’s mood, energy or story."},
          {"type":"tf","text":"Rhythm exists in both visual art and music.","options":["True","False"],"correct":0,"explanation":"True — repeated visual elements create visual rhythm."}
        ],
        advanced: [
          {"type":"mcq","text":"The idea that colours can correspond to sounds or musical notes is called what?","options":["Synaesthesia","Symmetry","Sculpture","Notation"],"correct":0,"explanation":"Some artists (like Kandinsky) linked colour and music through synaesthesia."},
          {"type":"blank","text":"Fill in the missing name","sentence":"Painter Wassily ___ believed colours could “sound” like music.","answers":["Kandinsky","kandinsky"],"explanation":"Kandinsky’s abstract works were deeply inspired by music."}
        ]
      }
    }
  ],
  coding: [
    {
      title: "What is Code?",
      slide: {"title":"Giving Instructions","text":"Code is a set of instructions that tells a computer exactly what to do, step by step. Computers are fast but not clever — they follow instructions in order and do precisely what you say, nothing more. So the instructions must be clear and in the right order.","fact":"If you tell a computer to “make a sandwich” without every tiny step, it would have no idea where to start — computers need each step spelled out."},
      q: {
        beginner: [
          {"type":"mcq","text":"What is code?","options":["Instructions for a computer","A kind of food","A colour","A song"],"correct":0,"explanation":"Code tells a computer what to do, step by step."},
          {"type":"tf","text":"Computers follow instructions in order.","options":["True","False"],"correct":0,"explanation":"True! They do each step in the order you give."}
        ],
        elementary: [
          {"type":"mcq","text":"Why must coding instructions be very clear?","options":["Computers do exactly what you say, nothing more","Computers get bored","Computers guess the rest","Computers are clever"],"correct":0,"explanation":"A computer follows instructions literally, so they must be precise."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A set of step-by-step instructions for a computer is called ___.","answers":["code","a program"],"explanation":"Code (a program) is the instructions a computer runs."}
        ],
        middle: [
          {"type":"mcq","text":"A precise list of steps to solve a problem is called what?","options":["An algorithm","A password","A pixel","A cable"],"correct":0,"explanation":"An algorithm is a clear sequence of steps to reach a goal."},
          {"type":"tf","text":"Changing the ORDER of instructions can change the result.","options":["True","False"],"correct":0,"explanation":"True — order matters: pour cereal then milk, or you get a mess."}
        ],
        advanced: [
          {"type":"mcq","text":"Source code written by a human must be turned into instructions the computer runs. What does this?","options":["A compiler or interpreter","A keyboard","A monitor","A mouse"],"correct":0,"explanation":"Compilers/interpreters translate human-readable code into machine instructions."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A clear, finite sequence of steps that solves a problem is an ___.","answers":["algorithm"],"explanation":"Algorithms are the heart of all programming."}
        ]
      }
    },
    {
      title: "Sequencing",
      slide: {"title":"Order Matters","text":"Sequencing means putting instructions in the correct order. A computer runs your steps from top to bottom, one at a time. If the steps are out of order, you get the wrong result — like putting on your shoes before your socks!","fact":"A recipe is a sequence: mix, then bake, then cool. Swap the order and dinner is ruined — code is exactly the same."},
      q: {
        beginner: [
          {"type":"mcq","text":"What should you put on first?","options":["Socks, then shoes","Shoes, then socks","Only shoes","It doesn’t matter"],"correct":0,"explanation":"Order matters — socks first, then shoes!"},
          {"type":"tf","text":"A computer runs steps from top to bottom.","options":["True","False"],"correct":0,"explanation":"True! It follows the order you write."}
        ],
        elementary: [
          {"type":"order","text":"Put these steps to make toast in the right order","items":["Get the bread","Put it in the toaster","Wait for it to pop","Spread the butter"],"explanation":"Bread → toaster → wait → butter. Order matters!"},
          {"type":"blank","text":"Fill in the missing word","sentence":"Putting instructions in the correct order is called ___.","answers":["sequencing"],"explanation":"Sequencing is the order your code runs in."}
        ],
        middle: [
          {"type":"mcq","text":"What happens if two steps are swapped in a program?","options":["You may get the wrong result","Nothing ever changes","The computer fixes it","It runs faster"],"correct":0,"explanation":"Order changes behaviour — the computer won’t reorder for you."},
          {"type":"order","text":"Order the steps to send a message","items":["Open the app","Type the message","Press send","Message delivered"],"explanation":"Open → type → send → delivered."}
        ],
        advanced: [
          {"type":"mcq","text":"In most languages, program statements execute in what default order?","options":["Sequentially, top to bottom","Randomly","Bottom to top","All at once"],"correct":0,"explanation":"Control flow is sequential by default until a loop or branch changes it."},
          {"type":"tf","text":"Loops and conditionals let code depart from strict top-to-bottom order.","options":["True","False"],"correct":0,"explanation":"True — they redirect the flow of execution."}
        ]
      }
    },
    {
      title: "Loops",
      slide: {"title":"Repeating with Loops","text":"Sometimes you want the computer to do the same thing many times. Instead of writing it out again and again, you use a loop. A loop repeats a set of instructions until you tell it to stop — saving lots of typing and making code shorter.","fact":"To draw a square, you could write “move and turn” four times — or just loop it four times. Same result, far less code."},
      q: {
        beginner: [
          {"type":"mcq","text":"What does a loop do?","options":["Repeats instructions","Deletes the computer","Changes colours","Makes noise"],"correct":0,"explanation":"A loop repeats the same steps."},
          {"type":"tf","text":"A loop saves you from writing the same thing many times.","options":["True","False"],"correct":0,"explanation":"True! Loop it instead of repeating yourself."}
        ],
        elementary: [
          {"type":"mcq","text":"To draw a square with a loop, how many times do you repeat “move, turn”?","options":["4 times","2 times","10 times","1 time"],"correct":0,"explanation":"A square has 4 sides, so loop 4 times."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A ___ repeats instructions so you don’t rewrite them.","answers":["loop"],"explanation":"Loops repeat code efficiently."}
        ],
        middle: [
          {"type":"mcq","text":"What usually controls how many times a loop runs?","options":["A counter or condition","The colour of the screen","The time of day","Random luck"],"correct":0,"explanation":"A counter (repeat 10 times) or a condition (until done) controls the loop."},
          {"type":"tf","text":"A loop with a condition that is never false will run forever.","options":["True","False"],"correct":0,"explanation":"True — that’s an “infinite loop,” usually a bug."}
        ],
        advanced: [
          {"type":"mcq","text":"What is the key difference between a “for” loop and a “while” loop?","options":["“for” usually repeats a set number of times; “while” repeats until a condition changes","They are identical","“while” is faster","“for” never ends"],"correct":0,"explanation":"“for” iterates a known count; “while” loops as long as a condition holds."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A loop that never stops because its condition is always true is called an ___ loop.","answers":["infinite"],"explanation":"Infinite loops are a common bug to avoid."}
        ]
      }
    },
    {
      title: "Conditionals",
      slide: {"title":"If This, Then That","text":"Conditionals let a program make decisions. An “if” statement checks whether something is true, and only then runs certain instructions. For example: IF it is raining, THEN take an umbrella. This lets code react differently in different situations.","fact":"Every video game uses conditionals constantly: IF the player touches the enemy, THEN lose a life."},
      q: {
        beginner: [
          {"type":"mcq","text":"“IF it is raining, THEN take an umbrella.” What kind of instruction is this?","options":["A decision","A drawing","A song","A snack"],"correct":0,"explanation":"It’s a decision — a conditional."},
          {"type":"tf","text":"Conditionals help a program make choices.","options":["True","False"],"correct":0,"explanation":"True! IF/THEN lets code decide."}
        ],
        elementary: [
          {"type":"mcq","text":"Which word starts a conditional that checks if something is true?","options":["IF","LOOP","END","GO"],"correct":0,"explanation":"“IF” checks a condition."},
          {"type":"blank","text":"Fill in the missing word","sentence":"IF it is dark, ___ turn on the light.","answers":["then"],"explanation":"IF … THEN is the shape of a conditional."}
        ],
        middle: [
          {"type":"mcq","text":"What does “ELSE” do in a conditional?","options":["Runs when the IF condition is false","Repeats the code","Ends the program","Nothing"],"correct":0,"explanation":"ELSE gives an alternative action when the condition isn’t met."},
          {"type":"tf","text":"A conditional can react differently in different situations.","options":["True","False"],"correct":0,"explanation":"True — that’s the whole point of IF/ELSE."}
        ],
        advanced: [
          {"type":"mcq","text":"What does a Boolean value represent?","options":["True or false","Any number","A colour","A word"],"correct":0,"explanation":"Booleans are true/false values that conditionals test."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A condition that evaluates to true or false is called a ___ expression.","answers":["Boolean","boolean"],"explanation":"Boolean logic (AND, OR, NOT) drives decisions in code."}
        ]
      }
    },
    {
      title: "Variables",
      slide: {"title":"Storing Information","text":"A variable is like a labelled box that stores a piece of information so the program can use it later. You give it a name and put a value inside — like score = 0. Later you can change what’s in the box, such as adding one to the score.","fact":"In a game, your score, lives and level are all variables — boxes whose values change as you play."},
      q: {
        beginner: [
          {"type":"mcq","text":"A variable is like what?","options":["A labelled box","A window","A door","A cloud"],"correct":0,"explanation":"A variable stores a value, like a labelled box."},
          {"type":"tf","text":"A variable can hold a number like your score.","options":["True","False"],"correct":0,"explanation":"True! Score is a common variable."}
        ],
        elementary: [
          {"type":"mcq","text":"What can you do with the value inside a variable?","options":["Change it later","Never touch it","Only look at it once","Eat it"],"correct":0,"explanation":"Variables can be updated — that’s why they’re useful."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A ___ stores information the program can use and change.","answers":["variable"],"explanation":"Variables hold values by name."}
        ],
        middle: [
          {"type":"mcq","text":"If score = 5 and you write score = score + 1, what is score now?","options":["6","5","1","51"],"correct":0,"explanation":"It takes the old value (5) and adds 1, giving 6."},
          {"type":"tf","text":"A variable’s name lets you refer to its stored value.","options":["True","False"],"correct":0,"explanation":"True — the name is how you access the box."}
        ],
        advanced: [
          {"type":"mcq","text":"What is a data “type” of a variable?","options":["The kind of value it holds (number, text, true/false)","Its colour","How fast it runs","Its position on screen"],"correct":0,"explanation":"Types include integers, strings, booleans and more."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A variable that holds text, like a name, usually has the type ___.","answers":["string"],"explanation":"A string is a sequence of characters (text)."}
        ]
      }
    },
    {
      title: "Debugging",
      slide: {"title":"Finding & Fixing Bugs","text":"When code doesn’t work as expected, there’s a mistake called a bug. Finding and fixing bugs is called debugging. Good coders don’t give up — they read their code carefully, test small parts, and figure out where it went wrong.","fact":"The word “bug” comes from 1947, when engineers found a real moth stuck in a computer causing an error — they taped it in their logbook."},
      q: {
        beginner: [
          {"type":"mcq","text":"A mistake in code is called a ___.","options":["Bug","Cake","Star","Wheel"],"correct":0,"explanation":"A bug is an error in the code."},
          {"type":"tf","text":"Fixing a bug is called debugging.","options":["True","False"],"correct":0,"explanation":"True! Debugging means removing bugs."}
        ],
        elementary: [
          {"type":"mcq","text":"What is a good way to find a bug?","options":["Test small parts of the code","Delete everything","Give up","Shout at the screen"],"correct":0,"explanation":"Testing small pieces helps locate where it goes wrong."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Finding and fixing mistakes in code is called ___.","answers":["debugging"],"explanation":"Debugging is a key coding skill."}
        ],
        middle: [
          {"type":"mcq","text":"Why do coders test small parts of a program separately?","options":["To narrow down where the bug is","To make it longer","To use more electricity","For fun only"],"correct":0,"explanation":"Isolating parts helps pinpoint the mistake."},
          {"type":"tf","text":"A single wrong symbol can stop a whole program from working.","options":["True","False"],"correct":0,"explanation":"True — computers are very literal; small errors matter."}
        ],
        advanced: [
          {"type":"mcq","text":"What is the difference between a syntax error and a logic error?","options":["Syntax breaks the rules of the language; logic runs but gives a wrong answer","They are the same","Logic errors stop the program","Syntax errors are always invisible"],"correct":0,"explanation":"Syntax errors won’t run; logic errors run but behave incorrectly."},
          {"type":"blank","text":"Fill in the missing word","sentence":"An error that lets code run but produces the wrong result is a ___ error.","answers":["logic"],"explanation":"Logic errors are trickier because nothing crashes."}
        ]
      }
    },
    {
      title: "Functions",
      slide: {"title":"Reusable Blocks","text":"A function is a named block of code that does a specific job. Once you write it, you can use it again and again just by calling its name — no need to rewrite the steps. Functions keep code tidy, short and easy to fix.","fact":"Think of a function like a recipe card: write “make pancakes” once, then just say “make pancakes” whenever you’re hungry."},
      q: {
        beginner: [
          {"type":"mcq","text":"A function is a block of code that does what?","options":["A specific job","Nothing","Only errors","A drawing"],"correct":0,"explanation":"A function does one job you can reuse."},
          {"type":"tf","text":"You can use a function again and again.","options":["True","False"],"correct":0,"explanation":"True! Call it by name any time."}
        ],
        elementary: [
          {"type":"mcq","text":"Why are functions useful?","options":["They let you reuse code without rewriting it","They slow the computer","They use more words","They delete files"],"correct":0,"explanation":"Write once, call many times — tidy and efficient."},
          {"type":"blank","text":"Fill in the missing word","sentence":"You run a function by ___ its name.","answers":["calling"],"explanation":"“Calling” a function runs its code."}
        ],
        middle: [
          {"type":"mcq","text":"What can you give a function to change what it does?","options":["Inputs (parameters)","Colours","Nothing","More names"],"correct":0,"explanation":"Parameters are inputs that customise a function’s behaviour."},
          {"type":"tf","text":"Functions help keep a program short and easy to fix.","options":["True","False"],"correct":0,"explanation":"True — fix the function once and every use is fixed."}
        ],
        advanced: [
          {"type":"mcq","text":"What does it mean when a function “returns” a value?","options":["It gives back a result the rest of the program can use","It ends the computer","It repeats forever","It prints the screen"],"correct":0,"explanation":"A return value is the function’s output, passed back to the caller."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Inputs passed into a function are called ___.","answers":["parameters","arguments"],"explanation":"Parameters (arguments) let one function handle many cases."}
        ]
      }
    },
    {
      title: "Algorithms",
      slide: {"title":"Step-by-Step Solutions","text":"An algorithm is a clear set of steps to solve a problem or complete a task. Good algorithms are correct (they work) and efficient (they don’t waste effort). Sorting a list, finding the shortest route, or searching for a name all rely on algorithms.","fact":"When a map app finds the fastest route, it’s running a search algorithm across thousands of possible roads in a split second."},
      q: {
        beginner: [
          {"type":"mcq","text":"An algorithm is a set of ___ to solve a problem.","options":["Steps","Colours","Songs","Snacks"],"correct":0,"explanation":"An algorithm is a set of clear steps."},
          {"type":"tf","text":"A recipe is a bit like an algorithm.","options":["True","False"],"correct":0,"explanation":"True! Both are step-by-step instructions."}
        ],
        elementary: [
          {"type":"mcq","text":"A good algorithm should be correct and ___.","options":["Efficient","Colourful","Loud","Long"],"correct":0,"explanation":"Correct (it works) and efficient (no wasted effort)."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Putting a list of names into A–Z order uses a ___ algorithm.","answers":["sorting","sort"],"explanation":"Sorting algorithms arrange data in order."}
        ],
        middle: [
          {"type":"mcq","text":"A map app finding the quickest route is using what kind of algorithm?","options":["A search / pathfinding algorithm","A drawing algorithm","A music algorithm","No algorithm"],"correct":0,"explanation":"Pathfinding searches many routes to find the best one."},
          {"type":"tf","text":"Two correct algorithms can differ in how fast they solve the same problem.","options":["True","False"],"correct":0,"explanation":"True — efficiency (speed) is a key measure of an algorithm."}
        ],
        advanced: [
          {"type":"mcq","text":"What does the “efficiency” of an algorithm usually measure?","options":["How its time or memory grows as the input gets bigger","Its colour","How many lines it has","Who wrote it"],"correct":0,"explanation":"Efficiency (complexity) tracks how resources scale with input size."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A step-by-step method that is guaranteed to finish and give a correct answer is a correct ___.","answers":["algorithm"],"explanation":"Correctness and termination define a valid algorithm."}
        ]
      }
    }
  ],
  paleo: [
    {
      title: "What Is a Fossil?",
      slide: {"title":"What Is a Fossil?","text":"A fossil is a clue about life from long, long ago. Most fossils are the hard parts of ancient living things — bones, teeth, shells or wood — that turned to stone over millions of years.","fact":"A fossilised dinosaur dropping (a coprolite) can be studied to find out exactly what the dinosaur ate for its last meal."},
      q: {
        beginner: [
          {"type":"mcq","text":"A fossil is made of","options":["stone","jelly","paper"],"correct":0,"explanation":"A — stone."},
          {"type":"tf","text":"A footprint can be a fossil.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"mcq","text":"A fossil is mostly made of","options":["fresh bone","stone","plastic","ice"],"correct":1,"explanation":"B — stone (the original material is slowly replaced by minerals)."},
          {"type":"tf","text":"A footprint pressed into ancient mud can be a fossil.","options":["True","False"],"correct":0,"explanation":"True — that is a trace fossil."}
        ],
        middle: [
          {"type":"mcq","text":"Which is a TRACE fossil, not a body fossil?","options":["a tooth","a coprolite","a shell","a bone"],"correct":1,"explanation":"B — a coprolite (it records activity)."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Fossils are almost always found in ______ rock.","answers":["sedimentary"],"explanation":"sedimentary."}
        ],
        advanced: [
          {"type":"mcq","text":"Why does defining \"fossil\" force definitional choices?","options":["The category has fuzzy edges — body, trace and chemical fossils, plus subfossils","Fossils are all identical","Only bones count","Fossils are never preserved"],"correct":0,"explanation":"The boundary between fossil types (body, trace, chemical, subfossil) is genuinely blurry."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Tracks, burrows and coprolites are examples of ___ fossils.","answers":["trace","ichnofossils"],"explanation":"Trace fossils (ichnofossils) record activity rather than body parts."}
        ]
      }
    },
    {
      title: "How Fossils Form",
      slide: {"title":"How Fossils Form","text":"Turning into a fossil is actually very rare. When most animals die, they are eaten or they rot away and nothing is left.","fact":"Some insects trapped in amber are so perfectly preserved that you can still see the tiny hairs on their legs, tens of millions of years later."},
      q: {
        beginner: [
          {"type":"mcq","text":"To make a fossil, an animal must be buried","options":["fast","never","in a box"],"correct":0,"explanation":"A — fast."},
          {"type":"tf","text":"Most animals turn into fossils.","options":["True","False"],"correct":1,"explanation":"False. Most do not."}
        ],
        elementary: [
          {"type":"mcq","text":"For a good fossil to form, a dead animal usually needs to be","options":["burned","buried quickly","left in the sun","eaten"],"correct":1,"explanation":"B — buried quickly, before it can rot."},
          {"type":"blank","text":"Fill in the missing word","sentence":"When minerals slowly harden inside a bone and turn it to rock, this is called ______.","answers":["permineralisation"],"explanation":"permineralisation."}
        ],
        middle: [
          {"type":"mcq","text":"The most common way bone turns to rock is","options":["freezing","permineralisation","burning","melting"],"correct":1,"explanation":"B — permineralisation."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A hole left in rock in the exact shape of an organism is a ______.","answers":["mould"],"explanation":"mould."}
        ],
        advanced: [
          {"type":"mcq","text":"What does taphonomy study?","options":["Everything that happens to remains between death and discovery","Only living animals","Rock colour","Museum lighting"],"correct":0,"explanation":"Taphonomy tracks decay, transport, burial and diagenesis — each stage loses information."},
          {"type":"tf","text":"Every fossil is a biased survivor of a destructive process, not a neutral snapshot.","options":["True","False"],"correct":0,"explanation":"True — taphonomic filtering shapes what survives to be found."}
        ]
      }
    },
    {
      title: "Deep Time",
      slide: {"title":"Deep Time","text":"Earth is about 4.5 billion years old. That is such a huge number it is hard to imagine — if all of Earth’s history were squeezed into one day, humans would only appear in the last few seconds before midnight. Scientists call this enormous stretch \"deep time\".","fact":"Earth is roughly 4.5 billion years old, but the very first dinosaurs did not appear until around 230 million years ago — quite late in the story."},
      q: {
        beginner: [
          {"type":"mcq","text":"The Earth is","options":["very old","very new","one year old"],"correct":0,"explanation":"A — very old."},
          {"type":"tf","text":"The bottom rock layer is the oldest.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"mcq","text":"In undisturbed rock layers, the oldest layer is usually the","options":["top one","middle one","bottom one","reddest one"],"correct":2,"explanation":"C — the bottom one."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The huge stretch of Earth’s history is nicknamed \"______ time\".","answers":["deep"],"explanation":"deep."}
        ],
        middle: [
          {"type":"mcq","text":"The principle that lower rock layers are older is called","options":["superposition","evolution","extinction","gravity"],"correct":0,"explanation":"A — superposition."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The \"age of dinosaurs\" is the ______ era.","answers":["Mesozoic","mesozoic"],"explanation":"Mesozoic."}
        ],
        advanced: [
          {"type":"mcq","text":"Uniformitarianism (Hutton, Lyell) argued that Earth was shaped mainly by what?","options":["Slow processes over immense time","A single flood","Recent catastrophes only","No processes at all"],"correct":0,"explanation":"Slow, ongoing processes implied an ancient Earth — later confirmed by radiometric dating."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Absolute ages of rocks are supplied by ___ dating.","answers":["radiometric"],"explanation":"Radiometric dating gave deep time its numerical scale."}
        ]
      }
    },
    {
      title: "The Fossil Hunters",
      slide: {"title":"The Fossil Hunters","text":"A scientist who studies fossils is called a palaeontologist. Fossil hunting is careful, patient work.","fact":"Mary Anning found her first complete ichthyosaur skeleton when she was only about twelve years old."},
      q: {
        beginner: [
          {"type":"mcq","text":"A person who finds fossils is a","options":["palaeontologist","baker","pilot"],"correct":0,"explanation":"A — palaeontologist."},
          {"type":"tf","text":"You should dig for fossils very fast and rough.","options":["True","False"],"correct":1,"explanation":"False. Dig slow and careful."}
        ],
        elementary: [
          {"type":"blank","text":"Fill in the missing word","sentence":"A scientist who studies fossils is called a ______.","answers":["palaeontologist"],"explanation":"palaeontologist."},
          {"type":"mcq","text":"Fossils are most often found where","options":["old rock is exposed at the surface","grass is thickest","the sea is deepest","cities are biggest"],"correct":0,"explanation":"A — where old rock is exposed at the surface."}
        ],
        middle: [
          {"type":"mcq","text":"A \"field jacket\" is used to","options":["keep scientists warm","protect a large fossil for transport","date the rock","clean the bone"],"correct":1,"explanation":"B — protect a large fossil for transport."},
          {"type":"blank","text":"Fill in the missing word","sentence":"______ ______ discovered major sea-reptile fossils at Lyme Regis.","answers":["Mary Anning","mary anning"],"explanation":"Mary Anning."}
        ],
        advanced: [
          {"type":"mcq","text":"The \"Bone Wars\" (c.1877–1892) were a rivalry between whom?","options":["Marsh and Cope","Darwin and Wallace","Cuvier and Owen","Hutton and Lyell"],"correct":0,"explanation":"Marsh vs Cope — bitter competition that both advanced and damaged early palaeontology."},
          {"type":"tf","text":"The history of palaeontology was shaped by personality and rivalry, not neutral fact-gathering.","options":["True","False"],"correct":0,"explanation":"True — the Bone Wars show science as a human, contested enterprise."}
        ]
      }
    },
    {
      title: "From Dust to Museum",
      slide: {"title":"From Dust to Museum","text":"Finding a fossil is only the beginning. Back at the museum, skilled workers called preparators spend weeks or even months freeing the fossil from its rock, using tiny drills, brushes and picks.","fact":"The towering dinosaur skeletons in many museums are careful copies — the real bones are often kept safely in storage for scientists to study."},
      q: {
        beginner: [
          {"type":"mcq","text":"People clean fossils","options":["slowly","with a hose","never"],"correct":0,"explanation":"A — slowly."},
          {"type":"tf","text":"Every museum dino is real bone.","options":["True","False"],"correct":1,"explanation":"False. Some are copies."}
        ],
        elementary: [
          {"type":"blank","text":"Fill in the missing word","sentence":"A museum worker who carefully frees fossils from rock is called a ______.","answers":["preparator"],"explanation":"preparator."},
          {"type":"mcq","text":"A CT scanner lets scientists","options":["paint the bones","look inside a fossil without cutting it","make the fossil bigger","melt the rock"],"correct":1,"explanation":"B — look inside a fossil without cutting it open."}
        ],
        middle: [
          {"type":"mcq","text":"CT scanning is valuable because it","options":["makes fossils bigger","images inside a fossil without damaging it","dates the rock","colours the bone"],"correct":1,"explanation":"B — images inside a fossil without damaging it."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The rock surrounding a fossil that must be removed is called the ______.","answers":["matrix"],"explanation":"matrix."}
        ],
        advanced: [
          {"type":"mcq","text":"Why is mounting a skeleton called an \"interpretive act\"?","options":["Posture and missing bones embody hypotheses that can be wrong","Bones assemble only one way","Museums never make errors","It is purely mechanical"],"correct":0,"explanation":"Historic mounts (tail-dragging, upright \"Godzilla\" poses) froze outdated science into display."},
          {"type":"tf","text":"Old museum mounts sometimes preserved outdated scientific ideas as public monuments.","options":["True","False"],"correct":0,"explanation":"True — reconstruction choices encode the science of their era."}
        ]
      }
    },
    {
      title: "The First Life on Earth",
      slide: {"title":"The First Life on Earth","text":"Life on Earth began incredibly long ago — around 3.5 billion years back, or even earlier. The very first living things were tiny single cells, far too small to see, living in the ancient oceans. There were no plants, no animals and no land creatures at all.","fact":"For roughly the first 3 billion years, all life on Earth was microscopic — no plant or animal you could see with your eyes existed yet."},
      q: {
        beginner: [
          {"type":"mcq","text":"The first life was","options":["tiny","huge","fluffy"],"correct":0,"explanation":"A — tiny."},
          {"type":"tf","text":"The first life lived in the sea.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"mcq","text":"The first living things on Earth were","options":["small dinosaurs","tiny single cells","fish","ferns"],"correct":1,"explanation":"B — tiny single cells."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Sticky mounds built by ancient microbes are called ______.","answers":["stromatolites"],"explanation":"stromatolites."}
        ],
        middle: [
          {"type":"mcq","text":"Stromatolites are built by","options":["fish","photosynthesising microbes","coral","plants"],"correct":1,"explanation":"B — photosynthesising microbes."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Life stayed microscopic for about ______ billion years.","answers":["three"],"explanation":"three."}
        ],
        advanced: [
          {"type":"mcq","text":"Why is dating the origin of life so difficult?","options":["Abiotic processes can mimic biological signals in ancient rocks","Life left no trace","Rocks cannot be dated","It is fully settled"],"correct":0,"explanation":"Distinguishing true biosignatures from non-living chemistry is genuinely hard."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Layered microbial structures ~3.5 Ga old are called ___.","answers":["stromatolites"],"explanation":"Stromatolites are among the oldest claimed evidence of life — though contested."}
        ]
      }
    },
    {
      title: "The Cambrian Explosion",
      slide: {"title":"The Cambrian Explosion","text":"About 540 million years ago something remarkable happened in the seas. In a fairly short time, animals of many strange new shapes appeared — creatures with eyes, legs, shells and spines. Scientists call this burst of new life the Cambrian explosion.","fact":"Trilobites, hard-shelled sea creatures that first appeared in the Cambrian, went on to live in the oceans for about 270 million years before dying out."},
      q: {
        beginner: [
          {"type":"mcq","text":"The burst of new animals was in the","options":["sea","sky","desert"],"correct":0,"explanation":"A — sea."},
          {"type":"tf","text":"The new animals had eyes and legs.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"blank","text":"Fill in the missing word","sentence":"The sudden burst of many new animal shapes about 540 million years ago is called the Cambrian ______.","answers":["explosion"],"explanation":"explosion."},
          {"type":"mcq","text":"Anomalocaris was a","options":["plant","swimming predator","type of rock","dinosaur"],"correct":1,"explanation":"B — a swimming predator."}
        ],
        middle: [
          {"type":"mcq","text":"The Cambrian explosion is when most major animal ______ first appear.","options":["planets","groups (phyla)","plants","rocks"],"correct":1,"explanation":"B — groups (phyla)."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The famous Cambrian fossil site in Canada is the ______ ______.","answers":["Burgess Shale","burgess shale"],"explanation":"Burgess Shale."}
        ],
        advanced: [
          {"type":"mcq","text":"The Cambrian \"explosion\" is partly an artefact of what?","options":["Preservation and perception, since molecular clocks suggest earlier divergence","A real nuclear blast","Human hunting","Volcanic ash only"],"correct":0,"explanation":"Lineages likely diverged earlier in the poorly-fossilised Precambrian."},
          {"type":"tf","text":"Molecular clocks suggest animal lineages diverged before their first Cambrian fossils.","options":["True","False"],"correct":0,"explanation":"True — the \"explosion\" blends real biology with a preservation gap."}
        ]
      }
    },
    {
      title: "Life Conquers the Land",
      slide: {"title":"Life Conquers the Land","text":"For a very long time all life stayed in the water. Land was bare rock — no soil, no plants, no animals. Then, step by step, living things began to move out of the sea and onto the land. Plants led the way, forming the first mosses and later tall forests.","fact":"Every land animal with a backbone today — including you — is descended from fish that crawled out of the water hundreds of millions of years ago."},
      q: {
        beginner: [
          {"type":"mcq","text":"What came onto land first?","options":["plants","dinosaurs","cats"],"correct":0,"explanation":"A — plants."},
          {"type":"tf","text":"Some fish crawled onto land.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"mcq","text":"Which came onto land FIRST?","options":["dinosaurs","plants","birds","mammals"],"correct":1,"explanation":"B — plants."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The fish-like creature ______ had strong fins and could prop itself up on land.","answers":["Tiktaalik","tiktaalik"],"explanation":"Tiktaalik."}
        ],
        middle: [
          {"type":"mcq","text":"Tiktaalik matters because it is ______ between fish and land animals.","options":["identical","transitional","unrelated","imaginary"],"correct":1,"explanation":"B — transitional."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Four-limbed land vertebrates are called ______.","answers":["tetrapods"],"explanation":"tetrapods."}
        ],
        advanced: [
          {"type":"mcq","text":"Terrestrialisation is best described as what?","options":["A staged, mosaic process over tens of millions of years","A single fish walking out","An overnight event","Impossible"],"correct":0,"explanation":"Plants, fungi and arthropods colonised land long before vertebrates."},
          {"type":"blank","text":"Fill in the missing name","sentence":"The 2004 transitional \"fishapod\" fossil is called ___.","answers":["Tiktaalik","tiktaalik"],"explanation":"Tiktaalik bridges fish and early tetrapods."}
        ]
      }
    },
    {
      title: "Reptiles Take Over",
      slide: {"title":"Reptiles Take Over","text":"Amphibians, like frogs, must lay their soft eggs in water. This kept early land animals tied to ponds and rivers. Then reptiles evolved a brilliant new trick: a tough, waterproof egg with its own shell. Now eggs could be laid on dry land.","fact":"Dimetrodon, with its big back-sail, is often sold as a \"dinosaur\" toy — but it lived tens of millions of years before any dinosaur existed."},
      q: {
        beginner: [
          {"type":"mcq","text":"Reptile eggs had a tough","options":["shell","hat","door"],"correct":0,"explanation":"A — shell."},
          {"type":"tf","text":"Dimetrodon was a dinosaur.","options":["True","False"],"correct":1,"explanation":"False. It was not a dino."}
        ],
        elementary: [
          {"type":"mcq","text":"The big reptile invention that freed animals from water was the","options":["waterproof egg","feather","wheel","gill"],"correct":0,"explanation":"A — the waterproof egg."},
          {"type":"tf","text":"Dimetrodon was a dinosaur.","options":["True","False"],"correct":1,"explanation":"False — it lived long before the dinosaurs."}
        ],
        middle: [
          {"type":"mcq","text":"The amniotic egg let reptiles","options":["fly","breed away from water","swim","grow fur"],"correct":1,"explanation":"B — breed away from water."},
          {"type":"blank","text":"Fill in the missing word","sentence":"\"Mammal-like reptiles\" are properly called ______.","answers":["synapsids"],"explanation":"synapsids."}
        ],
        advanced: [
          {"type":"mcq","text":"In modern cladistics, the Permian synapsids are what?","options":["The stem lineage of mammals, not true reptiles","True dinosaurs","Fish","Birds"],"correct":0,"explanation":"\"Mammal-like reptiles\" is a misleading, paraphyletic old label."},
          {"type":"tf","text":"Calling synapsids \"reptiles\" is cladistically inaccurate.","options":["True","False"],"correct":0,"explanation":"True — synapsids are on the mammal line, not reptiles."}
        ]
      }
    },
    {
      title: "The Great Dying",
      slide: {"title":"The Great Dying","text":"Around 252 million years ago Earth suffered its worst disaster ever. Huge volcanoes erupted for thousands of years in what is now Siberia, pouring out gas that heated the planet and poisoned the seas.","fact":"The Great Dying killed up to 9 out of every 10 kinds of animal in the sea — it is the most severe mass extinction we know of in Earth’s history."},
      q: {
        beginner: [
          {"type":"mcq","text":"The Great Dying was caused by big","options":["volcanoes","balloons","snowmen"],"correct":0,"explanation":"A — volcanoes."},
          {"type":"tf","text":"After the Great Dying, dinosaurs came along.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"blank","text":"Fill in the missing word","sentence":"The worst mass extinction ever, about 252 million years ago, is nicknamed the \"Great ______\".","answers":["Dying","dying"],"explanation":"Dying."},
          {"type":"mcq","text":"Roughly how much ocean life died out?","options":["about a tenth","about half","up to about 90%","none"],"correct":2,"explanation":"C — up to about 90%."}
        ],
        middle: [
          {"type":"mcq","text":"The Permian–Triassic extinction is mainly blamed on","options":["an asteroid","the Siberian Traps volcanism","an ice age","hunting"],"correct":1,"explanation":"B — the Siberian Traps volcanism."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The extinction wiped out up to ______% of marine species.","answers":["90"],"explanation":"90."}
        ],
        advanced: [
          {"type":"mcq","text":"What is the consensus trigger for the end-Permian extinction?","options":["The Siberian Traps volcanism","An asteroid","An ice age","Human activity"],"correct":0,"explanation":"The Siberian Traps drove warming, acidification and anoxia ~252 Ma."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The end-Permian event ~252 Ma is nicknamed the Great ___.","answers":["Dying"],"explanation":"Up to ~90% of species were lost."}
        ]
      }
    },
    {
      title: "What Makes a Dinosaur?",
      slide: {"title":"What Makes a Dinosaur?","text":"People call all sorts of old creatures \"dinosaurs\", but the word has a precise meaning.","fact":"Pterosaurs (flyers) and plesiosaurs (swimmers) are often called dinosaurs, but they are not — a real dinosaur stood upright on land."},
      q: {
        beginner: [
          {"type":"mcq","text":"A dino's legs go","options":["straight down","out to the side","up"],"correct":0,"explanation":"A — straight down."},
          {"type":"tf","text":"Flying reptiles were dinosaurs.","options":["True","False"],"correct":1,"explanation":"False. They were not dinos."}
        ],
        elementary: [
          {"type":"mcq","text":"A key feature of dinosaurs is that their legs were","options":["held straight down under the body","sprawled out sideways","made of feathers","very short"],"correct":0,"explanation":"A — held straight down under the body."},
          {"type":"tf","text":"Flying pterosaurs were a kind of dinosaur.","options":["True","False"],"correct":1,"explanation":"False — pterosaurs were not dinosaurs."}
        ],
        middle: [
          {"type":"mcq","text":"A defining dinosaur feature is legs held","options":["sideways","directly under the body","folded up","as flippers"],"correct":1,"explanation":"B — directly under the body."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The two traditional dinosaur groups are Saurischia and ______.","answers":["Ornithischia","ornithischia"],"explanation":"Ornithischia."}
        ],
        advanced: [
          {"type":"mcq","text":"Dinosauria is diagnosed by what?","options":["Shared derived characters (synapomorphies) of hip, limb and skull","Size","Living in the Mesozoic","Being large reptiles"],"correct":0,"explanation":"This is why pterosaurs and marine reptiles are excluded."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The 2017 proposal regrouping the dinosaur tree was named ___.","answers":["Ornithoscelida","ornithoscelida"],"explanation":"Baron et al. challenged the 130-year-old Saurischia/Ornithischia split."}
        ]
      }
    },
    {
      title: "The Triassic: Dinosaurs Begin",
      slide: {"title":"The Triassic: Dinosaurs Begin","text":"The Age of Dinosaurs is called the Mesozoic era, and it is split into three periods: the Triassic, the Jurassic and the Cretaceous. The first dinosaurs appeared in the Triassic, around 230 million years ago, in what is now South America.","fact":"The very first dinosaurs were small — some no bigger than a chicken or a dog. The giant dinosaurs came many millions of years later."},
      q: {
        beginner: [
          {"type":"mcq","text":"The first dinos were","options":["small","huge","pink"],"correct":0,"explanation":"A — small."},
          {"type":"tf","text":"Big dinos came first.","options":["True","False"],"correct":1,"explanation":"False. Small ones came first."}
        ],
        elementary: [
          {"type":"blank","text":"Fill in the missing word","sentence":"The Age of Dinosaurs is called the ______ era.","answers":["Mesozoic","mesozoic"],"explanation":"Mesozoic."},
          {"type":"mcq","text":"The three periods of the dinosaur age, in order, are Triassic, then","options":["Jurassic, then Cretaceous","Cretaceous, then Jurassic","Ice Age, then Stone Age","Cambrian, then Permian"],"correct":0,"explanation":"A — Jurassic, then Cretaceous."}
        ],
        middle: [
          {"type":"mcq","text":"The first dinosaurs appear in the","options":["Early Triassic","Late Triassic","Late Jurassic","Cretaceous"],"correct":1,"explanation":"B — Late Triassic."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The three Mesozoic periods are Triassic, ______ and Cretaceous.","answers":["Jurassic","jurassic"],"explanation":"Jurassic."}
        ],
        advanced: [
          {"type":"mcq","text":"Dinosaurs originated in the Late Triassic but then what?","options":["Remained subordinate to other archosaurs for ~30 million years","Immediately dominated","Went extinct","Learned to fly"],"correct":0,"explanation":"First appearance and ecological rise are different things."},
          {"type":"tf","text":"Pseudosuchians (croc-line archosaurs) initially rivalled early dinosaurs.","options":["True","False"],"correct":0,"explanation":"True — dinosaurs only rose to dominance later."}
        ]
      }
    },
    {
      title: "The Jurassic Giants",
      slide: {"title":"The Jurassic Giants","text":"In the Jurassic period the world grew warm and green, and some dinosaurs grew to be the largest animals ever to walk the Earth. These were the sauropods — the long-necks — such as Brachiosaurus and Diplodocus. Sauropods were plant-eaters.","fact":"The biggest sauropods may have weighed around 70 tonnes — heavier than about ten African elephants put together."},
      q: {
        beginner: [
          {"type":"mcq","text":"Long-neck dinos ate","options":["leaves","rocks","cars"],"correct":0,"explanation":"A — leaves."},
          {"type":"tf","text":"Some dinos were as heavy as ten elephants.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"blank","text":"Fill in the missing word","sentence":"The giant long-necked plant-eating dinosaurs are called ______.","answers":["sauropods"],"explanation":"sauropods."},
          {"type":"mcq","text":"Sauropods used their long necks mainly to","options":["fight","reach leaves high in trees","swim","fly"],"correct":1,"explanation":"B — reach leaves high in trees."}
        ],
        middle: [
          {"type":"mcq","text":"Sauropods kept their weight down using","options":["hollow, air-filled bones","light skin","small tails","short necks"],"correct":0,"explanation":"A — hollow, air-filled bones."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Stones swallowed to grind food are called ______.","answers":["gastroliths"],"explanation":"gastroliths."}
        ],
        advanced: [
          {"type":"mcq","text":"What helped sauropods reach such enormous size?","options":["Avian-style air sacs, non-chewing bulk feeding and fast growth","Chewing every meal","Cold climates","Small guts"],"correct":0,"explanation":"Pneumatic bones evidence air-sac systems that aided their giant physiology."},
          {"type":"tf","text":"Sauropod gigantism pushes vertebrate biology to its physical limits.","options":["True","False"],"correct":0,"explanation":"True — feeding, support and oxygenation all become extreme problems."}
        ]
      }
    },
    {
      title: "The Meat-Eaters",
      slide: {"title":"The Meat-Eaters","text":"Not all dinosaurs ate plants. The theropods were the meat-eating dinosaurs, and they walked on two legs, leaving their clawed front limbs free. Most had sharp, curved teeth for slicing flesh. Theropods came in many sizes.","fact":"The real Velociraptor was only about the size of a turkey and was probably covered in feathers — quite different from the scaly giant shown in films."},
      q: {
        beginner: [
          {"type":"mcq","text":"Meat-eating dinos had sharp","options":["teeth","pillows","balloons"],"correct":0,"explanation":"A — teeth."},
          {"type":"tf","text":"Velociraptor was as big as a bus.","options":["True","False"],"correct":1,"explanation":"False. It was turkey-sized."}
        ],
        elementary: [
          {"type":"blank","text":"Fill in the missing word","sentence":"The meat-eating dinosaurs are called ______.","answers":["theropods"],"explanation":"theropods."},
          {"type":"mcq","text":"Most theropods walked on","options":["four legs","two legs","their bellies","wings"],"correct":1,"explanation":"B — two legs."}
        ],
        middle: [
          {"type":"mcq","text":"Theropod teeth were typically","options":["flat for grinding","recurved and serrated","absent","tiny pegs"],"correct":1,"explanation":"B — recurved and serrated."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Dromaeosaurs had an enlarged ______-claw on each foot.","answers":["sickle"],"explanation":"sickle."}
        ],
        advanced: [
          {"type":"mcq","text":"Feathered theropod fossils from China’s Jehol Biota did what?","options":["Reframed theropods as often feathered and bird-like","Proved dinosaurs were fish","Disproved evolution","Showed they were mammals"],"correct":0,"explanation":"They cemented the dinosaur–bird link."},
          {"type":"tf","text":"Popular \"raptors\" were likely more feathered than films depict.","options":["True","False"],"correct":0,"explanation":"True — evidence points to feathered, bird-like animals."}
        ]
      }
    },
    {
      title: "Tyrannosaurus rex",
      slide: {"title":"Tyrannosaurus rex","text":"The most famous dinosaur of all is Tyrannosaurus rex, whose name means \"tyrant lizard king\". It lived right at the end of the Cretaceous period, about 68 to 66 million years ago, in North America. T.","fact":"A T. rex tooth could be over 20 centimetres long including the root, and its bite may have been strong enough to crush a car."},
      q: {
        beginner: [
          {"type":"mcq","text":"T. rex had teeth as big as a","options":["banana","pea","crumb"],"correct":0,"explanation":"A — banana."},
          {"type":"tf","text":"T. rex had big strong arms.","options":["True","False"],"correct":1,"explanation":"False. Its arms were tiny."}
        ],
        elementary: [
          {"type":"blank","text":"Fill in the missing word","sentence":"The name Tyrannosaurus rex means \"tyrant lizard ______\".","answers":["king"],"explanation":"king."},
          {"type":"mcq","text":"T. rex lived at the end of which period?","options":["Triassic","Jurassic","Cretaceous","Cambrian"],"correct":2,"explanation":"C — Cretaceous."}
        ],
        middle: [
          {"type":"mcq","text":"T. rex lived during the","options":["Triassic","Early Jurassic","latest Cretaceous","Ice Age"],"correct":2,"explanation":"C — latest Cretaceous."},
          {"type":"blank","text":"Fill in the missing word","sentence":"T. rex lived roughly ______–66 million years ago.","answers":["68"],"explanation":"68."}
        ],
        advanced: [
          {"type":"mcq","text":"The T. rex predator-vs-scavenger debate is now largely resolved as what?","options":["A facultative predator-scavenger","A pure scavenger","A plant-eater","A fish"],"correct":0,"explanation":"It both hunted and scavenged, as tested against sensory and biomechanical evidence."},
          {"type":"tf","text":"A striking hypothesis (pure scavenger) proved useful even though it was largely rejected.","options":["True","False"],"correct":0,"explanation":"True — it forced rigorous testing."}
        ]
      }
    },
    {
      title: "Armoured",
      slide: {"title":"Armoured","text":"Plant-eating dinosaurs could not run fast enough to escape a hungry T. rex, so many grew their own armour and weapons instead. These defences are some of the most spectacular features in the whole dinosaur world.","fact":"The spikes on the tail of Stegosaurus have a funny nickname — the \"thagomizer\" — which actually came from a newspaper cartoon."},
      q: {
        beginner: [
          {"type":"mcq","text":"How many horns did Triceratops have?","options":["three","one","ten"],"correct":0,"explanation":"A — three."},
          {"type":"tf","text":"Some plant dinos had spikes and armour.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"mcq","text":"Which dinosaur had three horns and a bony neck frill?","options":["Stegosaurus","Triceratops","Diplodocus","Velociraptor"],"correct":1,"explanation":"B — Triceratops."},
          {"type":"blank","text":"Fill in the missing word","sentence":"______ was like a living tank, with a heavy bony club on its tail.","answers":["Ankylosaurus","ankylosaurus"],"explanation":"Ankylosaurus."}
        ],
        middle: [
          {"type":"mcq","text":"An ankylosaur's main defensive weapon was its","options":["horns","bony tail club","frill","plates"],"correct":1,"explanation":"B — bony tail club."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Triceratops belongs to the horned group called ______.","answers":["ceratopsians"],"explanation":"ceratopsians."}
        ],
        advanced: [
          {"type":"mcq","text":"Horns, frills and plates are now thought to be primarily for what?","options":["Display and species recognition","Only defence","Flight","Digestion"],"correct":0,"explanation":"Socio-sexual signalling is the leading interpretation, with defence secondary."},
          {"type":"tf","text":"Interpreting dinosaur ornamentation involves weighing defence vs display vs thermoregulation.","options":["True","False"],"correct":0,"explanation":"True — a genuine interpretive problem."}
        ]
      }
    },
    {
      title: "The Cretaceous World",
      slide: {"title":"The Cretaceous World","text":"The Cretaceous was the last and longest period of the dinosaur age, lasting until 66 million years ago. During it the world changed in a very important way: the first flowering plants appeared, adding colour and fruit to a world that had been mostly green.","fact":"Flowers are surprisingly recent — for most of the dinosaur age there were no flowering plants at all; they only spread widely in the Cretaceous."},
      q: {
        beginner: [
          {"type":"mcq","text":"The first ______ grew in the last dino time.","options":["flowers","phones","shoes"],"correct":0,"explanation":"A — flowers."},
          {"type":"tf","text":"There were always flowers, even in early dino time.","options":["True","False"],"correct":1,"explanation":"False. Flowers came late."}
        ],
        elementary: [
          {"type":"mcq","text":"A big new kind of plant that appeared in the Cretaceous was the","options":["fern","flowering plant","moss","pine tree"],"correct":1,"explanation":"B — flowering plant."},
          {"type":"tf","text":"The Cretaceous was the last period of the dinosaur age.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        middle: [
          {"type":"mcq","text":"The major plant group that rose in the Cretaceous was the","options":["ferns","angiosperms (flowering plants)","mosses","conifers"],"correct":1,"explanation":"B — angiosperms."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Duck-billed herding dinosaurs were the ______.","answers":["hadrosaurs"],"explanation":"hadrosaurs."}
        ],
        advanced: [
          {"type":"mcq","text":"The \"were dinosaurs declining before the impact?\" debate depends heavily on what?","options":["Correcting for sampling bias in an uneven fossil record","The colour of fossils","Museum funding","Human opinion polls"],"correct":0,"explanation":"A few well-sampled formations dominate the record, biasing the answer."},
          {"type":"tf","text":"Sampling bias can make a group falsely appear to decline in the fossil record.","options":["True","False"],"correct":0,"explanation":"True — uneven preservation distorts diversity curves."}
        ]
      }
    },
    {
      title: "Rulers of the Sky",
      slide: {"title":"Rulers of the Sky","text":"While dinosaurs ruled the land, the skies belonged to the pterosaurs — flying reptiles. Remember: pterosaurs were NOT dinosaurs, but they were close cousins that lived at the same time.","fact":"Quetzalcoatlus had a wingspan of around 10–11 metres — about the same as a small plane — yet it could still fly."},
      q: {
        beginner: [
          {"type":"mcq","text":"Pterosaurs flew in the","options":["sky","sea","sand"],"correct":0,"explanation":"A — sky."},
          {"type":"tf","text":"Pterosaurs were dinosaurs.","options":["True","False"],"correct":1,"explanation":"False. They were not dinos."}
        ],
        elementary: [
          {"type":"tf","text":"Pterosaurs were dinosaurs.","options":["True","False"],"correct":1,"explanation":"False — they were flying reptiles, close cousins of dinosaurs."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A pterosaur’s wing was made of skin held out by a very long ______ (finger).","answers":["fourth finger"],"explanation":"fourth finger."}
        ],
        middle: [
          {"type":"mcq","text":"Pterosaurs were the first vertebrates to achieve","options":["swimming","powered flight","walking","burrowing"],"correct":1,"explanation":"B — powered flight."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A pterosaur's wing was supported by an elongated ______ finger.","answers":["fourth"],"explanation":"fourth."}
        ],
        advanced: [
          {"type":"mcq","text":"Why is so much about pterosaurs uncertain?","options":["Their fragile hollow bones preserve poorly","They never existed","They were mammals","They left no fossils at all"],"correct":0,"explanation":"Launch mechanics and wing structure are reconstructed from scarce, delicate remains."},
          {"type":"tf","text":"Pterosaurs were flying reptiles, not dinosaurs.","options":["True","False"],"correct":0,"explanation":"True — a key classification point."}
        ]
      }
    },
    {
      title: "Monsters of the Sea",
      slide: {"title":"Monsters of the Sea","text":"The oceans of the dinosaur age were full of huge reptiles — but, like the pterosaurs, these sea monsters were not dinosaurs either. They were separate groups of reptiles that had gone back to living in the water.","fact":"Ichthyosaurs breathed air and gave birth to live babies in the water, just like dolphins do today — even though they were reptiles, not mammals."},
      q: {
        beginner: [
          {"type":"mcq","text":"The big sea reptiles ate","options":["fish","leaves","rocks"],"correct":0,"explanation":"A — fish."},
          {"type":"tf","text":"The sea reptiles were dinosaurs.","options":["True","False"],"correct":1,"explanation":"False. They were not dinos."}
        ],
        elementary: [
          {"type":"mcq","text":"Which sea reptile looked most like a dolphin?","options":["plesiosaur","ichthyosaur","mosasaur","pterosaur"],"correct":1,"explanation":"B — ichthyosaur."},
          {"type":"tf","text":"The big sea reptiles of the dinosaur age were dinosaurs.","options":["True","False"],"correct":1,"explanation":"False — they were separate groups of reptiles."}
        ],
        middle: [
          {"type":"mcq","text":"Ichthyosaurs resembling dolphins is an example of ______ evolution.","options":["reverse","convergent","backward","no"],"correct":1,"explanation":"B — convergent."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Giant Cretaceous sea lizards were the ______.","answers":["mosasaurs"],"explanation":"mosasaurs."}
        ],
        advanced: [
          {"type":"mcq","text":"Cuvier’s early-1800s work on marine reptiles helped establish which radical idea?","options":["That species could go extinct","That Earth is flat","That fossils are fake","That reptiles fly"],"correct":0,"explanation":"Extinction was then a new and controversial concept."},
          {"type":"tf","text":"Ichthyosaurs, plesiosaurs and mosasaurs were marine reptiles, not dinosaurs.","options":["True","False"],"correct":0,"explanation":"True — they show convergent evolution with fish and whales."}
        ]
      }
    },
    {
      title: "How Dinosaurs Lived",
      slide: {"title":"How Dinosaurs Lived","text":"Fossils tell us more than what dinosaurs looked like — they hint at how dinosaurs behaved. Trackways of footprints show that some plant-eaters travelled together in herds, probably for safety, with the young kept in the middle.","fact":"Oviraptor means \"egg thief\", but it was given that name by mistake — the eggs it was found with turned out to be its own."},
      q: {
        beginner: [
          {"type":"mcq","text":"Some dinos walked together in a","options":["group","box","car"],"correct":0,"explanation":"A — group."},
          {"type":"tf","text":"Some dinos made nests for their eggs.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"mcq","text":"Fossil footprints that travel together suggest some dinosaurs lived in","options":["herds","cages","the sea","space"],"correct":0,"explanation":"A — herds."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Oviraptor’s name means \"egg ______\", but it was actually guarding its own nest.","answers":["thief"],"explanation":"thief."}
        ],
        middle: [
          {"type":"mcq","text":"Parallel trackways are evidence that some dinosaurs","options":["could fly","moved in herds","lived underwater","were nocturnal"],"correct":1,"explanation":"B — moved in herds."},
          {"type":"blank","text":"Fill in the missing word","sentence":"\"Good mother lizard\", ______, nested in colonies.","answers":["Maiasaura","maiasaura"],"explanation":"Maiasaura."}
        ],
        advanced: [
          {"type":"mcq","text":"The \"dinosaur renaissance\" (Ostrom, Bakker) overturned which view?","options":["That dinosaurs were sluggish, cold-blooded reptiles","That birds exist","That fossils form","That Earth is old"],"correct":0,"explanation":"It argued for active, possibly endothermic animals, backed by bone histology."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Fast-growth signals in fossil bone are read from bone ___.","answers":["histology"],"explanation":"Histology (microscopic bone structure) informs the metabolism debate."}
        ]
      }
    },
    {
      title: "Feathers",
      slide: {"title":"Feathers","text":"One of the biggest discoveries in modern science is that many dinosaurs were covered in feathers. Beautiful fossils from China show small theropods with feathery coats, probably used at first for warmth and for showing off, not for flying.","fact":"The chicken in a farmyard is a living dinosaur — birds are the direct descendants of small feathered theropods."},
      q: {
        beginner: [
          {"type":"mcq","text":"Many dinos were covered in","options":["feathers","fur","scales only"],"correct":0,"explanation":"A — feathers."},
          {"type":"tf","text":"Birds today came from dinosaurs.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"tf","text":"Many dinosaurs were covered in feathers.","options":["True","False"],"correct":0,"explanation":"True."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The fossil ______ was half dinosaur and half bird.","answers":["Archaeopteryx","archaeopteryx"],"explanation":"Archaeopteryx."}
        ],
        middle: [
          {"type":"mcq","text":"Feathers first evolved in theropods for","options":["flight","insulation and display","swimming","digging"],"correct":1,"explanation":"B — insulation and display."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The transitional bird-dinosaur ______ had both feathers and teeth.","answers":["Archaeopteryx","archaeopteryx"],"explanation":"Archaeopteryx."}
        ],
        advanced: [
          {"type":"mcq","text":"What decisive evidence supported \"birds are living dinosaurs\"?","options":["A flood of feathered theropods from the Jehol Biota","A single bird bone","Ancient DNA","Cave paintings"],"correct":0,"explanation":"Ostrom’s Deinonychus work plus feathered fossils revived Huxley’s idea."},
          {"type":"tf","text":"The bird–dinosaur consensus was hard-won, not immediate.","options":["True","False"],"correct":0,"explanation":"True — it took decades of accumulating evidence."}
        ]
      }
    },
    {
      title: "The Day the Dinosaurs Died",
      slide: {"title":"The Day the Dinosaurs Died","text":"About 66 million years ago the age of dinosaurs came to a sudden, violent end. A giant asteroid, around 10 to 15 kilometres wide, smashed into the Earth near what is now Mexico, blasting out a crater over 150 kilometres across called Chicxulub.","fact":"The asteroid that ended the dinosaurs hit with the force of billions of atomic bombs and left a crater more than 150 kilometres wide."},
      q: {
        beginner: [
          {"type":"mcq","text":"What crashed into Earth?","options":["a space rock","a cloud","a leaf"],"correct":0,"explanation":"A — a space rock."},
          {"type":"tf","text":"Dust hid the sun after the crash.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"mcq","text":"The dinosaurs’ age ended about ______ million years ago.","options":["252","150","66","10"],"correct":2,"explanation":"C — 66."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The giant crater left by the asteroid is called ______.","answers":["Chicxulub","chicxulub"],"explanation":"Chicxulub."}
        ],
        middle: [
          {"type":"mcq","text":"The K–Pg extinction's main trigger was","options":["an ice age","an asteroid impact at Chicxulub","the Great Dying","hunting"],"correct":1,"explanation":"B — an asteroid impact at Chicxulub."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The metal ______, common in asteroids, marks the K–Pg boundary clay.","answers":["iridium"],"explanation":"iridium."}
        ],
        advanced: [
          {"type":"mcq","text":"The Alvarez impact hypothesis (1980) was first built on what evidence?","options":["A global iridium anomaly","The Chicxulub crater","Dinosaur footprints","Ice cores"],"correct":0,"explanation":"The crater was found later, vindicating the initially-resisted idea."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The impact crater that confirmed the hypothesis is called ___.","answers":["Chicxulub","chicxulub"],"explanation":"Its discovery turned a radical hypothesis into consensus."}
        ]
      }
    },
    {
      title: "After the Dinosaurs",
      slide: {"title":"After the Dinosaurs","text":"With the giant dinosaurs gone, the world was suddenly empty of big animals. This was a huge opportunity for one small group that had lived quietly in the dinosaurs’ shadow for millions of years: the mammals.","fact":"For a while after the dinosaurs, some of the top predators were giant flightless \"terror birds\" — meaning birds briefly became the hunters again."},
      q: {
        beginner: [
          {"type":"mcq","text":"After the dinos, which animals grew big?","options":["mammals","fish","bugs"],"correct":0,"explanation":"A — mammals."},
          {"type":"tf","text":"Mammals are furry animals.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"mcq","text":"Which group became large and successful after the dinosaurs died out?","options":["mammals","trilobites","pterosaurs","ammonites"],"correct":0,"explanation":"A — mammals."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The age after the dinosaurs is called the \"Age of ______\".","answers":["Mammals","mammals"],"explanation":"Mammals."}
        ],
        middle: [
          {"type":"mcq","text":"Before the extinction, most mammals were","options":["large grazers","small nocturnal insectivores","marine","flying"],"correct":1,"explanation":"B — small nocturnal insectivores."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The age after the dinosaurs is the ______ era, the \"Age of Mammals\".","answers":["Cenozoic","cenozoic"],"explanation":"Cenozoic."}
        ],
        advanced: [
          {"type":"mcq","text":"The debate over the Cenozoic mammal radiation concerns what?","options":["Whether orders diversified explosively after, or well before, the K–Pg","Whether mammals exist","The colour of fur","Where museums are"],"correct":0,"explanation":"\"Explosive\" vs \"long-fuse\" models disagree on timing."},
          {"type":"tf","text":"Adaptive radiation means diversifying rapidly into empty ecological space.","options":["True","False"],"correct":0,"explanation":"True — mammals filled niches left by non-avian dinosaurs."}
        ]
      }
    },
    {
      title: "Ice Age Giants",
      slide: {"title":"Ice Age Giants","text":"Long after the dinosaurs, but still long before writing was invented, the world entered a series of ice ages. Great sheets of ice spread across the land, and animals grew thick fur and large bodies to survive the cold.","fact":"Some frozen woolly mammoths are so well preserved that scientists have found the food still inside their stomachs, tens of thousands of years later."},
      q: {
        beginner: [
          {"type":"mcq","text":"The woolly mammoth was like a furry","options":["elephant","fish","bird"],"correct":0,"explanation":"A — elephant."},
          {"type":"tf","text":"The Ice Age was very cold.","options":["True","False"],"correct":0,"explanation":"True."}
        ],
        elementary: [
          {"type":"blank","text":"Fill in the missing word","sentence":"The shaggy, ice-age relative of the elephant was the woolly ______.","answers":["mammoth"],"explanation":"mammoth."},
          {"type":"mcq","text":"The sabre-toothed cat is famous for its huge","options":["ears","stabbing fangs","wings","shell"],"correct":1,"explanation":"B — stabbing fangs."}
        ],
        middle: [
          {"type":"mcq","text":"Larger bodies in cold climates conserve heat better — this is ______'s rule.","options":["Newton","Bergmann","Darwin","Anning"],"correct":1,"explanation":"B — Bergmann's."},
          {"type":"blank","text":"Fill in the missing word","sentence":"The sabre-toothed cat is scientifically named ______.","answers":["Smilodon","smilodon"],"explanation":"Smilodon."}
        ],
        advanced: [
          {"type":"mcq","text":"The Late-Quaternary megafauna debate weighs which main causes?","options":["Climate change vs human \"overkill\" vs a combination","Asteroids vs volcanoes","Disease vs floods only","None are known"],"correct":0,"explanation":"Losses concentrated in large species, often coinciding with human arrival."},
          {"type":"tf","text":"Megafaunal extinctions may have multiple interacting causes.","options":["True","False"],"correct":0,"explanation":"True — climate and humans likely combined."}
        ]
      }
    },
    {
      title: "Paleontology Today",
      slide: {"title":"Paleontology Today","text":"Palaeontology is a science that is still full of discoveries. New kinds of dinosaur are named on average around once a week, from digs all over the world, and each one adds a fresh piece to the puzzle of ancient life. New tools keep changing what we can learn.","fact":"On average a brand-new species of dinosaur is discovered and named roughly once every week or two — the age of discovery is far from over."},
      q: {
        beginner: [
          {"type":"mcq","text":"People find new dinos","options":["all the time","never","once ever"],"correct":0,"explanation":"A — all the time."},
          {"type":"tf","text":"There are no more dinos to find.","options":["True","False"],"correct":1,"explanation":"False. Lots more to find!"}
        ],
        elementary: [
          {"type":"tf","text":"Almost all dinosaurs have already been discovered, so new ones are never found.","options":["True","False"],"correct":1,"explanation":"False — new species are found very often."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Tiny fossil structures can now sometimes tell us a dinosaur’s ______.","answers":["colours"],"explanation":"colours (colour)."}
        ],
        middle: [
          {"type":"mcq","text":"Fossil ______ let scientists reconstruct some dinosaurs' colours.","options":["melanosomes","muscles","teeth","footprints"],"correct":0,"explanation":"A — melanosomes."},
          {"type":"blank","text":"Fill in the missing word","sentence":"A new dinosaur species is named roughly once every ______ or two.","answers":["week"],"explanation":"week."}
        ],
        advanced: [
          {"type":"mcq","text":"What remains palaeontology’s defining epistemic condition?","options":["The incompleteness of the fossil record","Too many fossils","No technology","Perfect knowledge"],"correct":0,"explanation":"Even quantitative, interdisciplinary methods work within an incomplete record."},
          {"type":"blank","text":"Fill in the missing word","sentence":"Fossil ___ can now sometimes be inferred from melanosome geometry.","answers":["colour","color"],"explanation":"Melanosome shape lets scientists reconstruct some dinosaurs’ colours."}
        ]
      }
    }
  ]
};
