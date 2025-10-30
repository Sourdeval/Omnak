export let inspirationsSteps: { step: number, inpiration: string }[] = [
    { step: 4, inpiration: "InspiNaissance" },
    { step: 5, inpiration: "InspiArmee" },
    { step: 7, inpiration: "InspiAdulte" },
    { step: 11, inpiration: "InspiExperimente" },
]

export let steps: string[] = [
    "Vous allez créer votre personnage dans Omnak !<br><br>" +
    "Lorsqu'un mot est en <span>Jaune</span>, cela indique dans quelle partie vous devez écrire sur votre fiche personnage.<br><br>" +
    "Vous pouvez voir votre progression par des rectangles verts et gris en haut.<br><br>" +
    "Parfois un bouton Inspiration apparaîtra en bas. Il n'est pas obligatoire, ne vous en servez que si vous ne trouvez pas d'inspiration pour créer votre personnage.",

    "Inventez ce que vous aimez ! L'univers est modelable, c'est à dire que vous pouvez imaginer n'importe quoi !<br> " +
    "A vous d'étendre cet univers avec vos idées !<br>" +
    "Par exemple, si vous écrivez que votre personnage n'aime pas la Nation Rouge car ils sont tous arrogants, même si cela n'était pas prévu de base dans l'univers, désomais les Rouges seront tous arrogants !<br>" +
    "Imaginez et parlez en à votre MJ !<br><br>" +
    "Bonne création de personnage !! :)",

    "Choisir la <span>Nation</span> dans laquelle est né votre personnage.<br>",

    "<h4>Naissance, enfance, famille</h4>" +
    "Inventer un <span>Lore</span> à votre personnage.<br>" +
    "Les phrases suivantes sont des idées de comment commencer votre phrase :<br>" +
    '<div class="italic">' +
    "Quand je suis né...<br>" +
    "Quand j'étais enfant...<br>" +
    "Un membre de ma famille est...<br>" +
    "</div><br>" +
    "Ensuite, ajoutez un <span>Atout</span> en conséquence.<br>",

    "<h4>Entrée dans l'armée</h4>" +
    "Écrivez un <span>Lore</span> : la raison pour laquelle votre personnage entre dans les forces militaires de sa Nation.<br>" +
    "<div class='italic'>Par loyauté envers sa patrie ?<br>Par nécessité ?<br>Pour devenir plus puissant ?<br>Pour s'élever du bas peuple ?<br>" +
    "</div><br>Il est possible de rejoindre l'école militaire d'un autre pays que celui choisi au départ, expliquez comment" +
    " et pourquoi. Dans ce cas, l'un de vos Atouts sera surement une particularité acquise dans votre pays natal.",

    "<h4>Grade 1</h4>" +
    "Choisissez votre première <span>Voie</span> dans l'armée de votre Nation.<br>Elle vous donne 1 <span>Atout</span> et 3 <span>Compétences</span>.<br>",

    "<h4>Devenir adulte</h4>" +
    "Inventer un <span>Lore</span> qui sera une évolution de votre personnage lors de cette période où il devient adulte.<br>" +
    "<div class='italic'>" +
    "Un trait de caractère ? <br>" +
    "Une nouvelle relation ? <br>" +
    "Une particularité acquise ?<br>" +
    "</div><br>" +
    "Ensuite, ajoutez un <span>Atout</span> en conséquence.<br>",

    "<h4>La Première Mission</h4>" +
    "<div class='italic'>" +
    "Mission dangereuse ?<br>" +
    "Escorte d'un personnage illustre ?<br>" +
    "Ennui total dans un bureau administratif ?<br>" +
    "C'est le hasard qui choisi !<br><br>" +
    "</div>" +
    "Votre MJ vous donne un contexte de mission et quelques possibilités, mais pas ce qui s'y passe, c'est à vous de l'inventer !<br><br>" +
    "<span class='action'>Appelez votre MJ, un D20 à la main.</span><br><br>",

    "<h4>La Première Mission</h4>" +
    "Inventez et écrivez le <span>Lore</span> de cette mission, quel était l'objectif, qu'avez vous essayé de faire ? Ne précisez pas la fin !<br>" +
    "Avec votre MJ, voyez quelles sont les possibilités de cette tentative.<br><br>" +
    "Puis lancez de nouveau un D20 pour obtenir l'issue de cette mission.<br>" +
    "Écrivez une phrase de conclusion dans <span>Lore</span>, et indiquez l'<span>Atout</span> gagné.<br>",

    "<h4>Montée en Grade !</h4>" +
    "Choisissez votre seconde <span>Voie</span> dans l'armée de votre Nation.<br><br>" +
    "Vous pouvez aussi décider de quitter l'armée, passer à l'ennemi, ou bien devenir " +
    "mercenaire. Votre choix vous mènera vers d'autres Voies que celles de votre armée, à vous de décider !<br><br>" +
    "Votre seconde Voie vous donne 1 <span>Atout</span> et 3 <span>Compétences</span>. Vous ne pouvez garder que 5 Compétences, choisissez laquelle " +
    "oublier.<br>",

    "<h4>Votre personnage aujourd'hui</h4>" +
    "Inventer un <span>Atout</span> qui sera une évolution de votre personnage durant cette période où son regard " +
    "change sur le monde, qu'il devient de plus en plus expérimenté et qu'il fonde peut-être une famille.<br><br>" +
    "<div class='italic'>" +
    "Un trait de caractère ? <br>" +
    "Une nouvelle relation ? <br>" +
    "Une particularité acquise ?<br>" +
    "</div><br>",

    "<h4>Votre personnage aujourd'hui</h4>" +
    "Décrivez l'apparence de votre personnage dans <span>Présentation</span>, ses vêtements, sa façon d'être, ses " +
    "particularités physiques.",

    "<h4>Équilibrage & Lore</h4>" +
    "<span class='action'>Appelez votre MJ et donnez lui votre fiche personnage.</span><br><br>" +
    "Expliquez lui vos inventions qui touchent l'univers, comme par exemple le fait que tous les Rouges soient arrogants.<br><br>" +
    "Le MJ va noter ces idées et vous dire si il les approuve.<br><br>" +
    "Il va aussi regarder si votre personnage n'est pas trop fort ou trop faible, et vous demandera de modifier légèrement vos <span>Atouts</span>.",

    "<h4>Finitions</h4>" +
    "Très bien, maintenant relisez votre fiche, trouvez un <span>Nom</span> à votre personnage si cela n'est pas déjà fait, et indiquez que vous êtes <span>Grade</span> 2.",

    "<h4>Voilà qu'arrive votre seconde Mission...</h4>" +
    "Bravo, votre personnage est terminé, il est prêt à vivre de grandes aventures !!"
]
