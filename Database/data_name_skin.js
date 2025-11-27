// Mapping Hero ke Daftar Skin
export const SKIN_LIST = {
    Lancelot: [
        { name: 'Blade of Roses', type: 'Basic' },
        { name: 'Dark Earl', type: 'Elite' },
        { name: 'Royal Matador', type: 'Epic' },
        { name: 'Pisces', type: 'Zodiac' },
        { name: 'Floral Knight', type: 'Epic' },
        { name: 'Bren Esports', type: 'Champion' },
        { name: 'Empyrean Flame', type: 'Dragon Tamer' }
    ],
    Fanny: [
        { name: 'Blade Dancer', type: 'Basic' },
        { name: 'Campus Youth', type: 'Elite' },
        { name: 'Skylark', type: 'Epic' },
        { name: 'Lightborn - Ranger', type: 'Lightborn' },
        { name: 'Blade of Kibou', type: 'Anime' }
    ],
    // Fallback Default jika hero tidak punya daftar skin khusus
    DEFAULT: [
        { name: 'Default Skin', type: 'Basic' },
        { name: 'Elite Warrior', type: 'Elite' },
        { name: 'Special Force', type: 'Special' },
        { name: 'Epic Glory', type: 'Epic' },
        { name: 'Collector Edition', type: 'Collector' },
        { name: 'Summer Vibes', type: 'Special' },
        { name: 'Starlight Member', type: 'Starlight' }
    ]
};
