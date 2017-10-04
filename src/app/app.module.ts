import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CocktailsListComponent} from './cocktails-container/cocktails-list/cocktails-list.component';
import {CockatailsDetailsComponent} from './cocktails-container/cockatails-details/cockatails-details.component';
import {CocktailsContainerComponent} from './cocktails-container/cocktails-container.component';
import {PanierComponent} from './panier/panier.component';
import {IngredientsListComponent} from './panier/ingredients-list/ingredients-list.component';
import {AppRoutingModule} from './app-routing.module';
import {PanierService} from './shared/services/panier.service';
import {MenuComponent} from './menu/menu.component';


import {
  MegaMenuModule,
  TabMenuModule,
  AutoCompleteModule,
  BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  ConfirmDialogModule,
  ContextMenuModule,
  DataGridModule,
  DataListModule,
  DataScrollerModule,
  DataTableModule,
  DialogModule,
  DragDropModule,
  DropdownModule,
  EditorModule,
  FieldsetModule,
  FileUploadModule,
  GalleriaModule,
  GMapModule,
  GrowlModule,
  InputMaskModule,
  InputSwitchModule,
  InputTextareaModule,
  InputTextModule,
  LightboxModule,
  ListboxModule,
  MenubarModule,
  MenuModule,
  MessagesModule,
  MultiSelectModule,
  OrderListModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelMenuModule,
  PanelModule,
  PasswordModule,
  PickListModule,
  ProgressBarModule,
  RadioButtonModule,
  RatingModule,
  ScheduleModule,
  SelectButtonModule,
  SlideMenuModule,
  SliderModule,
  SpinnerModule,
  SplitButtonModule,
  StepsModule,
  TabViewModule,
  TerminalModule,
  TieredMenuModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
  TreeModule,
  TreeTableModule
} from 'primeng/primeng';


import {CocktailEditComponent} from './cocktails-container/cocktail-edit/cocktail-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ColorDirective} from './directives/color.directive';
import {MegaMenuComponent} from './mega-menu/mega-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    CocktailsListComponent,
    CockatailsDetailsComponent,
    CocktailsContainerComponent,
    PanierComponent,
    IngredientsListComponent,
    MenuComponent,
    CocktailEditComponent,
    ColorDirective,
    MegaMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MegaMenuModule,
    CalendarModule,
    BrowserAnimationsModule

    ,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    /* PrimeNg Module */
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DataGridModule,
    DataListModule,
    DataScrollerModule,
    DataTableModule,
    DialogModule,
    DragDropModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    GMapModule,
    GrowlModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    ScheduleModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    StepsModule,
    TabMenuModule,
    TabViewModule,
    TerminalModule,
    TieredMenuModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
