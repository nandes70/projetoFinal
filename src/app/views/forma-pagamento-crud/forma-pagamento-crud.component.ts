import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-crud',
  templateUrl: './forma-pagamento-crud.component.html',
  styleUrls: ['./forma-pagamento-crud.component.css']
})
export class FormaPagamentoCrudComponent {

   constructor(private router: Router){}
    ngOnInit(): void {
        
    }
    navigateToFormaPagamentoCreate(): void
    {
      this.router.navigate(['/formaPagamento/create'])
    }
}
