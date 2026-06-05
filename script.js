// ─── DATA ───────────────────────────────────────────────────────────────────
const DAYS = ['ຈັນ', 'ອັງຄານ', 'ພຸດ', 'ພະຫັດ', 'ສຸກ', 'ເສົາ', 'ອາທິດ'];
const DAY_TYPES = {
    0: 'maintenance', 1: 'maintenance', 2: 'maintenance',
    3: 'maintenance', 4: 'maintenance', 5: 'training', 6: 'recovery'
};

const ROUTINES = {
    training: {
        label: 'TRAINING DAY',
        daily: [
            { id: 'sunscreen_face', text: 'ທາກັນແດດໜ້າ (SPF)', tag: 'care' },
            { id: 'sunscreen_body', text: 'ທາກັນແດດຕົວ', tag: 'care' },
            { id: 'meal1', text: 'ຄາບ 1 — ໂອດມີນເຊົ້າ + ໂປຣຕີນ (~560 kcal, ~47g)', tag: 'nutrition' },
            { id: 'meal2', text: 'ຄາບ 2 — ກາງເວັນ (~500 kcal, ~27g)', tag: 'nutrition' },
            { id: 'pre_workout', text: 'ກຽມອຸປະກອນ / ວໍມອັບ 10 ນາທີ', tag: null },
            { id: 'workout', text: 'ຝຶກໜັກຕາມໂປຣແກຣມ (ເບິ່ງດ້ານລຸ່ມ)', tag: null },
            { id: 'meal3', text: 'ຄາບ 3 — ຫຼັງອອກກຳລັງກາຍ (~500 kcal, ~27g)', tag: 'nutrition' },
            { id: 'meal4', text: 'ຄາບ 4 — ຕອນແລງ (~500 kcal, ~27g)', tag: 'nutrition' },
            { id: 'stretch', text: 'ຢືດຢຽດ / Mobility 15 ນາທີ', tag: null },
        ],
        exercises: [
            {
                cat: 'PULL — WIDTH', items: [
                    { id: 'lat_pulldown', name: 'Lat Pulldown', sets: '3×12' },
                    { id: 'pullups', name: 'Pull-ups', sets: '3×12' },
                ]
            },
            {
                cat: 'PULL — THICKNESS', items: [
                    { id: 'tbar_row', name: 'T-bar Row', sets: '3×10' },
                    { id: 'cable_row', name: 'Cable Row', sets: '3×10' },
                    { id: 'barbell_row', name: 'Barbell Row (45-90°)', sets: '3×10' },
                ]
            },
            {
                cat: 'PULL — LOWER/MID', items: [
                    { id: 'onearm_row', name: 'One-arm DB Row', sets: '3×12' },
                    { id: 'neutral_row', name: 'Neutral Grip Row', sets: '3×12' },
                ]
            },
            {
                cat: 'PUSH & SHOULDERS', items: [
                    { id: 'incline_press', name: 'Incline Chest Press (30-40°)', sets: '3×10' },
                    { id: 'flys', name: 'Chest Flys', sets: '3×12' },
                    { id: 'dips', name: 'Dips', sets: '3×max' },
                    { id: 'shoulder_press', name: 'Shoulder Press', sets: '3×10' },
                ]
            },
            {
                cat: 'SKILL WORK', items: [
                    { id: 'pistol', name: 'Pistol Squat Practice', sets: '3×5/leg' },
                    { id: 'lsit', name: 'L-sit Hold', sets: '3×max' },
                    { id: 'muscleup_drills', name: 'Muscle-up Drills', sets: '3×5' },
                ]
            },
        ]
    },
    maintenance: {
        label: 'MAINTENANCE DAY',
        daily: [
            { id: 'sunscreen_face', text: 'ທາກັນແດດໜ້າ (SPF)', tag: 'care' },
            { id: 'sunscreen_body', text: 'ທາກັນແດດຕົວ', tag: 'care' },
            { id: 'meal1', text: 'ຄາບ 1 — ໂອດມີນເຊົ້າ + ໂປຣຕີນ (~560 kcal, ~47g)', tag: 'nutrition' },
            { id: 'meal2', text: 'ຄາບ 2 — ກາງເວັນ (~500 kcal, ~27g)', tag: 'nutrition' },
            { id: 'walk', text: 'ຍ່າງ / ກິດຈະກຳເບົາ (Active Recovery)', tag: null },
            { id: 'meal3', text: 'ຄາບ 3 — ຕອນບ່າຍ (~500 kcal, ~27g)', tag: 'nutrition' },
            { id: 'meal4', text: 'ຄາບ 4 — ຕອນແລງ (~500 kcal, ~27g)', tag: 'nutrition' },
            { id: 'mobility', text: 'Mobility / Stretching 20 ນາທີ', tag: null },
        ],
        exercises: []
    },
    recovery: {
        label: 'RECOVERY DAY',
        daily: [
            { id: 'sunscreen_face', text: 'ທາກັນແດດໜ້າ (SPF)', tag: 'care' },
            { id: 'sunscreen_body', text: 'ທາກັນແດດຕົວ', tag: 'care' },
            { id: 'meal1', text: 'ຄາບ 1 — ໂອດມີນເຊົ້າ + ໂປຣຕີນ (~560 kcal, ~47g)', tag: 'nutrition' },
            { id: 'meal2', text: 'ຄາບ 2 — ກາງເວັນ (~500 kcal, ~27g)', tag: 'nutrition' },
            { id: 'meal3', text: 'ຄາບ 3 — ຕອນບ່າຍ (~500 kcal, ~27g)', tag: 'nutrition' },
            { id: 'meal4', text: 'ຄາບ 4 — ຕອນແລງ (~500 kcal, ~27g)', tag: 'nutrition' },
            { id: 'prep_food', text: 'ກຽມອາຫານສຳລັບອາທິດໜ້າ', tag: null },
            { id: 'wiki', text: 'ອັບເດດ Wiki / ບັນທຶກຄວາມກ້າວໜ້າ', tag: null },
            { id: 'sleep', text: 'ນອນພັກຜ່ອນໄວ — Recovery ເຕັມທີ່', tag: null },
        ],
        exercises: []
    }
};

