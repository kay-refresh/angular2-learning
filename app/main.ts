import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//上面的代码为动态 (JiT) 编译创建浏览器平台，并引导上面提到的AppModule。
