/* ======================================== */
/* AGUS SLEBEW · 100+ FONT GENERATOR       */
/* SCRIPT.JS · VERSION 3.0 PREMIUM         */
/* ======================================== */

// ======================================== //
// DATA 100+ FONT STYLES (UNICODE MAPPING)  //
// ======================================== //
const fontStyles = [
    // ===== BOLD STYLES (1-15) =====
    {
        id: 1,
        name: "Bold Serif",
        category: "bold",
        description: "𝐓𝐞𝐤𝐬 𝐭𝐞𝐛𝐚𝐥 𝐤𝐥𝐚𝐬𝐢𝐤",
        popularity: 95,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119743 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119745 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 2,
        name: "Bold Italic Serif",
        category: "bold",
        description: "𝑻𝒆𝒌𝒔 𝒎𝒊𝒓𝒊𝒏𝒈 𝒕𝒆𝒃𝒂𝒍",
        popularity: 92,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119747 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119749 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 3,
        name: "Bold Sans",
        category: "bold",
        description:  "𝗧𝗲𝗸𝘀 𝘁𝗲𝗯𝗮𝗹 𝘀𝗮𝗻𝘀",
        popularity: 94,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120276 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120302 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 4,
        name: "Bold Italic Sans",
        category: "bold",
        description: "𝘛𝘦𝘬𝘴 𝘵𝘦𝘣𝘢𝘭 𝘮𝘪𝘳𝘪𝘯𝘨",
        popularity: 90,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120280 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120306 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 5,
        name: "Extra Bold",
        category: "bold",
        description: "🅃🄴🄺🅂 🅃🄴🄱🄰🄻",
        popularity: 88,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(127312 + (char.charCodeAt(0) - 65));
                return char;
            }).join('');
        }
    },
    {
        id: 6,
        name: "Bold Fraktur",
        category: "bold",
        description: "𝕿𝖊𝖐𝖘 𝖙𝖊𝖇𝖆𝖑",
        popularity: 86,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120072 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120098 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 7,
        name: "Bold Double-struck",
        category: "bold",
        description: "𝔹𝕠𝕝𝕕 𝕕𝕠𝕦𝕓𝕝𝕖",
        popularity: 87,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120120 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120146 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 8,
        name: "Bold Monospace",
        category: "bold",
        description: "𝙱𝚘𝚕𝚍 𝚖𝚘𝚗𝚘",
        popularity: 85,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120432 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120458 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 9,
        name: "Bold Script",
        category: "bold",
        description: "𝓑𝓸𝓵𝓭 𝓼𝓬𝓻𝓲𝓹𝓽",
        popularity: 93,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119955 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119957 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 10,
        name: "Bold Circle",
        category: "bold",
        description: "🅑🅞🅛🅓 🅒🅘🅡🅒🅛🅔",
        popularity: 89,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(127344 + (char.charCodeAt(0) - 65));
                return char;
            }).join('');
        }
    },
    {
        id: 11,
        name: "Bold Square",
        category: "bold",
        description: "🄱🄾🄻🄳 🅂🅀🅄🄰🅁🄴",
        popularity: 86,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(127312 + (char.charCodeAt(0) - 65));
                return char;
            }).join('');
        }
    },
    {
        id: 12,
        name: "Bold Parenthesis",
        category: "bold",
        description: "Ⓑⓞⓛⓓ ⓟⓐⓡⓔⓝ",
        popularity: 84,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(9398 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(9424 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 13,
        name: "Bold Runic",
        category: "bold",
        description: "ᛒᛟᛚᛞ ᚱᚢᚾᛁᚲ",
        popularity: 82,
        converter: (text) => {
            const map = {
                'A':'ᚨ','B':'ᛒ','C':'ᚲ','D':'ᛞ','E':'ᛖ','F':'ᚠ','G':'ᚷ','H':'ᚺ',
                'I':'ᛁ','J':'ᛃ','K':'ᚴ','L':'ᛚ','M':'ᛗ','N':'ᚾ','O':'ᛟ','P':'ᛈ',
                'Q':'ᚲ','R':'ᚱ','S':'ᛋ','T':'ᛏ','U':'ᚢ','V':'ᚢ','W':'ᚹ','X':'ᛪ',
                'Y':'ᛇ','Z':'ᛉ'
            };
            return text.split('').map(char => {
                let upper = char.toUpperCase();
                return map[upper] || char;
            }).join('');
        }
    },
    {
        id: 14,
        name: "Bold Cuneiform",
        category: "bold",
        description: "𒁉𒄭𒁕 𒆸𒉈",
        popularity: 78,
        converter: (text) => {
            return text.split('').map(() => '𒀀').join('');
        }
    },
    {
        id: 15,
        name: "Bold Hieroglyph",
        category: "bold",
        description: "𓂧𓅱𓃭𓂧",
        popularity: 76,
        converter: (text) => {
            return text.split('').map(() => '𓃀').join('');
        }
    },

    // ===== SCRIPT STYLES (16-30) =====
    {
        id: 16,
        name: "Script Regular",
        category: "script",
        description: "𝒯𝑒𝓀𝓈 𝓈𝒸𝓇𝒾𝓅𝓉",
        popularity: 96,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119951 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119953 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 17,
        name: "Script Bold",
        category: "script",
        description: "𝓣𝓮𝓴𝓼 𝓫𝓸𝓵𝓭",
        popularity: 94,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119955 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119957 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 18,
        name: "Cursive",
        category: "script",
        description: "𝓬𝓾𝓻𝓼𝓲𝓿𝓮 𝓼𝓽𝔂𝓵𝓮",
        popularity: 92,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119951 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119953 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 19,
        name: "Calligraphy",
        category: "script",
        description: "𝔠𝔞𝔩𝔩𝔦𝔤𝔯𝔞𝔭𝔥𝔶",
        popularity: 90,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120068 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120094 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 20,
        name: "Handwriting",
        category: "script",
        description: "𝒽𝒶𝓃𝒹𝓌𝓇𝒾𝓉𝒾𝓃ℊ",
        popularity: 88,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119953 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 21,
        name: "Script Italic",
        category: "script",
        description: "𝘐𝘵𝘢𝘭𝘪𝘤 𝘴𝘤𝘳𝘪𝘱𝘵",
        popularity: 87,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119747 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119749 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 22,
        name: "Script Ornate",
        category: "script",
        description: "𝕆𝕣𝕟𝕒𝕥𝕖 𝕤𝕔𝕣𝕚𝕡𝕥",
        popularity: 85,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120120 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120146 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 23,
        name: "Script Fancy",
        category: "script",
        description: "𝒻𝒶𝓃𝒸𝓎 𝓈𝒸𝓇𝒾𝓅𝓉",
        popularity: 89,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119953 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 24,
        name: "Script Flourish",
        category: "script",
        description: "𝓯𝓵𝓸𝓾𝓻𝓲𝓼𝓱",
        popularity: 84,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119957 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 25,
        name: "Script Elegant",
        category: "script",
        description: "𝓮𝓵𝓮𝓰𝓪𝓷𝓽",
        popularity: 86,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119951 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 26,
        name: "Script Swirl",
        category: "script",
        description: "𝓈𝓌𝒾𝓇𝓁 𝓈𝓉𝓎𝓁ℯ",
        popularity: 83,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119955 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119953 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 27,
        name: "Script Loop",
        category: "script",
        description: "𝓁𝑜𝑜𝓅 𝓈𝒸𝓇𝒾𝓅𝓉",
        popularity: 81,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119953 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 28,
        name: "Script Heart",
        category: "script",
        description: "𝒽ℯ𝒶𝓇𝓉 𝓈𝓉𝓎𝓁ℯ",
        popularity: 82,
        converter: (text) => {
            return '❤️ ' + text.split('').map(char => {
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119953 + (char.charCodeAt(0) - 97));
                return char;
            }).join('') + ' ❤️';
        }
    },
    {
        id: 29,
        name: "Script Star",
        category: "script",
        description: "⭐ 𝓈𝓉𝒶𝓇 ⭐",
        popularity: 80,
        converter: (text) => {
            return '⭐ ' + text.split('').map(char => {
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119951 + (char.charCodeAt(0) - 97));
                return char;
            }).join('') + ' ⭐';
        }
    },
    {
        id: 30,
        name: "Script Royal",
        category: "script",
        description: "𝓇𝑜𝓎𝒶𝓁 𝒻ℴ𝓃𝓉",
        popularity: 85,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119955 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119957 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },

    // ===== GOTHIC STYLES (31-45) =====
    {
        id: 31,
        name: "Fraktur",
        category: "gothic",
        description: "𝔉𝔯𝔞𝔨𝔱𝔲𝔯 𝔊𝔬𝔱𝔥𝔦𝔠",
        popularity: 91,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120068 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120094 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 32,
        name: "Bold Fraktur",
        category: "gothic",
        description: "𝕱𝖗𝖆𝖐𝖙𝖚𝖗 𝕭𝖔𝖑𝖉",
        popularity: 90,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120072 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120098 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 33,
        name: "Double-struck",
        category: "gothic",
        description: "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜",
        popularity: 89,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120120 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120146 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 34,
        name: "Gothic",
        category: "gothic",
        description: "𝔊𝔬𝔱𝔥𝔦𝔠 𝔖𝔱𝔶𝔩𝔢",
        popularity: 88,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120068 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120094 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 35,
        name: "Medieval",
        category: "gothic",
        description: "𝔐𝔢𝔡𝔦𝔢𝔳𝔞𝔩",
        popularity: 86,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120068 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120094 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 36,
        name: "Blackletter",
        category: "gothic",
        description: "𝔅𝔩𝔞𝔠𝔨𝔩𝔢𝔱𝔱𝔢𝔯",
        popularity: 87,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120068 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120094 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 37,
        name: "Gothic Bold",
        category: "gothic",
        description: "𝕲𝖔𝖙𝖍𝖎𝖈 𝕭𝖔𝖑𝖉",
        popularity: 85,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120072 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120098 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 38,
        name: "Gothic Script",
        category: "gothic",
        description: "𝔊𝔬𝔱𝔥𝔦𝔠 𝔖𝔠𝔯𝔦𝔭𝔱",
        popularity: 84,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120068 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120094 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 39,
        name: "Gothic Fraktur",
        category: "gothic",
        description: "𝕱𝖗𝖆𝖐𝖙𝖚𝖗",
        popularity: 86,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120072 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120098 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 40,
        name: "Gothic Double",
        category: "gothic",
        description: "𝔻𝕠𝕦𝕓𝕝𝕖 𝔾𝕠𝕥𝕙",
        popularity: 83,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120120 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120146 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 41,
        name: "Gothic Ornate",
        category: "gothic",
        description: "𝕺𝖗𝖓𝖆𝖙𝖊 𝕲𝖔𝖙𝖍",
        popularity: 82,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120072 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120098 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 42,
        name: "Gothic Dark",
        category: "gothic",
        description: "𝕯𝖆𝖗𝖐 𝕲𝖔𝖙𝖍𝖎𝖈",
        popularity: 85,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120072 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120098 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 43,
        name: "Gothic Mystery",
        category: "gothic",
        description: "𝕸𝖞𝖘𝖙𝖊𝖗𝖞",
        popularity: 81,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120072 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120098 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 44,
        name: "Gothic Castle",
        category: "gothic",
        description: "𝕮𝖆𝖘𝖙𝖑𝖊",
        popularity: 80,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120072 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120098 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 45,
        name: "Gothic Vampire",
        category: "gothic",
        description: "𝕍𝖆𝖒𝖕𝖎𝖗𝖊",
        popularity: 84,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120072 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120098 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },

    // ===== GLITCH STYLES (46-65) =====
    {
        id: 46,
        name: "Glitch Light",
        category: "glitch",
        description: "T̷e̷k̷s̷ g̷l̷i̷t̷c̷h̷",
        popularity: 95,
        converter: (text) => {
            return text.split('').map(char => char + '\u0338').join('');
        }
    },
    {
        id: 47,
        name: "Glitch Medium",
        category: "glitch",
        description: "T̷e̸k̸s̷ g̴l̵i̶t̷c̷h̸",
        popularity: 94,
        converter: (text) => {
            const diacritics = ['\u0338', '\u0337', '\u0335', '\u0336', '\u0347'];
            return text.split('').map(char => {
                return char + diacritics[Math.floor(Math.random() * diacritics.length)];
            }).join('');
        }
    },
    {
        id: 48,
        name: "Glitch Heavy",
        category: "glitch",
        description: "T̴͆e̷̿k̶͠s̵͝ g̸͝l̷̕i̸͗t̷̎c̸̒h̶̔",
        popularity: 93,
        converter: (text) => {
            const diacritics = ['\u0338', '\u0337', '\u0335', '\u0336', '\u0347', '\u0489', '\u20D0'];
            return text.split('').map(char => {
                let count = Math.floor(Math.random() * 3) + 1;
                let result = char;
                for (let i = 0; i < count; i++) {
                    result += diacritics[Math.floor(Math.random() * diacritics.length)];
                }
                return result;
            }).join('');
        }
    },
    {
        id: 49,
        name: "Zalgo Light",
        category: "glitch",
        description: "T̨̢e̡̧k̨s̨ z̨ąl̨g̨ǫ",
        popularity: 92,
        converter: (text) => {
            const zalgoUp = ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306'];
            return text.split('').map(char => {
                return char + zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
            }).join('');
        }
    },
    {
        id: 50,
        name: "Zalgo Medium",
        category: "glitch",
        description: "T̷̢̡ȩ̶k̷̢s̴̡ z̷a̸l̵g̷o̴",
        popularity: 91,
        converter: (text) => {
            const zalgoUp = ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f'];
            const zalgoDown = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031c'];
            return text.split('').map(char => {
                return char + 
                    zalgoUp[Math.floor(Math.random() * zalgoUp.length)] +
                    zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
            }).join('');
        }
    },
    {
        id: 51,
        name: "Zalgo Heavy",
        category: "glitch",
        description: "T̷̢̛̮̖̖e̴̢̼̪͝k̶̛̺̬͕s̴̛̻͝",
        popularity: 90,
        converter: (text) => {
            const zalgoUp = ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f'];
            const zalgoDown = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031c'];
            const zalgoMid = ['\u031b', '\u0340', '\u0341', '\u0358', '\u0326'];
            return text.split('').map(char => {
                let result = char;
                for (let i = 0; i < 3; i++) {
                    result += zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
                    result += zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
                    result += zalgoMid[Math.floor(Math.random() * zalgoMid.length)];
                }
                return result;
            }).join('');
        }
    },
    {
        id: 52,
        name: "Vaporwave Glitch",
        category: "glitch",
        description: "T̷e̷k̷s̷ v̷a̷p̷o̷r̷",
        popularity: 89,
        converter: (text) => {
            return text.split('').map(char => char + '\u0338').join('') + ' 🌊';
        }
    },
    {
        id: 53,
        name: "Cyber Glitch",
        category: "glitch",
        description: "T̷e̷k̷s̷ c̷y̷b̷e̷r̷",
        popularity: 88,
        converter: (text) => {
            return '💻 ' + text.split('').map(char => char + '\u0337').join('') + ' 💻';
        }
    },
    {
        id: 54,
        name: "Matrix Glitch",
        category: "glitch",
        description: "T̴e̴k̴s̴ m̴a̴t̴r̴i̴x̴",
        popularity: 94,
        converter: (text) => {
            return text.split('').map(char => char + '\u0335').join('');
        }
    },
    {
        id: 55,
        name: "Static Glitch",
        category: "glitch",
        description: "T̸e̸k̸s̸ s̸t̸a̸t̸i̸c̸",
        popularity: 87,
        converter: (text) => {
            return text.split('').map(char => char + '\u0336').join('');
        }
    },
    {
        id: 56,
        name: "Error Glitch",
        category: "glitch",
        description: "❌ E̷r̷r̷o̷r̷ ❌",
        popularity: 93,
        converter: (text) => {
            return '⚠️ ' + text.split('').map(char => char + '\u0338' + '\u0337').join('') + ' ⚠️';
        }
    },
    {
        id: 57,
        name: "Corrupted",
        category: "glitch",
        description: "C̷o̷r̷r̷u̷p̷t̷e̷d̷",
        popularity: 86,
        converter: (text) => {
            return text.split('').map(char => {
                if (Math.random() > 0.5) return char + '\u0338';
                return char + '\u0337';
            }).join('');
        }
    },
    {
        id: 58,
        name: "Broken Text",
        category: "glitch",
        description: "B̷r̷o̷k̷e̷n̷",
        popularity: 85,
        converter: (text) => {
            return text.split('').map(char => char + '\u0335' + '\u0336').join('');
        }
    },
    {
        id: 59,
        name: "Pixel Glitch",
        category: "glitch",
        description: "P̷i̷x̷e̷l̷ g̷l̷i̷t̷c̷h̷",
        popularity: 84,
        converter: (text) => {
            return '▪️ ' + text.split('').map(char => char + '\u0338').join('') + ' ▪️';
        }
    },
    {
        id: 60,
        name: "Hacker Glitch",
        category: "glitch",
        description: "H̷a̷c̷k̷e̷r̷",
        popularity: 92,
        converter: (text) => {
            return '👾 ' + text.split('').map(char => char + '\u0337').join('') + ' 👾';
        }
    },
    {
        id: 61,
        name: "Neon Glitch",
        category: "glitch",
        description: "N̷e̷o̷n̷ g̷l̷i̷t̷c̷h̷",
        popularity: 88,
        converter: (text) => {
            return '💡 ' + text.split('').map(char => char + '\u0336').join('') + ' 💡';
        }
    },
    {
        id: 62,
        name: "Retro Glitch",
        category: "glitch",
        description: "R̷e̷t̷r̷o̷",
        popularity: 87,
        converter: (text) => {
            return '📺 ' + text.split('').map(char => char + '\u0335').join('') + ' 📺';
        }
    },
    {
        id: 63,
        name: "Future Glitch",
        category: "glitch",
        description: "F̷u̷t̷u̷r̷e̷",
        popularity: 86,
        converter: (text) => {
            return '🤖 ' + text.split('').map(char => char + '\u0338' + '\u0335').join('') + ' 🤖';
        }
    },
    {
        id: 64,
        name: "Ghost Glitch",
        category: "glitch",
        description: "G̷h̷o̷s̷t̷",
        popularity: 85,
        converter: (text) => {
            return '👻 ' + text.split('').map(char => char + '\u0337' + '\u0336').join('') + ' 👻';
        }
    },
    {
        id: 65,
        name: "Alien Glitch",
        category: "glitch",
        description: "A̷l̷i̷e̷n̷",
        popularity: 84,
        converter: (text) => {
            return '👽 ' + text.split('').map(char => char + '\u0338' + '\u0337' + '\u0335').join('') + ' 👽';
        }
    },

    // ===== SQUARE & CIRCLE STYLES (66-85) =====
    {
        id: 66,
        name: "Square White",
        category: "square",
        description: "🄰🄱🄲 🅂🅀🅄🄰🅁🄴",
        popularity: 90,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(127312 + (char.charCodeAt(0) - 65));
                return char;
            }).join('');
        }
    },
    {
        id: 67,
        name: "Square Black",
        category: "square",
        description: "🅰🅱🅲 🅱🅻🅰🅲🅺",
        popularity: 89,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(127344 + (char.charCodeAt(0) - 65));
                return char;
            }).join('');
        }
    },
    {
        id: 68,
        name: "Circle White",
        category: "circle",
        description: "ⒶⒷⒸ ⒸⒾⓇⒸⓁⒺ",
        popularity: 92,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(9398 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(9424 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 69,
        name: "Circle Black",
        category: "circle",
        description: "ⓐⓑⓒ ⓑⓛⓐⓒⓚ",
        popularity: 88,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(9424 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 70,
        name: "Parenthesis",
        category: "square",
        description: "🄐🄑🄒 🄿🄰🅁🄴🄽",
        popularity: 86,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(127312 + (char.charCodeAt(0) - 65));
                return '(' + char + ')';
            }).join('');
        }
    },
    {
        id: 71,
        name: "Bracket Square",
        category: "square",
        description: "［Ａ］［Ｂ］［Ｃ］",
        popularity: 84,
        converter: (text) => {
            return text.split('').map(char => {
                return '［' + char + '］';
            }).join('');
        }
    },
    {
        id: 72,
        name: "Double Circle",
        category: "circle",
        description: "Ⓣⓦⓘⓒⓔ",
        popularity: 87,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(9398 + (char.charCodeAt(0) - 65));
                return '⦅' + char + '⦆';
            }).join('');
        }
    },
    {
        id: 73,
        name: "Square with Corners",
        category: "square",
        description: "⌈A⌋ ⌈B⌋ ⌈C⌋",
        popularity: 82,
        converter: (text) => {
            return text.split('').map(char => {
                return '⌈' + char + '⌋';
            }).join('');
        }
    },
    {
        id: 74,
        name: "Rounded Square",
        category: "square",
        description: "「A」 「B」 「C」",
        popularity: 83,
        converter: (text) => {
            return text.split('').map(char => {
                return '「' + char + '」';
            }).join('');
        }
    },
    {
        id: 75,
        name: "Dotted Circle",
        category: "circle",
        description: "◌A◌ ◌B◌ ◌C◌",
        popularity: 81,
        converter: (text) => {
            return text.split('').map(char => {
                return '◌' + char + '◌';
            }).join('');
        }
    },
    {
        id: 76,
        name: "Dashed Square",
        category: "square",
        description: "╭A╮ ╭B╮ ╭C╮",
        popularity: 80,
        converter: (text) => {
            return text.split('').map(char => {
                return '╭' + char + '╮';
            }).join('');
        }
    },
    {
        id: 77,
        name: "Curly Square",
        category: "square",
        description: "❴A❵ ❴B❵ ❴C❵",
        popularity: 79,
        converter: (text) => {
            return text.split('').map(char => {
                return '❴' + char + '❵';
            }).join('');
        }
    },
    {
        id: 78,
        name: "Neon Circle",
        category: "circle",
        description: "◉A◉ ◉B◉ ◉C◉",
        popularity: 85,
        converter: (text) => {
            return text.split('').map(char => {
                return '◉' + char + '◉';
            }).join('');
        }
    },
    {
        id: 79,
        name: "Fancy Square",
        category: "square",
        description: "▂A▂ ▂B▂ ▂C▂",
        popularity: 78,
        converter: (text) => {
            return text.split('').map(char => {
                return '▂' + char + '▂';
            }).join('');
        }
    },
    {
        id: 80,
        name: "Heart Circle",
        category: "circle",
        description: "❤A❤ ❤B❤ ❤C❤",
        popularity: 91,
        converter: (text) => {
            return '❤️ ' + text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(9398 + (char.charCodeAt(0) - 65));
                return char;
            }).join(' ') + ' ❤️';
        }
    },
    {
        id: 81,
        name: "Star Square",
        category: "square",
        description: "⭐A⭐ ⭐B⭐ ⭐C⭐",
        popularity: 90,
        converter: (text) => {
            return '⭐ ' + text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(127312 + (char.charCodeAt(0) - 65));
                return char;
            }).join(' ') + ' ⭐';
        }
    },
    {
        id: 82,
        name: "Diamond Square",
        category: "square",
        description: "◆A◆ ◆B◆ ◆C◆",
        popularity: 83,
        converter: (text) => {
            return text.split('').map(char => {
                return '◆' + char + '◆';
            }).join('');
        }
    },
    {
        id: 83,
        name: "Triangle Circle",
        category: "circle",
        description: "▲A▲ ▲B▲ ▲C▲",
        popularity: 82,
        converter: (text) => {
            return text.split('').map(char => {
                return '▲' + char + '▲';
            }).join('');
        }
    },
    {
        id: 84,
        name: "Infinity Circle",
        category: "circle",
        description: "∞A∞ ∞B∞ ∞C∞",
        popularity: 84,
        converter: (text) => {
            return text.split('').map(char => {
                return '∞' + char + '∞';
            }).join('');
        }
    },
    {
        id: 85,
        name: "Music Square",
        category: "square",
        description: "♪A♪ ♪B♪ ♪C♪",
        popularity: 81,
        converter: (text) => {
            return '♪ ' + text.split('').map(char => {
                return char;
            }).join(' ♪ ') + ' ♪';
        }
    },

    // ===== FANCY STYLES (86-110) =====
    {
        id: 86,
        name: "Small Caps",
        category: "fancy",
        description: "sᴍᴀʟʟ ᴄᴀᴘs",
        popularity: 89,
        converter: (text) => {
            const smallCaps = {
                'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ғ','g':'ɢ','h':'ʜ','i':'ɪ',
                'j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ','q':'ǫ','r':'ʀ',
                's':'s','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'x','y':'ʏ','z':'ᴢ'
            };
            return text.split('').map(char => {
                let lower = char.toLowerCase();
                return smallCaps[lower] || char;
            }).join('');
        }
    },
    {
        id: 87,
        name: "Monospace",
        category: "fancy",
        description: "𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎",
        popularity: 88,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120432 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120458 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 88,
        name: "Fullwidth",
        category: "fancy",
        description: "ＦＵＬＬＷＩＤＴＨ",
        popularity: 87,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= '!' && char <= '~') return String.fromCodePoint(65248 + char.charCodeAt(0));
                return char;
            }).join('');
        }
    },
    {
        id: 89,
        name: "Upside Down",
        category: "fancy",
        description: "ʇxǝʇ uʍop ǝpısdn",
        popularity: 86,
        converter: (text) => {
            const upsideDown = {
                'a':'ɐ','b':'q','c':'ɔ','d':'p','e':'ǝ','f':'ɟ','g':'ɓ','h':'ɥ','i':'ı',
                'j':'ɾ','k':'ʞ','l':'l','m':'ɯ','n':'u','o':'o','p':'d','q':'b','r':'ɹ',
                's':'s','t':'ʇ','u':'n','v':'ʌ','w':'ʍ','x':'x','y':'ʎ','z':'z',
                'A':'∀','B':'𐐒','C':'Ↄ','D':'◖','E':'Ǝ','F':'Ⅎ','G':'⅁','H':'H','I':'I',
                'J':'ſ','K':'⋊','L':'⅂','M':'W','N':'N','O':'O','P':'Ԁ','Q':'Ò','R':'ᴚ',
                'S':'S','T':'⊥','U':'∩','V':'Λ','W':'M','X':'X','Y':'⅄','Z':'Z'
            };
            return text.split('').reverse().map(char => {
                return upsideDown[char] || upsideDown[char.toLowerCase()] || char;
            }).join('');
        }
    },
    {
        id: 90,
        name: "Mirror",
        category: "fancy",
        description: "ɿoɿɿiM",
        popularity: 85,
        converter: (text) => {
            const mirror = {
                'a':'ɒ','b':'d','c':'ɔ','d':'b','e':'ɘ','f':'Ꮈ','g':'ǫ','h':'ʜ','i':'i',
                'j':'į','k':'ʞ','l':'l','m':'m','n':'n','o':'o','p':'q','q':'p','r':'ɿ',
                's':'ƨ','t':'ƚ','u':'u','v':'v','w':'w','x':'x','y':'γ','z':'ƨ'
            };
            return text.split('').map(char => {
                return mirror[char.toLowerCase()] || char;
            }).reverse().join('');
        }
    },
    {
        id: 91,
        name: "Zalgo Fancy",
        category: "fancy",
        description: "Z̷a̷l̷g̷o̷ f̷a̷n̷c̷y̷",
        popularity: 90,
        converter: (text) => {
            const diacritics = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0304'];
            return text.split('').map(char => {
                return char + diacritics[Math.floor(Math.random() * diacritics.length)];
            }).join('');
        }
    },
    {
        id: 92,
        name: "Runic Fancy",
        category: "fancy",
        description: "ᚱᚢᚾᛁᚲ ᚠᚨᚾᚲᛁ",
        popularity: 84,
        converter: (text) => {
            const runes = {
                'A':'ᚨ','B':'ᛒ','C':'ᚲ','D':'ᛞ','E':'ᛖ','F':'ᚠ','G':'ᚷ','H':'ᚺ',
                'I':'ᛁ','J':'ᛃ','K':'ᚴ','L':'ᛚ','M':'ᛗ','N':'ᚾ','O':'ᛟ','P':'ᛈ',
                'R':'ᚱ','S':'ᛋ','T':'ᛏ','U':'ᚢ','V':'ᚢ','W':'ᚹ','Y':'ᛇ','Z':'ᛉ'
            };
            return text.split('').map(char => {
                return runes[char.toUpperCase()] || char;
            }).join('');
        }
    },
    {
        id: 93,
        name: "Cuneiform",
        category: "fancy",
        description: "𒁉𒄭𒁕 𒆸𒉈",
        popularity: 80,
        converter: (text) => {
            const cuneiform = ['𒀀','𒀁','𒀂','𒀃','𒀄','𒀅','𒀆','𒀇','𒀈','𒀉'];
            return text.split('').map(() => {
                return cuneiform[Math.floor(Math.random() * cuneiform.length)];
            }).join('');
        }
    },
    {
        id: 94,
        name: "Egyptian",
        category: "fancy",
        description: "𓂧𓅱𓃭𓂧",
        popularity: 81,
        converter: (text) => {
            const egyptian = ['𓀀','𓀁','𓀂','𓀃','𓀄','𓀅','𓀆','𓀇','𓀈','𓀉'];
            return text.split('').map(() => {
                return egyptian[Math.floor(Math.random() * egyptian.length)];
            }).join('');
        }
    },
    {
        id: 95,
        name: "Medieval Fancy",
        category: "fancy",
        description: "𝔐𝔢𝔡𝔦𝔢𝔳𝔞𝔩",
        popularity: 86,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120068 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120094 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 96,
        name: "Math Bold",
        category: "fancy",
        description: "𝕄𝕒𝕥𝕙 𝔹𝕠𝕝𝕕",
        popularity: 87,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120120 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120146 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 97,
        name: "Math Script",
        category: "fancy",
        description: "𝓜𝓪𝓽𝓱 𝓢𝓬𝓻𝓲𝓹𝓽",
        popularity: 88,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119951 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119953 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 98,
        name: "Math Fraktur",
        category: "fancy",
        description: "𝔐𝔞𝔱𝔥 𝔉𝔯𝔞𝔨𝔱𝔲𝔯",
        popularity: 85,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120068 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120094 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 99,
        name: "Math Double",
        category: "fancy",
        description: "𝔻𝕠𝕦𝕓𝕝𝕖 𝕄𝕒𝕥𝕙",
        popularity: 86,
        converter: (text) => {
            return text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120120 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(120146 + (char.charCodeAt(0) - 97));
                return char;
            }).join('');
        }
    },
    {
        id: 100,
        name: "Agus Slebew Special",
        category: "fancy",
        description: "👑 𝓐𝓰𝓾𝓼 𝓢𝓵𝓮𝓫𝓮𝔀 👑",
        popularity: 100,
        converter: (text) => {
            return '👑 ' + text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119955 + (char.charCodeAt(0) - 65));
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119957 + (char.charCodeAt(0) - 97));
                return char;
            }).join('') + ' 👑';
        }
    },
    {
        id: 101,
        name: "Neon Light",
        category: "fancy",
        description: "💡 𝓷𝓮𝓸𝓷 𝓵𝓲𝓰𝓱𝓽 💡",
        popularity: 93,
        converter: (text) => {
            return '💡 ' + text.split('').map(char => {
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119953 + (char.charCodeAt(0) - 97));
                return char;
            }).join('') + ' 💡';
        }
    },
    {
        id: 102,
        name: "Rainbow",
        category: "fancy",
        description: "🌈 R̷a̷i̷n̷b̷o̷w̷ 🌈",
        popularity: 92,
        converter: (text) => {
            const colors = ['🔴','🟠','🟡','🟢','🔵','🟣'];
            return text.split('').map((char, i) => {
                return colors[i % colors.length] + ' ' + char;
            }).join(' ');
        }
    },
    {
        id: 103,
        name: "Emoji Mix",
        category: "fancy",
        description: "😎 E̷m̷o̷j̷i̷ 😎",
        popularity: 91,
        converter: (text) => {
            const emojis = ['😎','🔥','✨','⭐','💫','⚡'];
            return text.split('').map((char, i) => {
                return emojis[i % emojis.length] + char;
            }).join('');
        }
    },
    {
        id: 104,
        name: "Sparkle",
        category: "fancy",
        description: "✨ S̷p̷a̷r̷k̷l̷e̷ ✨",
        popularity: 90,
        converter: (text) => {
            return '✨ ' + text.split('').map(char => char + ' ✨').join('');
        }
    },
    {
        id: 105,
        name: "Fire",
        category: "fancy",
        description: "🔥 F̷i̷r̷e̷ 🔥",
        popularity: 94,
        converter: (text) => {
            return '🔥 ' + text.split('').map(char => char + ' 🔥').join('');
        }
    },
    {
        id: 106,
        name: "Crown",
        category: "fancy",
        description: "👑 C̷r̷o̷w̷n̷ 👑",
        popularity: 95,
        converter: (text) => {
            return '👑 ' + text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119955 + (char.charCodeAt(0) - 65));
                return char;
            }).join('') + ' 👑';
        }
    },
    {
        id: 107,
        name: "Skull",
        category: "fancy",
        description: "💀 S̷k̷u̷l̷l̷ 💀",
        popularity: 89,
        converter: (text) => {
            return '💀 ' + text.split('').map(char => char + '\u0338').join('') + ' 💀';
        }
    },
    {
        id: 108,
        name: "Dragon",
        category: "fancy",
        description: "🐉 D̷r̷a̷g̷o̷n̷ 🐉",
        popularity: 88,
        converter: (text) => {
            return '🐉 ' + text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(120068 + (char.charCodeAt(0) - 65));
                return char;
            }).join('') + ' 🐉';
        }
    },
    {
        id: 109,
        name: "Phoenix",
        category: "fancy",
        description: "🦅 P̷h̷o̷e̷n̷i̷x̷ 🦅",
        popularity: 87,
        converter: (text) => {
            return '🦅 ' + text.split('').map(char => {
                if (char >= 'a' && char <= 'z') return String.fromCodePoint(119951 + (char.charCodeAt(0) - 97));
                return char;
            }).join('') + ' 🦅';
        }
    },
    {
        id: 110,
        name: "Galaxy",
        category: "fancy",
        description: "🌌 G̷a̷l̷a̷x̷y̷ 🌌",
        popularity: 91,
        converter: (text) => {
            return '🌌 ' + text.split('').map(char => {
                if (char >= 'A' && char <= 'Z') return String.fromCodePoint(119955 + (char.charCodeAt(0) - 65));
                return char + '\u0335';
            }).join('') + ' 🌌';
        }
    }
];

