import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

interface Product {   // iProduct желательно
  name: string,  // ;
  price: number,
  category: string,
  description: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent {
  @Input() public product: Product | undefined;
  protected readonly NumberPrice = Number;
}
