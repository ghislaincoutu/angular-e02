import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Module01Service {

  constructor() { }

  readContent(choice: number) {
    if (choice == 1) {
      return "<strong>Message 1</strong> : Nulla facilisi. Curabitur sed elit ut risus vulputate venenatis nec ut augue. Test d'encodage des caractères spéciaux : À à Ç ç É é";
    } else if (choice == 2) {
      return "<strong>Message 2</strong> : Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Test d'encodage des caractères spéciaux : À à Ç ç É é";
    } else if (choice == 3) {
      return "<strong>Message 3</strong> : Nam sodales nisl non pulvinar sollicitudin. Aenean pulvinar nunc quis lectus mollis ornare. In hac habitasse platea dictumst. Nullam consequat diam id quam rhoncus, vitae vestibulum justo tristique. Quisque efficitur tincidunt mi, eget imperdiet eros ultrices ac. Etiam in sem tellus. Test d'encodage des caractères spéciaux : À à Ç ç É é";
    } else {
      return "";
    }
  }

}
