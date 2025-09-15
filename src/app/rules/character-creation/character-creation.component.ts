import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'omnak-character-creation',
  standalone: false,
  templateUrl: './character-creation.component.html',
  styleUrl: './character-creation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CharacterCreationComponent {
  index: number = 0;
  pages: string[] = [
    "<h4>Inventez ce que vous aimez !</h4>Avant tout, l'univers est modelable, c'est à dire que vous pouvez imaginez n'importe quoi !<br>" +
    "Imaginez et parlez en à votre MJ !<br><br>" +
    "Bonne création de personnage !! :)",

    "<h4>Naissance, enfance, famille</h4>" +
    "Choisir la <span>Nation</span> dans laquelle est né votre personnage.<br><br>" +
    "Inventer un <span>Atout</span> à votre personnage. Les phrases suivantes sont des idées de comment vous avez eu cet atout.<br>" +
    '<div class="italic">' +
    "Quand je suis né...<br>" +
    "Quand j'étais enfant...<br>" +
    "Un membre de ma famille est...<br>" +
    "...<br>" +
    "</div>" +
    "Si votre atout nécessite des précisions, ou une explication, écrivez dans <span>Lore</span>." +
    "<br>" +
    "<h4>Entrée dans l'armée</h4>" +
    "Écrivez un <span>Lore</span> : la raison pour laquelle votre personnage entre dans les forces militaires de sa Nation.<br>" +
    "<div class='italic'>Par loyauté envers sa patrie ?<br>Par nécessité ?<br>Pour devenir plus puissant ?<br>Pour s'élever du bas peuple ?<br>" +
    "...<br></div><br>Il est possible de rejoindre l'école militaire d'un autre pays que celui choisi au départ, expliquez comment" +
    " et pourquoi. Dans ce cas, l'un de vos Atouts sera surement une particularité acquise dans votre pays natal.<br><br>" +
    "Choisissez votre première <span>Voie</span> dans l'armée de votre Nation.<br>Elle vous donne 1 <span>Atout</span> et 3 <span>Compétences</span>.<br>" +
    "<br>" +
    "<h4>Devenir adulte</h4>" +
    "Inventer un <span>Atout</span> qui sera une évolution de votre personnage lors de cette période où il devient adulte.<br>" +
    "<div class='italic'>" +
    "Un trait de caractère ? <br>" +
    "Une nouvelle relation ? <br>" +
    "Une particularité acquise ?<br>" +
    "</div>" +
    "Si votre atout nécessite des précisions, ou une explication, écrivez dans <span>Lore</span>.",

    "<h4>La Première Mission</h4>" +
    "Appelez votre MJ, un D20 à la main.<br><br>" +
    "<div class='italic'>" +
    "Mission dangereuse ?<br>" +
    "Escorte d'un personnage illustre ?<br>" +
    "Ennui total dans un bureau administratif ?<br>" +
    "C'est le D20 qui choisi !<br><br>" +
    "</div>" +
    "Votre MJ vous donne alors le contexte de votre mission et quelques possibilités, mais pas ce qui s'y passe, c'est à vous de l'inventer !<br><br>" +
    "Inventez et écrivez le <span>Lore</span> de cette mission, quel était l'objectif, qu'avez vous essayé de faire ? Ne précisez pas la fin !<br>" +
    "Avec votre MJ, voyez quelles sont les possibilités de cette tentative.<br>" +
    "Lancez de nouveau un D20 pour obtenir l'issue de cette mission.<br>" +
    "Écrivez une phrase de conclusion dans <span>Lore</span>, et indiquez l'<span>Atout</span> gagné.<br>",

    "<h4>Montée en Grade !</h4>" +
    "Choisissez votre seconde <span>Voie</span> dans l'armée de votre Nation.<br>" +
    "Certaines Voies ne sont pas accessibles à tous, certaines sont sélectives et ne prendront que quelqu'un qui a des " +
    "relations ou qui a prouvé sa valeur.<br>" +
    "A partir de ce point, vous pouvez aussi décider de quitter l'armée, passer à l'ennemi, ou bien devenir " +
    "mercenaire. Votre choix vous mènera vers d'autres Voies que celles de votre armée, celles-ci seront tout aussi " +
    "intéressantes.<br>" +
    "Tout est possible, mais il y aura des conséquences.<br><br>" +
    "Votre seconde Voie vous donne 1 <span>Atout</span> et 3 <span>Compétences</span>. Vous ne pouvez garder que 5 Compétences, choisissez laquelle " +
    "oublier.<br>" +
    "<br>" +
    "<h4>Votre personnage aujourd'hui</h4>" +
    "Décrivez l'apparence de votre personnage dans <span>Présentation</span>, ses vêtements, sa façon d'être, ses " +
    "particularités physiques.<br><br>" +
    "Inventer un <span>Atout</span> qui sera une évolution de votre personnage durant cette période où son regard " +
    "change sur le monde, qu'il devient de plus en plus expérimenté et qu'il fonde peut-être une famille.<br>" +
    "<span class='warning'>ATTENTION</span>: prenez garde aux points de vos Atouts, si vous avez déjà de nombreux " +
    "Atouts positifs, vous devez alors créer un Atout négatif. Voyez avec votre MJ.<br>" +
    "<div class='italic'>" +
    "Un trait de caractère ? <br>" +
    "Une nouvelle relation ? <br>" +
    "Une particularité acquise ?<br>" +
    "</div><br>" +
    "<h4>Voilà qu'arrive votre seconde Mission...</h4>" +
    "A partir de ce point, certains de vos Atouts peuvent changer, ou disparaître.<br>",
  ]

  next(step: number) {
    if (step > 0 && this.index == this.pages.length - 1) return;
    if (step < 0 && this.index == 0) return;
    this.index += step;
  }
}
