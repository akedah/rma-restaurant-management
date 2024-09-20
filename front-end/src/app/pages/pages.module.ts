import { provideHttpClient, withFetch } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { PagesRoutingModule } from "./pages-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [],
    imports: [CommonModule, PagesRoutingModule],
    providers: [provideClientHydration(), provideHttpClient(withFetch())],
})

export class PagesModule {}