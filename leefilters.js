const leeFilters = [
  {
    link: "https://leefilters.com/colour/003-lavender-tint/",
    name: "003 Lavender Tint",
    description: "Subtle cool wash for stage and studio lighting.",
    leeCode: "003",
    colorCode: "#FAF0FA",
  },
  {
    link: "https://leefilters.com/colour/004-medium-bastard-amber/",
    name: "004 Medium Bastard Amber",
    description: "Naturally enhances skin tones.",
    leeCode: "004",
    colorCode: "#FFC8B4",
  },
  {
    link: "https://leefilters.com/colour/007-pale-yellow/",
    name: "007 Pale Yellow",
    description: "Sunlight.",
    leeCode: "007",
    colorCode: "#FAFAD2",
  },
  {
    link: "https://leefilters.com/colour/008-dark-salmon/",
    name: "008 Dark Salmon",
    description: "Enhances dark skin tones, sunsets, ballroom sets.",
    leeCode: "008",
    colorCode: "#FC9B80",
  },
  {
    link: "https://leefilters.com/colour/009-pale-amber-gold/",
    name: "009 Pale Amber Gold",
    description: "Perfect warm front light for any skin tone.",
    leeCode: "009",
    colorCode: "#FCD7B3",
  },
  {
    link: "https://leefilters.com/colour/010-medium-yellow/",
    name: "010 Medium Yellow",
    description:
      "A pure bright yellow. Great for special effects and accents. Use with caution in acting areas.",
    leeCode: "010",
    colorCode: "#FFFF00",
  },
  {
    link: "https://leefilters.com/colour/013-straw-tint/",
    name: "013 Straw Tint",
    description:
      "Warmer than other straw colours. A good sunlight effect when used in contrast with ambers and blues.",
    leeCode: "013",
    colorCode: "#FCD89B",
  },
  {
    link: "https://leefilters.com/colour/015-deep-straw/",
    name: "015 Deep Straw",
    description:
      "A warm amber light. Good for effects such as candlelight and fire.",
    leeCode: "015",
    colorCode: "#FFCD00",
  },
  {
    link: "https://leefilters.com/colour/017-surprise-peach/",
    name: "017 Surprise Peach",
    description: "Good for skin tones and creating a moody lighting effect.",
    leeCode: "017",
    colorCode: "#E68C64",
  },
  {
    link: "https://leefilters.com/colour/019-fire/",
    name: "019 Fire",
    description: "A strong red/amber. Great for fire effects.",
    leeCode: "019",
    colorCode: "#FF4600",
  },
  {
    link: "https://leefilters.com/colour/020-medium-amber/",
    name: "020 Medium Amber",
    description:
      "Good for afternoon sunlight and candlelight. Also great for side lighting.",
    leeCode: "020",
    colorCode: "#FFBE55",
  },
  {
    link: "https://leefilters.com/colour/021-gold-amber/",
    name: "021 Gold Amber",
    description: "Great for sunsets, cyclorama lighting and fire effects.",
    leeCode: "021",
    colorCode: "#FF8C32",
  },
  {
    link: "https://leefilters.com/colour/022-dark-amber/",
    name: "022 Dark Amber",
    description: "A good backlight.",
    leeCode: "022",
    colorCode: "#FF6900",
  },
  {
    link: "https://leefilters.com/colour/024-scarlet/",
    name: "024 Scarlet",
    description: "Great for pantomimes, ballroom sets and fire effects.",
    leeCode: "024",
    colorCode: "#FF5A64",
  },
  {
    link: "https://leefilters.com/colour/025-sunset-red/",
    name: "025 Sunset Red",
    description: "A good warm stage wash, TV studio wash or sunset effect.",
    leeCode: "025",
    colorCode: "#FF6E46",
  },
  {
    link: "https://leefilters.com/colour/026-bright-red/",
    name: "026 Bright Red",
    description: "A vibrant red, good for cyclorama lighting.",
    leeCode: "026",
    colorCode: "#E6003C",
  },
  {
    link: "https://leefilters.com/colour/027-medium-red/",
    name: "027 Medium Red",
    description:
      "Good for cyclorama lighting, side lighting and footlights. Also good for colour mixing.",
    leeCode: "027",
    colorCode: "#C8003C",
  },
  {
    link: "https://leefilters.com/colour/029-plasa-red/",
    name: "029 Plasa Red",
    description: "Good for fire effects, musicals and cycloramas.",
    leeCode: "029",
    colorCode: "#E1003C",
  },
  {
    link: "https://leefilters.com/colour/035-light-pink/",
    name: "035 Light Pink",
    description: "A warm wash good for musical reviews.",
    leeCode: "035",
    colorCode: "#FFC8D2",
  },
  {
    link: "https://leefilters.com/colour/036-medium-pink/",
    name: "036 Medium Pink",
    description: "Good for general washes and side lighting.",
    leeCode: "036",
    colorCode: "#FFA0B9",
  },
  {
    link: "https://leefilters.com/colour/046-dark-magenta/",
    name: "046 Dark Magenta",
    description: "A very strong pink, good for backlighting.",
    leeCode: "046",
    colorCode: "#DC005A",
  },
  {
    link: "https://leefilters.com/colour/048-rose-purple/",
    description: "Good for emulating evening. Great backlight.",
    leeCode: "048",
    colorCode: "#E66EAF",
  },
  {
    link: "https://leefilters.com/colour/049-medium-purple/",
    description: "A strong cheerful glow, good for cycloramas and pantomimes.",
    leeCode: "049",
    colorCode: "#BE0091",
  },
  {
    link: "https://leefilters.com/colour/052-light-lavender/",
    name: "052 Light Lavender",
    description:
      "Good for general areas and side lights. Great for a basic followspot colour as well as an excellent backlight.",
    leeCode: "052",
    colorCode: "#E6AAFA",
  },
  {
    link: "https://leefilters.com/colour/053-paler-lavender/",
    name: "053 Paler Lavender",
    description: "A subtle cool wash.",
    leeCode: "053",
    colorCode: "#E6E6FA",
  },
  {
    link: "https://leefilters.com/colour/058-lavender/",
    name: "058 Lavender",
    description: "An excellent backlight that creates a new dimension.",
    leeCode: "058",
    colorCode: "#B46EF0",
  },
  {
    link: "https://leefilters.com/colour/061-mist-blue/",
    name: "061 Mist Blue",
    description: "A cool wash good for night scenes.",
    leeCode: "061",
    colorCode: "#DCF5FF",
  },
  {
    link: "https://leefilters.com/colour/063-pale-blue/",
    name: "063 Pale Blue",
    description:
      "Cool front light wash, good for creating an overcast look for cold weather.",
    leeCode: "063",
    colorCode: "#D2F5FF",
  },
  {
    link: "https://leefilters.com/colour/068-sky-blue/",
    name: "068 Sky Blue",
    description:
      "Good for morning skin tones and night skies. Great for cyclorama lights.",
    leeCode: "068",
    colorCode: "#46B4F0",
  },
  {
    link: "https://leefilters.com/colour/071-tokyo-blue/",
    name: "071 Tokyo Blue",
    description:
      "A deep blue, used for midnight scenes and cyclorama lighting.",
    leeCode: "071",
    colorCode: "#0000B4",
  },
  {
    link: "https://leefilters.com/colour/075-evening-blue/",
    name: "075 Evening Blue",
    description: "Good for night scenes and romantic moonlight.",
    leeCode: "075",
    colorCode: "#64A0F0",
  },
  {
    link: "https://leefilters.com/colour/079-just-blue/",
    name: "079 Just Blue",
    description: "A good colour mixing blue. Great for cyclorama lighting.",
    leeCode: "079",
    colorCode: "#3C8CD2",
  },
  {
    link: "https://leefilters.com/colour/085-deeper-blue/",
    name: "085 Deeper Blue",
    description: "A deep warm blue. Good for back and side lighting.",
    leeCode: "085",
    colorCode: "#006EB9",
  },
  {
    link: "https://leefilters.com/colour/088-lime-green/",
    name: "088 Lime Green",
    description:
      "Use with gobos for leafy glades. Good for pantomimes, giving a slightly sinister atmosphere.",
    leeCode: "088",
    colorCode: "#DCFF64",
  },
  {
    link: "https://leefilters.com/colour/089-moss-green/",
    name: "089 Moss Green",
    description:
      "Good mood creator. Used with gobos, creates a great foliage effect.",
    leeCode: "089",
    colorCode: "#5ADC5A",
  },
  {
    link: "https://leefilters.com/colour/090-dark-yellow-green/",
    name: "090 Dark Yellow Green",
    description: "Highlighting for forest effects.",
    leeCode: "090",
    colorCode: "#00BE00",
  },
  {
    link: "https://leefilters.com/colour/100-spring-yellow/",
    name: "100 Spring Yellow",
    description: "A sunlight wash – use with gobos, disco and dark skin tones.",
    leeCode: "100",
    colorCode: "#F5FF00",
  },
  {
    link: "https://leefilters.com/colour/101-yellow/",
    name: "101 Yellow",
    description: "Sunlight and window effect – pleasant in acting areas.",
    leeCode: "101",
    colorCode: "#FFF500",
  },
  {
    link: "https://leefilters.com/colour/102-light-amber/",
    name: "102 Light Amber",
    description:
      "A warm yellow colour. Great for candlelight or warm bright sunlight effects.",
    leeCode: "102",
    colorCode: "#FFDC5F",
  },
  {
    link: "https://leefilters.com/colour/103-straw/",
    name: "103 Straw",
    description:
      "Pale sunlight through a window and a good warm winter effect.",
    leeCode: "103",
    colorCode: "#FCEACC",
  },
  {
    link: "https://leefilters.com/colour/104-deep-amber/",
    name: "104 Deep Amber",
    description:
      "Good for sunlight effect, accents and side light. Be careful of skin tones under the reddish tint of this colour.",
    leeCode: "104",
    colorCode: "#FFDC00",
  },
  {
    link: "https://leefilters.com/colour/105-orange/",
    name: "105 Orange",
    description:
      "Good for light entertainment and functions. Creates a good fire effect when used with 106 or 104.",
    leeCode: "105",
    colorCode: "#FFA000",
  },
  {
    link: "https://leefilters.com/colour/106-primary-red/",
    name: "106 Primary Red",
    description: "Strong red effect. Good with cyclorama lighting.",
    leeCode: "106",
    colorCode: "#F00032",
  },
  {
    link: "https://leefilters.com/colour/107-light-rose/",
    name: "107 Light Rose",
    description: "Good for general washes and followspots.",
    leeCode: "107",
    colorCode: "#FFA5AF",
  },
  {
    link: "https://leefilters.com/colour/108-english-rose/",
    name: "108 English Rose",
    description: "Warm tint wash. Dark flesh tones and softer skin tones.",
    leeCode: "108",
    colorCode: "#FCBEA9",
  },
  {
    link: "https://leefilters.com/colour/109-light-salmon/",
    name: "109 Light Salmon",
    description: "Interesting backlight.",
    leeCode: "109",
    colorCode: "#FFB2AF",
  },
  {
    link: "https://leefilters.com/colour/110-middle-rose/",
    name: "110 Middle Rose",
    description: "Pleasing effects for theatrical lighting.",
    leeCode: "110",
    colorCode: "#FFB4C8",
  },
  {
    link: "https://leefilters.com/colour/111-dark-pink/",
    name: "111 Dark Pink",
    description: "Good for cyclorama lighting.",
    leeCode: "111",
    colorCode: "#FF8CBE",
  },
  {
    link: "https://leefilters.com/colour/113-magenta/",
    name: "113 Magenta",
    description: "Very strong – used carefully for small areas on set.",
    leeCode: "113",
    colorCode: "#FF0064",
  },
  {
    link: "https://leefilters.com/colour/115-peacock-blue/",
    name: "115 Peacock Blue",
    description:
      "A pleasing effect on set Good for cyclorama and backlighting (e.g. ice rinks, galas, etc).",
    leeCode: "115",
    colorCode: "#00EBC8",
  },
  {
    link: "https://leefilters.com/colour/116-medium-blue-green/",
    name: "116 Medium Blue-Green",
    description: "A pleasing effect for theatrical lighting.",
    leeCode: "116",
    colorCode: "#00C8B9",
  },
  {
    link: "https://leefilters.com/colour/117-steel-blue/",
    name: "117 Steel Blue",
    description:
      "Good for cool washes. Adds a pale green tint. Great for emulating icy weather on stage.",
    leeCode: "117",
    colorCode: "#B4FAF5",
  },
  {
    link: "https://leefilters.com/colour/118-light-blue/",
    name: "118 Light Blue",
    description: "A strong night effect.",
    leeCode: "118",
    colorCode: "#00E1EB",
  },
  {
    link: "https://leefilters.com/colour/119-dark-blue/",
    name: "119 Dark Blue",
    description:
      "Good for mood effects created by backlighting and side lighting. Creates great contrast.",
    leeCode: "119",
    colorCode: "#0078C8",
  },
  {
    link: "https://leefilters.com/colour/120-deep-blue/",
    name: "120 Deep Blue",
    description: "A pleasing effect for theatrical lighting.",
    leeCode: "120",
    colorCode: "#005FBE",
  },
  {
    link: "https://leefilters.com/colour/121-lee-green/",
    name: "121 LEE Green",
    description: "Good for dense foliage, tropical jungle or woodland effect.",
    leeCode: "121",
    colorCode: "#B4FF64",
  },
  {
    link: "https://leefilters.com/colour/122-fern-green/",
    name: "122 Fern Green",
    description: "Good for cycloramas and creates a great mood effect.",
    leeCode: "122",
    colorCode: "#78FA6E",
  },
  {
    link: "https://leefilters.com/colour/124-dark-green/",
    name: "124 Dark Green",
    description: "Good for cycloramas and backlighting.",
    leeCode: "124",
    colorCode: "#00DC78",
  },
  {
    description:
      "Good for backlighting. Dark magenta / purple adds drama and mood.",
    leeCode: "126",
    colorCode: "#BE009B",
  },
  {
    link: "https://leefilters.com/colour/127-smokey-pink/",
    name: "127 Smokey Pink",
    description: "Good for cycloramas, set lighting and discos.",
    leeCode: "127",
    colorCode: "#E16273",
  },
  {
    link: "https://leefilters.com/colour/128-bright-pink/",
    name: "128 Bright Pink",
    description:
      "Created for use as backlighting and side lighting. Great for musicals.",
    leeCode: "128",
    colorCode: "#FF50B4",
  },
  {
    link: "https://leefilters.com/colour/130-clear/",
    name: "130 Clear",
    description: "Used in animation and projection work.",
    leeCode: "130",
    colorCode: "#FFFFFF",
  },
  {
    link: "https://leefilters.com/colour/131-marine-blue/",
    name: "131 Marine Blue",
    description:
      "Good for romantic moonlight. Often used in ballet and underwater scenes.",
    leeCode: "131",
    colorCode: "#64FAD2",
  },
  {
    link: "https://leefilters.com/colour/132-medium-blue/",
    name: "132 Medium Blue",
    description: "Deep moonlight. Great for colour mixing.",
    leeCode: "132",
    colorCode: "#00A0DC",
  },
  {
    link: "https://leefilters.com/colour/134-golden-amber/",
    name: "134 Golden Amber",
    description:
      "Great for emulating a sunset. Also good for side lighting and cyclorama lighting.",
    leeCode: "134",
    colorCode: "#FAA873",
  },
  {
    link: "https://leefilters.com/colour/135-deep-golden-amber/",
    name: "135 Deep Golden Amber",
    description: "A great fire effect.",
    leeCode: "135",
    colorCode: "#FF5F00",
  },
  {
    link: "https://leefilters.com/colour/136-pale-lavender/",
    name: "136 Pale Lavender",
    description:
      "Great for pantomimes and ballroom sets. Also enhances dark skin tones in follow spots.",
    leeCode: "136",
    colorCode: "#F0BEE6",
  },
  {
    link: "https://leefilters.com/colour/137-special-lavender/",
    name: "137 Special Lavender",
    description:
      "Good for moonlight and musical / romantic scenes. Enhances skin tones.",
    leeCode: "137",
    colorCode: "#C8B4E6",
  },
  {
    link: "https://leefilters.com/colour/138-pale-green/",
    name: "138 Pale Green",
    description: "Good with gobos for wooded scenes.",
    leeCode: "138",
    colorCode: "#DCFFA0",
  },
  {
    link: "https://leefilters.com/colour/139-primary-green/",
    name: "139 Primary Green",
    description: "Good for set lighting and cyclorama lighting.",
    leeCode: "139",
    colorCode: "#4BC300",
  },
  {
    link: "https://leefilters.com/colour/140-summer-blue/",
    name: "140 Summer Blue",
    description: "Good for light midday sky. Light blue tinted wash.",
    leeCode: "140",
    colorCode: "#87F0EB",
  },
  {
    link: "https://leefilters.com/colour/141-bright-blue/",
    name: "141 Bright Blue",
    description: "Very dramatic when used as moonlight.",
    leeCode: "141",
    colorCode: "#00D2E6",
  },
  {
    link: "https://leefilters.com/colour/142-pale-violet/",
    name: "142 Pale Violet",
    description:
      "Great Moonlight effect. Good for cyclorama lighting and highlighting foliage on plants.",
    leeCode: "142",
    colorCode: "#AAAAF0",
  },
  {
    link: "https://leefilters.com/colour/143-pale-navy-blue/",
    name: "143 Pale Navy Blue",
    description: "Great moonlight / night effect.",
    leeCode: "143",
    colorCode: "#64BED2",
  },
  {
    link: "https://leefilters.com/colour/144-no-colour-blue/",
    name: "144 No Colour Blue",
    description:
      "A clean blue with hints of green. Good for moonlight and sidelight.",
    leeCode: "144",
    colorCode: "#5AE1E6",
  },
  {
    link: "https://leefilters.com/colour/147-apricot/",
    name: "147 Apricot",
    description: "Good for sunrise, sunset and lamplight effects.",
    leeCode: "147",
    colorCode: "#FCB98C",
  },
  {
    link: "https://leefilters.com/colour/148-bright-rose/",
    name: "148 Bright Rose",
    description: "Great for fire effects and musicals.",
    leeCode: "148",
    colorCode: "#FF507D",
  },
  {
    link: "https://leefilters.com/colour/151-gold-tint/",
    name: "151 Gold Tint",
    description: "A pleasing effect for theatrical lighting.",
    leeCode: "151",
    colorCode: "#FFCDC3",
  },
  {
    link: "https://leefilters.com/colour/152-pale-gold/",
    name: "152 Pale Gold",
    description: "Used with interior lighting to enhance skin tones.",
    leeCode: "152",
    colorCode: "#FFD2C1",
  },
  {
    link: "https://leefilters.com/colour/153-pale-salmon/",
    name: "153 Pale Salmon",
    description: "Good for backlighting in conjunction with white light.",
    leeCode: "153",
    colorCode: "#FFC8C8",
  },
  {
    link: "https://leefilters.com/colour/154-pale-rose/",
    name: "154 Pale Rose",
    description:
      "A pleasing effect for theatrical lighting. A good lamplight effect.",
    leeCode: "154",
    colorCode: "#FFD5CF",
  },
  {
    link: "https://leefilters.com/colour/156-chocolate/",
    name: "156 Chocolate",
    description: "Warms light and reduces the intensity.",
    leeCode: "156",
    colorCode: "#E1B48C",
  },
  {
    link: "https://leefilters.com/colour/157-pink/",
    name: "157 Pink",
    description:
      "Great for dance sequences (useful for softening white costumes without affecting skin tones).",
    leeCode: "157",
    colorCode: "#FF92A3",
  },
  {
    link: "https://leefilters.com/colour/158-deep-orange/",
    name: "158 Deep Orange",
    description: "A great fire effect.",
    leeCode: "158",
    colorCode: "#FF8700",
  },
  {
    link: "https://leefilters.com/colour/159-no-colour-straw/",
    name: "159 No Colour Straw",
    description: "A warm effect. Sunlight.",
    leeCode: "159",
    colorCode: "#FFFAEB",
  },
  {
    link: "https://leefilters.com/colour/161-slate-blue/",
    name: "161 Slate Blue",
    description:
      "A pure medium blue. Good for skies, moonlight and dusk effects.",
    leeCode: "161",
    colorCode: "#7DD2F5",
  },
  {
    link: "https://leefilters.com/colour/162-bastard-amber/",
    name: "162 Bastard Amber",
    description: "A warm white / warm wash. Good lamplight effect.",
    leeCode: "162",
    colorCode: "#FCDED8",
  },
  {
    link: "https://leefilters.com/colour/164-flame-red/",
    name: "164 Flame Red",
    description: "Great for fire effects.",
    leeCode: "164",
    colorCode: "#FF3200",
  },
  {
    link: "https://leefilters.com/colour/165-daylight-blue/",
    name: "165 Daylight Blue",
    description: "Great for moonlight effect.",
    leeCode: "165",
    colorCode: "#5AC8EB",
  },
  {
    link: "https://leefilters.com/colour/169-lilac-tint/",
    name: "169 Lilac Tint",
    description:
      "A pale lavender. Good for almost white light with a cool tint.",
    leeCode: "169",
    colorCode: "#FADCF0",
  },
  {
    link: "https://leefilters.com/colour/170-deep-lavender/",
    name: "170 Deep Lavender",
    description: "Great for set lighting, discos and theatres.",
    leeCode: "170",
    colorCode: "#E6AADC",
  },
  {
    link: "https://leefilters.com/colour/172-lagoon-blue/",
    name: "172 Lagoon Blue",
    description:
      "A floodlit warm wash. Great for underwater scenes and ballet.",
    leeCode: "172",
    colorCode: "#00DCDC",
  },
  {
    link: "https://leefilters.com/colour/174-dark-steel-blue/",
    name: "174 Dark Steel Blue",
    description: "Great for set lighting. Creates good moonlight shadows.",
    leeCode: "174",
    colorCode: "#AFE1FA",
  },
  {
    link: "https://leefilters.com/colour/176-loving-amber/",
    name: "176 Loving Amber",
    description:
      "Used for backlighting and general areas. Great for sunrise effect and warming skin tones.",
    leeCode: "176",
    colorCode: "#FFAAA0",
  },
  {
    link: "https://leefilters.com/colour/179-chrome-orange/",
    name: "179 Chrome Orange",
    description:
      "A combination of 1/2 CTO and double strength 104, perfect for sunlight.",
    leeCode: "179",
    colorCode: "#FFBE00",
  },
  {
    link: "https://leefilters.com/colour/180-dark-lavender/",
    name: "180 Dark Lavender",
    description: "A pleasing effect for theatrical lighting and backlighting.",
    leeCode: "180",
    colorCode: "#A064E6",
  },
  {
    link: "https://leefilters.com/colour/181-congo-blue/",
    name: "181 Congo Blue",
    description:
      "Looks like black light when used with a fluorescent source. Great effect colour. Very saturated.",
    leeCode: "181",
    colorCode: "#5000AA",
  },
  {
    link: "https://leefilters.com/colour/182-light-red/",
    name: "182 Light Red",
    description:
      "Good for theatre and television effect lighting as well as cycloramas.",
    leeCode: "182",
    colorCode: "#F50000",
  },
  {
    link: "https://leefilters.com/colour/183-moonlight-blue/",
    name: "183 Moonlight Blue",
    description: "Good for moonlight effect and cycloramas.",
    leeCode: "183",
    colorCode: "#00D7E3",
  },
  {
    link: "https://leefilters.com/colour/192-flesh-pink/",
    name: "192 Flesh Pink",
    description: "Good for musical and pantomime key lighting.",
    leeCode: "192",
    colorCode: "#FF8CB4",
  },
  {
    link: "https://leefilters.com/colour/194-surprise-pink/",
    name: "194 Surprise Pink",
    description: "Good for musicals.",
    leeCode: "194",
    colorCode: "#BE8CF0",
  },
  {
    link: "https://leefilters.com/colour/195-zenith-blue/",
    name: "195 Zenith Blue",
    description:
      "Creates a good moonlight effect on a dark set. Also good for cycloramas.",
    leeCode: "195",
    colorCode: "#006ED2",
  },
  {
    link: "https://leefilters.com/colour/196-true-blue/",
    name: "196 True Blue",
    description: "Great for moonlight effect.",
    leeCode: "196",
    colorCode: "#78D2E6",
  },
  {
    link: "https://leefilters.com/colour/197-alice-blue/",
    name: "197 Alice Blue",
    description:
      "Great for cyclorama lighting and creating deep blue skies cyclorama cycloramas.",
    leeCode: "197",
    colorCode: "#82AAE6",
  },
  {
    link: "https://leefilters.com/colour/198-palace-blue/",
    name: "198 Palace Blue",
    description: "Good for dark moonlight or a romantic evening.",
    leeCode: "198",
    colorCode: "#6478C8",
  },
  {
    link: "https://leefilters.com/colour/199-regal-blue/",
    name: "199 Regal Blue",
    description: "A deep lavender blue that strongly enhances skin tones.",
    leeCode: "199",
    colorCode: "#6464E6",
  },
  {
    link: "https://leefilters.com/colour/200-double-c-t-blue/",
    name: "200 Double C.T. Blue",
    description: "Converts tungsten (3200K) to daylight (26000K) .",
    leeCode: "200",
    colorCode: "#91BEF5",
  },
  {
    link: "https://leefilters.com/colour/201-full-c-t-blue/",
    name: "201 Full C.T. Blue",
    description: "Converts tungsten (3200K) to photographic daylight (5700K).",
    leeCode: "201",
    colorCode: "#C3E1FA",
  },
  {
    link: "https://leefilters.com/colour/202-half-c-t-blue/",
    name: "202 Half C.T. Blue",
    description: "Converts tungsten (3200K) to daylight (4300K).",
    leeCode: "202",
    colorCode: "#D7F0FF",
  },
  {
    link: "https://leefilters.com/colour/203-quarter-c-t-blue/",
    name: "203 Quarter C.T. Blue",
    description: "Converts tungsten (3200K) to daylight (3600K).",
    leeCode: "203",
    colorCode: "#EBFCFF",
  },
  {
    link: "https://leefilters.com/colour/204-full-c-t-orange/",
    name: "204 Full C.T. Orange",
    description: "Converts daylight (6500K) to tungsten light (3200K).",
    leeCode: "204",
    colorCode: "#FAC387",
  },
  {
    link: "https://leefilters.com/colour/205-half-c-t-orange/",
    name: "205 Half C.T. Orange",
    description: "Converts daylight (6500K) to tungsten light (3800K).",
    leeCode: "205",
    colorCode: "#FCD9B1",
  },
  {
    link: "https://leefilters.com/colour/206-quarter-c-t-orange/",
    name: "206 Quarter C.T. Orange",
    description: "Converts daylight (6500K) to tungsten light (4600K).",
    leeCode: "206",
    colorCode: "#FCEAD6",
  },
  {
    link: "https://leefilters.com/colour/207-full-c-t-orange-3nd/",
    name: "207 Full C.T. Orange + .3ND",
    description:
      "Converts daylight (6500K) to tungsten (3200K) and reduces light 1 stop.",
    leeCode: "207",
    colorCode: "#F0B46B",
  },
  {
    link: "https://leefilters.com/colour/208-full-c-t-orange-6nd/",
    name: "208 Full C.T. Orange + .6ND",
    description:
      "Converts daylight (6500K) to tungsten (3200K) and reduces light 2 stops.",
    leeCode: "208",
    colorCode: "#E6A550",
  },
  {
    link: "https://leefilters.com/colour/212-l-c-t-yellow-y1/",
    name: "212 L.C.T.Yellow (Y1)",
    description: "Reduces colour temperature of low carbon arcs to 3200K.",
    leeCode: "212",
    colorCode: "#FFFAD7",
  },
  {
    link: "https://leefilters.com/colour/213-white-flame-green/",
    name: "213 White Flame Green",
    description: "Corrects white flame carbon arcs by absorbing ultra violet.",
    leeCode: "213",
    colorCode: "#E6FCDC",
  },
  {
    link: "https://leefilters.com/colour/218-eighth-c-t-blue/",
    name: "218 Eighth C.T. Blue",
    description: "Converts tungsten (3200K) to daylight (3400K).",
    leeCode: "218",
    colorCode: "#F5FFFF",
  },
  {
    link: "https://leefilters.com/colour/219-lee-fluorescent-green/",
    name: "219 LEE Fluorescent Green",
    description:
      "General tungsten to fluorescent correction for use when fluorescent colour temp is unknown, to provide medium correction.",
    leeCode: "219",
    colorCode: "#9BDCAF",
  },
  {
    link: "https://leefilters.com/colour/223-eighth-c-t-orange/",
    name: "223 Eighth C.T. Orange",
    description: "Converts daylight (6500K) to tungsten light (5550K).",
    leeCode: "223",
    colorCode: "#FFF3E8",
  },
  {
    link: "https://leefilters.com/colour/230-super-correction-l-c-t-yellow/",
    name: "230 Super Correction L.C.T. Yellow",
    description:
      "Converts yellow carbon arc (of low colour temperature) to tungsten.",
    leeCode: "230",
    colorCode: "#DCBE8C",
  },
  {
    link: "https://leefilters.com/colour/232-super-correction-w-f-green/",
    name: "232 Super Correction W.F. Green",
    description:
      "Converts white flame arc to 3200K, for use with Tungsten film.",
    leeCode: "232",
    colorCode: "#EDBE83",
  },
  {
    link: "https://leefilters.com/colour/236-h-m-i-to-tungsten/",
    name: "236 H.M.I. (to Tungsten)",
    description: "Converts HMI to 3200K, for use with Tungsten film.",
    leeCode: "236",
    colorCode: "#FAC795",
  },
  {
    link: "https://leefilters.com/colour/237-c-i-d-to-tungsten/",
    name: "237 C.I.D. (to Tungsten)",
    description: "Converts CID to 3200K, for use with Tungsten film.",
    leeCode: "237",
    colorCode: "#FCB292",
  },
  {
    link: "https://leefilters.com/colour/238-c-s-i-to-tungsten/",
    name: "238 C.S.I. (to Tungsten)",
    description: "Converts CSI to 3200K, for use with Tungsten film.",
    leeCode: "238",
    colorCode: "#F5B9AA",
  },
  {
    link: "https://leefilters.com/colour/241-lee-fluorescent-5700-kelvin/",
    name: "241 LEE Fluorescent 5700 Kelvin",
    description:
      "Converts tungsten to fluorescent light of 5700K (cool white/daylight).",
    leeCode: "241",
    colorCode: "#AADCC3",
  },
  {
    link: "https://leefilters.com/colour/242-lee-fluorescent-4300-kelvin/",
    name: "242 LEE Fluorescent 4300 Kelvin",
    description: "Converts tungsten to fluorescent light of 4300K (white).",
    leeCode: "242",
    colorCode: "#B9E6B9",
  },
  {
    link: "https://leefilters.com/colour/243-lee-fluorescent-3600-kelvin/",
    name: "243 LEE Fluorescent 3600 Kelvin",
    description:
      "Converts tungsten to fluorescent light of 3600K (warm white).",
    leeCode: "243",
    colorCode: "#CDF5AF",
  },
  {
    link: "https://leefilters.com/colour/244-lee-plus-green/",
    name: "244 LEE Plus Green",
    description:
      "Used on daylight and tungsten light sources to provide green cast when used in conjunction with discharge lighting. Approximately equivalent to CC30 green camera filter.",
    leeCode: "244",
    colorCode: "#E6FABE",
  },
  {
    link: "https://leefilters.com/colour/245-half-plus-green/",
    name: "245 Half Plus Green",
    description:
      "Used on daylight and tungsten light sources to provide green cast when used in conjunction with discharge lighting. Approximately equivalent to CC15 green camera filter.",
    leeCode: "245",
    colorCode: "#F0FCD2",
  },
  {
    link: "https://leefilters.com/colour/246-quarter-plus-green/",
    name: "246 Quarter Plus Green",
    description:
      "Used on daylight and tungsten light sources to provide green cast when used in conjunction with discharge lighting. Approximately equivalent to CC075 green camera filter.",
    leeCode: "246",
    colorCode: "#F5FFE6",
  },
  {
    link: "https://leefilters.com/colour/247-lee-minus-green/",
    name: "247 LEE Minus Green",
    description:
      "Used on lighting to eliminate unwanted green cast created by discharge light sources on film. Approximately equivalent to CC30 magenta camera filter.",
    leeCode: "247",
    colorCode: "#FAC3D7",
  },
  {
    link: "https://leefilters.com/colour/248-half-minus-green/",
    name: "248 Half Minus Green",
    description:
      "Used on lighting to eliminate unwanted green cast created by discharge light sources on film. Approximately equivalent to CC15 magenta camera filter.",
    leeCode: "248",
    colorCode: "#FFE2E4",
  },
  {
    link: "https://leefilters.com/colour/249-quarter-minus-green/",
    name: "249 Quarter Minus Green",
    description:
      "Used on lighting to eliminate unwanted green cast created by discharge light sources on film. Approximately equivalent to CC075 magenta camera filter.",
    leeCode: "249",
    colorCode: "#FFECF0",
  },
  {
    link: "https://leefilters.com/colour/278-eighth-plus-green/",
    name: "278 Eighth Plus Green",
    description:
      "Provides very slight green cast. Used on daylight and tungsten light sources to provide green cast when used in conjunction with discharge lighting.",
    leeCode: "278",
    colorCode: "#F3FFF3",
  },
  {
    link: "https://leefilters.com/colour/279-eighth-minus-green/",
    name: "279 Eighth Minus Green",
    description:
      "Provides very slight correction. Used on lighting to eliminate unwanted green cast created by discharge light sources on film.",
    leeCode: "279",
    colorCode: "#FFF3F7",
  },
  {
    link: "https://leefilters.com/colour/281-three-quarter-c-t-blue/",
    name: "281 Three Quarter C.T. Blue",
    description: "Converts tungsten to daylight.",
    leeCode: "281",
    colorCode: "#CDE6FA",
  },
  {
    link: "https://leefilters.com/colour/283-one-and-a-half-c-t-blue/",
    name: "283 One and a Half C.T. Blue",
    description: "Converts tungsten (3200K) to daylight (8888K).",
    leeCode: "283",
    colorCode: "#AFD9F5",
  },
  {
    link: "https://leefilters.com/colour/285-three-quarter-c-t-orange/",
    name: "285 Three Quarter C.T. Orange",
    description: "Converts daylight (6500K) to tungsten light (3600K).",
    leeCode: "285",
    colorCode: "#FCCD94",
  },
  {
    link: "https://leefilters.com/colour/287-double-c-t-orange/",
    name: "287 Double C.T. Orange",
    description: "Converts daylight (6500K) to tungsten (2147K).",
    leeCode: "287",
    colorCode: "#FFA055",
  },
  {
    link: "https://leefilters.com/colour/322-soft-green/",
    name: "322 Soft Green",
    description: "A cool green used for gobo cover, pantomimes and cycloramas.",
    leeCode: "322",
    colorCode: "#41F5BE",
  },
  {
    link: "https://leefilters.com/colour/323-jade/",
    name: "323 Jade",
    description: "Used for underwater scenes, cycloramas and backlighting.",
    leeCode: "323",
    colorCode: "#00E1AA",
  },
  {
    link: "https://leefilters.com/colour/327-forest-green/",
    name: "327 Forest Green",
    description:
      "A deep green for sinister forest scenes, cycloramas and backlighting.",
    leeCode: "327",
    colorCode: "#008C50",
  },
  {
    link: "https://leefilters.com/colour/328-follies-pink/",
    name: "328 Follies Pink",
    description: "Great for dramatic stage lighting.",
    leeCode: "328",
    colorCode: "#FF64C8",
  },
  {
    link: "https://leefilters.com/colour/332-special-rose-pink/",
    name: "332 Special Rose Pink",
    description:
      "Great for Pantomimes, light entertainment etc. A good strong stage wash.",
    leeCode: "332",
    colorCode: "#FF3787",
  },
  {
    link: "https://leefilters.com/colour/343-special-medium-lavender/",
    name: "343 Special Medium Lavender",
    description: "Good for theatre and T.V. effect lighting and backlighting.",
    leeCode: "343",
    colorCode: "#8C00D2",
  },
  {
    link: "https://leefilters.com/colour/345-fuchsia-pink/",
    description: "Good for musicals, pantomimes and sultry scenes.",
    leeCode: "345",
    colorCode: "#CD6ED7",
  },
  {
    link: "https://leefilters.com/colour/352-glacier-blue/",
    name: "352 Glacier Blue",
    description: "A cold blue, good for cool atmospheric mood setting.",
    leeCode: "352",
    colorCode: "#5AC8E1",
  },
  {
    link: "https://leefilters.com/colour/353-lighter-blue/",
    name: "353 Lighter Blue",
    description: "Good for daylight effects.",
    leeCode: "353",
    colorCode: "#61E8E3",
  },
  {
    link: "https://leefilters.com/colour/354-special-steel-blue/",
    name: "354 Special Steel Blue",
    description: "A cooling blue-green wash for stage and set lighting.",
    leeCode: "354",
    colorCode: "#00F0D7",
  },
  {
    link: "https://leefilters.com/colour/363-special-medium-blue/",
    name: "363 Special Medium Blue",
    description: "Great for cool moonlight and mood effects.",
    leeCode: "363",
    colorCode: "#006EC3",
  },
  {
    link: "https://leefilters.com/colour/366-cornflower/",
    name: "366 Cornflower",
    description: "Great for pale moonlight and seasonal mood lighting.",
    leeCode: "366",
    colorCode: "#AAD2F0",
  },
  {
    link: "https://leefilters.com/colour/441-full-c-t-straw/",
    name: "441 Full C.T. Straw",
    description:
      "Converts 6500K to 3200K – daylight to tungsten light with a yellow bias.",
    leeCode: "441",
    colorCode: "#FAC084",
  },
  {
    link: "https://leefilters.com/colour/442-half-c-t-straw/",
    name: "442 Half C.T. Straw",
    description:
      "Converts 6500K to 4300K – daylight to tungsten light with a yellow bias.",
    leeCode: "442",
    colorCode: "#FCDCAD",
  },
  {
    link: "https://leefilters.com/colour/443-quarter-c-t-straw/",
    name: "443 Quarter C.T. Straw",
    description:
      "Converts 6500K to 5100K – daylight to tungsten light with a yellow bias.",
    leeCode: "443",
    colorCode: "#FCEFDB",
  },
  {
    link: "https://leefilters.com/colour/444-eighth-c-t-straw/",
    name: "444 Eighth C.T. Straw",
    description:
      "Converts 6500K to 5700K – daylight to tungsten light with a yellow bias.",
    leeCode: "444",
    colorCode: "#FAF3E8",
  },
  {
    link: "https://leefilters.com/colour/500-double-new-colour-blue/",
    name: "500 Double New Colour Blue",
    description:
      "The strongest of the NCB series for dramatic white face and key light where warmer tones than CTB are required.",
    leeCode: "500",
    colorCode: "#B4D2FF",
  },
  {
    link: "https://leefilters.com/colour/501-new-colour-blue-robertson-blue/",
    name: "501 New Colour Blue (Robertson Blue)",
    description:
      "An alternative to the CTB series with warmer tones and a lesser green cast for face and key light.",
    leeCode: "501",
    colorCode: "#D7EBFA",
  },
  {
    link: "https://leefilters.com/colour/502-half-new-colour-blue/",
    name: "502 Half New Colour Blue",
    description: "A lighter correction in the NCB series.",
    leeCode: "502",
    colorCode: "#E1F0FF",
  },
  {
    link: "https://leefilters.com/colour/503-quarter-new-colour-blue/",
    name: "503 Quarter New Colour Blue",
    description: "The lightest correction in the NCB series.",
    leeCode: "503",
    colorCode: "#F4FAFF",
  },
  {
    link: "https://leefilters.com/colour/504-waterfront-green/",
    name: "504 Waterfront Green",
    description: "Designed for period key light and modern urban horizons.",
    leeCode: "504",
    colorCode: "#D2F5DC",
  },
  {
    link: "https://leefilters.com/colour/505-sally-green/",
    name: "505 Sally Green",
    description:
      "A fresh, light and airy summer green. Under tree canopy light quality without pantomime countryside. Subtle enough to light faces without having to add too much general cover on top.",
    leeCode: "505",
    colorCode: "#E3FF5A",
  },
  {
    link: "https://leefilters.com/colour/506-marlene/",
    name: "506 Marlene",
    description:
      "Flattering skin tone filter without the comedy pink. Named for Marlene Dietrich who understood the importance of beautiful lighting, especially at a certain age!",
    leeCode: "506",
    colorCode: "#FFDACE",
  },
  {
    link: "https://leefilters.com/colour/507-madge/",
    name: "507 Madge",
    description:
      "Denser, saturated orange version of 135 avoiding pinky red. Good for backlight, instruments, part of a sunset palette, and getting a party atmosphere. Madge is short for Imagination.",
    leeCode: "507",
    colorCode: "#F85000",
  },
  {
    link: "https://leefilters.com/colour/508-midnight-maya/",
    name: "508 Midnight Maya",
    description:
      "A rich, sultry blue. Like Congo Blue, but allowing greater light transmission so more maintenance friendly – fewer gel changes.",
    leeCode: "508",
    colorCode: "#5A46C3",
  },
  {
    link: "https://leefilters.com/colour/525-argent-blue/",
    name: "525 Argent Blue",
    description:
      "LSIs Silver Anniversary colour. Great for a foreboding cold winters night, but allows enough light transmission to be useful for general illuminance too.",
    leeCode: "525",
    colorCode: "#8EB4FA",
  },
  {
    link: "https://leefilters.com/colour/550-ald-gold/",
    name: "550 ALD Gold",
    description:
      "A proper gold to celebrate the 50th Anniversary of the ALD. It maintains its richness as it dims, becoming more molten as the percentage is reduced.",
    leeCode: "550",
    colorCode: "#e3ca3c",
  },
  {
    link: "https://leefilters.com/colour/600-arctic-white/",
    name: "600 – Arctic White",
    leeCode: "600",
    colorCode: "#98a8aa",
  },
  {
    link: "https://leefilters.com/colour/601-silver/",
    name: "601 – Silver",
    leeCode: "601",
    colorCode: "#90a0a0",
  },
  {
    link: "https://leefilters.com/colour/602-platinum/",
    name: "602 – Platinum",
    leeCode: "602",
    colorCode: "#a5a5aa",
  },
  {
    link: "https://leefilters.com/colour/603-moonlight-white/",
    name: "603 – Moonlight White",
    leeCode: "603",
    colorCode: "#c8c8cd",
  },
  {
    link: "https://leefilters.com/colour/642-half-mustard-yellow/",
    name: "642 Half Mustard Yellow",
    description:
      "Half strength Sodium light effect, designed for use with daylight sources.",
    leeCode: "642",
    colorCode: "#968200",
  },
  {
    link: "https://leefilters.com/colour/650-industry-sodium/",
    name: "650 Industry Sodium",
    description: "Used on tungsten to blend with sodium light.",
    leeCode: "650",
    colorCode: "#C8A862",
  },
  {
    link: "https://leefilters.com/colour/651-hi-sodium/",
    name: "651 HI Sodium",
    description: "Used on tungsten to create a High Pressure Sodium look.",
    leeCode: "651",
    colorCode: "#FF9B5F",
  },
  {
    link: "https://leefilters.com/colour/652-urban-sodium/",
    name: "652 Urban Sodium",
    description:
      "Used on tungsten to create the orange glow associated with Sodium light.",
    leeCode: "652",
    colorCode: "#FF8246",
  },
  {
    link: "https://leefilters.com/colour/653-lo-sodium/",
    name: "653 LO Sodium",
    description: "Used on tungsten to create a Low Pressure Sodium look.",
    leeCode: "653",
    colorCode: "#965500",
  },
  {
    link: "https://leefilters.com/colour/700-perfect-lavender/",
    name: "700 Perfect Lavender",
    description:
      "In-between 170 Deep Lavender and 345 Fuchsia Pink, and is good for backlighting and romantic atmospheres.",
    leeCode: "700",
    colorCode: "#7D00CD",
  },
  {
    link: "https://leefilters.com/colour/702-special-pale-lavender/",
    name: "702 Special Pale Lavender",
    description:
      "A cold lavender when used with a full tungsten source, but warms as the source is dimmed. Good as a fill for slow sunset fades.",
    leeCode: "702",
    colorCode: "#E6D2F0",
  },
  {
    link: "https://leefilters.com/colour/703-cold-lavender/",
    name: "703 Cold Lavender",
    description:
      "A colour that would be great for front / key lighting and that works well with 152 Pale Gold.",
    leeCode: "703",
    colorCode: "#D282DC",
  },
  {
    link: "https://leefilters.com/colour/704-lily/",
    name: "704 Lily",
    description:
      "A cool lavender with little red content. Good for romantic evening exteriors.",
    leeCode: "704",
    colorCode: "#F0AAFA",
  },
  {
    link: "https://leefilters.com/colour/706-king-fals-lavender/",
    name: "706 King Fals Lavender",
    description: "A cold lavender.",
    leeCode: "706",
    colorCode: "#6E46C8",
  },
  {
    link: "https://leefilters.com/colour/707-ultimate-violet/",
    name: "707 Ultimate Violet",
    description:
      "Used in musical performances for general colour washes and set lighting.",
    leeCode: "707",
    colorCode: "#6400B4",
  },
  {
    link: "https://leefilters.com/colour/708-cool-lavender/",
    name: "708 Cool Lavender",
    description:
      "For use as a warmer tint without turning yellow and to recreate the colour of fluorescent lighting.",
    leeCode: "708",
    colorCode: "#DCEBFA",
  },
  {
    link: "https://leefilters.com/colour/709-electric-lilac/",
    name: "709 Electric Lilac",
    description:
      "Provides good colour rendering which creates a sharp edge, adding a touch of drama.",
    leeCode: "709",
    colorCode: "#C8C8FA",
  },
  {
    link: "https://leefilters.com/colour/710-spir-special-blue/",
    name: "710 Spir Special Blue",
    description: "A cool industrial blue.",
    leeCode: "710",
    colorCode: "#8CA0F0",
  },
  {
    link: "https://leefilters.com/colour/711-cold-blue/",
    name: "711 Cold Blue",
    description:
      "To give a cold/grey HMI effect from a tungsten source. Will also help blend the light when using both tungsten and HMI sources.",
    leeCode: "711",
    colorCode: "#AABEDC",
  },
  {
    link: "https://leefilters.com/colour/712-bedford-blue/",
    name: "712 Bedford Blue",
    description: "A smoky warm blue. Good for skin tones.",
    leeCode: "712",
    colorCode: "#A0BEF0",
  },
  {
    link: "https://leefilters.com/colour/713-j-winter-blue/",
    name: "713 J.Winter Blue",
    description:
      "A very dark blue with a high UV content. Good when used in high concentrations for a moody and powerful stage colour wash.",
    leeCode: "713",
    colorCode: "#003CA0",
  },
  {
    link: "https://leefilters.com/colour/714-elysian-blue/",
    name: "714 Elysian Blue",
    description: "A new deeper version of Alice Blue.",
    leeCode: "714",
    colorCode: "#5A91D2",
  },
  {
    link: "https://leefilters.com/colour/715-cabana-blue/",
    name: "715 Cabana Blue",
    description:
      "A deep blue that still has enough transmission to work encouragingly well on television.",
    leeCode: "715",
    colorCode: "#3C6EDC",
  },
  {
    link: "https://leefilters.com/colour/716-mikkel-blue/",
    name: "716 Mikkel Blue",
    description: "A romantic blue to produce a night effect.",
    leeCode: "716",
    colorCode: "#0064D2",
  },
  {
    link: "https://leefilters.com/colour/719-colour-wash-blue/",
    name: "719 Colour Wash Blue",
    description: "To allow low intensity tungsten to hold a cold/blue feel.",
    leeCode: "719",
    colorCode: "#9BC3F0",
  },
  {
    link: "https://leefilters.com/colour/721-berry-blue/",
    name: "721 Berry Blue",
    description:
      "Used in musical performances for rear colour wash or set lighting.",
    leeCode: "721",
    colorCode: "#0082E6",
  },
  {
    link: "https://leefilters.com/colour/722-bray-blue/",
    name: "722 Bray Blue",
    description: "A purer blue with very little red in it.",
    leeCode: "722",
    colorCode: "#008CD2",
  },
  {
    link: "https://leefilters.com/colour/723-virgin-blue/",
    name: "723 Virgin Blue",
    description:
      "This is a pure blue, not too green and not too lavender, yet still feels warm for a blue with an early morning feel.",
    leeCode: "723",
    colorCode: "#5082DC",
  },
  {
    link: "https://leefilters.com/colour/724-ocean-blue/",
    name: "724 Ocean Blue",
    description:
      "Useful at low levels of light. Good for dull skies and moonlight.",
    leeCode: "724",
    colorCode: "#69E1EB",
  },
  {
    link: "https://leefilters.com/colour/725-old-steel-blue/",
    name: "725 Old Steel Blue",
    description: "Cool wash, useful for highlights.",
    leeCode: "725",
    colorCode: "#BEF2F3",
  },
  {
    link: "https://leefilters.com/colour/727-qfd-blue/",
    name: "727 QFD Blue",
    description:
      "A special version of 729 Scuba Blue which is good for backlighting and swimming pool effects.",
    leeCode: "727",
    colorCode: "#00A5B4",
  },
  {
    link: "https://leefilters.com/colour/728-steel-green/",
    name: "728 Steel Green",
    description:
      "Approaching storms. Overcast days. Cold steely light. Malevolent moonlight.",
    leeCode: "728",
    colorCode: "#C8EBD2",
  },
  {
    link: "https://leefilters.com/colour/729-scuba-blue/",
    name: "729 Scuba Blue",
    description:
      "Used in musical performances for a rear colour wash or set lighting.",
    leeCode: "729",
    colorCode: "#00AFAA",
  },
  {
    link: "https://leefilters.com/colour/730-liberty-green/",
    name: "730 Liberty Green",
    description: "A good green for creating mystery and suspense.",
    leeCode: "730",
    colorCode: "#DCFFE6",
  },
  {
    link: "https://leefilters.com/colour/731-dirty-ice/",
    name: "731 Dirty Ice",
    description:
      "Dirtier than 730 Liberty green, more orange, sympathetic with skin tones.",
    leeCode: "731",
    colorCode: "#E1FAD7",
  },
  {
    link: "https://leefilters.com/colour/733-damp-squib/",
    name: "733 Damp Squib",
    description: "A dirty green, reduces warmth. Good for cross lighting.",
    leeCode: "733",
    colorCode: "#EBF7CF",
  },
  {
    link: "https://leefilters.com/colour/735-velvet-green/",
    name: "735 Velvet Green",
    description:
      "A beautiful background colour. Victorian melodrama. A night time green.",
    leeCode: "735",
    colorCode: "#00BE78",
  },
  {
    link: "https://leefilters.com/colour/736-twickenham-green/",
    name: "736 Twickenham Green",
    description:
      "A powerful green with depth, for music or light entertainment.",
    leeCode: "736",
    colorCode: "#00AA00",
  },
  {
    link: "https://leefilters.com/colour/738-jas-green/",
    name: "738 JAS Green",
    description:
      "A rich yellowish green. Useful as a concert stage wash where darker skin tone, costume and set are a consideration.",
    leeCode: "738",
    colorCode: "#AAFF00",
  },
  {
    link: "https://leefilters.com/colour/740-aurora-borealis-green/",
    name: "740 Aurora Borealis Green",
    description:
      "Primary jungle colour. Removes some red and blue. Works best with daylight bulbs. Sodium lamp effect.",
    leeCode: "740",
    colorCode: "#5A6E00",
  },
  {
    link: "https://leefilters.com/colour/741-mustard-yellow/",
    name: "741 Mustard Yellow",
    description:
      "Spooky when used in haze. Removes some red and blue. Works best with daylight bulbs. Sodium lamp effect.",
    leeCode: "741",
    colorCode: "#826400",
  },
  {
    link: "https://leefilters.com/colour/742-bram-brown/",
    name: "742 Bram Brown",
    description:
      "Dirtier than 156 Chocolate, good for skin tones. Dims well and doesnt go pink at low light levels.",
    leeCode: "742",
    colorCode: "#E19B50",
  },
  {
    link: "https://leefilters.com/colour/744-dirty-white/",
    name: "744 Dirty White",
    description:
      "Correct a daylight source to an off white tungsten source. Used with a tungsten source provides a “dingy” effect like a smoky bar.",
    leeCode: "744",
    colorCode: "#F8C882",
  },
  {
    link: "https://leefilters.com/colour/746-brown/",
    name: "746 Brown",
    description:
      "To give a murky, dirty feel to tungsten. A darker, less pink chocolate.",
    leeCode: "746",
    colorCode: "#6E3C00",
  },
  {
    link: "https://leefilters.com/colour/747-easy-white/",
    name: "747 Easy White",
    description:
      "Primarily developed for fluorescents to ensure warm, comfortable light and flattering skin tones.",
    leeCode: "747",
    colorCode: "#F5B99F",
  },
  {
    link: "https://leefilters.com/colour/748-seedy-pink/",
    name: "748 Seedy Pink",
    description: "A smoky pink. Good for tungsten on skin tones.",
    leeCode: "748",
    colorCode: "#E96785",
  },
  {
    link: "https://leefilters.com/colour/763-wheat/",
    name: "763 Wheat",
    description: "Adds warmth, sunlight.",
    leeCode: "763",
    colorCode: "#FCF0D2",
  },
  {
    link: "https://leefilters.com/colour/764-sun-colour-straw/",
    name: "764 Sun Colour Straw",
    description: "Adds warmth, bright sunlight.",
    leeCode: "764",
    colorCode: "#FCE6B4",
  },
  {
    link: "https://leefilters.com/colour/765-lee-yellow/",
    name: "765 LEE Yellow",
    description: "Useful for producing a strong sunlight effect.",
    leeCode: "765",
    colorCode: "#FFE591",
  },
  {
    link: "https://leefilters.com/colour/767-oklahoma-yellow/",
    name: "767 Oklahoma Yellow",
    description: "A rich blend of bright sunshine and warm ochre overtones.",
    leeCode: "767",
    colorCode: "#FFE600",
  },
  {
    link: "https://leefilters.com/colour/768-egg-yolk-yellow/",
    name: "768 Egg Yolk Yellow",
    description:
      "A bold strong chemical yellow, less orange/red than 179 Chrome orange.",
    leeCode: "768",
    colorCode: "#FFC600",
  },
  {
    link: "https://leefilters.com/colour/770-burnt-yellow/",
    name: "770 Burnt Yellow",
    description:
      "A colour that feels warm and dense on camera, a balance between 179 and 105.",
    leeCode: "770",
    colorCode: "#FFB400",
  },
  {
    link: "https://leefilters.com/colour/773-cardbox-amber/",
    name: "773 Cardbox Amber",
    description: "Warm tint for skin tones.",
    leeCode: "773",
    colorCode: "#FCC5B2",
  },
  {
    link: "https://leefilters.com/colour/776-nectarine/",
    name: "776 Nectarine",
    description: "Romantic sunset. Period pieces.",
    leeCode: "776",
    colorCode: "#FCBE9B",
  },
  {
    link: "https://leefilters.com/colour/777-rust/",
    name: "777 Rust",
    description: "A vivid rust colour effect.",
    leeCode: "777",
    colorCode: "#F58200",
  },
  {
    link: "https://leefilters.com/colour/778-millennium-gold/",
    name: "778 Millennium Gold",
    description:
      "Useful for lighting architecture: it produces a rich amber when used on a tungsten source, or a much cooler effect when used on a HMI lamp.",
    leeCode: "778",
    colorCode: "#FF7600",
  },
  {
    link: "https://leefilters.com/colour/779-bastard-pink/",
    name: "779 Bastard Pink",
    description: "Deep sunset. Useful on dark skin tones.",
    leeCode: "779",
    colorCode: "#FC9885",
  },
  {
    link: "https://leefilters.com/colour/780-as-golden-amber/",
    name: "780 AS Golden Amber",
    description:
      "Between 778 Millennium Gold and 135 Deep Golden Amber, but less red. A strong colour good for backlighting.",
    leeCode: "780",
    colorCode: "#FF6F00",
  },
  {
    link: "https://leefilters.com/colour/787-marius-red/",
    name: "787 Marius Red",
    description: "Nice deep full red. Rose leaf colour.",
    leeCode: "787",
    colorCode: "#B9003C",
  },
  {
    link: "https://leefilters.com/colour/789-blood-red/",
    name: "789 Blood Red",
    description:
      "For a deep saturated red effect. Used when a strong vivid red effect is required.",
    leeCode: "789",
    colorCode: "#AA3C32",
  },
  {
    link: "https://leefilters.com/colour/790-moroccan-pink/",
    name: "790 Moroccan Pink",
    description:
      "A rich natural pink, good for producing late afternoon sun effects.",
    leeCode: "790",
    colorCode: "#FFB4A5",
  },
  {
    link: "https://leefilters.com/colour/793-vanity-fair/",
    name: "793 Vanity Fair",
    description: "A rich glamorous pink, good for use on special occasions.",
    leeCode: "793",
    colorCode: "#FF3CA0",
  },
  {
    link: "https://leefilters.com/colour/794-pretty-n-pink/",
    name: "794 Pretty n Pink",
    description: "Creates warm and soft effects.",
    leeCode: "794",
    colorCode: "#FFAFDC",
  },
  {
    link: "https://leefilters.com/colour/795-magical-magenta/",
    name: "795 Magical Magenta",
    description: "Rich mixture of red and pinks.",
    leeCode: "795",
    colorCode: "#FA46C8",
  },
  {
    link: "https://leefilters.com/colour/797-deep-purple/",
    description:
      "Used in musical performances for general colour washes and set lighting.",
    leeCode: "797",
    colorCode: "#AF0096",
  },
  {
    link: "https://leefilters.com/colour/798-chrysalis-pink/",
    description: "A new deeper lavender with a dash of rose blusher.",
    leeCode: "798",
    colorCode: "#A000BE",
  },
  {
    link: "https://leefilters.com/colour/799-special-kh-lavender/",
    name: "799 Special KH Lavender",
    description: "A deep lavender that brings out the UV.",
    leeCode: "799",
    colorCode: "#3C00B4",
  },
  {
    link: "https://leefilters.com/colour/200-double-c-t-blue/",
    description: "Converts tungsten (3200K) to daylight (26000K) .",
    leeCode: "200",
    colorCode: "#91BEF5",
  },
  {
    link: "https://leefilters.com/colour/201-full-c-t-blue/",
    description: "Converts tungsten (3200K) to photographic daylight (5700K).",
    leeCode: "201",
    colorCode: "#C3E1FA",
  },
  {
    link: "https://leefilters.com/colour/202-half-c-t-blue/",
    description: "Converts tungsten (3200K) to daylight (4300K).",
    leeCode: "202",
    colorCode: "#D7F0FF",
  },
  {
    link: "https://leefilters.com/colour/203-quarter-c-t-blue/",
    description: "Converts tungsten (3200K) to daylight (3600K).",
    leeCode: "203",
    colorCode: "#EBFCFF",
  },
  {
    link: "https://leefilters.com/colour/204-full-c-t-orange/",
    name: "204 Full C.T. Orange",
    description: "Converts daylight (6500K) to tungsten light (3200K).",
    leeCode: "204",
    colorCode: "#FAC387",
  },

  {
    link: "https://leefilters.com/colour/205-half-c-t-orange/",
    name: "205 Half C.T. Orange",
    description: "Converts daylight (6500K) to tungsten light (3800K).",
    leeCode: "205",
    colorCode: "#FCD9B1",
  },

  {
    link: "https://leefilters.com/colour/206-quarter-c-t-orange/",
    name: "206 Quarter C.T. Orange",
    description: "Converts daylight (6500K) to tungsten light (4600K).",
    leeCode: "206",
    colorCode: "#FCEAD6",
  },

  {
    link: "https://leefilters.com/colour/207-full-c-t-orange-3nd/",
    name: "207 Full C.T. Orange + .3ND",
    description:
      "Converts daylight (6500K) to tungsten (3200K) and reduces light 1 stop.",
    leeCode: "207",
    colorCode: "#F0B46B",
  },

  {
    link: "https://leefilters.com/colour/208-full-c-t-orange-6nd/",
    name: "208 Full C.T. Orange + .6ND",
    description:
      "Converts daylight (6500K) to tungsten (3200K) and reduces light 2 stops.",
    leeCode: "208",
    colorCode: "#E6A550",
  },

  {
    link: "https://leefilters.com/colour/209-0-3nd/",
    name: "209 0.3ND",
    description: "Reduces light 1 stop, without changing colour.",
    leeCode: "209",
    colorCode: "#C8C8C8",
  },

  {
    link: "https://leefilters.com/colour/210-0-6nd/",
    name: "210 0.6ND",
    description: "Reduces light 2 stops, without changing colour.",
    leeCode: "210",
    colorCode: "#A5A5A5",
  },

  {
    link: "https://leefilters.com/colour/211-0-9nd/",
    name: "211 0.9ND",
    description: "Reduces light 3 stops, without changing colour.",
    leeCode: "211",
    colorCode: "#828282",
  },

  {
    link: "https://leefilters.com/colour/212-l-c-t-yellow-y1/",
    name: "212 L.C.T.Yellow (Y1)",
    description: "Reduces colour temperature of low carbon arcs to 3200K.",
    leeCode: "212",
    colorCode: "#FFFAD7",
  },

  {
    link: "https://leefilters.com/colour/213-white-flame-green/",
    name: "213 White Flame Green",
    description: "Corrects white flame carbon arcs by absorbing ultra violet.",
    leeCode: "213",
    colorCode: "#E6FCDC",
  },

  {
    link: "https://leefilters.com/colour/218-eighth-c-t-blue/",
    name: "218 Eighth C.T. Blue",
    description: "Converts tungsten (3200K) to daylight (3400K).",
    leeCode: "218",
    colorCode: "#F5FFFF",
  },

  {
    link: "https://leefilters.com/colour/219-lee-fluorescent-green/",
    name: "219 LEE Fluorescent Green",
    description:
      "General tungsten to fluorescent correction for use when fluorescent colour temp is unknown, to provide medium correction.",
    leeCode: "219",
    colorCode: "#9BDCAF",
  },

  {
    link: "https://leefilters.com/colour/223-eighth-c-t-orange/",
    name: "223 Eighth C.T. Orange",
    description: "Converts daylight (6500K) to tungsten light (5550K).",
    leeCode: "223",
    colorCode: "#FFF3E8",
  },

  {
    link: "https://leefilters.com/colour/226-lee-u-v/",
    name: "226 LEE U.V.",
    description: "Transmission of less than 50% at 410nms.",
    leeCode: "226",
    colorCode: "#FFFFFA",
  },

  {
    link: "https://leefilters.com/colour/230-super-correction-l-c-t-yellow/",
    name: "230 Super Correction L.C.T. Yellow",
    description:
      "Converts yellow carbon arc (of low colour temperature) to tungsten.",
    leeCode: "230",
    colorCode: "#DCBE8C",
  },

  {
    link: "https://leefilters.com/colour/232-super-correction-w-f-green/",
    name: "232 Super Correction W.F. Green",
    description:
      "Converts white flame arc to 3200K, for use with Tungsten film.",
    leeCode: "232",
    colorCode: "#EDBE83",
  },

  {
    link: "https://leefilters.com/colour/236-h-m-i-to-tungsten/",
    name: "236 H.M.I. (to Tungsten)",
    description: "Converts HMI to 3200K, for use with Tungsten film.",
    leeCode: "236",
    colorCode: "#FAC795",
  },

  {
    link: "https://leefilters.com/colour/237-c-i-d-to-tungsten/",
    name: "237 C.I.D. (to Tungsten)",
    description: "Converts CID to 3200K, for use with Tungsten film.",
    leeCode: "237",
    colorCode: "#FCB292",
  },

  {
    link: "https://leefilters.com/colour/238-c-s-i-to-tungsten/",
    name: "238 C.S.I. (to Tungsten)",
    description: "Converts CSI to 3200K, for use with Tungsten film.",
    leeCode: "238",
    colorCode: "#F5B9AA",
  },

  {
    link: "https://leefilters.com/colour/239-polariser/",
    name: "239 Polariser",
    description:
      "Made from 0.006 (150 micron) Triacetate. Reduces glare and reflection when used in conjunction with LEE Polarising Camera Filter.",

    description:
      "Available in widths of 19″ (48 cms) x single ft pieces, up to 10ft",
    leeCode: "239",
    colorCode: "#CDCDCD",
  },

  {
    link: "https://leefilters.com/colour/241-lee-fluorescent-5700-kelvin/",
    name: "241 LEE Fluorescent 5700 Kelvin",
    description:
      "Converts tungsten to fluorescent light of 5700K (cool white/daylight).",
    leeCode: "241",
    colorCode: "#AADCC3",
  },

  {
    link: "https://leefilters.com/colour/242-lee-fluorescent-4300-kelvin/",
    name: "242 LEE Fluorescent 4300 Kelvin",
    description: "Converts tungsten to fluorescent light of 4300K (white).",
    leeCode: "242",
    colorCode: "#B9E6B9",
  },

  {
    link: "https://leefilters.com/colour/243-lee-fluorescent-3600-kelvin/",
    name: "243 LEE Fluorescent 3600 Kelvin",
    description:
      "Converts tungsten to fluorescent light of 3600K (warm white).",
    leeCode: "243",
    colorCode: "#CDF5AF",
  },

  {
    link: "https://leefilters.com/colour/244-lee-plus-green/",
    name: "244 LEE Plus Green",
    description:
      "Used on daylight and tungsten light sources to provide green cast when used in conjunction with discharge lighting. Approximately equivalent to CC30 green camera filter.",
    leeCode: "244",
    colorCode: "#E6FABE",
  },

  {
    link: "https://leefilters.com/colour/245-half-plus-green/",
    name: "245 Half Plus Green",
    description:
      "Used on daylight and tungsten light sources to provide green cast when used in conjunction with discharge lighting. Approximately equivalent to CC15 green camera filter.",
    leeCode: "245",
    colorCode: "#F0FCD2",
  },

  {
    link: "https://leefilters.com/colour/246-quarter-plus-green/",
    name: "246 Quarter Plus Green",
    description:
      "Used on daylight and tungsten light sources to provide green cast when used in conjunction with discharge lighting. Approximately equivalent to CC075 green camera filter.",
    leeCode: "246",
    colorCode: "#F5FFE6",
  },

  {
    link: "https://leefilters.com/colour/247-lee-minus-green/",
    name: "247 LEE Minus Green",
    description:
      "Used on lighting to eliminate unwanted green cast created by discharge light sources on film. Approximately equivalent to CC30 magenta camera filter.",
    leeCode: "247",
    colorCode: "#FAC3D7",
  },

  {
    link: "https://leefilters.com/colour/248-half-minus-green/",
    name: "248 Half Minus Green",
    description:
      "Used on lighting to eliminate unwanted green cast created by discharge light sources on film. Approximately equivalent to CC15 magenta camera filter.",
    leeCode: "248",
    colorCode: "#FFE2E4",
  },

  {
    link: "https://leefilters.com/colour/249-quarter-minus-green/",
    name: "249 Quarter Minus Green",
    description:
      "Used on lighting to eliminate unwanted green cast created by discharge light sources on film. Approximately equivalent to CC075 magenta camera filter.",
    leeCode: "249",
    colorCode: "#FFECF0",
  },

  {
    link: "https://leefilters.com/colour/269-lee-heat-shield/",
    name: "269 LEE Heat Shield",
    description:
      "A transparent flexible film used to extend the life of filter. The shield should be placed between the light source and the filter, allowing distance between the shield and the filter.",
    leeCode: "269",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/270-lee-scrim/",
    name: "270 LEE Scrim",
    description:
      "A perforated reflector producing a very soft reflection. Silver on one side and black on reverse.",
    leeCode: "270",
    colorCode: "#BEBEBE",
  },

  {
    link: "https://leefilters.com/colour/271-mirror-silver/",
    name: "271 Mirror Silver",
    description: "Produces hard reflection. White backed",
    leeCode: "271",
    colorCode: "#F0F0F0",
  },

  {
    link: "https://leefilters.com/colour/272-soft-gold-reflector/",
    name: "272 Soft Gold Reflector",
    description: "Produces soft reflection. White backed.",
    leeCode: "272",
    colorCode: "#F0DC96",
  },

  {
    link: "https://leefilters.com/colour/273-soft-silver-reflector/",
    name: "273 Soft Silver Reflector",
    description: "Produces soft reflection. White backed.",
    leeCode: "273",
    colorCode: "#F3F3F3",
  },

  {
    link: "https://leefilters.com/colour/274-mirror-gold/",
    name: "274 Mirror Gold",
    description: "Produces hard reflection. White backed.",
    leeCode: "274",
    colorCode: "#EBD791",
  },

  {
    link: "https://leefilters.com/colour/275-black-scrim/",
    name: "275 Black Scrim",
    description:
      "A flexible perforated material that is black on both sides. Can be used on windows to reduce light intensity, without causing any unwanted reflections.",
    leeCode: "275",
    colorCode: "#BEBEBE",
  },

  {
    link: "https://leefilters.com/colour/278-eighth-plus-green/",
    name: "278 Eighth Plus Green",
    description:
      "Provides very slight green cast. Used on daylight and tungsten light sources to provide green cast when used in conjunction with discharge lighting.",
    leeCode: "278",
    colorCode: "#F3FFF3",
  },

  {
    link: "https://leefilters.com/colour/279-eighth-minus-green/",
    name: "279 Eighth Minus Green",
    description:
      "Provides very slight correction. Used on lighting to eliminate unwanted green cast created by discharge light sources on film.",
    leeCode: "279",
    colorCode: "#FFF3F7",
  },

  //   {
  //     link: "https://leefilters.com/colour/280-black-foil/",
  //     name: "280 Black Foil",
  //     description:
  //       "Used to reduce unwanted light spill or to control unwanted light reflection.",
  //     leeCode: "280",
  //     colorCode: "#000000",
  //   },

  {
    link: "https://leefilters.com/colour/281-three-quarter-c-t-blue/",
    name: "281 Three Quarter C.T. Blue",
    description: "Converts tungsten to daylight.",
    leeCode: "281",
    colorCode: "#CDE6FA",
  },

  {
    link: "https://leefilters.com/colour/283-one-and-a-half-c-t-blue/",
    name: "283 One and a Half C.T. Blue",
    description: "Converts tungsten (3200K) to daylight (8888K).",
    leeCode: "283",
    colorCode: "#AFD9F5",
  },

  {
    link: "https://leefilters.com/colour/285-three-quarter-c-t-orange/",
    name: "285 Three Quarter C.T. Orange",
    description: "Converts daylight (6500K) to tungsten light (3600K).",
    leeCode: "285",
    colorCode: "#FCCD94",
  },

  {
    link: "https://leefilters.com/colour/287-double-c-t-orange/",
    name: "287 Double C.T. Orange",
    description: "Converts daylight (6500K) to tungsten (2147K).",
    leeCode: "287",
    colorCode: "#FFA055",
  },

  {
    link: "https://leefilters.com/colour/298-0-15nd/",
    name: "298 0.15ND",
    description: "Reduces light 1/2 stop, without changing colour.",
    leeCode: "298",
    colorCode: "#E6E6E6",
  },

  {
    link: "https://leefilters.com/colour/299-1-2nd/",
    name: "299 1.2ND",
    description: "Reduces light 4 stops, without changing colour.",
    leeCode: "299",
    colorCode: "#5F5F5F",
  },

  {
    link: "https://leefilters.com/colour/441-full-c-t-straw/",
    name: "441 Full C.T. Straw",
    description:
      "Converts 6500K to 3200K – daylight to tungsten light with a yellow bias.",
    leeCode: "441",
    colorCode: "#FAC084",
  },

  {
    link: "https://leefilters.com/colour/442-half-c-t-straw/",
    name: "442 Half C.T. Straw",
    description:
      "Converts 6500K to 4300K – daylight to tungsten light with a yellow bias.",
    leeCode: "442",
    colorCode: "#FCDCAD",
  },

  {
    link: "https://leefilters.com/colour/443-quarter-c-t-straw/",
    name: "443 Quarter C.T. Straw",
    description:
      "Converts 6500K to 5100K – daylight to tungsten light with a yellow bias.",
    leeCode: "443",
    colorCode: "#FCEFDB",
  },

  {
    link: "https://leefilters.com/colour/444-eighth-c-t-straw/",
    name: "444 Eighth C.T. Straw",
    description:
      "Converts 6500K to 5700K – daylight to tungsten light with a yellow bias.",
    leeCode: "444",
    colorCode: "#FAF3E8",
  },

  {
    link: "https://leefilters.com/colour/642-half-mustard-yellow/",
    name: "642 Half Mustard Yellow",
    description:
      "Half strength Sodium light effect, designed for use with daylight sources.",
    leeCode: "642",
    colorCode: "#968200",
  },

  {
    link: "https://leefilters.com/colour/650-industry-sodium/",
    name: "650 Industry Sodium",
    description: "Used on tungsten to blend with sodium light.",
    leeCode: "650",
    colorCode: "#C8A862",
  },

  {
    link: "https://leefilters.com/colour/651-hi-sodium/",
    name: "651 HI Sodium",
    description: "Used on tungsten to create a High Pressure Sodium look.",
    leeCode: "651",
    colorCode: "#FF9B5F",
  },

  {
    link: "https://leefilters.com/colour/652-urban-sodium/",
    name: "652 Urban Sodium",
    description:
      "Used on tungsten to create the orange glow associated with Sodium light.",
    leeCode: "652",
    colorCode: "#FF8246",
  },

  {
    link: "https://leefilters.com/colour/653-lo-sodium/",
    name: "653 LO Sodium",
    description: "Used on tungsten to create a Low Pressure Sodium look.",
    leeCode: "653",
    colorCode: "#965500",
  },

  {
    link: "https://leefilters.com/colour/740-aurora-borealis-green/",
    name: "740 Aurora Borealis Green",
    description:
      "Primary jungle colour. Removes some red and blue. Works best with daylight bulbs. Sodium lamp effect.",
    leeCode: "740",
    colorCode: "#5A6E00",
  },

  {
    link: "https://leefilters.com/colour/741-mustard-yellow/",
    name: "741 Mustard Yellow",
    description:
      "Spooky when used in haze. Removes some red and blue. Works best with daylight bulbs. Sodium lamp effect.",
    leeCode: "741",
    colorCode: "#826400",
  },

  {
    link: "https://leefilters.com/colour/sc15-special-cyan/",
    name: "SC15 Special Cyan",
    description:
      "Special Cyan 15 reduces the red component (600nm-700nm) of light sources by approx. 25% compared to the blue and green wavelengths (400nm-600nm).",
    leeCode: "SC15",
    colorCode: "#ebfaeb",
  },

  {
    link: "https://leefilters.com/colour/sc30-special-cyan/",
    name: "SC30 Special Cyan",
    description:
      "Special Cyan 30 reduces the red component (600nm-700nm) of light sources by approx. 50% compared to the blue and green wavelengths (400nm-600nm).",
    leeCode: "SC30",
    colorCode: "#cefae1",
  },

  {
    link: "https://leefilters.com/colour/sc60-special-cyan/",
    name: "SC60 Special Cyan",
    description:
      "Special Cyan 60 reduces the red component (600nm-700nm) of light sources by approx. 75% compared to the blue and green wavelengths (400nm-600nm).",
    leeCode: "SC60",
    colorCode: "#aaf7cd",
  },

  {
    link: "https://leefilters.com/colour/129-heavy-frost/",
    name: "129 Heavy Frost",
    description:
      "A strong diffusion that eliminates nearly all shadows. Flame retardant.",
    leeCode: "129",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/184-cosmetic-peach/",
    name: "184 Cosmetic Peach",
    description:
      "A warm highlight or front light complimentary for most skin tones.",
    leeCode: "184",
    colorCode: "#F0E1D7",
  },

  {
    link: "https://leefilters.com/colour/186-cosmetic-silver-rose/",
    name: "186 Cosmetic Silver Rose",
    description:
      "A warm highlight, leaning towards pink. Brings out pink pigment in skin tones",
    leeCode: "186",
    colorCode: "#F8DCDD",
  },

  {
    link: "https://leefilters.com/colour/187-cosmetic-rouge/",
    name: "187 Cosmetic Rouge",
    description:
      "A warm highlight leaning toward apricot, good for warm front light, complimentary to most skin tones, beware of use on pale skin: tends to look pink.",
    leeCode: "187",
    colorCode: "#F5E4D7",
  },

  {
    link: "https://leefilters.com/colour/188-cosmetic-highlight/",
    name: "188 Cosmetic Highlight",
    description:
      "A warm highlight leaning toward amber, good for warm front light, complimentary to most skin tones. Barbara Walters favourite colour!",
    leeCode: "188",
    colorCode: "#FFEBD7",
  },

  {
    link: "https://leefilters.com/colour/189-cosmetic-silver-moss/",
    name: "189 Cosmetic Silver Moss",
    description:
      "A cool highlight leaning towards yellow-green good for use on mid range skin tones, avoid use on very dark and very pale skin tones.",
    leeCode: "189",
    colorCode: "#EEEDD8",
  },

  {
    link: "https://leefilters.com/colour/191-cosmetic-aqua-blue/",
    name: "191 Cosmetic Aqua Blue",
    description:
      "A cool highlight leaning towards blue, good for cool front light.",
    leeCode: "191",
    colorCode: "#E9EEEE",
  },

  //   {
  //     link: "https://leefilters.com/colour/216/",
  //     name: "216 White Diffusion",
  //     colorCode: "#ffffff",
  //   },

  //   {
  //     link: "https://leefilters.com/colour/217-blue-diffusion/",
  //     name: "217 Blue Diffusion",
  //     description: "As White Diffusion but with the addition of Eighth C.T. Blue",
  //     leeCode: "217",
  //     colorCode: "#F5FFFF",
  //   },

  //   {
  //     link: "https://leefilters.com/colour/220-white-frost/",
  //     name: "220 White Frost",
  //     description: "Used for soft light effects. Flame retardant.",
  //     leeCode: "220",
  //     colorCode: "#FFFFFF",
  //   },

  //   {
  //     link: "https://leefilters.com/colour/221-blue-frost/",
  //     name: "221 Blue Frost",
  //     description:
  //       "Used for soft light effects with the addition of 218. Flame retardant.",
  //     leeCode: "221",
  //     colorCode: "#F5FFFF",
  //   },

  //   {
  //     link: "https://leefilters.com/colour/224-daylight-blue-frost/",
  //     name: "224 Daylight Blue Frost",
  //     description:
  //       "Used for soft light effects with the addition of 201 Full CTB.",
  //     leeCode: "224",
  //     colorCode: "#96A0BE",
  //   },

  //   {
  //     link: "https://leefilters.com/colour/225-neutral-density-frost/",
  //     name: "225 Neutral Density Frost",
  //     description:
  //       "Used for soft light effects with the addition of 0.6 Neutral Density.",
  //     leeCode: "225",
  //     colorCode: "#9EA0A2",
  //   },

  //   {
  //     link: "https://leefilters.com/colour/228-brushed-silk/",
  //     name: "228 Brushed Silk",
  //     description:
  //       "Directional soft lighting effect used for scattering light in one direction only.",
  //     leeCode: "228",
  //     colorCode: "#FFFFFF",
  //   },

  {
    link: "https://leefilters.com/colour/229-quarter-tough-spun/",
    name: "229 Quarter Tough Spun",
    description:
      "Softens light, reduces intensity. Manufactured from non-woven Polyester.",
    leeCode: "229",
    colorCode: "#FFFFFF",
  },

  //   {
  //     link: "https://leefilters.com/colour/250-half-white-diffusion/",
  //     name: "250 Half White Diffusion",
  //     description:
  //       "A medium diffusion used for soft light effects. Manufactured on a tough Polyester base in a range of seven strengths.",
  //     leeCode: "250",
  //     colorCode: "#FFFFFF",
  //   },

  //   {
  //     link: "https://leefilters.com/colour/251-quarter-white-diffusion/",
  //     name: "251 Quarter White Diffusion",
  //     description:
  //       "A weak diffusion used for soft light effects. Manufactured on a tough Polyester base in a range of seven strengths.",
  //     leeCode: "251",
  //     colorCode: "#FFFFFF",
  //   },

  {
    link: "https://leefilters.com/colour/252-eighth-white-diffusion/",
    name: "252 Eighth White Diffusion",
    description:
      "A weak diffusion used for soft light effects. Manufactured on a tough Polyester base in a range of seven strengths.",
    leeCode: "252",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/253-hampshire-frost/",
    name: "253 Hampshire Frost",
    description: "A light frost effect.",
    leeCode: "253",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/255-hollywood-frost/",
    name: "255 Hollywood Frost",
    description: "A light frost effect that softens edges.",
    leeCode: "255",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/256-half-hampshire-frost/",
    name: "256 Half Hampshire Frost",
    description: "Extra light frost effect.",
    leeCode: "256",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/257-quarter-hampshire-frost/",
    name: "257 Quarter Hampshire Frost",
    description: "Extra light frost effect.",
    leeCode: "257",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/258-eighth-hampshire-frost/",
    name: "258 Eighth Hampshire Frost",
    description: "Extra light frost effect.",
    leeCode: "258",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/264-tough-spun-fr-3-8/",
    name: "264 Tough Spun FR – 3/8",
    description:
      "A non yellowing 3/8 tough spun polyester material. Creates a medium overall diffusion effect, softens shadows but leaves the beam intact. Flame retardant.",
    leeCode: "264",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/265-tough-spun-fr-1-4/",
    name: "265 Tough Spun FR – 1/4",
    description:
      "A non yellowing 1/4 tough spun polyester material. Creates a weak overall diffusion effect, softens shadows but leaves the beam intact. Flame retardant.",
    leeCode: "265",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/400-leelux/",
    name: "400 LEELux",
    description:
      "A dense white diffuser used for wide beam spreads creates an even, soft, field of light without shadows. Manufactured on a 125 micron polyester base.",
    leeCode: "400",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/402-soft-frost/",
    name: "402 Soft Frost",
    description:
      "A strong diffuser that creates a wide field of soft illumination. Diffusion characteristics similar to 216, falls between 216 and 129.",
    leeCode: "402",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/404-half-soft-frost/",
    name: "404 Half Soft Frost",
    description:
      "A useful diffuser without too much light loss but very pliable to handle. Diffusion characteristics fall between 251 and 252.",
    leeCode: "404",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/410-opal-frost/",
    name: "410 Opal Frost",
    description:
      "A weak diffusion used for softening spotlight beam edges without altering shape. Manufactured on a 23 micron polyester base.",
    leeCode: "410",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/414-highlight/",
    name: "414 Highlight",
    description:
      "A useful diffuser without too much light loss. Diffusion characteristics similar to 252.",
    leeCode: "414",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/414p-perforated-highlight/",
    name: "414P Perforated Highlight",
    description:
      "A combination of both direct and soft diffused light. Designed for use on Kino Flo and similar soft light fixtures. Flame Retardant.",
    leeCode: "414P",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/416-three-quarter-white-diffusion/",
    name: "416 Three Quarter White Diffusion",
    description:
      "A strong to medium diffusion used for soft light effects. Manufactured on a tough Polyester base in a range of seven strengths.",
    leeCode: "416",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/420-light-opal-frost/",
    name: "420 Light Opal Frost",
    description:
      "A weak diffusion similar to Opal Frost, but less diffuse. Manufactured on a 36 micron polyester base.",
    leeCode: "420",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/429-quiet-frost/",
    name: "429 Quiet Frost",
    description:
      "A strong diffuser that creates a wide field of soft illumination but is thicker than the 402 Soft Frost. Diffusion characteristics similar to 416.",
    leeCode: "429",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/430-grid-cloth/",
    name: "430 Grid Cloth",
    description: "Produces a strong diffusion effect. Comes in three weights.",
    leeCode: "430",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/432-light-grid-cloth/",
    name: "432 Light Grid Cloth",
    description: "Produces a medium diffusion effect. Comes in three weights.",
    leeCode: "432",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/434-quarter-grid-cloth/",
    name: "434 Quarter Grid Cloth",
    description: "Produces a weak diffusion effect. Comes in three weights.",
    leeCode: "434",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/439-heavy-quiet-frost/",
    name: "439 Heavy Quiet Frost",
    description:
      "A strong diffuser (pliable to handle) that virtually eliminates shadows at close distance.",
    leeCode: "439",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/439p-perforated-heavy-quiet-frost/",
    name: "439P Perforated Heavy Quiet Frost",
    description:
      "A combination of both direct and strongly diffused light. Designed for use on Kino Flo and similar soft light fixtures. Flame Retardant.",
    leeCode: "439P",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/450-three-eighth-white-diffusion/",
    name: "450 Three Eighth White Diffusion",
    description:
      "A medium/weak diffusion used for soft light effects. Manufactured on a tough Polyester base in a range of seven strengths.",
    leeCode: "450",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/452-sixteenth-white-diffusion/",
    name: "452 Sixteenth White Diffusion",
    description:
      "A weak diffusion used for soft light effects. Manufactured on a tough Polyester base in a range of seven strengths.",
    leeCode: "452",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/460-quiet-grid-cloth/",
    name: "460 Quiet Grid Cloth",
    description: "Produces a strong diffusion effect. Comes in three weights.",
    leeCode: "460",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/462-quiet-light-grid-cloth/",
    name: "462 Quiet Light Grid Cloth",
    description: "Produces a medium diffusion effect. Comes in three weights.",
    leeCode: "462",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/464-quiet-quarter-grid-cloth/",
    name: "464 Quiet Quarter Grid Cloth",
    description: "Produces a weak diffusion effect. Comes in three weights.",
    leeCode: "464",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/705-lily-frost/",
    name: "705 Lily Frost",
    description:
      "Smoothes PAR or flood washes of large areas. Useful for houselights and a good colour wash for evening events.",
    leeCode: "705",
    colorCode: "#F0AAFA",
  },

  {
    link: "https://leefilters.com/colour/717-shanklin-frost/",
    name: "717 Shanklin Frost",
    description: "201 with frost to soften the beam of profile units.",
    leeCode: "717",
    colorCode: "#C3E1FA",
  },

  {
    link: "https://leefilters.com/colour/718-half-shanklin-frost/",
    name: "718 Half Shanklin Frost",
    description: "202 with frost to soften the beam of profile units.",
    leeCode: "718",
    colorCode: "#D4EDFA",
  },

  {
    link: "https://leefilters.com/colour/720-durham-daylight-frost/",
    name: "720 Durham Daylight Frost",
    description:
      "Smoothes PAR or flood washes of large areas. Useful for houselight and good for entrances from natural light.",
    leeCode: "720",
    colorCode: "#C3E1FA",
  },

  {
    link: "https://leefilters.com/colour/749-hampshire-rose/",
    name: "749 Hampshire Rose",
    description: "Combines flesh tone warmer 154 with some Hampshire frost.",
    leeCode: "749",
    colorCode: "#FCD3CD",
  },

  {
    link: "https://leefilters.com/colour/750-durham-frost/",
    name: "750 Durham Frost",
    description:
      "A frost that almost completely softens shutter edges and removes hot spots.",
    leeCode: "750",
    colorCode: "#FAF1FE",
  },

  {
    link: "https://leefilters.com/colour/774-soft-amber-key-1/",
    name: "774 Soft Amber Key 1",
    description: "Used for producing a warm key light colour. Flame retardant.",
    leeCode: "774",
    colorCode: "#FCD2BE",
  },

  {
    link: "https://leefilters.com/colour/775-soft-amber-key-2/",
    name: "775 Soft Amber Key 2",
    description: "Used for producing a warm key light colour. Flame retardant.",
    leeCode: "775",
    colorCode: "#FCC6A5",
  },

  {
    link: "https://leefilters.com/colour/791-moroccan-frost/",
    name: "791 Moroccan Frost",
    description:
      "Smoothes PAR or flood washes of large areas. Useful for houselights and good for interior colour washes.",
    leeCode: "791",
    colorCode: "#F5B9AA",
  },

  {
    link: "https://leefilters.com/colour/801-zircon-minus-green-1/",
    name: "801 Zircon Minus Green 1",
    description:
      "Longer life filter for use by photographers to remove large green casts produced by some LEDs.",
    leeCode: "801",
    colorCode: "#FACDD7",
  },

  {
    link: "https://leefilters.com/colour/802-zircon-minus-green-2/",
    name: "802 Zircon Minus Green 2",
    description:
      "Longer life filter for use by photographers to remove medium green casts produced by some LEDs.",
    leeCode: "802",
    colorCode: "#FAE7EA",
  },

  {
    link: "https://leefilters.com/colour/803-zircon-minus-green-3/",
    name: "803 Zircon Minus Green 3",
    description:
      "Longer life filter for use by photographers to remove light green casts produced by some LEDs.",
    leeCode: "803",
    colorCode: "#FCF2FA",
  },

  {
    link: "https://leefilters.com/colour/804-zircon-minus-green-4/",
    name: "804 Zircon Minus Green 4",
    description:
      "Longer life filter for use by photographers to remove fine green casts produced by some LEDs.",
    leeCode: "804",
    colorCode: "#FCF7FC",
  },

  {
    link: "https://leefilters.com/colour/805-zircon-minus-green-5/",
    name: "805 Zircon Minus Green 5",
    description:
      "Longer life filter for use by photographers to remove tint green casts produced by some LEDs.",
    leeCode: "805",
    colorCode: "#FCFAFC",
  },

  {
    link: "https://leefilters.com/colour/806-zircon-warm-amber-2/",
    name: "806 Zircon Warm Amber 2",
    description:
      "Longer life filter for major warm up correction of cool white LED to Tungsten.",
    leeCode: "806",
    colorCode: "#FFAA6E",
  },

  {
    link: "https://leefilters.com/colour/807-zircon-warm-amber-4/",
    name: "807 Zircon Warm Amber 4",
    description:
      "Longer life filter for medium warm up correction of white LED to Tungsten.",
    leeCode: "807",
    colorCode: "#FFD291",
  },

  {
    link: "https://leefilters.com/colour/808-zircon-warm-amber-6/",
    name: "808 Zircon Warm Amber 6",
    description:
      "Longer life filter for correction of warm white LED to Tungsten.",
    leeCode: "808",
    colorCode: "#FFE4AA",
  },

  {
    link: "https://leefilters.com/colour/809-zircon-warm-amber-8/",
    name: "809 Zircon Warm Amber 8",
    description:
      "Longer life filter for fine correction of warm white LED to Tungsten.",
    leeCode: "809",
    colorCode: "#FFEBB4",
  },

  {
    link: "https://leefilters.com/colour/810-zircon-diffusion-1/",
    name: "810 Zircon Diffusion 1",
    description:
      "Strongest diffusion on thick polyester for easy use on panels and in channels. Can be used close to LED chip to blur the pixels.",
    leeCode: "810",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/811-zircon-diffusion-2/",
    name: "811 Zircon Diffusion 2",
    description:
      "Strong diffusion on thick polyester for easy use on panels and in channels. Can be used close to LED chip to provide some blurring of the pixels.",
    leeCode: "811",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/812-zircon-diffusion-3/",
    name: "812 Zircon Diffusion 3",
    description:
      "Medium diffusion on thick polyester for easy use on panels and in channels. Provides reasonable diffusion properties without too much loss of light.",
    leeCode: "812",
    colorCode: "#FFFFFF",
  },

  {
    link: "https://leefilters.com/colour/813-zircon-warm-amber-5-o32/",
    name: "813 Zircon Warm Amber 5 (O32)",
    description:
      "Longer life filter for medium warm up correction of white LED with minus green tint.",
    leeCode: "813",
    colorCode: "#FFC585",
  },

  {
    link: "https://leefilters.com/colour/814-zircon-warm-amber-9-r31/",
    name: "814 Zircon Warm Amber 9 (R31)",
    description:
      "Longer life filter for fine warm up and minus green correction of warm white LED.",
    leeCode: "814",
    colorCode: "#FFE3B1",
  },

  {
    link: "https://leefilters.com/colour/815-zircon-dark-density/",
    name: "815 Zircon Dark Density",
    description:
      "Longer life filter for LED fixtures, used to reduce the light level by approx. 80%.",
    leeCode: "815",
    colorCode: "#A59D9B",
  },

  {
    link: "https://leefilters.com/colour/816-zircon-mid-density/",
    name: "816 Zircon Mid Density",
    description:
      "Longer life filter for LED fixtures, used to reduce the light level by approx. 60%.",
    leeCode: "816",
    colorCode: "#C8C0BE",
  },

  {
    link: "https://leefilters.com/colour/817-zircon-pale-density/",
    name: "817 Zircon Pale Density",
    description:
      "Longer life filter for LED fixtures, used to reduce the light level by approx. 40%.",
    leeCode: "817",
    colorCode: "#E6DFDC",
  },

  {
    link: "https://leefilters.com/colour/818-zircon-cool-blue-6/",
    name: "818 Zircon Cool Blue 6",
    description:
      "Longer life filter used to cool down the colour of warm white LEDs so that they look whiter.",
    leeCode: "818",
    colorCode: "#DCF3FF",
  },

  {
    link: "https://leefilters.com/colour/819-zircon-cool-blue-8/",
    name: "819 Zircon Cool Blue 8",
    description:
      "Longer life filter used to slightly cool down the colour of warm white LEDs so that they look whiter.",
    leeCode: "819",
    colorCode: "#E8FBFF",
  },

  {
    link: "https://leefilters.com/colour/820-zircon-cool-blue-10/",
    name: "820 Zircon Cool Blue 10",
    description:
      "Longer life filter used to very slightly cool down the colour of warm white LEDs, allowing different batches of LEDs to be used together.",
    leeCode: "820",
    colorCode: "#F0FEFF",
  },

  {
    link: "https://leefilters.com/colour/821-zircon-uv-blue-blocker/",
    name: "821 Zircon UV Blue Blocker",
    description: "Longer life filter used to block UV and blue light",
    leeCode: "821",
    colorCode: "#FFB400",
  },
];
