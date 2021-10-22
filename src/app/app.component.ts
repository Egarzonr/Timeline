import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'timeline';

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.botones();
  }

  botones() {
    const progress = document.getElementById('progress');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const circles = document.querySelectorAll('.circle');
    const id1 = document.getElementById('1');
    const id2 = document.getElementById('2');
    const id3 = document.getElementById('3');
    const id4 = document.getElementById('4');
    const id5 = document.getElementById('5');
    const id6 = document.getElementById('6');
    const id7 = document.getElementById('7');

    let currentActive = 1;
    console.log(currentActive);

    next.addEventListener('click', () => {
      currentActive++;
      if (currentActive > circles.length) {
        currentActive = circles.length;
      }
      update();
    });

    prev.addEventListener('click', () => {
      currentActive--;
      if (currentActive < 1) {
        currentActive = 1;
      }
      update();
    });

    function update() {
      // cambiarImagen(){

      // }
      if (currentActive === 1) {
        id1.classList.replace('ico_aprobado_inactivo', 'ico_aprobado_activo');
      }
      if (currentActive === 2) {
        id2.classList.replace('ico_enruta_inactivo', 'ico_enruta_activo');
      }
      if (currentActive === 3) {
        id3.classList.replace(
          'ico_entregado_taller_inactivo',
          'ico_entregado_taller_activo'
        );
      }
      if (currentActive === 4) {
        id4.classList.replace('ico_retrasado_inactivo', 'ico_retrasado_activo');
      }
      if (currentActive === 5) {
        id5.classList.replace(
          'ico_recibido_taller_inactivo',
          'ico_recibido_taller_activo'
        );
      }
      if (currentActive === 6) {
        id6.classList.replace(
          'ico_devolucion_inactivo',
          'ico_devolucion_activo'
        );
      }
      if (currentActive === 7) {
        id7.classList.replace('ico_terminado_inactivo', 'ico_terminado_activo');
      }

      circles.forEach((circle, idx) => {
        if (idx < currentActive) {
          circle.classList.add('active');
        } else {
          circle.classList.remove('active');
        }
      });

      const actives = document.querySelectorAll('.active');

      progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

      console.log(currentActive);

      if (currentActive === 1) {
        (prev as any).disabled = true;
      } else if (currentActive === circles.length) {
        (next as any).disabled = true;
      } else {
        (prev as any).disabled = false;
        (next as any).disabled = false;
      }
    }
  }

  // getImage(idx) {
  //   console.log(idx);
  //   switch (idx) {
  //     case 0:
  //       return 'url(./icons/ico_aprobado_activo.svg)';
  //     case '[1]':
  //       return 'ico_enruta_active';
  //   }
}

// var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";

// implements OnInit, OnChanges, AfterViewInit {
//   @Input() data: {
//     id: string;
//     text: string;
//     inactive: string;
//     active: string;
//   }[];
//   @Input() currentState: { index: number; linePercent: string };
//   @Input() trackingDisable: boolean;
//   @ViewChild('progressBarRef', { static: false }) containerPbRef: ElementRef;
//   config: any[] = [];
//   isMobile: boolean = false;

//   ngOnInit() {
//     this.data.forEach((el, index) => {
//       if (this.trackingDisable) {
//         this.config.push({
//           class: '',
//           textClass: '',
//           text: el.text,
//           icon: '',
//         });
//       } else {
//         this.config.push({
//           id: `tracking-${el.id}`,
//           class:
//             index < this.currentState.index
//               ? 'passed'
//               : index === this.currentState.index
//               ? 'current'
//               : '',
//           textClass: index === this.currentState.index ? 'active-text' : '',
//           text: el.text,
//           icon:
//             index < this.currentState.index
//               ? el.active
//               : index === this.currentState.index
//               ? el.active
//               : el.inactive,
//         });
//       }
//     });

//     this.isMobile = window.innerWidth < 768 ? true : false;
//     // console.log(this.config);
//   }

//   @HostListener('window:resize', ['$event'])
//   giock(event: any): void {
//     this.isMobile = event.target.innerWidth < 768 ? true : false;
//   }

//   ngAfterViewInit() {
//     const linepercent =
//       (this.currentState.index / (this.config.length - 1)) * 100 + '%';
//     this.containerPbRef.nativeElement.style.setProperty('width', linepercent);
//   }

//   ngOnChanges(changes: SimpleChanges) {
//     const linepercent =
//       (this.currentState.index / (this.config.length - 1)) * 100 + '%';

//     const { currentState } = changes;

//     if (
//       !currentState.firstChange &&
//       currentState.previousValue.index !== currentState.currentValue.index
//     ) {
//       for (let index = 0; index < this.config.length; index++) {
//         this.config[index].class =
//           index < this.currentState.index
//             ? 'passed'
//             : index === this.currentState.index
//             ? 'current'
//             : '';
//       }

//       this.containerPbRef.nativeElement.style.setProperty('width', linepercent);

//       this.data.forEach((el, index) => {
//         if (!this.trackingDisable) {
//           this.config[index].icon =
//             index < this.currentState.index
//               ? el.active
//               : index === this.currentState.index
//               ? el.active
//               : el.inactive;
//         }
//       });
//     }
//   }
// }
