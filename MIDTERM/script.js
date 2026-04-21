// --- INITIAL GAME STATE ---
let player = {
    level: 1,
    hp: 50,
    maxHp: 50,
    mp: 30,
    maxMp: 30,
    exp: 0,
    nextLevelExp: 10,
    critRate: 0.20, // 20% chance
    inventory: { vials: 2, manaVials: 2, tonics: 2 }
};

let player2 = {
    level: 1,
    hp: 50,
    maxHp: 50,
    mp: 30,
    maxMp: 30,
    exp: 0,
    nextLevelExp: 10,
    critRate: 0.20, // 20% chance
    inventory: { vials: 2, manaVials: 2, tonics: 2 }
};

let currentEnemy = null;
let currentLoc = "The Hall of Echoes";
let inCombat = false;
let inPvP = false;
let currentTurn = 'player';

// --- WORLD DATA ---
const locations = {
    1: { name: "The Hall of Echoes", minLvl: 1, maxLvl: 3, safe: false },
    2: { name: "The Orchestral Plains", minLvl: 3, maxLvl: 5, safe: false },
    3: { name: "The Resonance Chamber", safe: true },
    4: { name: "The Grand Stage", minLvl: 7, maxLvl: 7, safe: false }
};

// --- NAVIGATION SYSTEM ---
function goTo(choice) {
    let loc = locations[choice];
    if (!loc) {
        console.log("Invalid location! Pick 1, 2, 3, or 4.");
        return;
    }
    
    // Level lock check (skip for safe areas)
    if (!loc.safe && (player.level < loc.minLvl || player.level > loc.maxLvl)) {
        console.log(`❌ You must be level ${loc.minLvl}-${loc.maxLvl} to enter ${loc.name}. You are level ${player.level}.`);
        return;
    }
    
    currentLoc = loc.name;
    console.log(`\n--- Moving to: ${currentLoc} ---`);

    if (loc.safe) {
        player.hp = player.maxHp;
        player.mp = player.maxMp;
        inCombat = false;
        currentEnemy = null;
        console.log("✨ The Harmony heals you to full health and mana. You are safe here.");
    } else {
        spawnEnemy(loc.minLvl, loc.maxLvl);
    }
    status();
}

// --- PVP SYSTEM ---
function pvpStart() {
    inPvP = true;
    inCombat = true;
    currentEnemy = null;
    currentTurn = 'player';
    console.log("🎭 PvP Mode Started! Player vs Player2");
    status();
    console.log("Player's turn. Use strike(), shatter(), deathEncore(), or useVial()");
}

function switchTurn() {
    currentTurn = currentTurn === 'player' ? 'player2' : 'player';
    console.log(`${currentTurn === 'player' ? 'Player' : 'Player2'}'s turn. Use strike(), shatter(), deathEncore(), or useVial()`);
    status();
}

function resetPvP() {
    inPvP = false;
    inCombat = false;
    currentTurn = 'player';
    console.log("PvP ended. Type pvpStart() to start again or goTo(1-4) for single-player.");
}

// --- COMBAT LOGIC ---
function spawnEnemy(min, max) {
    let lvl = Math.floor(Math.random() * (max - min + 1)) + min;
    currentEnemy = {
        name: "Static Blur",
        level: lvl,
        hp: lvl * 30,
        maxHp: lvl * 30,
        mp: lvl * 20,
        expReward: lvl * 10
    };
    inCombat = true;
    console.log(`⚠️ A Level ${lvl} Static emerges from the shadows!`);
}

function strike() {
    if (!combatCheck()) return;
    let attacker = inPvP ? (currentTurn === 'player' ? player : player2) : player;
    let defender = inPvP ? (currentTurn === 'player' ? player2 : player) : currentEnemy;
    let damage = attacker.level * 5;
    let isCrit = Math.random() <= attacker.critRate;
    if (isCrit) damage *= 2;
    console.log(`%c${attacker === player ? 'Player' : 'Player2'} swings their blade! ${isCrit ? "CRITICAL HIT! " : ""}Dealt ${damage} damage.`, "color: #00ff00");
    defender.hp -= damage;
    
    checkBattleEnd() || (inPvP ? switchTurn() : enemyTurn());
}

function shatter() {
    if (!combatCheck()) return;
    let attacker = inPvP ? (currentTurn === 'player' ? player : player2) : player;
    let defender = inPvP ? (currentTurn === 'player' ? player2 : player) : currentEnemy;
    let cost = attacker.level * 5;
    
    if (attacker.mp < cost) {
        console.log("❌ Not enough Mana!");
        return;
    }

    attacker.mp -= cost;
    let damage = attacker.level * 15;
    console.log(`%c${attacker === player ? 'Player' : 'Player2'} casts SHATTER! The rhythm breaks! Dealt ${damage} damage.`, "color: #00ffff");
    defender.hp -= damage;
    
    checkBattleEnd() || (inPvP ? switchTurn() : enemyTurn());
}

function deathEncore() {
    if (!combatCheck()) return;
    let attacker = inPvP ? (currentTurn === 'player' ? player : player2) : player;
    let cost = attacker.level * 15;
    
    if (attacker.mp < cost) {
        console.log("❌ Not enough Mana!");
        return;
    }

    attacker.mp -= cost;
    let heal = Math.floor(attacker.maxHp * 0.25);
    attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
    console.log(`%c${attacker === player ? 'Player' : 'Player2'} casts DEATH ENCORE! They dance through the pain. Healed ${heal} HP.`, "color: #ff00ff");
    
    inPvP ? switchTurn() : enemyTurn();
}

