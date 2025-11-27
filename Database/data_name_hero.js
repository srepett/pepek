// Mapping Role ke Daftar Hero
export const HERO_LIST = {
    Assassin: [
        'Aamon', 'Benedetta', 'Fanny', 'Gusion', 'Hanzo', 
        'Hayabusa', 'Helcurt', 'Joy', 'Karina', 'Lancelot', 
        'Ling', 'Natalia', 'Nolan', 'Saber', 'Selena', 'Suyou'
    ],
    Fighter: [
        'Aldous', 'Alpha', 'Alucard', 'Argus', 'Arlott', 
        'Badang', 'Balmond', 'Bane', 'Barats', 'Cici', 
        'Chou', 'Dyrroth', 'Freya', 'Guinevere', 'Hilda', 
        'Jawhead', 'Julian', 'Khaleed', 'Lapu-Lapu', 'Leomord', 
        'Martis', 'Minsitthar', 'Paquito', 'Phoveus', 'Roger', 
        'Ruby', 'Silvanna', 'Sun', 'Terizla', 'Thamuz', 
        'X.Borg', 'Yin', 'Yu Zhong', 'Zilong'
    ],
    Mage: [
        'Alice', 'Aurora', 'Cecilion', 'Chang\'e', 'Cyclops', 
        'Esmeralda', 'Eudora', 'Gord', 'Harith', 'Harley', 
        'Kadita', 'Kagura', 'Lunox', 'Luo Yi', 'Lylia', 
        'Nana', 'Novaria', 'Odette', 'Pharsa', 'Vale', 
        'Valentina', 'Valir', 'Vexana', 'Xavier', 'Yve', 
        'Zhask', 'Zhuxin'
    ],
    Tank: [
        'Akai', 'Atlas', 'Baxia', 'Belerick', 'Edith', 
        'Franco', 'Gatotkaca', 'Gloo', 'Grock', 'Hylos', 
        'Johnson', 'Khufra', 'Lolita', 'Minotaur', 'Tigreal', 'Uranus'
    ],
    Support: [
        'Angela', 'Carmilla', 'Chip', 'Diggie', 'Estes', 
        'Faramis', 'Floryn', 'Kaja', 'Mathilda', 'Rafaela'
    ],
    Marksman: [
        'Beatrix', 'Brody', 'Bruno', 'Claude', 'Clint', 
        'Granger', 'Hanabi', 'Irithel', 'Ixia', 'Karrie', 
        'Kimmy', 'Layla', 'Lesley', 'Melissa', 'Miya', 
        'Moskov', 'Natan', 'Popol & Kupa', 'Wanwan', 'Yi Sun-shin'
    ]
};

export const ROLE_ICONS = {
    Assassin: '<i class="fa-solid fa-skull"></i>',
    Fighter: '<i class="fa-solid fa-hand-fist"></i>',
    Mage: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
    Tank: '<i class="fa-solid fa-shield-halved"></i>',
    Support: '<i class="fa-solid fa-heart-pulse"></i>',
    Marksman: '<i class="fa-solid fa-crosshairs"></i>'
};

export const ROLE_DESC = {
    Assassin: "Pembunuh cepat dengan damage tinggi.",
    Fighter: "Petarung jarak dekat yang seimbang.",
    Mage: "Pengendali sihir dengan burst damage.",
    Tank: "Pelindung tim dengan pertahanan tinggi.",
    Support: "Penyembuh dan pemberi buff tim.",
    Marksman: "Penembak jitu jarak jauh."
};