const SKILLS = [
    { name: 'Pull-ups', current: '12 reps', target: '15 reps → MU', pct: 80 },
    { name: 'Pistol Squat', current: 'Progressing', target: 'Full Pistol', pct: 45 },
    { name: 'L-sit Hold', current: 'Progressing', target: '10+ sec', pct: 35 },
    { name: 'Muscle-up', current: 'Drilling', target: 'Clean Rep', pct: 20 },
];

const EXERCISE_DETAILS = {
    lat_pulldown: {
        name: 'Lat Pulldown',
        sets: '3×12',
        image: 'image/lat_pulldown.png',
        target: 'ກ້າມຊີ້ນປີກ (Latissimus Dorsi), ຫຼັງສ່ວນເທິງ',
        tips: [
            'ເອນຕົວໄປທາງຫຼັງເລັກນ້ອຍ (ປະມານ 10-15 ອົງສາ)',
            'ດຶງບາລົງມາທີ່ໜ້າເອິກສ່ວນເທິງ ບີບສະບັກເຂົ້າຫາກັນ',
            'ຄວບຄຸມຈັງຫວະປ່ອຍບາຂຶ້ນຊ້າໆ ຢ່າປ່ອຍກະຊາກ'
        ],
        focus: 'ສ້າງຄວາມກວ້າງແລະແຜ່ຂອງແຜ່ນຫຼັງ (Lats Width)'
    },
    pullups: {
        name: 'Pull-ups',
        sets: '3×12',
        image: 'image/pullups.png',
        target: 'ກ້າມຊີ້ນປີກ (Lats), ກ້າມຊີ້ນສະບັກ (Teres Major/Rhomboids)',
        tips: [
            'ຈັບບາກວ້າງກວ່າບ່າເລັກນ້ອຍ ຄວ້ຳມື',
            'ดຶງຕົວຂຶ້ນໃຫ້ໜ້າເອິກເຂົ້າໃກ້ບາທີ່ສຸດ (ໂຟກັດບີບຫຼັງ)',
            'ຜ່ອນຕົວລົງຈົນແຂນຢຽດເກືອບຕຶງເພື່ອຢືດກ້າມຊີ້ນສູງສຸດ'
        ],
        focus: 'ເພີ່ມຄວາມແຂງແຮງແລະຄວາມກວ້າງລວມຂອງຫຼັງ'
    },
    tbar_row: {
        name: 'T-bar Row',
        sets: '3×10',
        image: 'image/tbar_row.png',
        target: 'ຫຼັງສ່ວນເທິງ (Upper Back), ກ້າມຊີ້ນສະບັກ, ປີກ',
        tips: [
            'ຢືນຄ່ອມບາ ຍໍ້ເຂົ່າເລັກນ້ອຍ ພັບສະໂພກເກັງແກນກາງຕົວໃຫ້ໝັ້ນຄົງ',
            'ດຶງດອກຈັບເຂົ້າຫາໜ້າທ້ອງສ່ວນລຸ່ມ ບີບສະບັກໃຫ້ແໜ້ນທີ່ສຸດ',
            'ຈັງຫວະປ່ອຍບາ ໃຫ້ຢືດຫຼັງແລະປ່ອຍບາລົງຊ້າໆ'
        ],
        focus: 'ສ້າງຄວາມໜາແລະມິຕິຂອງຫຼັງສ່ວນເທິງ (Thickness)'
    },
    cable_row: {
        name: 'Cable Row',
        sets: '3×10',
        image: 'image/cable_row.png',
        target: 'ຫຼັງສ່ວນກາງ (Mid Back), ສະບັກ, ປີກ',
        tips: [
            'ນັ່ງຫຼັງຊື່ ຢືດເອິກຂຶ້ນ ຢືນແຂນໄປໃຫ້ສຸດ',
            'ດຶງເຄເບິນເຂົ້າຫາໜ້າທ້ອງພ້ອມກັບບີບສະບັກສອງຂ້າງເຂົ້າຫາກັນ',
            'ຮັກສາລຳຕົວໃຫ້ອຍູ່ກັບທີ່ ບໍ່ເອນຕົວຊ່ວຍໂຍນນ້ຳໜັກ'
        ],
        focus: 'ສ້າງລາຍລະອຽດແລະຮອຍຢັກຂອງແຜ່ນຫຼັງສ່ວນກາງ'
    },
    barbell_row: {
        name: 'Barbell Row (45-90°)',
        sets: '3×10',
        image: 'image/barbell_row.png',
        target: 'ຫຼັງສ່ວນເທິງ, ຫຼັງສ່ວນກາງ, ປີກ, ແລະຫຼັງສ່ວນລຸ່ມ (Lower Back)',
        tips: [
            'ຢືນກົ້ມຕົວເຮັດມຸມ 45-90 ອົງສາ ເກັງໜ້າທ້ອງແລະຫຼັງລຸ່ມเพื่อຊັບພອດສະໂພກ',
            'ດຶງບາເບລເຂົ້າຫາແອວ/ໜ້າທ້ອງສ່ວນລຸ່ມ ລຳຕົວນິ້ງບໍ່ຂຍັບຂະຫຍົ່ມຕົວ',
            'ຄວບຄຸມຟອມຕະຫຼອດເຊັດ ບໍ່ໃຊ້ແຮງຫວ່ຽງຈາກເຂົ່າ'
        ],
        focus: 'ความໜາແໜ້ນແລະພະລະກຳລັງຂອງຫຼັງໂດຍລວມ'
    },
    onearm_row: {
        name: 'One-arm DB Row',
        sets: '3×12',
        image: 'image/onearm_row.png',
        target: 'ປີກສ່ວນລຸ່ມ (Lower Lats), ຫຼັງສ່ວນກາງ',
        tips: [
            'ວາງເຂົ່າແລະມືໜຶ່ງຂ້າງເທິງເບາະ ອີກຂ້າງຖືດຳເບລປ່ອຍລົງຊື່ໆ',
            'ດຶງດຳເບລຂຶ້ນຕາມແນວສະຫຼຽງໄປທາງສະໂພກ ບີບສອກຊິດລຳຕົວ',
            'ໂຟກັດທີ່ການຂຍັບຂໍ້ສອກຂຶ້ນແລະລົງ ບໍ່ບິດແອວຫຼືຕົວໂຍກ'
        ],
        focus: 'ສ້າງຄວາມສົມດຸນຂອງກ້າມຊີ້ນຫຼັງຊ້າຍແລະຂວา'
    },
    neutral_row: {
        name: 'Neutral Grip Row',
        sets: '3×12',
        image: 'image/neutral_row.png',
        target: 'ຫຼັງສ່ວນກາງ, ປີກ, ຫຼັງແຂນສ່ວນເທິງ',
        tips: [
            'ໃຊ້ດອກຈັບແບບປິ່ນຝາມືເຂົ້າຫາກັນ (Neutral Grip)',
            'ດຶງເຂົ້າຫາລຳຕົວໂດຍໃຫ້ຂໍ້ສອກບີບຊິດຂ້າງຕົວຕະຫຼອດເວລາ',
            'ເນັ້ນບີບສະບັກທີ່ຈຸດດຶງສຸດເພື່ອເນັ້ນກະຕຸ້ນກ້າມຊີ້ນຫຼັງສ່ວນໃນ'
        ],
        focus: 'ເນັ້ນຫຼັງສ່ວນກາງແລະກ້າມຊີ້ນອ້ອມສະບັກ'
    },
    incline_press: {
        name: 'Incline Chest Press (30-40°)',
        sets: '3×10',
        image: 'image/incline_press.png',
        target: 'ເອິກສ່ວນເທິງ (Upper Chest), ໄຫຼ່ໜ้า',
        tips: [
            'ປັບເບາະອຽງຂຶ້ນ 30-40 ອົງສາ (ບໍ່ເກີນ 45 ອົງສາເພື່ອບໍ່ໃຫ້ຫົວໄຫຼ່ເຮັດວຽກຫຼາຍເກີນໄປ)',
            'ກົດບ່າແລະສະບັກລົງຕິດເບາະ ດັນດຳເບລຫຼືບາຂຶ້ນຊື່ໆ ເທິງເອິກເທິງ',
            'ຄ່ອຍໆ ຜ່ອນລົງຈົນຂໍ້ສອກເຮັດມຸມປະມານ 90 ອົງສາແລ້ວດັນຂຶ້ນ'
        ],
        focus: 'ສ້າງເນື້ອເອິກສ່ວນເທິງໃຫ້ເບິ່ງເຕັມແລະຊັດເຈນ'
    },
    flys: {
        name: 'Chest Flys',
        sets: '3×12',
        image: 'image/flys.png',
        target: 'ເອິກສ່ວນກາງແລະຂອບເອິກດ້ານໃນ (Inner/Middle Chest)',
        tips: [
            'ນອນຮາບກັບເບາະ ຖືດຳເບລຂຶ້ນ ງໍ້ຂໍ້ສອກເລັກນ້ອຍແລະລັອກຂໍ້ສອກໄວ້ຄົງທີ່',
            'ກາງແຂນອອກດ້ານຂ້າງເປັນຮູບວົງກວ້າງຈົນຮູ້ສຶກຢືດທີ່ກ້າມຊີ້ນເອິກ',
            'ຫຸບແຂນກັບຂຶ້ນມາລວມກັນເຄິ່ງກາງພ້ອມອອກແຮງບີບໜ້າເອິກແໜ້ນ'
        ],
        focus: 'ເພີ່ມຮອຍແຍກແລະມິຕິຮອຍເລິກຂອງຮ່ອງເອິກ'
    },
    dips: {
        name: 'Dips',
        sets: '3×max',
        image: 'image/dips.png',
        target: 'ເອິກສ່ວນລຸ່ມ (Lower Chest), ຫຼັງແຂນ (Triceps), ໄຫຼ່ໜ້າ',
        tips: [
            'ຈັບບາຄູ່ ໂນ້ມຕົວໄປທາງໜ້າເລັກນ້ອຍ (ເພື່ອປ່ຽນໂຟກັດໄປທີ່ເອິກສ່ວນລຸ່ມແທນຫຼັງແຂນ)',
            'ຍໍ້ຕົວລົງຊ້າໆ ຈົນຂໍ້ສອກເຮັດມຸມ 90 ອົງສາ ຢືດເອິກພົ້ນບ່າ',
            'ເກັ່ງໜ້າເອິກດັນຕົວຂຶ້ນມາຈົນສຸດແຂນ'
        ],
        focus: 'ສ້າງຮູບຊົງແລະຕັດຂອບເອິກສ່ວນລຸ່ມໃຫ້ຄົມຊັດ'
    },
    shoulder_press: {
        name: 'Shoulder Press',
        sets: '3×10',
        image: 'image/shoulder_press.png',
        target: 'ຫົວໄຫຼ່ດ້ານໜ້າ (Anterior Deltoid) ແລະຫົວໄຫຼ່ດ້ານຂ້າງ',
        tips: [
            'ນັ່ງຫຼັງຊື່ແນບເບາะ ຖືດຳເບລລະດັບໃບຫູ ຂໍ້ສອກຕັ້ງສາກ 90 ອົງສາ',
            'ດັນດຳເບລຂຶ້ນຊື່ໆ ເທິງຫົວໃຫ້ແຂນຢຽດເກືອບຕຶງ',
            'ຄ່ອຍໆ ຜ່ອນດຳເບລລົງມາຊ້າໆ ໃນທ່າກຽມແລະດັນຂຶ້ນຕໍ່ທັນທີ'
        ],
        focus: 'ສ້າງມິຕິແລະຄວາມກວ້າງກົມມົນຂອງຫົວໄຫຼ່'
    },
    pistol: {
        name: 'Pistol Squat Practice',
        sets: '3×5/leg',
        image: 'image/pistol.png',
        target: 'ຕົ້ນຂาໜ້າ (Quadriceps), ກົ້ນ (Glutes), ແກນກາງຕົວ, ຂໍ້ຕີນ',
        tips: [
            'ຢືນຂາດຽו ຢືນແຂນແລະຂາອີກຂ້າງໄປທາງໜ້າເພື່ອຖ່ວງດຸນນ້ຳໜັກ',
            'ຄ່ອຍໆ ຍໍ້ສະໂພກລົງເລິກຄືນັ່ງຢອງຂາດຽוຢ່າງຄວບຄຸມ',
            'ຫາກຊົງຕົວຍາກ ໃຫ້ໃຊ້ມືແຕະເກາະເສົາຫຼືໃຊ້ອຸປະກອນປະຄອງຕົວ'
        ],
        focus: 'ເສີມສ້າງຄວາມແຂງແຮງແລະຄວາມຢືດຢຸ່ນຂອງຂາເທື່ອລະຂ້າງ'
    },
    lsit: {
        name: 'L-sit Hold',
        sets: '3×max',
        image: 'image/lsit.png',
        target: 'ກ້າມຊີ້ນໜ້າທ້ອງ (Core), ຕົ້ນຂາດ້ານໜ້າ, ຂໍ້ສອກและຫົວໄຫຼ່',
        tips: [
            'ວາງມືເທິງບາຄູ່ຫຼືເທິງພື້ນ ດັນຕົວຂຶ້ນເກັ່ງບ່າໃຫ້ຫ່າງຈາກໃบຫູ',
            'ຍົກຂາທັງສອງຂ້າງຂຶ້ນຊື່ຂະໜານກັບພື້ນເຮັດມຸມ 90 ອົງສາກับລຳຕົວ',
            'ເກັ່ງໜ້າທ້ອງ ລັອກເຂົ່າຕຶງ ແລະຮັກສາທ່າທາງຄ້າງໄວ້ໃຫ້ນານທີ່ສຸດ'
        ],
        focus: 'ພັດທະນາຄວາມແຂງແຮງແກນກາງຕົວແບບ Isometric'
    },
    muscleup_drills: {
        name: 'Muscle-up Drills',
        sets: '3×5',
        image: 'image/muscleup_drills.png',
        target: 'ປີກ, ສະບັກ, ໜ້າເອິກ, ຫຼັງແຂນ, ຂໍ້ສອກ',
        tips: [
            'ຊ້ອມທ່າດຶງຂໍ້ແບບລະເບີດພະລັງ (Explosive Pull-ups) ໃຫ້ບາແຕະໜ້າເອິກຫຼືແອວ',
            'ຝຶກຈັບຂໍ່ມືແລະໝູນຂໍ່ມືຂຶ້ນພົ້ນບາ (Transition Phase)',
            'ໃຊ້ການຫວ່ຽງຕົວ (Kipping) ເລັກນ້ອຍເພື່ອຊ່ວຍສົ່ງແຮງດັນຕົວຂຶ້ນເໜືອບາ'
        ],
        focus: 'ຝຶກການເຄື່ອນໄຫວເຊີງຊ້ອນແລະແຮງດຶງລະເບີດພະລະກຳລັງ'
    }
};

