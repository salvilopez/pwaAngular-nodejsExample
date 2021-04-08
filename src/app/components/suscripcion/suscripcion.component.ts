import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import {NotificacionesService}from 'src/app/services/notificaciones.service'
@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.scss']
})
export class SuscripcionComponent implements OnInit {

  readonly VAPID_KEY='BOv-qnPe0tKe9eSJDi9ImqPihdW3Fzrb33gxnyMsZfoyVG7CYVnG-IpPedhHOQXwfs0ydgNcn0HUL6eCA0orcx4';
  constructor(

    private notificacionesService:NotificacionesService,
    private swPush: SwPush,
    private updates:SwUpdate

  ) { }

  ngOnInit(): void {
  }

  suscribirseANewsLetter() {
    if (this.updates.isEnabled) {
      this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_KEY
      }).then((sub: PushSubscription) => {
        this.notificacionesService.suscribirse(sub).subscribe();
      });
    }
  }


}
