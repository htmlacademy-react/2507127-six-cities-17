import { Icon, Marker } from 'leaflet';
import { GeneralCategory, PinIcon } from '../../const';
import { PointCoordinates } from '../../types/offers';

const defaultCustomIcon = new Icon({
  iconUrl: PinIcon.Default,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});
const currentCustomIcon = new Icon({
  iconUrl: PinIcon.Active,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

function createMarker(
  mapClass: GeneralCategory,
  point: PointCoordinates,
  selectedPoint: PointCoordinates | null,
  id: string | undefined): Marker {
  const marker = new Marker({
    lat: point.lat,
    lng: point.lng
  });

  if (mapClass === GeneralCategory.Offer && id) {
    return marker.setIcon(
      point.id === id
        ? currentCustomIcon
        : defaultCustomIcon
    );
  }

  return marker.setIcon(
    selectedPoint !== null && point.id === selectedPoint.id
      ? currentCustomIcon
      : defaultCustomIcon
  );
}

export {createMarker};
