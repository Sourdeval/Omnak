import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'omnak-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  zonesRouge = [
    { id: 'Soldat', top: 48, left: 4.6 },
    { id: 'MageFeu', top: 17, left: 24.6 },
    { id: 'Cavalier', top: 37.2, left: 24.6 },
    { id: 'LancierEnchante', top: 47.1, left: 24.6 },
    { id: 'FantassinEnchante', top: 57.1, left: 24.6 },
    { id: 'CogneurEnchante', top: 67, left: 24.6 },
  ]

  zonesVertes = [
    { id: 'Cueilleur', top: 38.8, left: 3.3 },
    { id: 'Chasseur', top: 51.4, left: 3.3 },
    { id: 'Soigneur', top: 18, left: 24.1 },
    { id: 'Druide', top: 28.3, left: 24.1 },
    { id: 'Changeur', top: 38.8, left: 24.1 },
    { id: 'Rodeur', top: 51.4, left: 24.1 },
    { id: 'TireurVenimeux', top: 62.2, left: 24.1 },
    { id: 'TireurElite', top: 73.1, left: 24.1 },
  ]

  zonesSable = [
    { id: 'MageSable', top: 23.9, left: 3.2 },
    { id: 'EnfantPoignard', top: 66.3, left: 3.2 },
    { id: 'PorteurObsidienne', top: 2.6, left: 24 },
    { id: 'PorteurEmeraude', top: 13.3, left: 24 },
    { id: 'PorteurSaphir', top: 23.8, left: 24 },
    { id: 'PorteurTopaze', top: 34.5, left: 24 },
    { id: 'PorteurRubis', top: 45, left: 24 },
    { id: 'PorteurPyrite', top: 55.7, left: 24 },
    { id: 'PorteurAmethyste', top: 66.3, left: 24 },
    { id: 'PorteurHematite', top: 77, left: 24 },
    { id: 'PorteurTurquoise', top: 87.7, left: 24 },
  ]

  zonesGrises = [
    { id: 'Marin', top: 27.7, left: 4.2 },
    { id: 'Artiste', top: 40.8, left: 4.3 },
    { id: 'Brave', top: 58.2, left: 4.4 },
    { id: 'JeteurOrbesTempete', top: 14.8, left: 25 },
    { id: 'FaiseurPluie', top: 27.8, left: 25 },
    { id: 'DresseurPygargues', top: 40.8, left: 25 },
    { id: 'LanceurHaches', top: 58.2, left: 25 },
    { id: 'SouffleurMots', top: 71, left: 25 },
  ]

  constructor(
    private readonly router: Router,
  ) { }

  goToWay(zoneId: string) {
    this.router.navigate(['way', zoneId]);
  }
}