// ======================================== //
// STATE MANAGEMENT                          //
// ======================================== //
let currentText = "Agus Slebew";
let favorites = JSON.parse(localStorage.getItem('agusFavorites')) || [];
let activeCategory = 'all';
let searchTerm = '';
let currentLayout = 'grid';
let displayedFonts = 20; // Untuk load more
const fontsPerPage = 20;

// DOM Elements
const DOM = {
    inputText: document.getElementById('inputText'),
    charCount: document.getElementById('charCount'),
    fontGrid: document.getElementById('fontGridContainer'),
    searchInput: document.getElementById('searchInput'),
    searchClear: document.getElementById('searchClear'),
    categoryTabs: document.querySelectorAll('.tab-btn'),
    randomBtn: document.getElementById('randomBtn'),
    copyAllBtn: document.getElementById('copyAllBtn'),
    themeToggle: document.getElementById('themeToggle'),
    favoritesSection: document.getElementById('favoritesSection'),
    favoritesGrid: document.getElementById('favoritesGrid'),
    clearFavorites: document.getElementById('clearFavorites'),
    gridCount: document.getElementById('gridCount'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    backToTop: document.getElementById('backToTop'),
    toast: document.getElementById('toast'),
    layoutBtns: document.querySelectorAll('.layout-btn'),
    sampleBtns: document.querySelectorAll('.sample-btn')
};

// ======================================== //
// HELPER FUNCTIONS                         //
// ======================================== //

// Update character counter
function updateCharCounter() {
    if (DOM.charCount) {
        DOM.charCount.textContent = currentText.length;
    }
}

// Show toast notification
function showToast(message, icon = '📋') {
    if (!DOM.toast) return;
    
    DOM.toast.querySelector('.toast-icon').textContent = icon;
    DOM.toast.querySelector('.toast-message').textContent = message;
    DOM.toast.classList.add('show');
    
    setTimeout(() => {
        DOM.toast.classList.remove('show');
    }, 2000);
}

// Copy to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Failed to copy', '❌');
    }
}