// ─── STATE ───────────────────────────────────────────────────────────────────
function getStorageKey(day, id) { return `toji_d${day}_${id}`; }
function isDone(day, id) { return localStorage.getItem(getStorageKey(day, id)) === '1'; }
function setDone(day, id, val) { localStorage.setItem(getStorageKey(day, id), val ? '1' : '0'); }
function clearDay(day) {
    const keys = Object.keys(localStorage).filter(k => k.startsWith(`toji_d${day}_`));
    keys.forEach(k => localStorage.removeItem(k));
}

// ─── RENDER ──────────────────────────────────────────────────────────────────
function renderMain(day) {
    const type = DAY_TYPES[day];
    const routine = ROUTINES[type];
    const content = document.getElementById('mainContent');
    content.innerHTML = '';

    // Day label
    const dayLabel = document.createElement('div');
    dayLabel.style.cssText = 'font-family:var(--font-display);font-size:28px;letter-spacing:4px;color:var(--bright);margin-bottom:20px;';
    dayLabel.textContent = `${DAYS[day]} — ${routine.label}`;
    content.appendChild(dayLabel);

    const grid = document.createElement('div');
    grid.className = 'grid';

    // Daily checklist
    const checkPanel = document.createElement('div');
    checkPanel.className = 'panel' + (routine.exercises.length ? '' : ' grid-full');
    checkPanel.innerHTML = `<div class="panel-label">DAILY CHECKLIST</div>
<ul class="task-list" id="taskList"></ul>`;
    grid.appendChild(checkPanel);

    // Exercise panel (training day only)
    if (routine.exercises.length) {
        const exPanel = document.createElement('div');
        exPanel.className = 'panel';
        exPanel.innerHTML = `<div class="panel-label">WORKOUT</div><div id="exList"></div>`;
        grid.appendChild(exPanel);

        const exList = exPanel.querySelector('#exList');
        routine.exercises.forEach(cat => {
            const block = document.createElement('div');
            block.className = 'exercise-block';
            block.innerHTML = `<div class="exercise-category">${cat.cat}</div>`;
            cat.items.forEach(ex => {
                const item = document.createElement('div');
                item.className = 'exercise-item' + (isDone(day, ex.id) ? ' done' : '');
                item.innerHTML = `<div class="ex-check">${isDone(day, ex.id) ? '✓' : ''}</div>
      <div class="ex-name">${ex.name}</div>
      <div class="ex-sets">${ex.sets}</div>`;
                item.addEventListener('click', () => {
                    const d = !isDone(day, ex.id);
                    setDone(day, ex.id, d);
                    item.classList.toggle('done', d);
                    item.querySelector('.ex-check').textContent = d ? '✓' : '';
                    updateMacroProgress(day);
                });
                block.appendChild(item);
            });
            exList.appendChild(block);
        });
    }

    // Progress panel
    const progressPanel = document.createElement('div');
    progressPanel.className = 'panel';
    progressPanel.innerHTML = `<div class="panel-label">MACRO TARGET</div>
<div class="macro-row">
  <div class="macro-label">KCAL</div>
  <div class="macro-bar-wrap"><div class="macro-bar-fill kcal" id="mKcal" style="width:0%"></div></div>
  <div class="macro-val" id="mKcalVal">0 / 2000</div>
</div>
<div class="macro-row">
  <div class="macro-label">PROTEIN</div>
  <div class="macro-bar-wrap"><div class="macro-bar-fill protein" id="mProt" style="width:0%"></div></div>
  <div class="macro-val" id="mProtVal">0 / 110g</div>
</div>`;
    grid.appendChild(progressPanel);

    // Skills panel
    const skillPanel = document.createElement('div');
    skillPanel.className = 'panel';
    skillPanel.innerHTML = `<div class="panel-label">SKILL TARGETS</div>
${SKILLS.map(s => `
  <div class="skill-item">
    <div class="skill-name">${s.name}</div>
    <div class="skill-bar-wrap"><div class="skill-bar-fill" style="width:${s.pct}%"></div></div>
    <div class="skill-current">${s.current}</div>
  </div>`).join('')}`;
    grid.appendChild(skillPanel);

    content.appendChild(grid);

    // Build task list
    const taskList = checkPanel.querySelector('#taskList');
    routine.daily.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item' + (isDone(day, task.id) ? ' done' : '');
        li.innerHTML = `<div class="task-check"></div>
  <div class="task-text">${task.text}</div>
  ${task.tag ? `<div class="task-tag ${task.tag}">${task.tag.toUpperCase()}</div>` : ''}`;
        li.addEventListener('click', () => {
            const d = !isDone(day, task.id);
            setDone(day, task.id, d);
            li.classList.toggle('done', d);
            updateMacroProgress(day);
        });
        taskList.appendChild(li);
    });

    updateMacroProgress(day);
}

