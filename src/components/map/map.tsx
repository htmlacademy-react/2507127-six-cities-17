import {Icon, Marker, layerGroup} from 'leaflet';
import { GeneralCategory, PinIcon } from '../../const';
import { OffersData, PointCoordinates } from '../../types/offers';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { getCurrentCityData, getPointsData, getSelectedPoint } from '../../utils/offers';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type MapProps = {
  mapClass: GeneralCategory;
  offers: OffersData[];
}

const defaultCustomIcon = new Icon({
  iconUrl: PinIcon.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
const currentCustomIcon = new Icon({
  iconUrl: PinIcon.Active,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({mapClass, offers}: MapProps):JSX.Element {
  const {id} = useParams();
  const activeOfferId = useAppSelector((state) => state.activeOfferId);

  const city = getCurrentCityData(offers);
  const points = getPointsData(offers);
  const selectedPoint = activeOfferId !== null ? getSelectedPoint(offers, activeOfferId) : null;

  if (mapClass === GeneralCategory.Offer && id) {
    const currentPoint = getSelectedPoint(offers, id);
    points.push(currentPoint as PointCoordinates);
  }

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

        if (mapClass === GeneralCategory.Offer && id) {
          return marker.setIcon(
            point.id === id
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(markerLayer);
        }

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
  }, [map, points, selectedPoint, id, mapClass]);

  return (
    <section ref={mapRef} className={`${mapClass}__map map`}></section>
  );
}

export default Map;
