import { Component, NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  private map: am4maps.MapChart;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let map = am4core.create("chartdiv", am4maps.MapChart);
      map.geodata = am4geodata_worldLow;
      map.projection = new am4maps.projections.Miller();

      let worldSeries = map.series.push(new am4maps.MapPolygonSeries());
      worldSeries.exclude = ["AQ"];
      worldSeries.useGeodata = true;

      this.map = map;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.map) {
        this.map.dispose();
      }
    });
  }
}
