import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet',
  imports: [],
  templateUrl: './leaflet.html',
  styleUrl: './leaflet.scss',
})
export class Leaflet implements AfterViewInit {
  private map!: L.Map;
  private markers: L.Marker[] = [];

  private markerPositions: L.LatLngExpression[] = [
    [56.009638, 92.838105], // Край
  ];

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }

  private initMap(): void {
    // Создаем карту с центром в первой точке по id который указан в html ищет по HtmlElement
    this.map = L.map('map').setView([56.009638, 92.838105], 12);

    // Добавляем слой OpenStreetMap
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map); //добавить на Слой карту
  }

  private addMarkers(): void {
    // Создаем кастомную иконку (опционально)
    const customIcon = L.icon({
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [20, 30],
      iconAnchor: [12, 41],
      popupAnchor: [3, -50],
    });

    // Добавляем метки
    this.markerPositions.forEach((position, index) => {
      const marker = L.marker(position, { icon: customIcon }) // текущая позиция + кастомная икнока 43 строка
        .addTo(this.map) // добавить на карту
        .bindPopup(
          // привязать модалку к иконке по нажатию
          `Метка ${index + 1}<br>Координаты: ${
            (position as [number, number])[0]
          }, ${(position as [number, number])[1]}`,
          {}
        );

      this.markers.push(marker);
    });

    // Фокусируем карту на всех метках
  }

  clearMarkers(): void {
    this.markers.forEach((marker) => this.map.removeLayer(marker));
    this.markers = [];
  }

  // Метод для добавления новой метки
  addMarker(lat: number, lng: number, popupText: string = ''): void {
    const marker = L.marker([lat, lng])
      .addTo(this.map)
      .bindPopup(popupText || `Новая метка: ${lat}, ${lng}`);

    this.markers.push(marker);
  }
}