function updateMacroProgress(day) {
    let kcal = 0;
    let prot = 0;
    if (isDone(day, 'meal1')) { kcal += 560; prot += 47; }
    if (isDone(day, 'meal2')) { kcal += 500; prot += 27; }
    if (isDone(day, 'meal3')) { kcal += 500; prot += 27; }
    if (isDone(day, 'meal4')) { kcal += 500; prot += 27; }
    
    const kcalPct = Math.min(100, (kcal / 2000) * 100);
    const protPct = Math.min(100, (prot / 110) * 100);

    const kb = document.getElementById('mKcal');
    const pb = document.getElementById('mProt');
    const kv = document.getElementById('mKcalVal');
    const pv = document.getElementById('mProtVal');

    if (kb) kb.style.width = kcalPct + '%';
    if (pb) pb.style.width = protPct + '%';
    if (kv) kv.textContent = `${kcal} / 2000`;
    if (pv) pv.textContent = `${prot}g / 110g`;
}

// Render Workout Library page
function renderProgramsPage() {
    const container = document.getElementById('programsPage');
    container.innerHTML = '';

    // Create wrapper
    const wrap = document.createElement('div');
    wrap.className = 'programs-container';

    // Title
    const title = document.createElement('div');
    title.style.cssText = 'font-family:var(--font-display);font-size:28px;letter-spacing:4px;color:var(--bright);margin-bottom:12px;';
    title.textContent = 'WORKOUT LIBRARY — ແນະນຳທ່າຝຶກ';
    wrap.appendChild(title);

    // Filter tabs container
    const filterContainer = document.createElement('div');
    filterContainer.className = 'category-tabs';
    
    const categories = [
        { key: 'all', label: 'ທັງໝົດ (ALL)' },
        { key: 'pull', label: 'ດຶງ / ຫຼັງ (PULL / BACK)' },
        { key: 'push', label: 'ດັນ / ເອິກ & ໄຫຼ່ (PUSH / CHEST)' },
        { key: 'skills', label: 'ຝຶກທັກສະ (SKILLS)' }
    ];

    let activeFilter = 'all';

    function renderWorkoutGrid() {
        const existingGrid = wrap.querySelector('.workout-grid');
        if (existingGrid) existingGrid.remove();

        const grid = document.createElement('div');
        grid.className = 'workout-grid';

        const allExercises = [];
        
        // Populate and group from training routine exercises
        ROUTINES.training.exercises.forEach(cat => {
            const isPull = cat.cat.includes('PULL');
            const isPush = cat.cat.includes('PUSH');
            const isSkill = cat.cat.includes('SKILL');
            
            let filterGroup = '';
            if (isPull) filterGroup = 'pull';
            else if (isPush) filterGroup = 'push';
            else if (isSkill) filterGroup = 'skills';

            cat.items.forEach(item => {
                allExercises.push({
                    id: item.id,
                    name: item.name,
                    sets: item.sets,
                    group: filterGroup,
                    catLabel: cat.cat
                });
            });
        });

        const filtered = allExercises.filter(ex => activeFilter === 'all' || ex.group === activeFilter);

        filtered.forEach(ex => {
            const details = EXERCISE_DETAILS[ex.id] || {
                target: 'ກ້າມຊີ້ນສະເພາະສ່ວນ',
                tips: ['ເນັ້ນຟອມທີ່ຖືກຕ້ອງ'],
                focus: 'ຄວາມທົນທານແລະຄວາມກ້າວໜ້າ'
            };

            const card = document.createElement('div');
            card.className = 'workout-card';
            card.innerHTML = `
                <div class="workout-card-header">
                    <div class="workout-card-title-group">
                        <div class="workout-card-title">${ex.name}</div>
                        <div class="workout-card-subtitle">${ex.catLabel}</div>
                    </div>
                    <div class="workout-card-sets">${ex.sets}</div>
                    <div class="workout-card-arrow">▼</div>
                </div>
                <div class="workout-card-content">
                    <div class="workout-card-inner">
                        ${details.image ? `
                        <div class="workout-card-image-wrap">
                            <img class="workout-card-image" src="${details.image}" alt="${ex.name}">
                        </div>
                        ` : ''}
                        <div class="workout-card-details">
                            <div class="detail-section">
                                <div class="detail-label">TARGET MUSCLES / ກ້າມຊີ້ນເປົ້າໝາຍ</div>
                                <div class="detail-val">${details.target}</div>
                            </div>
                            <div class="detail-section">
                                <div class="detail-label">FOCUS AREA / ຈຸດເນັ້ນຢ້ຳ</div>
                                <div class="detail-val">${details.focus}</div>
                            </div>
                            <div class="detail-section">
                                <div class="detail-label">TRAINING TIPS / ຄຳແນະນຳການຝຶກ</div>
                                <ul class="tips-list">
                                    ${details.tips.map(tip => `<li>${tip}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = card.classList.contains('expanded');
                // Collapse all other cards first
                document.querySelectorAll('.workout-card').forEach(c => {
                    if (c !== card) c.classList.remove('expanded');
                });
                card.classList.toggle('expanded', !isExpanded);
                // Scroll expanded card into view on mobile
                if (!isExpanded) {
                    setTimeout(() => {
                        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                }
            });

            grid.appendChild(card);
        });

        wrap.appendChild(grid);
    }

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-tab' + (cat.key === activeFilter ? ' active' : '');
        btn.textContent = cat.label;
        btn.addEventListener('click', () => {
            filterContainer.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = cat.key;
            renderWorkoutGrid();
        });
        filterContainer.appendChild(btn);
    });

    wrap.appendChild(filterContainer);
    container.appendChild(wrap);
    
    renderWorkoutGrid();
}