// Toggle favorite
function toggleFavorite(styleId) {
    const index = favorites.indexOf(styleId);
    if (index === -1) {
        favorites.push(styleId);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('agusFavorites', JSON.stringify(favorites));
    renderFonts();
    renderFavorites();
}

// Check if style is favorite
function isFavorite(styleId) {
    return favorites.includes(styleId);
}

// Filter styles based on category and search
function getFilteredStyles() {
    return fontStyles.filter(style => {
        // Category filter
        if (activeCategory !== 'all' && style.category !== activeCategory) {
            return false;
        }
        
        // Search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            return style.name.toLowerCase().includes(term) ||
                   style.description.toLowerCase().includes(term) ||
                   style.category.toLowerCase().includes(term);
        }
        
        return true;
    });
}

// Get paginated styles
function getPaginatedStyles() {
    const filtered = getFilteredStyles();
    return filtered.slice(0, displayedFonts);
}

// Update grid count
function updateGridCount() {
    if (DOM.gridCount) {
        const total = getFilteredStyles().length;
        DOM.gridCount.textContent = total;
    }
}

// Render fonts grid
function renderFonts() {
    if (!DOM.fontGrid) return;
    
    const paginated = getPaginatedStyles();
    const totalFiltered = getFilteredStyles().length;
    
    // Update load more button visibility
    if (DOM.loadMoreBtn) {
        DOM.loadMoreBtn.style.display = displayedFonts >= totalFiltered ? 'none' : 'block';
    }
    
    if (paginated.length === 0) {
        DOM.fontGrid.innerHTML = `
            <div class="no-results">
                <span>🔍</span>
                <p>No fonts found matching "${searchTerm}"</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    paginated.forEach(style => {
        const converted = style.converter(currentText || ' ');
        const favClass = isFavorite(style.id) ? 'active' : '';
        const glitchClass = style.category === 'glitch' ? 'glitch-effect' : '';
        
        html += `
            <div class="font-card" data-style-id="${style.id}" data-converted="${converted.replace(/"/g, '&quot;')}">
                <div class="card-header">
                    <span class="style-name">${style.name}</span>
                    <span class="favorite-star ${favClass}" data-favid="${style.id}">${isFavorite(style.id) ? '★' : '☆'}</span>
                </div>
                <div class="preview-text ${glitchClass}">${converted}</div>
                <div class="category-tag">${style.category}</div>
                <div class="copy-hint">
                    <span>📋</span>
                    <span>Click to copy</span>
                </div>
            </div>
        `;
    });
    
    DOM.fontGrid.innerHTML = html;
    
    // Add event listeners to cards
    document.querySelectorAll('.font-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent if clicking favorite star
            if (e.target.classList.contains('favorite-star')) return;
            
            const converted = card.dataset.converted;
            if (converted) {
                copyToClipboard(converted);
            }
        });
    });
    
    // Add event listeners to favorite stars
    document.querySelectorAll('.favorite-star').forEach(star => {
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            const styleId = parseInt(star.dataset.favid);
            toggleFavorite(styleId);
        });
    });
    
    updateGridCount();
}

// Render favorites section
function renderFavorites() {
    if (!DOM.favoritesSection || !DOM.favoritesGrid) return;
    
    if (favorites.length === 0) {
        DOM.favoritesSection.style.display = 'none';
        return;
    }
    
    DOM.favoritesSection.style.display = 'block';
    
    const favoriteStyles = fontStyles.filter(style => favorites.includes(style.id));
    
    let html = '';
    favoriteStyles.forEach(style => {
        const converted = style.converter(currentText || ' ');
        const glitchClass = style.category === 'glitch' ? 'glitch-effect' : '';
        
        html += `
            <div class="font-card" data-style-id="${style.id}" data-converted="${converted.replace(/"/g, '&quot;')}">
                <div class="card-header">
                    <span class="style-name">${style.name}</span>
                    <span class="favorite-star active" data-favid="${style.id}">★</span>
                </div>
                <div class="preview-text ${glitchClass}">${converted}</div>
                <div class="category-tag">${style.category}</div>
            </div>
        `;
    });
    
    DOM.favoritesGrid.innerHTML = html;
    
    // Add event listeners to favorite cards
    document.querySelectorAll('#favoritesGrid .font-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('favorite-star')) return;
            
            const converted = card.dataset.converted;
            if (converted) {
                copyToClipboard(converted);
            }
        });
    });
    
    // Add event listeners to favorite stars in favorites section
    document.querySelectorAll('#favoritesGrid .favorite-star').forEach(star => {
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            const styleId = parseInt(star.dataset.favid);
            toggleFavorite(styleId);
        });
    });
}

// Handle search input
function handleSearch() {
    searchTerm = DOM.searchInput.value;
    displayedFonts = fontsPerPage; // Reset pagination
    
    if (searchTerm) {
        DOM.searchClear.classList.add('visible');
    } else {
        DOM.searchClear.classList.remove('visible');
    }
    
    renderFonts();
}

// Clear search
function clearSearch() {
    DOM.searchInput.value = '';
    searchTerm = '';
    DOM.searchClear.classList.remove('visible');
    displayedFonts = fontsPerPage;
    renderFonts();
}

// Handle category filter
function setActiveCategory(category) {
    activeCategory = category;
    displayedFonts = fontsPerPage; // Reset pagination
    
    // Update active tab
    DOM.categoryTabs.forEach(tab => {
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    renderFonts();
}

// Handle layout change
function setLayout(layout) {
    currentLayout = layout;
    
    if (DOM.fontGrid) {
        if (layout === 'grid') {
            DOM.fontGrid.classList.remove('list-layout');
            DOM.fontGrid.classList.add('grid-layout');
        } else {
            DOM.fontGrid.classList.remove('grid-layout');
            DOM.fontGrid.classList.add('list-layout');
        }
    }
    
    // Update active layout button
    DOM.layoutBtns.forEach(btn => {
        if (btn.dataset.layout === layout) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Random style
function randomStyle() {
    const filtered = getFilteredStyles();
    if (filtered.length === 0) return;
    
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    const converted = random.converter(currentText || ' ');
    copyToClipboard(converted);
    showToast(`✨ ${random.name} copied!`, '🎲');
}

// Copy all styles
function copyAll() {
    const filtered = getFilteredStyles();
    const allText = filtered.map(style => {
        return `[${style.name}]\n${style.converter(currentText || ' ')}`;
    }).join('\n\n---\n\n');
    
    copyToClipboard(allText);
    showToast(`📚 ${filtered.length} styles copied!`, '📋');
}

// Toggle theme
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    
    // Update toggle button
    if (DOM.themeToggle) {
        const icon = DOM.themeToggle.querySelector('.toggle-icon');
        const text = DOM.themeToggle.querySelector('.toggle-text');
        
        if (newTheme === 'dark') {
            icon.textContent = '🌙';
            text.textContent = 'Dark';
        } else {
            icon.textContent = '☀️';
            text.textContent = 'Light';
        }
    }
    
    localStorage.setItem('agusTheme', newTheme);
}

// Load more fonts
function loadMore() {
    const total = getFilteredStyles().length;
    displayedFonts = Math.min(displayedFonts + fontsPerPage, total);
    renderFonts();
}

// Handle back to top
function handleScroll() {
    if (window.scrollY > 300) {
        DOM.backToTop.classList.add('visible');
    } else {
        DOM.backToTop.classList.remove('visible');
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ======================================== //
// INITIALIZATION                           //
// ======================================== //
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 AGUS SLEBEW · 100+ FONT GENERATOR LOADED');
    
    // Set initial text
    if (DOM.inputText) {
        DOM.inputText.value = currentText;
        updateCharCounter();
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('agusTheme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (DOM.themeToggle) {
            const icon = DOM.themeToggle.querySelector('.toggle-icon');
            const text = DOM.themeToggle.querySelector('.toggle-text');
            
            if (savedTheme === 'dark') {
                icon.textContent = '🌙';
                text.textContent = 'Dark';
            } else {
                icon.textContent = '☀️';
                text.textContent = 'Light';
            }
        }
    }
    
    // Initial render
    renderFonts();
    renderFavorites();
    
    // ===== EVENT LISTENERS =====
    
    // Input text
    if (DOM.inputText) {
        DOM.inputText.addEventListener('input', (e) => {
            currentText = e.target.value || ' ';
            updateCharCounter();
            renderFonts();
            renderFavorites();
        });
    }
    
    // Search input
    if (DOM.searchInput) {
        DOM.searchInput.addEventListener('input', handleSearch);
    }
    
    // Search clear
    if (DOM.searchClear) {
        DOM.searchClear.addEventListener('click', clearSearch);
    }
    
    // Category tabs
    DOM.categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            setActiveCategory(tab.dataset.category);
        });
    });
    
    // Random button
    if (DOM.randomBtn) {
        DOM.randomBtn.addEventListener('click', randomStyle);
    }
    
    // Copy all button
    if (DOM.copyAllBtn) {
        DOM.copyAllBtn.addEventListener('click', copyAll);
    }
    
    // Theme toggle
    if (DOM.themeToggle) {
        DOM.themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Clear favorites
    if (DOM.clearFavorites) {
        DOM.clearFavorites.addEventListener('click', () => {
            favorites = [];
            localStorage.setItem('agusFavorites', JSON.stringify(favorites));
            renderFonts();
            renderFavorites();
            showToast('⭐ Favorites cleared', '🗑️');
        });
    }
    
    // Load more button
    if (DOM.loadMoreBtn) {
        DOM.loadMoreBtn.addEventListener('click', loadMore);
    }
    
    // Layout buttons
    DOM.layoutBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLayout(btn.dataset.layout);
        });
    });
    
    // Sample buttons
    DOM.sampleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sample = btn.dataset.sample;
            if (sample && DOM.inputText) {
                DOM.inputText.value = sample;
                currentText = sample;
                updateCharCounter();
                renderFonts();
                renderFavorites();
            }
        });
    });
    
    // Back to top
    if (DOM.backToTop) {
        DOM.backToTop.addEventListener('click', scrollToTop);
        window.addEventListener('scroll', handleScroll);
    }
    
    // Keyboard shortcut: Ctrl/Cmd + Enter to copy all
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            copyAll();
        }
    });
    
    console.log(`✅ Loaded ${fontStyles.length} font styles`);
    console.log(`⭐ ${favorites.length} favorites loaded`);
});

// ======================================== //
// EXPORT (for debugging)                   //
// ======================================== //
window.fontStyles = fontStyles;
window.favorites = favorites;
