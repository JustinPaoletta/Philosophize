import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// USE A CUSTOM ROOT ELEMENT SO THAT THE EXTENSION WORKS ON ANGULAR SITES AS WELL
const ROOT_ELEMENT_TAG = 'extension-root-43dn67Y83';
let rootElement = document.querySelector(ROOT_ELEMENT_TAG);

if (!rootElement) {
  let rootElement = document.createElement(ROOT_ELEMENT_TAG);
  rootElement.style.display = 'none';
  document.body.appendChild(rootElement);
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