// Render Nutrition Recipe page
function renderNutritionPage() {
    const container = document.getElementById('nutritionPage');
    container.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.className = 'nutrition-container';

    wrap.innerHTML = `
        <div style="font-family:var(--font-display);font-size:28px;letter-spacing:4px;color:var(--bright);margin-bottom:8px;">
            🥣 NUTRITION — OATS + PROTEIN + OLIVE OIL
        </div>
        <div style="font-family:var(--font-mono);font-size:11px;color:var(--dim);margin-bottom:28px;letter-spacing:1px;">
            DAILY FUEL FOR CODING & TRAINING — RECIPE v1.0
        </div>

        <!-- Ingredients Table -->
        <div class="nutrition-card">
            <div class="nutrition-card-header">
                <span class="nutrition-card-icon">📋</span>
                <span class="nutrition-card-title">ສ່ວນຜສມທີ່ແນະນຳ (ຕໍ່ 1 ມື້)</span>
                <span class="nutrition-card-badge">~560 KCAL</span>
            </div>
            <div class="nutrition-card-body">
                <table class="ingredient-table">
                    <thead>
                        <tr>
                            <th>ວັດຖຸດິບ</th>
                            <th>ປະລິມານ</th>
                            <th>ພະລັງງານ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="ingredient-name">Oats (Quaker Instant)</div>
                                <div class="ingredient-sub">ຂ້າວໂອ໊ດ</div>
                            </td>
                            <td>70 ກຣັມ (~2 ສະກູ໊ບ)</td>
                            <td class="kcal-val">~260 kcal</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="ingredient-name">Whey / Plant Protein</div>
                                <div class="ingredient-sub">ໂປຣຕີນ</div>
                            </td>
                            <td>1.5 ສະກູ໊ບ (~45-48 ກຣັມ)</td>
                            <td class="kcal-val">~180 kcal</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="ingredient-name">Extra Virgin Olive Oil</div>
                                <div class="ingredient-sub">ນ້ຳມັນມະກອກ (EVOO)</div>
                            </td>
                            <td>1 ບ່ວງໂຕະ (15 ມລ.)</td>
                            <td class="kcal-val">~120 kcal</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="ingredient-name">Water / Almond Milk</div>
                                <div class="ingredient-sub">ນ້ຳເປົ່າ ຫຼື ນົມອາມັນ</div>
                            </td>
                            <td>200 – 250 ມລ.</td>
                            <td class="kcal-val">—</td>
                        </tr>
                    </tbody>
                </table>
                <div class="macro-summary-strip">
                    <div class="macro-chip"><span class="macro-dot kcal-dot"></span>~560 kcal</div>
                    <div class="macro-chip"><span class="macro-dot prot-dot"></span>~47g Protein</div>
                    <div class="macro-chip"><span class="macro-dot fat-dot"></span>~22g Healthy Fat</div>
                    <div class="macro-chip"><span class="macro-dot carb-dot"></span>~51g Carbs</div>
                </div>
            </div>
        </div>

        <!-- Method Cards -->
        <div class="method-grid">
            <div class="nutrition-card method-card">
                <div class="method-badge quick">⚡ QUICK MIX</div>
                <div class="method-title">ແບບຊົງດື່ມທັນທີ</div>
                <div class="method-subtitle">ເໝາະກັບຊ່ວງເຊົ້າທີ່ຮີບໄປເຮັດວຽກ (08:00 ນ.)</div>
                <ol class="method-steps">
                    <li>
                        <span class="step-num">1</span>
                        <span>ໃສ່ <strong>ຂ້າວໂອ໊ດ</strong> ແລະ <strong>ໂປຣຕີນ</strong> ລົງໃນແກ້ວເຊັກ</span>
                    </li>
                    <li>
                        <span class="step-num">2</span>
                        <span>ເຕີມ <strong>ນ້ຳເຢັນ</strong> ຫຼື ນ້ຳອຸນຫະພູມຫ້ອງ</span>
                    </li>
                    <li>
                        <span class="step-num">3</span>
                        <span>ໃສ່ <strong>ນ້ຳມັນມະກອກ</strong> ເປັນລຳດັບສຸດທ້າຍ</span>
                    </li>
                    <li>
                        <span class="step-num">4</span>
                        <span>ເຂົ້າໃຫ້ເຂົ້າກັນ ແລ້ວ <strong>ດື່ມທັນທີ</strong> (Instant ຈະນິ່ມໄວ)</span>
                    </li>
                </ol>
                <div class="method-time">⏱ ~2 ນາທີ</div>
            </div>

            <div class="nutrition-card method-card">
                <div class="method-badge overnight">🌙 OVERNIGHT</div>
                <div class="method-title">ແບບຄ້າງຄືນ (Overnight Oats)</div>
                <div class="method-subtitle">ເນື້ອສຳຜັດນຸ່ມແລະອ່ອນກວ່າ — ຄືພຸດດິ້ງ</div>
                <ol class="method-steps">
                    <li>
                        <span class="step-num">1</span>
                        <span>ຜສົມສ່ວນປະສົມທັງໝົດລົງໃນ <strong>ໂຖແກ້ວ</strong> ທີ່ມີຝາປິດ</span>
                    </li>
                    <li>
                        <span class="step-num">2</span>
                        <span>ຄົນໃຫ້ເຂົ້າກັນ ແລ້ວ <strong>ແຊ່ຕູ້ເຢັນ</strong> ຖິ້ມໄວ້ 1 ຄືນ</span>
                    </li>
                    <li>
                        <span class="step-num">3</span>
                        <span>ຕອນເຊົ້ານຳມາທານ — ເນື້ອໂອ໊ດຈະ <strong>ນຸ່ມຄືພຸດດິ້ງ</strong></span>
                    </li>
                </ol>
                <div class="method-time">⏱ Prep ~3 ນາທີ + ແຊ່ 6-8 ຊມ.</div>
            </div>
        </div>

        <!-- Tips Section -->
        <div class="nutrition-card tips-card">
            <div class="nutrition-card-header">
                <span class="nutrition-card-icon">💡</span>
                <span class="nutrition-card-title">ຂໍ້ແນະນຳການກິນ</span>
            </div>
            <div class="nutrition-card-body">
                <div class="tip-grid">
                    <div class="tip-item">
                        <div class="tip-icon">⏰</div>
                        <div class="tip-label">ຊ່ວງເວລາ</div>
                        <div class="tip-text">ທານເປັນ <strong>ມື້ເຊົ້າ (M1)</strong> ເພື່ອໃຫ້ໄດ້ພະລັງງານຄົງທີ່ ແລະ ບຳລຸງສະໝອງສຳລັບການຂຽນໂຄ້ດທັງວัน</div>
                    </div>
                    <div class="tip-item">
                        <div class="tip-icon">🥄</div>
                        <div class="tip-label">Texture</div>
                        <div class="tip-text">ຫາກຮູ້ສຶກດື່ມຍາກ ໃຫ້ <strong>ລົດນ້ຳລົງ</strong> ໃຫ້ເປັນເນື້ອຂົ້ນແບບໂຈ໊ກ ແລ້ວໃຊ້ບ່ວງຕັກທານແທນ</div>
                    </div>
                    <div class="tip-item">
                        <div class="tip-icon">🍫</div>
                        <div class="tip-label">ລົດຊາດ</div>
                        <div class="tip-text">EVOO ມີກິ່ນຫອມຈາງໆ ຖ້າຜສົມກັບ <strong>ໂປຣຕີນລົດຊ໋ອກໂກແລັດ</strong> ຈະເຂົ້າກັນໄດ້ດີຫຼາຍ</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Info Callout -->
        <div class="nutrition-callout">
            <div class="callout-icon">ℹ️</div>
            <div class="callout-content">
                <div class="callout-title">ການປັບປ່ຽນ</div>
                <div class="callout-text">ຫາກວັນໃດຕ້ອງການພະລັງງານເພີ່ມ (ເຊັ່ນ ວັນທີ່ມີເທຣນນິ່ງໜັກ) ສາມາດ <strong>ເພີ່ມຂ້າວໂອ໊ດເປັນ 80-90 ກຣັມ</strong> ຫຼືໃສ່ <strong>ຖົ່ວເພີ່ມເຕີມ</strong> ໄດ້ຕາມຄວາມເໝາະສົມ</div>
            </div>
        </div>
    `;

    container.appendChild(wrap);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
function getTodayDayIndex() {
    const jsDay = new Date().getDay();
    return jsDay === 0 ? 6 : jsDay - 1;
}

let currentDay = getTodayDayIndex();

function getLaoDateString() {
    const d = new Date();
    const laoDays = ['ວັນອາທິດ', 'ວັນຈັນ', 'ວັນອັງຄານ', 'ວັນພຸດ', 'ວັນພະຫັດ', 'ວັນສຸກ', 'ວັນເສົາ'];
    const laoMonths = [
        'ມັງກອນ', 'ກຸມພາ', 'ມີນາ', 'ເມສາ', 'ພຶດສະພາ', 'ມິຖຸນາ',
        'ກໍລະກົດ', 'ສິງຫາ', 'ກັນຍາ', 'ຕຸລາ', 'ພະຈິກ', 'ທັນວາ'
    ];
    const budYear = d.getFullYear() + 543;
    return `${laoDays[d.getDay()]} ທີ ${d.getDate()} ${laoMonths[d.getMonth()]} ${budYear}`;
}

document.getElementById('todayDate').textContent = getLaoDateString();

const dayBtns = document.querySelectorAll('.day-btn');
dayBtns.forEach(btn => {
    if (parseInt(btn.dataset.day) === currentDay) btn.classList.add('active');
    btn.addEventListener('click', () => {
        dayBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDay = parseInt(btn.dataset.day);
        renderMain(currentDay);
    });
});

document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm(`Reset ວັນ${DAYS[currentDay]}?`)) {
        clearDay(currentDay);
        renderMain(currentDay);
    }
});

// Setup tab routing
const navTabs = document.querySelectorAll('.nav-tab');
const trackerPage = document.getElementById('trackerPage');
const programsPage = document.getElementById('programsPage');
const nutritionPage = document.getElementById('nutritionPage');
const resetBtn = document.getElementById('resetBtn');

const allPages = [trackerPage, programsPage, nutritionPage];

function showPage(pageName) {
    allPages.forEach(p => p.classList.remove('active'));
    resetBtn.style.display = 'none';

    if (pageName === 'tracker') {
        trackerPage.classList.add('active');
        resetBtn.style.display = 'block';
        renderMain(currentDay);
    } else if (pageName === 'programs') {
        programsPage.classList.add('active');
        renderProgramsPage();
    } else if (pageName === 'nutrition') {
        nutritionPage.classList.add('active');
        renderNutritionPage();
    }
}

navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        navTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        showPage(tab.dataset.tab);
    });
});

renderMain(currentDay);
