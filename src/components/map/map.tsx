import {Icon, Marker, layerGroup} from 'leaflet';
import { GeneralCategory } from '../../const';
import { CityCoordinates, OffersData } from '../../types/offers';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { getCurrentCityData, getPointsData, getSelectedPonit } from '../../utils/offers';

type MapProps = {
  mapClass: GeneralCategory;
  activeOfferId: string | null;
  offers: OffersData[];
}

const defaultCustomIcon = new Icon({
  iconUrl: '/markup/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
const currentCustomIcon = new Icon({
  iconUrl: '/markup/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({mapClass, activeOfferId, offers}: MapProps):JSX.Element {
  const city = getCurrentCityData(offers);
  const points = getPointsData(offers);
  const selectedPoint = activeOfferId !== null ? getSelectedPonit(offers, activeOfferId) : null;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker.setIcon(
          selectedPoint !== null && point.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return (
    <section ref={mapRef} className={`${mapClass}__map map`}></section>
  );
}

export default Map;
