// Klassen mit Punktwerten und Kostenfaktoren definieren
const klassen = {
    'Klasse 5': { punkte: 1500, faktorUnkastriert: 150, faktorKastriert: 150 } ,
    'Klasse 4': { punkte: 1200, faktorUnkastriert: 120, faktorKastriert: 120 } ,
    'Klasse 3': { punkte: 1000, faktorUnkastriert: 100, faktorKastriert: 100 },
    'Klasse 2': { punkte: 800, faktorUnkastriert: 80, faktorKastriert: 80 },
    'Klasse 1': { punkte: 600, faktorUnkastriert: 60, faktorKastriert: 60 }
};

// Dino-Daten erweitern, um Klassen hinzuzufügen
const dinos = [
    { name: "Achatina", class: "Klasse 1", image: "https://www.dododex.com/media/creature/achatina.png" },
    { name: "Acrocanthosaurus", class: "Klasse 4", image: "https://ark.wiki.gg/images/thumb/b/b7/Mod_AA_Acrocanthosaurus_PaintRegion4_ASA.png/300px-Mod_AA_Acrocanthosaurus_PaintRegion4_ASA.png" },
    { name: "Allosaurus",class: "Klasse 3", image: "https://www.dododex.com/media/creature/allosaurus.png" },
    { name: "Anglerfish",class: "Klasse 2", image: "https://www.dododex.com/media/creature/angler.png" },
    { name: "Ankylosaurus",class: "Klasse 2", image: "https://www.dododex.com/media/creature/ankylosaurus.png" },
    { name: "Anomalocaris",class: "Klasse 3", image: "https://83374.media.forgecdn.net/avatars/thumbnails/971/889/64/64/638473845315173887.jpeg" },
    { name: "Araneo", class: "Klasse 1", image: "https://www.dododex.com/media/creature/araneo.png" },
    { name: "Archaeopteryx", class: "Klasse 1", image: "https://www.dododex.com/media/creature/archaeopteryx.png" }, 
    { name: "Archelon", class: "Klasse 2", image: "https://ark.wiki.gg/images/thumb/7/7c/Mod_AA_Archelon_PaintRegion1_ASA.png/300px-Mod_AA_Archelon_PaintRegion1_ASA.png" },
    { name: "Argentavis", class: "Klasse 3", image: "https://www.dododex.com/media/creature/argentavis.png" },
    { name: "Armadoggo", class: "Klasse 3", image: "https://www.dododex.com/media/creature/armadoggo.png" },
    { name: "Arthropluera", class: "Klasse 2", image: "https://www.dododex.com/media/creature/arthropluera.png" },
    { name: "Baryonyx", class: "Klasse 3",image: "https://www.dododex.com/media/creature/baryonyx.png" },
    { name: "Basilisk", class: "Klasse 4",image: "https://www.dododex.com/media/creature/basilisk.png" },
    { name: "Basilosaurus", class: "Klasse 3",image: "https://www.dododex.com/media/creature/basilosaurus.png" },
    { name: "Beelzebufo", class: "Klasse 2",image: "https://www.dododex.com/media/creature/beelzebufo.png" },
    { name: "Brachiosaurus", class: "Klasse 4",image: "https://ark.wiki.gg/images/thumb/5/50/Mod_AA_Brachiosaurus_PaintRegion1_ASA.png/300px-Mod_AA_Brachiosaurus_PaintRegion1_ASA.png" },
    { name: "Brontosaurus", class: "Klasse 3",image: "https://www.dododex.com/media/creature/brontosaurus.png" },
    { name: "Bulbdog", class: "Klasse 1",image: "https://www.dododex.com/media/creature/bulbdog.png" },
    { name: "Carbonemys", class: "Klasse 1",image: "https://www.dododex.com/media/creature/carbonemys.png" },
    { name: "Carcharodontosaurus", class: "Klasse 4",image: "https://www.dododex.com/media/creature/carcharodontosaurus.png" }, 
    { name: "Carnotaurus", class: "Klasse 2",image: "https://www.dododex.com/media/creature/carnotaurus.png" },
    { name: "Castoroides", class: "Klasse 2",image: "https://www.dododex.com/media/creature/castoroides.png" },
    { name: "Chalicotherium", class: "Klasse 2",image: "https://www.dododex.com/media/creature/chalicotherium.png" },
    { name: "Ceratosaurus", class: "Klasse 3",image: "https://www.dododex.com/media/creature/ceratosaurus.png" },
    { name: "Compy", class: "Klasse 1",image: "https://www.dododex.com/media/creature/compy.png" },
    { name: "Cosmo", class: "Klasse 2",image: "https://ark.wiki.gg/images/thumb/d/d7/Cosmo_PaintRegion1_ASA.png/2560px-Cosmo_PaintRegion1_ASA.png" },
    { name: "Cryptoclidus", class: "Klasse 2",image: "https://media.forgecdn.net/attachments/974/347/image-1.png" },
    { name: "Daeodon", class: "Klasse 3",image: "https://www.dododex.com/media/creature/daeodon.png" },
    { name: "Deinosuchus", class: "Klasse 3",image: "https://ark.wiki.gg/images/thumb/1/1a/Mod_AA_Deinosuchus_PaintRegion4_ASA.png/300px-Mod_AA_Deinosuchus_PaintRegion4_ASA.png" },
    { name: "Deinotherium", class: "Klasse 4",image: "https://ark.wiki.gg/images/thumb/7/70/Mod_AA_Deinotherium_M_PaintRegion1_ASA.png/300px-Mod_AA_Deinotherium_M_PaintRegion1_ASA.png" },
    { name: "Dilophosaur", class: "Klasse 1",image: "https://www.dododex.com/media/creature/dilophosaur.png" },
    { name: "Dimetrodon", class: "Klasse 1",image: "https://www.dododex.com/media/creature/dimetrodon.png" },
    { name: "Dimorphodon", class: "Klasse 1",image: "https://www.dododex.com/media/creature/dimorphodon.png" },
    { name: "Diplocaulus", class: "Klasse 1",image: "https://www.dododex.com/media/creature/diplocaulus.png" },
    { name: "Diplodocus", class: "Klasse 2",image: "https://www.dododex.com/media/creature/diplodocus.png" },
    { name: "Dire Bear", class: "Klasse 2",image: "https://www.dododex.com/media/creature/direbear.png" },
    { name: "Direwolf", class: "Klasse 2",image: "https://www.dododex.com/media/creature/direwolf.png" },
    { name: "Dodo", class: "Klasse 1",image: "https://www.dododex.com/media/creature/dodo.png" },
    { name: "Doedicurus", class: "Klasse 2",image: "https://www.dododex.com/media/creature/doedicurus.png" },
    { name: "Drakeling ", class: "Klasse 5",image: "https://ark.wiki.gg/images/thumb/5/52/Drakelingdossier.png/298px-Drakelingdossier.png?678bae" },
    { name: "Dreadnoughtus ", class: "Klasse 5",image: "https://www.dododex.com/media/creature/dreadnoughtus.png" },
    { name: "Dreadmare ", class: "Klasse 4",image: "https://ark.wiki.gg/images/thumb/e/e4/Dreadmare_image_1.jpg/240px-Dreadmare_image_1.jpg" },
    { name: "Dung Beetle", class: "Klasse 1",image: "https://www.dododex.com/media/creature/dungbeetle.png" },
    { name: "Dunkleosteus", class: "Klasse 3",image: "https://www.dododex.com/media/creature/dunkleosteus.png" },
    { name: "Edmontonia", class: "Klasse 3",image: "https://83374.media.forgecdn.net/avatars/thumbnails/1162/806/64/64/638732083647789826.jpeg" },
    { name: "Electrophorus", class: "Klasse 1",image: "https://www.dododex.com/media/creature/electrophorus.png" },
    { name: "Enforcer", class: "Klasse 2",image: "https://www.dododex.com/media/creature/enforcer.png" },
    { name: "Equus", class: "Klasse 1",image: "https://www.dododex.com/media/creature/equus.png" },
    { name: "Fasolasuchus", class: "Klasse 4",image: "https://www.dododex.com/media/creature/fasolasuchus.png" },
    { name: "Featherlight", class: "Klasse 1",image: "https://www.dododex.com/media/creature/featherlight.png" },
    { name: "Gacha", class: "Klasse 4",image: "https://www.dododex.com/media/creature/gacha.png" },
    { name: "Griffin", class: "Klasse 4",image: "https://www.dododex.com/media/creature/griffin.png" },
    { name: "Giant Bison", class: "Klasse 4",image: "https://ark.wiki.gg/images/thumb/e/e1/ASA_Giant_Bison_Concept.jpg/240px-ASA_Giant_Bison_Concept.jpg?c5921a" },
    { name: "Gallimimus", class: "Klasse 1",image: "https://www.dododex.com/media/creature/gallimimus.png" },
    { name: "Gasbags", class: "Klasse 2",image: "https://www.dododex.com/media/creature/gasbags.png" },
    { name: "Gigantoraptor", class: "Klasse 3",image: "https://www.dododex.com/media/creature/gigantoraptor.png" },
    { name: "Giganotosaurus", class: "Klasse 4",image: "https://www.dododex.com/media/creature/giganotosaurus.png" },
    { name: "Gigantopithecus", class: "Klasse 2",image: "https://www.dododex.com/media/creature/gigantopithecus.png" },
    { name: "Glowtail", class: "Klasse 1",image: "https://www.dododex.com/media/creature/glowtail.png" },
    { name: "Helicoprion", class: "Klasse 4",image: "https://ark.wiki.gg/images/thumb/8/83/Mod_AA_Helicoprion_PaintRegion4_ASA.png/300px-Mod_AA_Helicoprion_PaintRegion4_ASA.png" },
    { name: "Hesperornis", class: "Klasse 1",image: "https://www.dododex.com/media/creature/hesperornis.png" },
    { name: "Horse", class: "Klasse 1",image: "https://www.dododex.com/media/creature/equus.png" },
    { name: "Hyaenodon", class: "Klasse 1",image: "https://www.dododex.com/media/creature/hyaenodon.png" },
    { name: "Ichthyornis", class: "Klasse 1",image: "https://www.dododex.com/media/creature/ichthyornis.png" },
    { name: "Ichthyosaurus", class: "Klasse 1",image: "https://www.dododex.com/media/creature/ichthyosaurus.png" },
    { name: "Iguanodon", class: "Klasse 1",image: "https://www.dododex.com/media/creature/iguanodon.png" },
    { name: "Jerboa", class: "Klasse 1",image: "https://www.dododex.com/media/creature/jerboa.png" },
    { name: "Kairuku", class: "Klasse 1",image: "https://www.dododex.com/media/creature/kairuku.png" },
    { name: "Kaprosuchus", class: "Klasse 2",image: "https://www.dododex.com/media/creature/kaprosuchus.png" },
    { name: "Karkinos", class: "Klasse 3",image: "https://www.dododex.com/media/creature/karkinos.png" },
    { name: "Kentrosaurus", class: "Klasse 2",image: "https://www.dododex.com/media/creature/kentrosaurus.png" },
    { name: "Lymantria", class: "Klasse 2",image: "https://www.dododex.com/media/creature/lymantria.png" },
    { name: "Lystrosaurus", class: "Klasse 1",image: "https://www.dododex.com/media/creature/lystrosaurus.png" },
    { name: "Mammoth", class: "Klasse 2",image: "https://www.dododex.com/media/creature/mammoth.png" },
    { name: "Managarmr", class: "Klasse 3",image: "https://www.dododex.com/media/creature/managarmr.png" },
    { name: "Manta", class: "Klasse 2",image: "https://www.dododex.com/media/creature/manta.png" },
    { name: "Mantis", class: "Klasse 3",image: "https://www.dododex.com/media/creature/mantis.png" },
    { name: "Maeguana", class: "Klasse 3",image: "https://www.dododex.com/media/creature/maeguana.png" },
    { name: "Megalania", class: "Klasse 2",image: "https://www.dododex.com/media/creature/megalania.png" },
    { name: "Megaloceros", class: "Klasse 1",image: "https://www.dododex.com/media/creature/megaloceros.png" },
    { name: "Megalodon", class: "Klasse 2",image: "https://www.dododex.com/media/creature/megalodon.png" },
    { name: "Megalosaurus", class: "Klasse 3",image: "https://www.dododex.com/media/creature/megalosaurus.png" },
    { name: "Megatherium", class: "Klasse 3",image: "https://www.dododex.com/media/creature/megatherium.png" },
    { name: "Mek", class: "Klasse 4",image: "https://www.dododex.com/media/creature/mek.png" },
    { name: "Mesopithecus", class: "Klasse 1",image: "https://www.dododex.com/media/creature/mesopithecus.png" },
    { name: "Microraptor", class: "Klasse 1",image: "https://www.dododex.com/media/creature/microraptor.png" },
    { name: "Morellatops", class: "Klasse 2",image: "https://www.dododex.com/media/creature/morellatops.png" },
    { name: "Mosasaurus", class: "Klasse 4",image: "https://www.dododex.com/media/creature/mosasaurus.png" },
    { name: "Moschops", class: "Klasse 1",image: "https://www.dododex.com/media/creature/moschops.png" },
    { name: "Oasisaur", class: "Klasse 4",image: "https://www.dododex.com/media/creature/oasisaur.png" },
    { name: "Onyc", class: "Klasse 1",image: "https://www.dododex.com/media/creature/onyc.png" },
    { name: "Otter", class: "Klasse 1",image: "https://www.dododex.com/media/creature/otter.png" },
    { name: "Oviraptor", class: "Klasse 1",image: "https://www.dododex.com/media/creature/oviraptor.png" },
    { name: "Ovis", class: "Klasse 3",image: "https://www.dododex.com/media/creature/ovis.png" },
    { name: "Pachy", class: "Klasse 1",image: "https://www.dododex.com/media/creature/pachy.png" },
    { name: "Pachyrhinosaurus", class: "Klasse 1",image: "https://www.dododex.com/media/creature/pachyrhinosaurus.png" },
    { name: "Paraceratherium", class: "Klasse 2",image: "https://www.dododex.com/media/creature/paracer.png" },
    { name: "Parasaur", class: "Klasse 1",image: "https://www.dododex.com/media/creature/parasaur.png" },
    { name: "Pegomastax", class: "Klasse 1",image: "https://www.dododex.com/media/creature/pegomastax.png" },
    { name: "Pelagornis", class: "Klasse 2",image: "https://www.dododex.com/media/creature/pelagornis.png" },
    { name: "Phiomia", class: "Klasse 1",image: "https://www.dododex.com/media/creature/phiomia.png" },
    { name: "Phoenix", class: "Klasse 4",image: "https://www.dododex.com/media/creature/phoenix.png" },
    { name: "Piranha", class: "Klasse 1",image: "https://www.dododex.com/media/creature/piranha.png" },
    { name: "Plesiosaur", class: "Klasse 3",image: "https://www.dododex.com/media/creature/plesiosaur.png" },
    { name: "Procoptodon", class: "Klasse 2",image: "https://www.dododex.com/media/creature/procoptodon.png" },
    { name: "Pteranodon", class: "Klasse 2",image: "https://www.dododex.com/media/creature/pteranodon.png" },
    { name: "Pulmonoscorpius", class: "Klasse 2",image: "https://www.dododex.com/media/creature/pulmonoscorpius.png" },
    { name: "Purlovia", class: "Klasse 2",image: "https://www.dododex.com/media/creature/purlovia.png" },
    { name: "Pyromane", class: "Klasse 4",image: "https://ark.wiki.gg/images/thumb/e/eb/Pyromane_PaintRegion5_ASA.png/2560px-Pyromane_PaintRegion5_ASA.png" },
    { name: "Quetzal", class: "Klasse 3",image: "https://www.dododex.com/media/creature/quetzal.png" },
    { name: "Raptor", class: "Klasse 2",image: "https://www.dododex.com/media/creature/raptor.png" },
    { name: "Ravager", class: "Klasse 2",image: "https://www.dododex.com/media/creature/ravager.png" },
    { name: "Reaper King", class: "Klasse 4",image: "https://www.dododex.com/media/creature/reaper.png" },
    { name: "Rex", class: "Klasse 3",image: "https://www.dododex.com/media/creature/rex.png" },
    { name: "Rhyniogatha", class: "Klasse 4",image: "https://www.dododex.com/media/creature/rhyniognatha.png" },
    { name: "Rock Drake", class: "Klasse 4",image: "https://www.dododex.com/media/creature/rockdrake.png" },
    { name: "Rock Elemental", class: "Klasse 4",image: "https://www.dododex.com/media/creature/rockelemental.png" },
    { name: "Roll Rat", class: "Klasse 2",image: "https://www.dododex.com/media/creature/rollrat.png" },
    { name: "Sabertooth", class: "Klasse 2",image: "https://www.dododex.com/media/creature/sabertooth.png" },
    { name: "Sarco", class: "Klasse 2",image: "https://www.dododex.com/media/creature/sarco.png" },
    { name: "Shastasaurus", class: "Klasse 3",image: "https://www.dododex.com/media/creature/shastasaurus.png" },
    { name: "Shinehorn", class: "Klasse 1",image: "https://www.dododex.com/media/creature/shinehorn.png" },
    { name: "Snow Owl", class: "Klasse 3", image: "https://www.dododex.com/media/creature/snowowl.png" },
    { name: "Spinosaurus", class: "Klasse 3",image: "https://www.dododex.com/media/creature/spinosaur.png" },
    { name: "Stegosaurus", class: "Klasse 2",image: "https://www.dododex.com/media/creature/stegosaurus.png" },
    { name: "Tapejara", class: "Klasse 2",image: "https://www.dododex.com/media/creature/tapejara.png" },
    { name: "Terror Bird", class: "Klasse 1",image: "https://www.dododex.com/media/creature/terrorbird.png" },
    { name: "Therizinosaur", class: "Klasse 3",image: "https://www.dododex.com/media/creature/therizinosaurus.png" },
    { name: "Thorny Dragon", class: "Klasse 2",image: "https://www.dododex.com/media/creature/thornydragon.png" },
    { name: "Thylacoleo", class: "Klasse 3",image: "https://www.dododex.com/media/creature/thylacoleo.png" },
    { name: "Titanoboa", class: "Klasse 2",image: "https://www.dododex.com/media/creature/titanoboa.png" },
    { name: "Titanosaur", class: "Klasse 4",image: "https://www.dododex.com/media/creature/titanosaur.png" },
    { name: "Triceratops", class: "Klasse 2",image: "https://www.dododex.com/media/creature/triceratops.png" },
    { name: "Troodon", class: "Klasse 1",image: "https://www.dododex.com/media/creature/troodon.png" },
    { name: "Tusoteuthis", class: "Klasse 4",image: "https://www.dododex.com/media/creature/tusoteuthis.png" },
    { name: "Unicorn", class: "Klasse 2",image: "https://www.dododex.com/media/creature/unicorn.png" },
    { name: "Velonasaur", class: "Klasse 3",image: "https://www.dododex.com/media/creature/velonasaur.png" },
    { name: "Vulture", class: "Klasse 1",image: "https://www.dododex.com/media/creature/vulture.png" },
    { name: "Woolly Rhino", class: "Klasse 3",image: "https://www.dododex.com/media/creature/woollyrhino.png" },
    { name: "Veilwyn", class: "Klasse 3",image: "https://ark.wiki.gg/images/thumb/5/57/ASA_Veilwyn_00.jpg/240px-ASA_Veilwyn_00.jpg?fbb405" },
    { name: "Wyvern", class: "Klasse 3",image: "https://www.dododex.com/media/creature/wyvern.png" },
    { name: "Xiphactinus", class: "Klasse 2",image: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/2/28/Mod_ARK_Additions_Xiphactinus_PaintRegion5.png" },
    { name: "YI Ling", class: "Klasse 3",image: "https://ark.wiki.gg/images/thumb/e/ef/Yi_Ling_PaintRegion2_ASA.png/2560px-Yi_Ling_PaintRegion2_ASA.png" },
    { name: "Yutyrannus", class: "Klasse 3",image: "https://www.dododex.com/media/creature/yutyrannus.png" },
    { name: "Zombie Wyvern", class: "Klasse 4",image: "https://ark.wiki.gg/images/d/d7/Zombie_Fire_Wyvern_PaintRegion1.png" }
 
];

// Initialisiere die Dino-Tiles basierend auf den Daten
const dinoContainer = document.getElementById('dino-container');
dinos.forEach(dino => {
    const tile = document.createElement('div');
    tile.classList.add('dino-tile');
    tile.setAttribute('data-class', dino.class);
    tile.setAttribute('data-name', dino.name);
    tile.setAttribute('data-price', klassen[dino.class].punkte);
    
    const img = document.createElement('img');
    img.src = dino.image;
    img.alt = dino.name;
    
    const p = document.createElement('p');
    p.textContent = dino.name;
    
    tile.appendChild(img);
    tile.appendChild(p);
    
    tile.addEventListener('click', () => {
        document.querySelectorAll('.dino-tile').forEach(t => t.classList.remove('selected'));
        tile.classList.add('selected');
    });
    
    dinoContainer.appendChild(tile);
});

function calculateCost() {
    const selectedDino = document.querySelector('.dino-tile.selected');
    if (!selectedDino) {
        alert('Bitte wählen Sie einen Dino aus.');
        return;
    }

    const dinoClass = selectedDino.getAttribute('data-class');
    const classData = klassen[dinoClass];
    const basePrice = classData.punkte;

    const health = parseInt(document.getElementById('health').value);
    const stamina = parseInt(document.getElementById('stamina').value);
    const oxygen = parseInt(document.getElementById('oxygen').value);
    const food = parseInt(document.getElementById('food').value);
    const weight = parseInt(document.getElementById('weight').value);
    const damage = parseInt(document.getElementById('damage').value);
    const castrated = document.getElementById('castrated').checked;

    let totalCost = basePrice;
    totalCost += calculateAttributeCost(stamina, castrated, classData);
    totalCost += calculateAttributeCost(oxygen, castrated, classData);
    totalCost += calculateAttributeCost(food, castrated, classData);
    totalCost += calculateAttributeCost(weight, castrated, classData);
// Berechnung von health und damage und verdoppeln
    let healthCost = calculateAttributeCost(health, castrated, classData);
    let damageCost = calculateAttributeCost(damage, castrated, classData);
    
    healthCost *= 2; // Health verdoppeln
    damageCost *= 2; // Damage verdoppeln

    totalCost += healthCost + damageCost; // Addiere verdoppeltes Health und Damage zum Endpreis

    if (castrated) {
        totalCost /= 2; // Den Preis durch 2 teilen, wenn kastriert
    }

    return totalCost;
}

function calculateAttributeCost(value, castrated, classData) {
    const factor = castrated ? classData.faktorKastriert : classData.faktorUnkastriert;
    if (value <= 40) {
        return 0;
    } else {
        return (value - 40) * factor;
    }
}

// Event Listener für den Klick auf die Berechnen-Schaltfläche
document.getElementById('calculate-btn').addEventListener('click', () => {
    const result = calculateCost();
    openModal(result);
});

// Funktion zum Anzeigen des Modalfensters
function openModal(result) {
    const modal = document.getElementById('modal');
    const modalResult = document.getElementById('modal-result');
    modalResult.innerHTML = "Der Preis beträgt: " + result + " Coins ";
    modal.style.display = "block";
}

// Funktion zum Schließen des Modalfensters
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Event Listener für das Schließen des Modalfensters
document.getElementsByClassName('close')[0].addEventListener('click', closeModal);