function enemyTurn() {
    if (currentEnemy.hp <= 0) return;

    let move = Math.random();
    let damage = 0;
    let log = "";

    if (move > 0.7 && currentEnemy.mp >= 20) { // Life Drain
        currentEnemy.mp -= 20;
        damage = Math.floor(player.hp * 0.10);
        log = `DRAINED! The enemy steals ${damage} HP!`;
    } else if (move > 0.4 && currentEnemy.mp >= 5) { // Feedback
        currentEnemy.mp -= 5;
        damage = currentEnemy.level * 4;
        log = `FEEDBACK! A screeching sound hits you for ${damage} damage!`;
    } else { // Off-Key
        damage = currentEnemy.level * 1;
        log = `OFF-KEY! A jagged strike hits you for ${damage} damage.`;
    }

    player.hp -= damage;
    console.log(`%c${log}`, "color: #ff4444");
    
    if (player.hp <= 0) {
        console.log("%c💀 THE MUSIC STOPS. You have been consumed by the Static. Refresh to retry.", "background: red; color: white");
    } else {
        status();
    }
}

// --- UTILITIES ---
function checkBattleEnd() {
    if (inPvP) {
        if (player.hp <= 0) {
            console.log("%c🎉 Player2 wins the PvP!", "color: gold");
            resetPvP();
            return true;
        } else if (player2.hp <= 0) {
            console.log("%c🎉 Player wins the PvP!", "color: gold");
            resetPvP();
            return true;
        }
        return false;
    } else {
        if (currentEnemy.hp <= 0) {
            console.log(`%cVictory! You gained ${currentEnemy.expReward} EXP.`, "font-weight: bold");
            gainExp(currentEnemy.expReward);
            inCombat = false;
            currentEnemy = null;
            console.log("Type goTo(1-4) to move to the next area.");
            return true;
        }
        return false;
    }
}

function gainExp(amount) {
    player.exp += amount;
    if (player.exp >= player.nextLevelExp) {
        player.level++;
        player.exp = 0;
        player.maxHp = player.level * 50;
        player.maxMp = player.level * 30;
        player.hp = player.maxHp;
        player.mp = player.maxMp;
        player.nextLevelExp = player.level * 10;
        console.log(`%c⭐ LEVEL UP! You are now Level ${player.level}!`, "color: gold; font-size: 14px");
    }
}

function useVial() {
    let currentPlayer = inPvP ? (currentTurn === 'player' ? player : player2) : player;
    if (currentPlayer.inventory.vials > 0) {
        currentPlayer.hp = Math.min(currentPlayer.maxHp, currentPlayer.hp + 20);
        currentPlayer.inventory.vials--;
        console.log(`${inPvP ? (currentTurn === 'player' ? 'Player' : 'Player2') : 'You'} used Resonance Vial. +20 HP`);
        if (inPvP) {
            switchTurn();
        } else if (inCombat) {
            enemyTurn();
        } else {
            status();
        }
    } else { 
        console.log("Out of Vials!"); 
    }
}

function useManaVial() {
    let currentPlayer = inPvP ? (currentTurn === 'player' ? player : player2) : player;
    if (currentPlayer.inventory.manaVials > 0) {
        currentPlayer.mp = Math.min(currentPlayer.maxMp, currentPlayer.mp + 25);
        currentPlayer.inventory.manaVials--;
        console.log(`${inPvP ? (currentTurn === 'player' ? 'Player' : 'Player2') : 'You'} used Mana Vial. +25 MP`);
        if (inPvP) {
            switchTurn();
        } else if (inCombat) {
            enemyTurn();
        } else {
            status();
        }
    } else { 
        console.log("Out of Mana Vials!"); 
    }
}

function status() {
    console.log(`[ ${currentLoc} ]`);
    if (inPvP) {
        console.log(`PLAYER: HP ${player.hp}/${player.maxHp} | MP ${player.mp}/${player.maxMp} | LVL ${player.level} | EXP ${player.exp}/${player.nextLevelExp} | Vials: ${player.inventory.vials} | Mana Vials: ${player.inventory.manaVials}`);
        console.log(`PLAYER2: HP ${player2.hp}/${player2.maxHp} | MP ${player2.mp}/${player2.maxMp} | LVL ${player2.level} | EXP ${player2.exp}/${player2.nextLevelExp} | Vials: ${player2.inventory.vials} | Mana Vials: ${player2.inventory.manaVials}`);
    } else {
        console.log(`PLAYER: HP ${player.hp}/${player.maxHp} | MP ${player.mp}/${player.maxMp} | LVL ${player.level} | EXP ${player.exp}/${player.nextLevelExp} | Vials: ${player.inventory.vials} | Mana Vials: ${player.inventory.manaVials}`);
        if (currentEnemy) {
            console.log(`ENEMY: ${currentEnemy.name} | HP ${currentEnemy.hp}/${currentEnemy.maxHp} | LVL ${currentEnemy.level}`);
        }
    }
    console.log("-----------------------------------------");
}

function combatCheck() {
    if (!inCombat) {
        console.log("There is nothing to fight here. Use goTo(number) to find monsters.");
        return false;
    }
    return true;
}

// Start Game Instructions
console.log("%cFATAL WALTZ", "font-size: 20px; color: purple; font-weight: bold");
console.log("Commands to play:");
console.log("1. goTo(1) - Hall of Echoes (Lvl 1-3)");
console.log("2. goTo(2) - Orchestral Plains (Lvl 3-5)");
console.log("3. goTo(3) - Resonance Chamber (SAFE/HEAL)");
console.log("4. goTo(4) - Grand Stage (Lvl 7)");
console.log("5. pvpStart() - Start PvP Mode");
console.log("Combat: strike(), shatter(), deathEncore(), useVial(), useManaVial()");
status(); 